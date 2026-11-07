# Luma V2 — Website Blueprint (review draft)

Status: **PROPOSED / NOT APPROVED FOR PRODUCTION**  
Owner: Eddy + Reshma discovery exercise  
Research inputs: Instagram collateral audit (26 screenshots), 10 website references, Luma V1 product/content/roadmap docs, and live V1 review.

## 1. Product objective

Help an Instagram visitor or referral understand Reshma, explore **verified** services, decide whether a session suits them, and start an inquiry. The website is a complementary-wellness practice site, not a medical service or a diagnostic tool.

**Primary conversion:** qualified session inquiry (initially a contact handoff, later bookable slots only when Reshma confirms workflow).

**Secondary conversions:** view services, read about Reshma, engage with reflection content, visit Instagram.

**Success indicators to instrument when consent, analytics and live contact details exist:** session CTA rate; completed inquiry rate; inquiry-to-booking conversion; booked sessions by acquisition source; mobile usability and accessibility. Do not fabricate a baseline.

## 2. Decision register

| ID | Decision | Status | Rule |
|---|---|---|---|
| D1 | Luma Healing Space vs Soul Search by Reshma brand relationship | **OPEN** | Luma is tagged Reshma-verified in current docs; Instagram uses Soul Search. Do not rebrand without answer. |
| D2 | Actual paid services: Reiki, Akashic Record Reading, distance options, meditation | **OPEN** | Only explicitly supported modalities may be introduced as subjects, not automatically as bookable offers. |
| D3 | Practitioner bio, certifications, portrait and permission to reuse images | **OPEN** | Placeholder blocks only. |
| D4 | Session price, duration, modality, geography and capacity | **OPEN** | Placeholder labels only; do not invent a price. |
| D5 | Contact number, email and booking destination | **OPEN** | Disabled/demo CTA; do not expose the V1 placeholder email as genuine. |
| D6 | Voice and aesthetic | **WORKING DIRECTION** | Preserve V1 lavender/sage/cream/gold; use reflection-led, non-shaming language from Reshma's supplied slides. |
| D7 | Page architecture | **PROPOSED** | Lean five-part public nav; avoid invented services, testimonials or credentials. |

## 3. Audience hypotheses and journeys

| Visitor | Entry | First question | Needed content | Desired next action |
|---|---|---|---|---|
| Instagram reflection reader | Story/post/profile | Does she understand what I am experiencing? | Empathetic hero, reflections, practitioner voice | Learn about Reshma or explore session |
| Reiki/Akashic newcomer | Search/referral | What actually happens, and is it for me? | Plain-language service overview, process, FAQs, boundaries | Ask about a session |
| Referral / ready visitor | Direct message/link | How do I reach/book her? | Clear services, availability and reliable contact | Send inquiry |

Avoid assuming that all visitors are women, that emotions are diagnoses, or that a self-reflection post proves a clinical need.

## 4. Information architecture

- **Home** — Promise, Reshma preview, service preview, what-to-expect, reflections, inquiry CTA.
- **Meet Reshma** — Verified story, philosophy, training/credentials, practice boundaries, portrait.
- **Sessions** — Verified service overview and service detail sections (potentially Reiki and Akashic Records); format, duration, price, expectations, FAQ and inquiry.
- **Reflections** — Editorial index of short reflective articles/journaling prompts drawn from approved original content.
- **Contact / Book** — Inquiry flow, booking process, response expectations, channels and privacy notes.

Supporting: Wellness disclaimer; privacy; accessibility; optional FAQ within Sessions rather than separate top-level nav.

For V2, these may be sections on a single responsive site with anchor navigation; separate URLs should be added only when content density or search intent warrants it. The wireframes explore page structure, not a mandatory route count.

## 5. Homepage content contract

| Order | Module | Purpose | Content status | CTA |
|---|---|---|---|---|
| 1 | Hero | Immediate relevance and calm | Instagram tagline is source-backed; brand hierarchy OPEN | Explore sessions |
| 2 | Meet Reshma preview | Human credibility and warmth | Name verified; photo/story placeholder | Meet Reshma |
| 3 | Offer overview | Explain actual work | Reiki/Akashic mentioned in Instagram; exact offers OPEN | What happens in a session? |
| 4 | Philosophy / journey | Distinguish approach from generic spa messaging | Reflection themes source-backed, full copy to approve | Read reflections |
| 5 | What to expect | Reduce uncertainty | Structure is a hypothesis, not a promise | Ask a question |
| 6 | Featured reflections | Connect Instagram to website | Adaptations need editorial/image permission | Read more |
| 7 | Contact CTA | Reduce booking friction | Destination placeholder | Contact Reshma (demo) |

**Content boundaries:** no promises to cure illness, manage psychiatric symptoms or deliver guaranteed life outcomes; no unapproved testimonials; no fabricated prices or training claims. Explain Reiki and Akashic Records as spiritual/complementary practices, with language that distinguishes belief and personal experience from established evidence.

## 6. Two homepage concepts to test

### A — Practitioner-first
Hero: Reshma portrait placeholder + short introduction; service cards immediately below. Best for referrals and trust. Risk: Instagram newcomers may not immediately recognize their emotional concern.

### B — Journey-first (recommended hypothesis)
Hero: visitor-centered self-reflection question and “A journey back to yourself”; early introduction of Reshma; sections for reflection and session exploration. Best for Instagram traffic. Risk: visitors may need quicker access to concrete services.

**Test prompt:** Within 10 seconds, can a first-time visitor say who Reshma is, what she offers and where to inquire? Then find session format and pricing (when verified) in two interactions.

## 7. Design system direction

- Carry forward V1: lavender #C8B4D9, sage #A7B8A1, warm gold #D9B77A, cream #F6F3EA, slate #2E3A4E.
- Typography: expressive editorial serif for headlines; restrained legible sans for utility text; script only as small accent.
- Imagery: Reshma portrait placeholder; botanical/luminous abstract motifs; real licensed photos only after approval. No false portrait.
- Motion: subtle, reduced-motion compliant; avoid distracting scroll traps.
- Accessibility: readable text contrast, keyboard focus, semantic headings, large tap targets, descriptive alt text and reduced-motion support.
- Mobile: primary layout, short headings, clear CTA, low visual load.

## 8. Prototype acceptance criteria

1. Two homepage wireframe modes available and plainly marked as concepts.
2. Responsive from mobile to desktop and usable without JavaScript for core reading where practical.
3. Portrait, service prices, qualifications and contact details explicitly marked placeholders.
4. All simulated booking buttons explain they are demos, never open a fabricated contact.
5. Clear primary conversion path; no unsupported medical or spiritual outcome claims.
6. Existing production V1 and main branch untouched.
7. Eddy reviews IA and preferred concept; Reshma approves brand/services/content before high-fidelity implementation.

## 9. Delivery sequence

1. Review IA and compare concepts A/B.
2. Capture Eddy feedback; validate D1–D5 with Reshma.
3. Make high-fidelity V2 based on selected layout, using V1 code/design tokens.
4. QA mobile, desktop, accessibility, functionality and content verification.
5. Stage private preview, get Reshma approval, then separately authorize production deploy.

## 10. Research links

- [Existing V1](https://luma.valhallala.com/)
- [Instagram](https://www.instagram.com/soulsearchbyreshma/)
- [Source audit](INSTAGRAM_AUDIT_2026-11-06.md)
- [Website references](WEBSITE_REFERENCES_2026-11-06.md)
