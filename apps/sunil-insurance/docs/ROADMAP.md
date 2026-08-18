# ROADMAP.md — Future Development Plan

## Phase 1 — Microsite + WhatsApp Lead Generation [CURRENT]
- Mobile-first React static web application.
- High-converting WhatsApp deep links with contextual pre-filled messages.
- Sectional breakdown (Health, Motor provisional, Corporate CTA, Process, Advisor Pillars).
- Zero cost static hosting deployment (Cloudflare Pages).

## Phase 2 — Interactive Insurance Calculators [PLANNED]
- **Health Coverage Estimator**:
  - Inputs: Age group, family members count, existing employer coverage, target coverage amount.
  - Output: Indicative educational coverage recommendation (non-binding).
- **Motor Insurance Helper**:
  - Inputs: Vehicle type (Car vs Two-Wheeler vs Commercial), vehicle age, previous claim status.
  - Output: Recommended add-ons (Zero Depreciation, Engine Protect, RSA) to discuss with Sunil.

## Phase 3 — AI Insurance Chatbot [PLANNED]
- **"Ask Sunil's Insurance Assistant"**:
  - Educational assistant for explaining complex terminology (NCB, Co-pay, Waiting Period, Deductibles).
  - Qualification flow: Determines individual vs corporate enquiry.
  - Handoff: Summarizes user requirements and formats a structured WhatsApp message for Sunil.
  - Extension point: Can be added as a Cloudflare Worker or client-side widget powered by Gemini API.

## Phase 4 — Lead Tracking & Privacy-Preserving Analytics [OPTIONAL]
- Event tracking on WhatsApp button clicks (Health vs Corporate vs Motor).
- Zero third-party cookies; lightweight Cloudflare Web Analytics if required.
