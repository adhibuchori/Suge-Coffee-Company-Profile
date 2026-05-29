# Suge Coffee — Claude Code Config

> Load the relevant SSOT.md sections for your task. Then execute.
> Behavioral protocol → AGENTS.md §A. Self-review gate → AGENTS.md §F.

---

## Project Snapshot

Next.js 16 + React 19 + TypeScript 5. Tailwind CSS v4. Fonts: Cormorant Garamond (serif) · Jost (sans) · Noto Serif JP.
Dev: `rtk bun dev` · Default port: 3010

---

## RTK Enforcement — STRICT

**ALL terminal commands MUST use the `rtk` prefix.**

```
rtk bun dev
rtk bun fl
rtk bun type-check
rtk bun test:coverage
rtk bun run build
rtk bun sync:workflows
```

---

## Context Loading Strategy

Read the relevant SSOT.md section before starting a task:

| Task                        | Read                             |
| --------------------------- | -------------------------------- |
| Component / UI changes      | SSOT.md §4 + AGENTS.md §B        |
| Design token / styling      | SSOT.md §5 + AGENTS.md §C        |
| Hook / logic changes        | SSOT.md §4 + AGENTS.md §B        |
| New feature (unknown scope) | SSOT.md §2, §4                   |
| Anti-pattern triggers       | `.claude/anti-patterns/INDEX.md` |

---

## Tool Priority — Serena MCP (STRICT ENFORCEMENT)

Serena MCP is active in this project:

| Instance | Tool Prefix      | Project Root   | Use For                  |
| -------- | ---------------- | -------------- | ------------------------ |
| `serena` | `mcp__serena__*` | `suge-coffee/` | All `.ts` / `.tsx` files |

### Session Start — REQUIRED

Before any task involving `.ts`/`.tsx`:

1. Call `mcp__serena__initial_instructions` — read the Serena Instructions Manual
2. Verify tools are available before proceeding

### MANDATORY Rules

1. **ALWAYS** use Serena for `.ts` / `.tsx` file operations in this project.
2. **NEVER** use built-in `Read`, `Grep`, or `Glob` for `.ts` / `.tsx` files.
3. **EXCEPTION:** Non-code files (`.json`, `.md`, `.env`, `.yaml`, `.css`) may use `Read` / `Glob` / `Grep`.

### Tool Reference

| Task                         | Tool                                                                     |
| ---------------------------- | ------------------------------------------------------------------------ |
| Session Start (Required)     | `mcp__serena__initial_instructions`                                      |
| File Exploration             | `mcp__serena__get_symbols_overview`                                      |
| Locate Symbol/Logic          | `mcp__serena__find_symbol`                                               |
| Find Declaration             | `mcp__serena__find_declaration`                                          |
| Find Implementations         | `mcp__serena__find_implementations`                                      |
| Trace Usages/Dependencies    | `mcp__serena__find_referencing_symbols`                                  |
| File Diagnostics             | `mcp__serena__get_diagnostics_for_file`                                  |
| Replace Full Function/Body   | `mcp__serena__replace_symbol_body`                                       |
| Replace Content (partial)    | `mcp__serena__replace_content`                                           |
| Add code before/after symbol | `mcp__serena__insert_before_symbol` / `mcp__serena__insert_after_symbol` |
| Safe Delete Symbol           | `mcp__serena__safe_delete_symbol`                                        |
| Rename Symbol                | `mcp__serena__rename_symbol`                                             |

### Known Parameter Rules

- `find_symbol`: use `name_path_pattern` — NOT `name_path`
- `list_dir`: both `relative_path` and `recursive` are mandatory

---

## Context7 MCP — Documentation Lookup

Always use Context7 when you need current documentation for any library.
Do not rely on training data alone for library-specific APIs.

---

## Quality Gates

Must pass before marking any task done:

```bash
rtk bun fl          # oxfmt (format) + oxlint (lint)
rtk bun type-check  # TypeScript strict — tsc --noEmit
```

---

## Naming Conventions

| Type        | Convention | Example                                              |
| ----------- | ---------- | ---------------------------------------------------- |
| Components  | PascalCase | `Hero.tsx` → exports `Hero`                          |
| Hooks       | camelCase  | `useScrollPosition.ts` → exports `useScrollPosition` |
| Store       | camelCase  | `ui-store.ts` → exports `useUiStore`                 |
| Directories | kebab-case | `src/components/sections/`                           |
| Constants   | kebab-case | `src/lib/constants/menu.ts`                          |
| Types       | kebab-case | `src/types/index.ts`                                 |

---

## Language Convention

All code artifacts must be written in **English**:

- Variable and function names
- Comments and JSDoc
- Commit messages and PR descriptions

---

## Commit Format

```
type(scope): subject — max 50 characters
```

Types: `feat` · `fix` · `refactor` · `chore` · `docs` · `style` · `perf` · `test`

---

## Protected Files

Never edit:

```
.env / .env.local / .env.*
.claude/settings.json
```
