# Portfolios Monorepo

Welcome to `portfolios` — a lightweight, zero-cost micro-app monorepo designed for hosting independent professional microsites for clients and small businesses.

## Structure

```text
portfolios/
├── README.md
├── AGENTS.md
├── package.json
├── apps/
│   └── sunil-insurance/    # Sunil's Insurance Advisory Microsite
├── packages/
│   ├── ui/                 # Shared UI elements & design tokens
│   └── shared/             # Shared utilities (e.g. WhatsApp helpers)
└── templates/
    └── microsite/          # Clean starter template for new client microsites
```

## Micro-App Architecture Principles

1. **Zero-Cost Hostability**: Built to deploy to Cloudflare Pages (or Vercel / Netlify free tiers) static hosting ($0/month).
2. **Strict Handoff Handovers**: Every client site resides strictly within `apps/<client-id>/`. No cross-contamination of customer copy or data.
3. **No Unnecessary Infrastructure**: Static React SPA first. No database or auth unless strictly required.
4. **WhatsApp Lead Conversion**: Handoff directly from client-side UI to WhatsApp deep links with pre-populated contextual messages.

## Development

```bash
# Install dependencies
npm install

# Run Sunil's Insurance Microsite locally
npm run dev:sunil

# Build all workspaces
npm run build
```

## Adding a New Microsite

1. Copy `templates/microsite/` to `apps/<new-client-id>/`.
2. Update `package.json` inside `apps/<new-client-id>/` with the appropriate project name.
3. Configure `src/config/contact.ts` and branding files in the new app directory.
