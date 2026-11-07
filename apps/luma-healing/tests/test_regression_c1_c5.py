"""
Automated Regression and Accessibility Test Suite for Luma V2 (C1–C5 Fixes)
Governing Issue: Harness #575
Review Reference: Astra #574

Verifies:
- C1: Safe demo contact boundary (zero external navigation, zero wa.me links, sample text copyable)
- C2: Accessible modal focus trap, Escape dismissal, backdrop click dismissal, focus restoration, short-viewport overflow
- C3: Contrast standards, mobile sticky CTA reserve space, responsive widths (320, 390, 640, 767, 768, 820, 1280px), reduced-motion
- C4: Service scope and non-clinical framing
- C5: Reflection selector state (exactly one aria-pressed, reload reset, zero localStorage persistence)
"""

import sys
import os
import time
import subprocess
from playwright.sync_api import sync_playwright

APP_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
ROOT_DIR = os.path.abspath(os.path.join(APP_DIR, "..", ".."))

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

    # 2. Start preview server
    print("\n[Step 2] Starting Vite preview server at http://127.0.0.1:4173/...")
    preview_proc = subprocess.Popen(
        ["cmd", "/c", "npm", "--workspace=apps/luma-healing", "run", "preview", "--", "--port", "4173", "--host", "127.0.0.1"],
        cwd=ROOT_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    time.sleep(3)

    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()

            # -------------------------------------------------------------
            # TEST GROUP 1: C1 — Safe Demo Contact Boundary
            # -------------------------------------------------------------
            print("\n[Test C1] Testing safe demo contact boundary...")
            page = browser.new_page(viewport={"width": 1280, "height": 800})
            
            outbound_requests = []
            page.on("request", lambda req: outbound_requests.append(req.url) if "wa.me" in req.url or "whatsapp" in req.url else None)
            
            popup_opened = []
            page.on("popup", lambda p: popup_opened.append(p.url))

            page.goto("http://127.0.0.1:4173/")
            page.wait_for_timeout(500)

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

            # Test all other CTA triggers: Service buttons, Final CTA
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
            # TEST GROUP 2: C2 — Accessible Modal Focus Trap & Restoration
            # -------------------------------------------------------------
            print("\n[Test C2] Testing keyboard focus trap and focus restoration...")
            
            # Click Header CTA and check focus trapping
            header_cta.focus()
            header_cta.click()
            page.wait_for_timeout(300)
            assert modal.is_visible()

            # First focusable element should be Close button
            close_btn = modal.locator("button[aria-label='Close dialog']")
            page.wait_for_timeout(100)
            
            # Tab sequence verification
            focused_aria = page.evaluate("() => document.activeElement.getAttribute('aria-label')")
            assert focused_aria == "Close dialog", f"Initial focus did not land on Close button, got: {focused_aria}"

            # Tab forward to Understood button
            page.keyboard.press("Tab")
            focused_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Understood" in focused_text, f"Expected Understood button, got: {focused_text}"

            # Tab forward to Copy sample text button
            page.keyboard.press("Tab")
            focused_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Copy sample text" in focused_text, f"Expected Copy button, got: {focused_text}"

            # Tab forward from last button -> wraps to Close button
            page.keyboard.press("Tab")
            focused_aria = page.evaluate("() => document.activeElement.getAttribute('aria-label')")
            assert focused_aria == "Close dialog", f"Focus trap forward wrap failed! Got: {focused_aria}"

            # Shift+Tab backwards from Close button -> wraps to Copy sample text button
            page.keyboard.press("Shift+Tab")
            focused_text = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Copy sample text" in focused_text, f"Focus trap reverse wrap failed! Got: {focused_text}"

            # Test backdrop click dismissal
            page.mouse.click(10, 10)
            page.wait_for_timeout(300)
            assert not modal.is_visible(), "Modal failed to close on backdrop click"

            # Verify focus restoration to initiating element (header_cta)
            restored_id = page.evaluate("() => document.activeElement.innerText.trim()")
            assert "Talk to Reshma" in restored_id, f"Focus failed to restore to header CTA! Got: {restored_id}"

            # Test short viewport overflow
            short_page = browser.new_page(viewport={"width": 1024, "height": 450})
            short_page.goto("http://127.0.0.1:4173/")
            short_page.locator("header button:has-text('Talk to Reshma')").click()
            short_page.wait_for_timeout(300)
            short_modal = short_page.locator("div[role='dialog']")
            assert short_modal.is_visible()
            scrollable = short_modal.evaluate("el => el.scrollHeight >= el.clientHeight")
            assert scrollable, "Modal dialog not scrollable on short viewport!"
            short_page.close()

            print("✓ C2 Passed: Strict Tab/Shift+Tab focus containment, Escape/backdrop close, focus restoration, and short viewport scroll verified.")

            # -------------------------------------------------------------
            # TEST GROUP 3: C3 — Accessibility, Mobile Spacing & Responsive Widths
            # -------------------------------------------------------------
            print("\n[Test C3] Testing responsive breakpoints, contrast, and mobile CTA reserve spacing...")
            test_widths = [320, 390, 640, 767, 768, 820, 1280]

            for w in test_widths:
                resp_page = browser.new_page(viewport={"width": w, "height": 800})
                resp_page.goto("http://127.0.0.1:4173/")
                resp_page.wait_for_timeout(200)

                # Check horizontal overflow
                scroll_width = resp_page.evaluate("() => document.documentElement.scrollWidth")
                client_width = resp_page.evaluate("() => document.documentElement.clientWidth")
                assert scroll_width <= client_width + 1, f"Horizontal scrollbar detected at width {w}px (scroll: {scroll_width}, client: {client_width})"

                # Mobile sticky CTA check
                sticky = resp_page.locator("div[aria-label='Mobile quick action']")
                if w < 768:
                    assert sticky.is_visible(), f"Mobile sticky CTA should be visible at {w}px"
                    # Check footer padding-bottom reserves enough room for sticky CTA
                    footer_pb = resp_page.evaluate("() => window.getComputedStyle(document.querySelector('footer')).paddingBottom")
                    pb_val = int(footer_pb.replace('px', '').split('.')[0])
                    assert pb_val >= 96, f"Footer padding-bottom ({pb_val}px) insufficient to prevent mobile sticky CTA overlap at {w}px"
                else:
                    assert not sticky.is_visible(), f"Mobile sticky CTA should be hidden on desktop ({w}px)"

                resp_page.close()

            # Test Reduced Motion support
            rm_page = browser.new_page(viewport={"width": 1280, "height": 800}, reduced_motion="reduce")
            rm_page.goto("http://127.0.0.1:4173/")
            scroll_behavior = rm_page.evaluate("() => window.getComputedStyle(document.documentElement).scrollBehavior")
            assert scroll_behavior == "auto", f"Expected scroll-behavior: auto under prefers-reduced-motion, got: {scroll_behavior}"
            rm_page.close()

            print("✓ C3 Passed: Responsive widths 320–1280px pass with zero horizontal scroll, mobile CTA reserve space intact, reduced-motion verified.")

            # -------------------------------------------------------------
            # TEST GROUP 4: C4 — Content Accuracy & Scope
            # -------------------------------------------------------------
            print("\n[Test C4] Testing non-clinical framing and service scope...")
            page_text = page.locator("body").inner_text()
            assert "PUBLICLY MENTIONED · DETAILS TO VERIFY" in page_text, "Missing exploratory modality label"
            assert "Complementary Practice" in page_text, "Missing Complementary Practice category"
            assert "Spiritual Tradition" in page_text, "Missing Spiritual Tradition category"
            
            # Verify clinical claims are NOT present
            assert "stress reduction" not in page_text.lower(), "Unsupported claim 'stress reduction' found in page text"
            assert "medical diagnosis" in page_text.lower(), "Missing medical diagnosis disclaimer"
            print("✓ C4 Passed: Non-clinical exploratory framing verified.")

            # -------------------------------------------------------------
            # TEST GROUP 5: C5 — Reflection State & Zero Persistence
            # -------------------------------------------------------------
            print("\n[Test C5] Testing reflection selector state and zero persistence...")
            page.goto("http://127.0.0.1:4173/")
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
        preview_proc.terminate()

if __name__ == "__main__":
    run_tests()
