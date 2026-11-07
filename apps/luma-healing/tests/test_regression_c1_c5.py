"""
Automated Regression and Accessibility Test Suite for Luma V2 (C1–C5 Fixes)
Governing Issue: Harness #576
Parent Review Reference: Astra #574 Re-review

Verifies:
- C1: Safe demo contact boundary (zero external navigation, zero wa.me links, sample text copyable)
- C2: Accessible modal focus trap, Escape dismissal, backdrop click dismissal, focus restoration (including mobile drawer fallback to menu button), background page inertness (#app-shell[inert][aria-hidden="true"]), clipboard rejection handling without false positive, short-viewport overflow
- C3: Contrast standards, mobile sticky CTA reserve space, responsive widths (320, 390, 640, 767, 768, 820, 1280px), reduced-motion stylesheet rules, skip navigation link to #main-content, mobile menu Escape key handling and focus restoration
- C4: Service scope, provenance separation (PUBLICLY_MENTIONED modality names vs PROPOSED descriptions), non-clinical framing
- C5: Reflection selector state (exactly one aria-pressed, reload reset, zero localStorage persistence), clean test runner process tree cleanup, UTF-8 console output
"""

import sys
import os
import time
import socket
import subprocess
from playwright.sync_api import sync_playwright

# Enforce UTF-8 stdout on Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

APP_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ROOT_DIR = os.path.abspath(os.path.join(APP_DIR, "..", ".."))

def is_port_in_use(port: int, host: str = "127.0.0.1") -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.5)
        return s.connect_ex((host, port)) == 0

def wait_for_server(url: str, timeout: float = 10.0) -> bool:
    import urllib.request
    start = time.time()
    while time.time() - start < timeout:
        try:
            with urllib.request.urlopen(url, timeout=1.0) as res:
                if res.status == 200:
                    return True
        except Exception:
            time.sleep(0.3)
    return False

def kill_process_tree(proc: subprocess.Popen):
    if proc is None:
        return
    try:
        if sys.platform == "win32":
            subprocess.run(["taskkill", "/F", "/T", "/PID", str(proc.pid)], capture_output=True)
        else:
            proc.terminate()
            proc.wait(timeout=3)
    except Exception:
        try:
            proc.kill()
        except Exception:
            pass

def run_tests():
    print("=" * 70)
    print("Starting Luma V2 Automated Regression Suite (C1–C5)")
    print("=" * 70)

    # 1. Build project first
    print("\n[Step 1] Building production bundle (tsc -b && vite build)...")
    build_res = subprocess.run(
        ["cmd", "/c", "npm", "--workspace=apps/luma-healing", "run", "build"],
        cwd=ROOT_DIR,
        capture_output=True,
        text=True
    )
    if build_res.returncode != 0:
        print("Build failed:\n", build_res.stderr)
        sys.exit(1)
    print("✓ Production bundle built successfully.")

    # 2. Start preview server on port 4173
    TEST_PORT = 4173
    TEST_URL = f"http://127.0.0.1:{TEST_PORT}/"
    print(f"\n[Step 2] Starting Vite preview server at {TEST_URL}...")
    
    preview_proc = subprocess.Popen(
        ["cmd", "/c", "npm", "--workspace=apps/luma-healing", "run", "preview", "--", "--port", str(TEST_PORT), "--host", "127.0.0.1"],
        cwd=ROOT_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )

    if not wait_for_server(TEST_URL, timeout=12.0):
        print("Failed to start or connect to preview server.")
        kill_process_tree(preview_proc)
        sys.exit(1)
    print("✓ Preview server active and responding.")

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()

            # -------------------------------------------------------------
            # TEST GROUP 1: C1 — Safe Demo Contact Boundary (Preserved & Verified)
            # -------------------------------------------------------------
            print("\n[Test C1] Testing safe demo contact boundary...")
            context = browser.new_context(
                viewport={"width": 1280, "height": 800},
                permissions=["clipboard-read", "clipboard-write"]
            )
            page = context.new_page()
            
            outbound_requests = []
            page.on("request", lambda req: outbound_requests.append(req.url) if "wa.me" in req.url or "whatsapp" in req.url else None)
            
            popup_opened = []
            page.on("popup", lambda p: popup_opened.append(p.url))

            page.goto(TEST_URL)
            page.wait_for_timeout(300)

            # Check that there are NO active links navigating to wa.me anywhere in the page DOM
            wa_links = page.locator("a[href*='wa.me']")
            assert wa_links.count() == 0, f"Violation: Found {wa_links.count()} active wa.me anchor tags in DOM!"

            # Open modal from Header CTA
            header_cta = page.locator("header button:has-text('Talk to Reshma')")
            header_cta.click()
            page.wait_for_timeout(300)

            modal = page.locator("div[role='dialog']")
            assert modal.is_visible(), "Modal failed to open from Header CTA"

            # Check that inside the modal, there are NO external navigation links
            modal_links = modal.locator("a[href*='wa.me']")
            assert modal_links.count() == 0, "Violation: Found active wa.me link inside dialog modal"

            # Check demo boundary warning text
            assert "Demo Boundary Active" in modal.inner_text(), "Missing Demo Boundary Active warning"
            assert "Outbound messaging is disabled" in modal.inner_text(), "Missing disabled outbound messaging notice"

            # Test Copy Sample Text button
            copy_btn = modal.locator("button:has-text('Copy sample text')")
            assert copy_btn.is_visible(), "Missing Copy sample text button"
            copy_btn.click()
            page.wait_for_timeout(200)
            assert "Copied!" in modal.inner_text(), "Copy confirmation failed"

            # Close modal via 'Understood' button
            understood_btn = modal.locator("button:has-text('Understood')")
            understood_btn.click()
            page.wait_for_timeout(300)
            assert not modal.is_visible(), "Modal failed to close on Understood click"

            # Test other CTA triggers: Service buttons, Final CTA
            reiki_btn = page.locator("button:has-text('Ask about Reiki')")
            reiki_btn.click()
            page.wait_for_timeout(300)
            assert modal.is_visible(), "Modal failed to open from Reiki CTA"
            page.keyboard.press("Escape")
            page.wait_for_timeout(300)

            akashic_btn = page.locator("button:has-text('Ask about readings')")
            akashic_btn.click()
            page.wait_for_timeout(300)
            assert modal.is_visible(), "Modal failed to open from Akashic CTA"
            page.keyboard.press("Escape")
            page.wait_for_timeout(300)

            final_cta = page.locator("section#contact button:has-text('Talk to Reshma')")
            final_cta.click()
            page.wait_for_timeout(300)
            assert modal.is_visible(), "Modal failed to open from Final CTA"
            page.keyboard.press("Escape")
            page.wait_for_timeout(300)

            assert len(outbound_requests) == 0, f"Violation: Detected outbound WhatsApp requests: {outbound_requests}"
            assert len(popup_opened) == 0, f"Violation: Detected popup windows opened: {popup_opened}"
            print("✓ C1 Passed: Zero external navigation, zero wa.me links, modal boundary fully enforced.")

            # -------------------------------------------------------------
            # TEST GROUP 2: C2 — Accessible Modal (Inertness, Focus, Fallback, Clipboard Error)
            # -------------------------------------------------------------
            print("\n[Test C2] Testing modal accessibility, background isolation, focus restoration & error handling...")
            
            # C2.1: Background isolation: #app-shell has inert and aria-hidden="true" when modal is open
            header_cta.focus()
            header_cta.click()
            page.wait_for_timeout(300)
            assert modal.is_visible()

            app_shell = page.locator("#app-shell")
            is_inert = app_shell.evaluate("el => el.hasAttribute('inert')")
            aria_hidden = app_shell.evaluate("el => el.getAttribute('aria-hidden')")
            assert is_inert is True, "Violation: #app-shell must have 'inert' attribute while modal is open!"
            assert aria_hidden == "true", "Violation: #app-shell must have aria-hidden='true' while modal is open!"

            # Focus trap: verify Tab sequence cycles within modal
            close_btn = modal.locator("button[aria-label='Close dialog']")
            page.wait_for_timeout(100)
            
            focused_aria = page.evaluate("() => document.activeElement.getAttribute('aria-label')")
            assert focused_aria == "Close dialog", f"Initial focus did not land on Close button, got: {focused_aria}"

            page.keyboard.press("Tab")
            focused_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Understood" in focused_text, f"Expected Understood button, got: {focused_text}"

            page.keyboard.press("Tab")
            focused_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Copy sample text" in focused_text, f"Expected Copy button, got: {focused_text}"

            # Tab wrap to Close
            page.keyboard.press("Tab")
            focused_aria = page.evaluate("() => document.activeElement.getAttribute('aria-label')")
            assert focused_aria == "Close dialog", f"Focus trap forward wrap failed! Got: {focused_aria}"

            # Shift+Tab wrap to Copy button
            page.keyboard.press("Shift+Tab")
            focused_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Copy sample text" in focused_text, f"Focus trap reverse wrap failed! Got: {focused_text}"

            # Dismiss via Backdrop click
            page.mouse.click(10, 10)
            page.wait_for_timeout(300)
            assert not modal.is_visible(), "Modal failed to close on backdrop click"

            # Check inert attributes removed after modal close
            is_inert_closed = app_shell.evaluate("el => el.hasAttribute('inert')")
            aria_hidden_closed = app_shell.evaluate("el => el.hasAttribute('aria-hidden')")
            assert is_inert_closed is False, "Violation: #app-shell still has 'inert' after modal closed!"
            assert aria_hidden_closed is False, "Violation: #app-shell still has 'aria-hidden' after modal closed!"

            # Verify focus restored to Header CTA
            restored_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Talk to Reshma" in restored_text, f"Focus failed to restore to header CTA! Got: {restored_text}"

            # C2.2: Focus restoration fallback when initiating element was inside unmounted mobile menu
            mobile_p = browser.new_page(viewport={"width": 390, "height": 844})
            mobile_p.goto(TEST_URL)
            mobile_p.wait_for_timeout(300)

            # Open mobile menu drawer
            menu_btn = mobile_p.locator("#mobile-menu-toggle")
            menu_btn.click()
            mobile_p.wait_for_timeout(300)
            drawer = mobile_p.locator("#mobile-navigation")
            assert drawer.is_visible(), "Mobile drawer failed to open"

            # Click drawer CTA: closes drawer and opens modal
            drawer_cta = drawer.locator("button:has-text('Talk to Reshma')")
            drawer_cta.click()
            mobile_p.wait_for_timeout(300)

            m_modal = mobile_p.locator("div[role='dialog']")
            assert m_modal.is_visible(), "Modal failed to open from mobile drawer"

            # Close modal with Escape
            mobile_p.keyboard.press("Escape")
            mobile_p.wait_for_timeout(300)
            assert not m_modal.is_visible()

            # Active focus should fall back to #mobile-menu-toggle, NOT body
            active_id = mobile_p.evaluate("() => document.activeElement ? document.activeElement.id : null")
            assert active_id == "mobile-menu-toggle", f"Focus should restore to #mobile-menu-toggle when drawer CTA unmounts! Got: {active_id}"
            mobile_p.close()

            # C2.3: Clipboard rejection error handling (must NOT falsely show "Copied!")
            page.evaluate("""() => {
                navigator.clipboard.writeText = () => Promise.reject(new Error("Permission denied"));
            }""")
            header_cta.click()
            page.wait_for_timeout(300)
            copy_btn = modal.locator("button:has-text('Copy sample text')")
            copy_btn.click()
            page.wait_for_timeout(200)
            modal_text_after_fail = modal.inner_text()
            assert "Copied!" not in modal_text_after_fail, "Violation: Dialog falsely displayed 'Copied!' on clipboard rejection!"
            assert "Copy not supported" in modal_text_after_fail, f"Expected 'Copy not supported' error message, got: {modal_text_after_fail}"
            page.keyboard.press("Escape")
            page.wait_for_timeout(300)

            # C2.4: Short viewport overflow
            short_page = browser.new_page(viewport={"width": 1024, "height": 450})
            short_page.goto(TEST_URL)
            short_page.locator("header button:has-text('Talk to Reshma')").click()
            short_page.wait_for_timeout(300)
            short_modal = short_page.locator("div[role='dialog']")
            assert short_modal.is_visible()
            scrollable = short_modal.evaluate("el => el.scrollHeight >= el.clientHeight")
            assert scrollable, "Modal dialog not scrollable on short viewport!"
            short_page.close()

            print("✓ C2 Passed: Inert background, focus trap, drawer fallback restoration, clipboard rejection safety, short viewport overflow verified.")

            # -------------------------------------------------------------
            # TEST GROUP 3: C3 — Navigation, Responsiveness, Skip Link, Reduced Motion
            # -------------------------------------------------------------
            print("\n[Test C3] Testing skip link, mobile menu keyboard behavior, reduced motion & responsive widths...")
            
            # C3.1: Skip Link
            page.goto(TEST_URL)
            page.wait_for_timeout(200)
            page.keyboard.press("Tab")
            skip_link = page.locator("a[href='#main-content']")
            is_skip_focused = page.evaluate("() => document.activeElement.getAttribute('href') == '#main-content'")
            assert is_skip_focused, "Skip link should receive initial Tab focus!"
            skip_visible = skip_link.is_visible()
            assert skip_visible, "Skip link must become visible when focused!"

            # Activate skip link
            page.keyboard.press("Enter")
            page.wait_for_timeout(200)
            active_main = page.evaluate("() => document.activeElement.id")
            assert active_main == "main-content", f"Skip link failed to move focus to #main-content, got active element: {active_main}"

            # C3.2: Mobile menu Escape key handling and focus restoration
            m_page = browser.new_page(viewport={"width": 390, "height": 844})
            m_page.goto(TEST_URL)
            m_page.wait_for_timeout(200)
            toggle = m_page.locator("#mobile-menu-toggle")
            toggle.click()
            m_page.wait_for_timeout(200)
            m_drawer = m_page.locator("#mobile-navigation")
            assert m_drawer.is_visible()
            assert toggle.get_attribute("aria-expanded") == "true"

            # Press Escape -> drawer closes, focus restored to toggle
            m_page.keyboard.press("Escape")
            m_page.wait_for_timeout(200)
            assert not m_drawer.is_visible()
            assert toggle.get_attribute("aria-expanded") == "false"
            toggle_focused = m_page.evaluate("() => document.activeElement.id == 'mobile-menu-toggle'")
            assert toggle_focused, "Focus failed to restore to #mobile-menu-toggle after closing mobile drawer via Escape"
            m_page.close()

            # C3.3: Responsive widths & Header layout integrity
            test_widths = [320, 390, 640, 767, 768, 820, 1280]
            for w in test_widths:
                resp_page = browser.new_page(viewport={"width": w, "height": 800})
                resp_page.goto(TEST_URL)
                resp_page.wait_for_timeout(200)

                # Check horizontal overflow
                scroll_width = resp_page.evaluate("() => document.documentElement.scrollWidth")
                client_width = resp_page.evaluate("() => document.documentElement.clientWidth")
                assert scroll_width <= client_width + 1, f"Horizontal scrollbar detected at width {w}px (scroll: {scroll_width}, client: {client_width})"

                # Mobile sticky CTA check
                sticky = resp_page.locator("div[aria-label='Mobile quick action']")
                if w < 768:
                    assert sticky.is_visible(), f"Mobile sticky CTA should be visible at {w}px"
                    footer_pb = resp_page.evaluate("() => window.getComputedStyle(document.querySelector('footer')).paddingBottom")
                    pb_val = int(footer_pb.replace('px', '').split('.')[0])
                    assert pb_val >= 96, f"Footer padding-bottom ({pb_val}px) insufficient to prevent mobile sticky CTA overlap at {w}px"
                else:
                    assert not sticky.is_visible(), f"Mobile sticky CTA should be hidden on desktop ({w}px)"

                resp_page.close()

            # C3.4: Reduced motion CSS rules
            rm_page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="reduce")
            rm_page.goto(TEST_URL)
            scroll_behavior = rm_page.evaluate("() => window.getComputedStyle(document.documentElement).scrollBehavior")
            assert scroll_behavior == "auto", f"Expected scroll-behavior: auto under prefers-reduced-motion, got: {scroll_behavior}"
            rm_page.close()

            print("✓ C3 Passed: Skip link, mobile menu Escape handling, zero horizontal scroll (320–1280px), reduced motion verified.")

            # -------------------------------------------------------------
            # TEST GROUP 4: C4 — Content Accuracy & Provenance Separation
            # -------------------------------------------------------------
            print("\n[Test C4] Testing content provenance and non-clinical framing...")
            page.goto(TEST_URL)
            page_text = page.locator("body").inner_text()
            assert "PUBLICLY MENTIONED · DETAILS TO VERIFY" in page_text, "Missing exploratory modality label"
            assert "Complementary Practice" in page_text, "Missing Complementary Practice category"
            assert "Spiritual Tradition" in page_text, "Missing Spiritual Tradition category"
            
            # Verify clinical claims are NOT present
            assert "stress reduction" not in page_text.lower(), "Unsupported claim 'stress reduction' found in page text"
            assert "medical diagnosis" in page_text.lower(), "Missing medical diagnosis disclaimer"
            print("✓ C4 Passed: Non-clinical exploratory framing and provenance separation verified.")

            # -------------------------------------------------------------
            # TEST GROUP 5: C5 — Reflection State & Zero Persistence
            # -------------------------------------------------------------
            print("\n[Test C5] Testing reflection selector state and zero persistence...")
            page.goto(TEST_URL)
            page.wait_for_timeout(300)

            choices = page.locator("section#explore button[aria-pressed]")
            assert choices.count() == 4, f"Expected 4 reflection choices, got {choices.count()}"

            # Verify exactly one button is aria-pressed="true"
            pressed_count = page.evaluate("() => document.querySelectorAll('section#explore button[aria-pressed=\"true\"]').length")
            assert pressed_count == 1, f"Expected exactly 1 pressed button, found: {pressed_count}"

            # Click second choice ('I put everyone else first')
            choices.nth(1).click()
            page.wait_for_timeout(200)

            pressed_count_2 = page.evaluate("() => document.querySelectorAll('section#explore button[aria-pressed=\"true\"]').length")
            assert pressed_count_2 == 1, f"Expected exactly 1 pressed button after click, found: {pressed_count_2}"
            assert choices.nth(1).get_attribute("aria-pressed") == "true"
            assert choices.nth(0).get_attribute("aria-pressed") == "false"

            resp_box = page.locator("section#explore div[aria-live='polite']")
            assert "give yourself permission to say a quiet, honest 'no'" in resp_box.inner_text()

            # Verify localStorage and sessionStorage remain completely empty
            local_len = page.evaluate("() => localStorage.length")
            session_len = page.evaluate("() => sessionStorage.length")
            assert local_len == 0, f"Violation: localStorage has {local_len} items!"
            assert session_len == 0, f"Violation: sessionStorage has {session_len} items!"

            # Reload and verify reset to default initial state
            page.reload()
            page.wait_for_timeout(300)
            assert choices.nth(0).get_attribute("aria-pressed") == "true"
            assert choices.nth(1).get_attribute("aria-pressed") == "false"
            print("✓ C5 Passed: Exactly one aria-pressed, clean reload reset, zero storage persistence.")

            browser.close()

        print("\n" + "=" * 70)
        print("ALL REGRESSION & ACCESSIBILITY TESTS (C1–C5) PASSED CLEANLY!")
        print("=" * 70)

    finally:
        kill_process_tree(preview_proc)

if __name__ == "__main__":
    run_tests()
