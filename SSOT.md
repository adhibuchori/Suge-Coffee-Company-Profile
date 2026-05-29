# SSOT.md — Suge Coffee

**Version:** 1.0.0
**Owner:** Mochammad Adhi Buchori
**Status:** Active Development

> Single Source of Truth for architectural decisions, design tokens, and technical contracts.
> Read the relevant section before starting any task.

---

## 1. Product Context

### 1.1 What Is This Repository

Landing page for **Suge Coffee & Eatery** — a Japanese-inspired coffee and food venue
located in Bintaro, Jakarta Selatan. Built as a Next.js application.

### 1.2 Scope

**Public-facing marketing page.** No backend, no authentication, no database.
Static content only. All data is hardcoded in `src/lib/constants/`.

---

## 2. Ecosystem

This is a standalone project. It does not connect to any Serenity Code backend or CMS.

---

## 3. Tech Stack Decisions

| #   | Choice                | Version | Why                                                  | Key Constraint                                       |
| --- | --------------------- | ------- | ---------------------------------------------------- | ---------------------------------------------------- |
| 3.1 | Next.js + React Comp. | 16.x    | App Router, standalone output, React Compiler        | React Compiler enabled — no speculative memoization  |
| 3.2 | TypeScript            | 5.x     | Strict mode end-to-end                               | `tsc --noEmit` must pass before any PR               |
| 3.3 | Tailwind CSS          | v4      | `@import "tailwindcss"` — not `@tailwind` directives | Design tokens live in `@theme` block of globals.css  |
| 3.4 | Framer Motion         | v12     | Scroll animations and micro-interactions             | Don't add useMemo/useCallback around Framer variants |
| 3.5 | Zustand               | v5      | Global UI state (mobileMenuOpen)                     | No server state in Zustand                           |
| 3.6 | Oxlint + Oxfmt        | latest  | Linting and formatting (not eslint/prettier)         | `bun fl` = format + lint                             |
| 3.7 | Vitest                | v4      | Unit testing for hooks and utilities                 | 80% coverage threshold                               |

---

## 4. Architecture

### 4.1 Layer Map

| Layer      | Location                   | Responsibility                       |
| ---------- | -------------------------- | ------------------------------------ |
| UI         | `src/components/sections/` | JSX, styling, rendering only         |
| UI Prims   | `src/components/ui/`       | Reusable primitive components        |
| Logic      | `src/hooks/`               | Behavior, effects, complex state     |
| Global UI  | `src/store/ui-store.ts`    | Shared UI state (mobileMenuOpen)     |
| Utilities  | `src/lib/utils.ts`         | cn() and pure helper functions       |
| Animations | `src/lib/animations.ts`    | Framer Motion variants               |
| Data       | `src/lib/constants/`       | Hardcoded content (menu items, etc.) |
| Types      | `src/types/index.ts`       | Shared TypeScript interfaces         |
| Testing    | `src/testing/`             | Vitest setup + browser API mocks     |

### 4.2 File & Folder Naming

| Type        | Convention | Example                     |
| ----------- | ---------- | --------------------------- |
| Components  | PascalCase | `Hero.tsx` exports `Hero`   |
| Hooks       | camelCase  | `useScrollPosition.ts`      |
| Directories | kebab-case | `src/components/sections/`  |
| Constants   | kebab-case | `src/lib/constants/menu.ts` |

### 4.3 App Router Structure

```
src/
├── app/
│   ├── globals.css          # Design system (Tailwind v4 @theme)
│   ├── layout.tsx           # Root layout — fonts + metadata
│   └── page.tsx             # Home page — assembles all sections
├── components/
│   ├── sections/            # Page sections: Nav, Hero, About, Menu, etc.
│   └── ui/                  # Primitive components
├── hooks/
│   ├── useScrollPosition.ts
│   ├── useScrollReveal.ts
│   ├── useMenuTab.ts
│   └── useRsvpForm.ts
├── store/
│   └── ui-store.ts
├── lib/
│   ├── utils.ts
│   ├── animations.ts
│   └── constants/
│       └── menu.ts
├── types/
│   └── index.ts
└── testing/
    ├── setup.ts
    └── helpers/
        └── browser-api.ts
```

---

## 5. Design Token Reference

All design tokens live in `src/app/globals.css` under the `@theme` block.

### Color Palette — Suge Coffee Warm Emerald

| Token             | Value     | Use                              |
| ----------------- | --------- | -------------------------------- |
| `--emerald`       | `#2D6A5A` | Primary brand, CTA, accents      |
| `--emerald-light` | `#3D8A74` | Hover states                     |
| `--emerald-dark`  | `#1C4A3F` | Hero background, dark surfaces   |
| `--cream`         | `#FAF8F4` | Page background                  |
| `--warm`          | `#F0EAE0` | Alternating section backgrounds  |
| `--stone`         | `#C4B89A` | Decorative accents, dark-bg text |
| `--wood`          | `#9C7A52` | Tertiary accents                 |
| `--charcoal`      | `#1E1E1E` | Dark sections (contact, footer)  |
| `--ink`           | `#2C2C2C` | Body text                        |
| `--muted`         | `#7A7065` | Secondary text                   |

### Typography

| Token     | Font               | Use                              |
| --------- | ------------------ | -------------------------------- |
| `--serif` | Cormorant Garamond | Hero titles, section headings    |
| `--jp`    | Noto Serif JP      | Japanese character decorations   |
| `--sans`  | Jost               | Nav links, labels, body, buttons |

---

## 6. Environment Variables

| Variable                       | Required | Description                |
| ------------------------------ | -------- | -------------------------- |
| `NEXT_PUBLIC_APP_URL`          | ✅       | Public base URL of the app |
| `GITHUB_PERSONAL_ACCESS_TOKEN` | Dev only | GitHub MCP server access   |

`.env.local` is gitignored. Never commit secrets.

---

## 7. Infrastructure

### 7.1 Deployment

Docker 3-stage build: `deps → builder → runner`

- Base image: `oven/bun:alpine`
- Port: `3010`
- Output: `standalone`

### 7.2 CI/CD

Not yet configured. Refer to Serenity Code CMS for CI/CD template reference.
