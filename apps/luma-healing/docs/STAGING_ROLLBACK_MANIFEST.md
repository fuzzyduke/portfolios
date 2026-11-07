# Luma V2 — Plan-Only Protected Staging & Operational Rollback Manifest

**Document Status:** PLAN ONLY (No infrastructure, DNS, VPS, or deployment changes authorized).  
**Application:** `apps/luma-healing/`  
**Governing Issue:** [Harness #576](https://github.com/fuzzyduke/harness/issues/576)  
**Parent Reviews:** [Astra Review #574 Comment #6703360389](https://github.com/fuzzyduke/harness/issues/574#issuecomment-6703360389) & [Astra Re-Review Comment #6703701398](https://github.com/fuzzyduke/harness/issues/574#issuecomment-6703701398)

---

## 1. Version & Release Identification Matrix

| Artifact Level | Identifier / SHA | Provenance & Description | Status |
| :--- | :--- | :--- | :--- |
| **Git Merge Base** | `9264497e59829f2f34a74aece7a1af0a00f70459` | Monorepo `main` commit branching point for V2. | Verified Git Tree |
| **Initial V2 PR #2 SHA** | `5260f9a7abf534c3c1fa51d838c6f8e2114c4603` | Reviewed by Astra in Issue #574; resulted in REVISE verdict for C1–C5. | Superseded |
| **Cycle 1 Correction SHA** | `97175e26a6f0bfec23a9b4336052a65eee7627a9` | Reviewed by Astra in Issue #574 re-review; C1 PASSED, C2–C5 requested bounded fix. | Baseline for Issue #576 |
| **Final Candidate V2 SHA** | *Pending Issue #576 commit SHA* | Remediates remaining Astra C2–C5 findings; verified via RED → GREEN regression tests. | Candidate for Final Astra Gate |
| **Live Deployed V1 Artifact** | `UNVERIFIED_INDEPENDENT_SHA` | Currently serving at `https://luma.valhallala.com/`. Live static bundle on Contabo VPS. | Untouched / Active Production |

> [!CRITICAL]
> **Production Boundary:** The live production website `https://luma.valhallala.com/` and its hosting infrastructure, DNS records, and Nginx configurations MUST REMAIN 100% UNTOUCHED. Any future staging deployment must strictly target the designated staging host `soulsearch.valhallala.com`.

---

## 2. Protected Staging Architecture Plan (Hypothetical / Plan-Only)

If Eddy authorizes private staging in a future task, deployment must adhere to the following strict isolation boundaries:

1. **Target Staging Host Only:**
   - Staging host: `soulsearch.valhallala.com`.
   - Production host `luma.valhallala.com` is strictly out-of-scope and shall receive zero traffic or configuration changes.
   - Filesystem root: `/srv/apps/soulsearch-staging/dist` (completely separate from `/srv/apps/luma-healing/dist`).

2. **Access Control & Non-Indexing Safeguards:**
   - Enforce HTTP Basic Authentication or Cloudflare Access at the ingress.
   - Emit header `X-Robots-Tag: noindex, nofollow, noarchive` to prevent search engine indexing of the prototype.
   - Keep demo mode enabled (`VITE_SAFE_DEMO_MODE=true` in `.env.production`) so all external WhatsApp and phone links remain inert.

3. **Zero Dynamic Workload:**
   - Pure static Nginx file serving. Zero Python backend, zero database, zero local LLM / SLM inference daemon.
   - Total resource footprint: < 5 MB disk, near-zero CPU/RAM overhead.

---

## 3. Staging Nginx Configuration (Example / Plan-Only)

```nginx
# /etc/nginx/sites-available/soulsearch-staging.conf
# Target host: soulsearch.valhallala.com ONLY
server {
    listen 80;
    listen 443 ssl http2;
    server_name soulsearch.valhallala.com;

    # SSL configuration managed via Certbot / Cloudflare Origin Certificate
    # ssl_certificate ...
    # ssl_certificate_key ...

    root /srv/apps/soulsearch-staging/dist;
    index index.html;

    # Edge protection: prevent prototype indexing
    add_header X-Robots-Tag "noindex, nofollow, noarchive" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;

    # Basic Auth to prevent public crawler access
    auth_basic "Luma V2 Journey-First Prototype";
    auth_basic_user_file /etc/nginx/.htpasswd_soulsearch;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static assets caching
    location ~* \.(?:css|js|woff2?|svg|png|jpg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 4. Operational Staging Rollback Protocol

If a staging rollout to `soulsearch.valhallala.com` exhibits defects, the rollback procedure is isolated to staging only:

```bash
# Step 1: Remove or disable staging site symlink
sudo rm /etc/nginx/sites-enabled/soulsearch-staging.conf

# Step 2: Validate Nginx configuration syntax (verifies production is unaffected)
sudo nginx -t

# Step 3: Reload Nginx (zero downtime for production)
sudo systemctl reload nginx

# Step 4: Verify production site is healthy and completely unchanged
curl -sI https://luma.valhallala.com/ | grep -E "HTTP/|server|date"
```

**Rollback Acceptance Criteria:**
- `luma.valhallala.com` continues serving the untouched production bundle without interruption.
- `soulsearch.valhallala.com` is safely taken offline or reverted to previous staging build.
