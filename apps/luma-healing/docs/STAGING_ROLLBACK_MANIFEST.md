# Luma V2 — Plan-Only Protected Staging & Operational Rollback Manifest

**Document Status:** PLAN ONLY (No infrastructure, DNS, VPS, or deployment changes authorized).  
**Application:** `apps/luma-healing/`  
**Governing Issue:** [Harness #575](https://github.com/fuzzyduke/harness/issues/575)  
**Parent Review:** [Astra Independent Review #574](https://github.com/fuzzyduke/harness/issues/574#issuecomment-6703360389)

---

## 1. Version & Release Identification Matrix

| Artifact Level | Identifier / SHA | Provenance & Description | Status |
| :--- | :--- | :--- | :--- |
| **Git Merge Base** | `9264497e59829f2f34a74aece7a1af0a00f70459` | Monorepo `main` commit branching point for V2. | Verified Git Tree |
| **Initial V2 PR #2 SHA** | `5260f9a7abf534c3c1fa51d838c6f8e2114c4603` | Reviewed by Astra in Issue #574; resulted in REVISE verdict for C1–C5. | Superseded by C1–C5 Fixes |
| **Candidate V2 PR #2 SHA** | *Pending new commit SHA* | Remediates Astra C1–C5 findings; isolated on `feat/luma-v2-journey-first`. | Candidate for Astra Re-review |
| **Live Deployed V1 Artifact** | `UNVERIFIED_INDEPENDENT_SHA` | Currently serving at `https://luma.valhallala.com/`. Live static bundle on Contabo VPS. | Untouched / Active Production |

> [!IMPORTANT]
> The exact Git commit that was deployed to build the live V1 bundle on `luma.valhallala.com` was not audited or modified during this task. Any future staging or production activity must preserve the existing live directory and Nginx configuration intact.

---

## 2. Protected Staging Architecture Plan (Hypothetical / Plan-Only)

If Eddy authorizes private staging in a future task, the deployment must adhere to the following isolation principles:

1. **Isolation from Production:**
   - Dedicated staging domain or sub-path (e.g. `luma-stage.valhallala.com` or private VPN tunnel).
   - Must NOT overwrite `/srv/apps/luma-healing/dist` on the Contabo VPS.
2. **Access Control & Non-Indexing:**
   - Enforce HTTP Basic Authentication or Cloudflare Access at the edge.
   - Serve header `X-Robots-Tag: noindex, nofollow, noarchive`.
3. **Zero Dynamic Workload:**
   - Pure static Nginx file serving. Zero Python backend, zero database, zero local LLM / SLM inference daemon.
   - Resource footprint: < 5 MB disk, near-zero CPU/RAM overhead.

---

## 3. Operational Rollback Protocol

In the event of an authorized staging deployment encountering defects, execute the following bounded rollback sequence:

```bash
# Step 1: Re-point Nginx configuration to verified V1 bundle backup
sudo cp /etc/nginx/sites-available/luma_v1_backup.conf /etc/nginx/sites-enabled/luma.conf

# Step 2: Validate Nginx configuration syntax
sudo nginx -t

# Step 3: Reload Nginx (zero downtime)
sudo systemctl reload nginx

# Step 4: Verify live response and header health
curl -sI https://luma.valhallala.com/ | grep -E "HTTP/|server|date"
```

**Rollback Acceptance Criteria:**
- Production site immediately returns 200 OK serving the original V1 HTML/CSS bundle.
- Staging artifacts archived safely without deleting build logs.
