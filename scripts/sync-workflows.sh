#!/bin/bash
set -e

SOURCE="_workflow-source"
TARGETS_ALL=(".agent/workflows" ".claude/commands")

echo "Syncing workflows from $SOURCE..."
echo ""

for target in "${TARGETS_ALL[@]}"; do
  mkdir -p "$target"
  SYNCED=0
  NEW=0

  echo "→ $target"

  for file in "$SOURCE"/*.md; do
    name=$(basename "$file")

    # Skip INDEX.md for .agent/ — not needed there
    if [ "$target" = ".agent/workflows" ] && [ "$name" = "INDEX.md" ]; then
      continue
    fi

    if [ -f "$target/$name" ]; then
      cp "$file" "$target/$name"
      echo "  ✓ updated: $name"
    else
      cp "$file" "$target/$name"
      echo "  + added: $name"
      ((NEW++))
    fi

    ((SYNCED++))
  done

  echo "  Synced: $SYNCED | New: $NEW"
  echo ""
done

echo "Done. All targets in sync with $SOURCE."

# Orphan detection — files in targets but not in _workflow-source/
echo "Checking for orphans..."
ORPHANS=0

for target in "${TARGETS_ALL[@]}"; do
  for file in "$target"/*.md; do
    [ -f "$file" ] || continue
    name=$(basename "$file")
    [ "$name" = "INDEX.md" ] && continue
    if [ ! -f "$SOURCE/$name" ]; then
      echo "  ⚠ orphan in $target: $name"
      echo "    → Move to _workflow-source/ and re-run sync-workflows.sh"
      ((ORPHANS++))
    fi
  done
done

if [ $ORPHANS -eq 0 ]; then
  echo "  ✓ No orphans found. All targets are in sync with _workflow-source/."
else
  echo ""
  echo "  $ORPHANS orphan(s) found. Move them to _workflow-source/ to include in future syncs."
fi
