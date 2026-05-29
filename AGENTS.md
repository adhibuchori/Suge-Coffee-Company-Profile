# AGENTS.md — Suge Coffee

> Enforced guardrails. Read Rule 0 and 0b before touching any code.

---

## ⚡ CRITICAL: Read Before Touching Any Code

### Rule 0 — Mandatory Reasoning Protocol

```
Phase 1 READ:    Identify all affected files. Use Serena MCP for .ts/.tsx — never Read/Grep/Glob for TypeScript.
                 Use Context7 MCP for library documentation lookups.
Phase 2 PLAN:    State what will change and why. If uncertain, ask first.
Phase 3 EXECUTE: Surgical changes only. Run quality gates before marking done.
```

Skipping Phase 1 or 2 is a disqualifying failure. No exceptions.

For Serena MCP availability rules and session-start requirements → see CLAUDE.md §Tool Priority.

### Rule 0b — Pre-Task Checklist

```
[ ] Have I called mcp__serena__initial_instructions? (required before .ts/.tsx work)
[ ] Have I read the relevant SSOT.md sections for this task?
[ ] Are Serena MCP tools available? (see CLAUDE.md §Serena Availability Tiers)
[ ] Have I found an existing pattern in the codebase to follow?
[ ] Do I know exactly which files I will touch?
[ ] Am I placing no logic inside a component?
[ ] If using a library API: have I checked Context7 for up-to-date docs?
```

---

## A. Behavioral Protocol

**Rule 1** — Think before coding. Read first, always. Do not write a single line before Phase 1 is complete.

**Rule 2** — Simplicity first. Minimal change that achieves the goal. Do not add abstractions that were not requested.

**Rule 3** — Surgical changes. Do not touch files or logic outside the scope of the task.

**Rule 4** — Goal-driven. If the approach is not working, stop and re-read. Do not push through with workarounds.

---

## B. Separation of Concerns

**Rule 5 — Layer Ownership**

| Layer     | Location          | Responsibility                     |
| --------- | ----------------- | ---------------------------------- |
| UI        | `src/components/` | JSX, styling, rendering only       |
| Logic     | `src/hooks/`      | Behavior, effects, complex state   |
| Global UI | `src/store/`      | Shared UI state (mobileMenuOpen)   |
| Utilities | `src/lib/`        | Pure functions, constants, helpers |
| Types     | `src/types/`      | Shared TypeScript interfaces       |

**Rule 6 — Components (`src/components/`) — ALLOWED:**

- JSX and conditional rendering
- Calling custom hooks and spreading their return values
- Local presentation state: tooltip open/close, hover
- Inline event handlers that are one-liners delegating to a hook function

**Rule 6 — Components — FORBIDDEN** (extract to `src/hooks/`):

- `useEffect` with any logic beyond a trivial ref assignment
- `useState` that tracks behavior or async state
- `useRef` used for DOM manipulation or timing
- `setTimeout`, `setInterval`, `requestAnimationFrame`
- `IntersectionObserver`, `ResizeObserver`, `MutationObserver`
- `window.*`, `document.*`, `navigator.*` calls
- Any async function or `await`

**Rule 7 — Hooks (`src/hooks/`)**

- One hook = one concern. Name it after that concern.
- Filename must match the export name: `useScrollPosition.ts` exports `useScrollPosition`. camelCase.
- Must not return JSX.
- Must not contain Tailwind classes or styling logic.

**Rule 8 — Store (`src/store/`)**

ALLOWED: Global UI state shared by multiple unrelated components (`mobileMenuOpen`).

FORBIDDEN:

- Server state → use TanStack Query (if added)
- Per-component state → use local `useState` in a hook

---

## C. Styling Rules

**Rule 9 — `className` vs `style`**

| Case                                       | Use         |
| ------------------------------------------ | ----------- |
| Layout, spacing, typography, static colors | `className` |
| Values from props, state, or hooks         | `style`     |
| CSS custom properties (`--var`)            | `style`     |
| Animation delay/offset computed from index | `style`     |

**Rule 10 — FORBIDDEN styling patterns:**

- `style={}` for values expressible as a static Tailwind class
- The same property in both `className` and `style`
- Dynamic arbitrary Tailwind: ``className={`w-[${size}px]`}`` → use `style` instead

---

## D. React Compiler Rules

**Rule 11 — Do not add `useCallback` or `useMemo` speculatively.**

React Compiler is active and handles memoization automatically.

**Rule 12 — Do not add `memo()` wrappers speculatively.** Same reason as Rule 11.

---

## E. Code Quality Rules

**Rule 13 — Max 150 lines per component file.**

If approaching the limit, extract a sub-component or custom hook.

**Rule 14 — No `oxlint-disable` comments.** Fix the underlying issue.

**Rule 15 — RTK Enforcement — ALL terminal commands must use the `rtk` prefix. No exceptions.**

---

## F. Self-Review Gate

Required checklist before marking any task done:

```
[ ] MCP: mcp__serena__initial_instructions called at session start
[ ] MCP: Serena used for .ts/.tsx access (no built-in Read/Grep/Glob for TypeScript)
[ ] MCP: Context7 consulted for library API references
[ ] SoC: No logic in components, no JSX in hooks
[ ] Styling: No static values in style={}, no dynamic arbitrary values in className
[ ] Hooks: Filename matches export name, one concern per hook
[ ] Quality gates passed: rtk bun fl && rtk bun type-check
[ ] Line count: No component file exceeds 150 lines
[ ] Serena errors: Any failures logged to .claude/serena-errors.md
```
