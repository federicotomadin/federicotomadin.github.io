# Proposal: React + TypeScript + Tailwind Migration

## Why

The portfolio site is a static HTML/jQuery template with duplicated layout markup across 8 pages, no build pipeline, and outdated dependencies. Migrating to React + TypeScript + Tailwind modernizes the stack, enables component reuse, improves maintainability, and aligns with the developer's core skills.

## What Changes

- Replace static HTML pages with a Vite + React + TypeScript SPA
- Replace Bootstrap/jQuery/SCSS with Tailwind CSS
- Extract shared layout (header, footer, navigation) into React components
- Migrate all 8 pages: Home, About, Work, Service, Contact, Blog, Blog Details, Elements
- Add GitHub Actions workflow for GitHub Pages deployment
- Fix contact form to use environment-based Web3Forms (no hardcoded credentials)
- Archive legacy HTML to `legacy/` folder

## Capabilities

### New Capabilities

- `portfolio-spa`: Single-page React application with client-side routing and Tailwind styling

### Modified Capabilities

<!-- None — greenfield migration -->

## Impact

- **Removed**: Root-level HTML files, jQuery plugins, Bootstrap CSS dependency for UI
- **Added**: `src/`, `package.json`, Vite/Tailwind config, GitHub Actions deploy workflow
- **Preserved**: All content, images, testimonials, project data, social links
- **Moved**: Original HTML → `legacy/`, static assets → `public/assets/`
