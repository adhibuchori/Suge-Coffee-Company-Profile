# `bun build` ≠ `bun run build`

**Applies to:** Any Bun project
**Discovered:** 2026-05-21
**Status:** Permanent (intentional Bun CLI design)

## Symptom

Running `bun build` (or `rtk bun build`) produces unexpected bundler output or errors instead of running the project's `build` script in `package.json`.

## Root Cause

`bun build` is Bun's **native bundler subcommand** — it bundles JS/TS files directly. It does NOT look up the `build` script in `package.json`. To run a script defined in `package.json`, you must explicitly use `bun run <script>`.

## Fix

Always use `bun run <script>` when invoking package.json scripts:

```bash
rtk bun run build      # ✅ runs package.json "build"
rtk bun run dev        # ✅ runs package.json "dev"
rtk bun run type-check # ✅ runs package.json "type-check"

rtk bun build          # ❌ invokes Bun's native bundler instead
```

The CLAUDE.md "RTK Enforcement" section lists `rtk bun build` as shorthand — treat that as a typo and always include `run`.

## When to revisit

Never — this is intentional Bun CLI design.
