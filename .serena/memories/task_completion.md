# Task Completion Gates

Run in order before marking any task done:

```bash
rtk bun fl          # must exit 0 (format + lint)
rtk bun type-check  # must exit 0 (tsc --noEmit)
rtk bun test        # must exit 0 (all tests pass)
```

Coverage thresholds (Vitest): statements 80%, branches 75%, functions 80%, lines 80%.

Block merge if any gate fails. Never use `// oxlint-disable` — fix the underlying issue.
