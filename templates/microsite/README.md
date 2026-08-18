# Reusable Microsite Template

This directory serves as the base starter template for quickly creating new client microsites in `apps/<new-client-name>/`.

## Included Structures

- **Layout System**: Header with responsive navigation, Footer with disclaimer support, Sticky Mobile CTA.
- **WhatsApp Integration**: `src/utils/whatsapp.ts` for deep-linking user queries.
- **Configuration**: `src/config/contact.ts` schema for centralizing phone, email, and social links.
- **Tailwind Setup**: Pre-configured Tailwind CSS design tokens.
- **SEO & OpenGraph**: Baseline meta tag structure in `index.html`.

## Usage

1. Copy `templates/microsite/` into `apps/<client-id>/`.
2. Update `package.json` name inside the new app directory.
3. Update `src/config/contact.ts` with client-specific details.
4. Customize components for the client's industry.
