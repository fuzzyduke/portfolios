# AGENTS.md — Developer & AI Agent Guidelines

This repository contains independent micro-applications for different individuals and businesses.

## Rules for AI & Human Developers

1. **Isolation**: Never import customer-specific content or configuration from one application in `apps/` into another.
2. **Configuration**: Contact information (WhatsApp numbers, phone numbers, email addresses, names) MUST be stored in `src/config/contact.ts` within the specific application folder. NEVER hardcode phone numbers or WhatsApp links in UI components.
3. **Provisional Content**: Any unverified business details, product offerings, or services must be explicitly tagged as `PROVISIONAL — awaiting confirmation` in code comments and documentation.
4. **Zero Cost & Zero Database**: Maintain zero-cost micro-app principles ($0/month target). Prefer client-side interactions and WhatsApp deep links over complex backends.
5. **Mobile-First UX**: Optimize UI for mobile web browsers, large touch targets, readable typography, and high-converting CTA placement.
