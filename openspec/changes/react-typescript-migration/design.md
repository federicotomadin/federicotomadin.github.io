# Design: React + TypeScript + Tailwind Migration

## Context

Personal portfolio hosted on GitHub Pages (`federicotomadin.github.io`). Currently static HTML with jQuery, Bootstrap, and duplicated layout. User wants all pages migrated with Tailwind CSS.

## Goals / Non-Goals

**Goals:**
- Vite + React 19 + TypeScript + Tailwind CSS v4
- React Router for all 8 routes
- Shared Layout with responsive mobile nav
- GitHub Actions deploy to GitHub Pages (SPA 404 fallback)
- Content-driven pages via typed data modules
- Contact form via Web3Forms (env-based, no secrets in repo)

**Non-Goals:**
- CMS or backend API
- Pixel-perfect recreation of jQuery animations
- Migrating `Doc/` template documentation folder

## Decisions

### Decision 1: Vite at repo root

Vite project lives at repo root. Legacy HTML moved to `legacy/`. Static assets in `public/assets/`.

**Rationale:** Standard GitHub Pages user-site setup; `npm run build` outputs to `dist/`.

### Decision 2: Tailwind CSS v4 via `@tailwindcss/vite`

Use Tailwind v4 Vite plugin instead of Bootstrap/SCSS.

**Rationale:** User requested Tailwind; eliminates jQuery plugin dependencies.

### Decision 3: React Router with BrowserRouter + 404.html SPA fallback

Routes: `/`, `/about`, `/work`, `/service`, `/contact`, `/blog`, `/blog/:slug`, `/elements`

GitHub Pages SPA: copy `index.html` to `404.html` in deploy step.

### Decision 4: Contact form via Web3Forms

Replace SMTP.js (exposed credentials) with Web3Forms API using `VITE_WEB3FORMS_ACCESS_KEY` env var. Show setup instructions in README if key missing.

### Decision 5: Data modules for content

Extract testimonials, projects, services, blog posts into `src/data/*.ts` for type safety and easy updates.

## Risks / Trade-offs

- **Visual drift** — Tailwind redesign won't match old template exactly → Mitigation: preserve content and structure, modern clean aesthetic
- **Blog content is placeholder** — Template lorem ipsum → Mitigation: migrate as-is, user can update data file later
- **GitHub Pages routing** — Direct URL hits need 404.html trick → Mitigation: deploy workflow handles this

## Migration Plan

1. **Phase 1:** Scaffold, Layout, Home
2. **Phase 2:** About, Work
3. **Phase 3:** Contact + form
4. **Phase 4:** Service, Blog, BlogDetails, Elements + cleanup
