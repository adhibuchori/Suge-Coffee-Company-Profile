# Conventions

## Naming

- Components: PascalCase (`Hero.tsx` → exports `Hero`)
- Hooks: camelCase (`useScrollPosition.ts` → exports `useScrollPosition`)
- Store: camelCase (`ui-store.ts` → exports `useUiStore`)
- Directories: kebab-case
- Constants: kebab-case files in `src/lib/constants/`
- Types: kebab-case files in `src/types/`

## Separation of Concerns (AGENTS.md Rule 6)

- Components must NOT contain: useEffect logic, useState for behavior/async, useRef for DOM, window/document/navigator, setTimeout/setInterval, Observers, async/await, useCallback/useMemo wrapping business logic
- All such logic belongs in hooks under `src/hooks/`

## Styling (Rules 11–12)

- Static values → `className` (Tailwind)
- Dynamic values from props/state → `style={}`
- No dynamic arbitrary Tailwind: use `style` instead of `` `w-[${x}px]` ``

## Store (Rule 8)

- `src/store/` only for global UI state (mobileMenuOpen, theme, etc.)
- No server/API state in Zustand

## React Compiler (Rules 23–24)

- No speculative useMemo, useCallback, or memo() — compiler handles it
- Exception: useCallback IS used in useMenuNavigation for referential stability (acceptable)

## Language

- All code, comments, commits in English
- User-facing content in Indonesian (no i18n system currently)
