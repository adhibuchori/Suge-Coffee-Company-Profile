# Suge Coffee — Core

Static marketing/landing site for Suge Coffee & Eatery (Bintaro, Jakarta). No auth, no backend, no CMS.

## Source map

- `src/app/` — Next.js App Router root (layout.tsx, page.tsx, globals.css)
- `src/components/sections/` — full-page sections (Hero, Nav, About, Menu, Gallery, Location, Contact, RsvpForm, Footer, CategoryBlock, LocationMap)
- `src/components/ui/` — reusable sub-components (MenuItemRow, SignatureSpotlight, CategoryNav, MenuBranding, CategoryBlock, FormInput)
- `src/hooks/` — custom hooks (useScrollReveal, useScrollPosition, useMenuNavigation, useMenuTab, useRsvpForm)
- `src/store/` — Zustand UI store (ui-store.ts, mobileMenuOpen only)
- `src/lib/` — utilities and menu data constants
- `src/types/` — shared TypeScript types
- `src/testing/` — Vitest setup and browser-api helpers

## Invariants

- No authentication anywhere; login redirects to external FE LMS
- No Payload CMS or TanStack Query yet — purely static data from `src/lib/constants/`
- All user-facing strings are in Indonesian (no i18n system / next-intl in use currently)
- Fonts: Shippori Mincho (serif), Jost (sans), Noto Serif JP — loaded via next/font/google
