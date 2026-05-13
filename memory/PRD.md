# GravRel E-Card — PRD

## Problem Statement
Repository: https://github.com/babritb-bot/gravrel-ecard (branch `main` holds actual page)
Task: Add a CFO block below the CEO block — identical layout.

## What's Implemented (2026-01)
- Pulled real GravRel landing page from `main` branch of repo into `/app`.
- Added CFO Leadership section directly below CEO section in `/app/frontend/src/App.js` using identical structure & CSS (`.ceo-section` / `.ceo-card`).
- Placeholders: name="Full Name", title="Chief Financial Officer", bio text, professional portrait image.
- data-testids added: `cfo-section`, `cfo-image`, `cfo-name`, `cfo-title`, `cfo-bio`.

## Backlog
- Replace CFO placeholder (Full Name, photo, bio) with real details.
- Optionally add more leadership entries (CTO, COO) using same pattern.
