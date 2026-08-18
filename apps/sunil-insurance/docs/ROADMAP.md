# ROADMAP.md — Future Development Plan

## Phase 1 — V1 Prototype Microsite + WhatsApp Handoff [CURRENT]
- Mobile-first React static web application.
- High-converting WhatsApp deep links with contextual pre-filled messages for 8 distinct product scenarios.
- Interactive prototype demo modal preventing outbound messages to invalid numbers.
- 4 Health Products (Individual, Family, Senior, Corporate Group).
- 4 Motor Products (Comprehensive Car, Third-Party, Two-Wheeler, Commercial & Fleet).
- Sectional breakdown (Hero, Customer Journey, Health, Motor, Why Sunil, How It Works, Business CTA, Contact, Footer).
- Static hosting deployment on Cloudflare.

## Phase 2 — Interactive Insurance Calculators [PLANNED]
- **Health Coverage Estimator**:
  - Inputs: Household composition, age bracket, current employer cover, target protection.
  - Output: Educational coverage recommendation and structured WhatsApp enquiry generation.
- **Motor Insurance Helper**:
  - Inputs: Vehicle category, vehicle age, claim history.
  - Output: Recommended add-on recommendations (Zero Dep, Engine Protect, RSA).

## Phase 3 — Insurance Assistant [PLANNED]
- **"Ask Sunil's Insurance Assistant"**:
  - Educational assistant for explaining complex terminology (NCB, Co-pay, Waiting Period, Deductibles).
  - Qualification flow: Determines individual vs corporate enquiry.
  - Handoff: Summarizes user requirements and formats a structured WhatsApp message for Sunil.
  - Extension point: Client-side AI widget or Cloudflare Worker with zero API cost overhead until configured.

## Phase 4 — Lead Tracking & Privacy-Preserving Analytics [OPTIONAL]
- Event tracking on WhatsApp button clicks (Health vs Corporate vs Motor).
- Zero third-party cookies; lightweight Cloudflare Web Analytics if required.
