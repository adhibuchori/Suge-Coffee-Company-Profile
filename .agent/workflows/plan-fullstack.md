---
description: Comprehensive fullstack planning workflow that validates Backend (BE) and Frontend (FE) before proposing changes.
---

<!-- Command: /plan-fullstack [feature] -->
<!-- Source: _workflow-source/plan-fullstack.md -->
<!-- Run before starting any new fullstack feature -->

# /plan-fullstack — Fullstack Feature Planning

## Input

Feature: $ARGUMENTS

> **Note:** FE never accesses Payload CMS directly. All data flows through BE Learning Management System (Hono).
> The CMS is internal to BE — FE only knows about BE API endpoints.

---

## 1. RESEARCH (MANDATORY)

Before drafting the plan, you MUST perform the following research steps:

### 1.1 Backend (BE) Analysis

- **API**: Check `be-serenity-code-learning-management-system/` for existing endpoints and controllers.
- **Logic**: Review service files in `be-serenity-code-learning-management-system/src/` for business rules.
- **OpenAPI**: Check `openapi.yaml` (FE root) for the current API contract.

### 1.2 Frontend (FE) Analysis

- **Generated SDK**: Verify if `fe-serenity-code-learning-management-system/src/lib/api/generated/` already includes the needed endpoints.
- **Components**: Identify existing UI components in `fe-serenity-code-learning-management-system/src/components/` that can be reused.
- **Hooks**: Check `fe-serenity-code-learning-management-system/src/hooks/` for existing logic hooks.
- **Translations**: Check `fe-serenity-code-learning-management-system/messages/en.json` and `id.json` for missing keys.

### 1.3 CMS Frontend (fe-serenity-code-learning-management-system-cms/) Analysis

- **Collections**: Check existing Payload CMS collection configs in `fe-serenity-code-learning-management-system-cms/src/collections/` for relevant content types.
- **Fields**: Identify if new fields need to be added to existing collections.
- **Access control**: Review collection access rules if the feature involves restricted content.
- **Globals**: Check `fe-serenity-code-learning-management-system-cms/src/globals/` for site-wide content that may be affected.

---

## 2. SCOPE

Define what needs to be changed across all three repositories:

### Backend (BE) — `be-serenity-code-learning-management-system/`

- [ ] **Endpoints**: List new or updated API endpoints.
- [ ] **Logic**: List services or controllers to implement.
- [ ] **Migration strategy**: Note any data migration requirements.
- [ ] **OpenAPI**: Confirm `openapi.yaml` will be updated to reflect new endpoints.

### CMS Frontend — `fe-serenity-code-learning-management-system-cms/`

- [ ] **Collections**: List new collections or fields to add in Payload CMS.
- [ ] **Access control**: Note any access rule changes needed.
- [ ] **Globals**: List any site-wide globals to add or modify.
- [ ] **Content re-entry**: Flag if existing content needs to be updated after schema change.

### Frontend (FE) — `fe-serenity-code-learning-management-system/`

- [ ] **SDK Sync**: Check if `rtk bun generate:api` is required after BE changes.
- [ ] **Service Hooks**: List new hooks in `src/hooks/api/` (naming: `use{Domain}{Action}`).
- [ ] **Logic Hooks**: List new hooks in `src/hooks/` for extracted business logic.
- [ ] **UI**: List components to create (kebab-case file, PascalCase export) or modify.
- [ ] **Translations**: List new keys for both `en.json` and `id.json`.
- [ ] **Store**: Check if any global UI state change is needed in `src/store/`.

---

## 3. TASKS

Format: `[ ] [TAG] [verb] [target] — est. Xmin`

- Each task: **5–30 min**. If larger, split it.
- Tags: `[CMS]` `[BE]` `[FE-API]` `[FE-UI]` `[FE-HOOK]` `[FE-i18n]` `[FE-STORE]`

Order by dependency — always CMS → BE → FE:

1. _(if CMS change needed)_ **[CMS]** Add/modify Payload CMS collections or fields in `fe-serenity-code-learning-management-system-cms/`.
2. **[BE]** Implement controllers and services in `be-serenity-code-learning-management-system/`.
3. **[BE]** Update `openapi.yaml` to reflect new endpoints.
4. **[FE-API]** Run `rtk bun generate:api` and create service hooks in `src/hooks/api/`.
5. **[FE-UI]** / **[FE-HOOK]** Build/Modify components and logic hooks in `fe-serenity-code-learning-management-system/`.
6. _(if strings changed)_ **[FE-i18n]** Add translations to both `en.json` and `id.json`.

---

## 4. RISKS

Format: `[HIGH/MED/LOW] [risk] → [mitigation]`

- Flag potential breaking changes in the API contract (`openapi.yaml`).
- Flag hydration issues or locale mismatches.
- Flag if Payload CMS change requires content re-entry.

---

## 5. CONFIRMATION

Generate 1–3 questions **specific to this feature** that need user answers before execution starts. Examples of the kind of questions to ask (do not copy verbatim — derive from the actual feature):

- Is the proposed API contract (endpoint shape, request/response) aligned with what the BE team expects?
- Are there CMS content implications that require coordination with content editors?
- Are there any UI constraints, brand guidelines, or copy decisions that must be confirmed first?

If no open questions → state: "No blockers — ready to execute."

---

## Hard Rules (Fullstack)

- **Do not skip BE research**: Always verify if the backend supports the feature before planning the FE.
- **SDK Rule**: Always use the generated SDK from `src/lib/api/generated/`. If it's missing an endpoint, the task is to update the BE and regenerate first.
- **Payload is invisible to FE**: Never plan a direct Payload CMS fetch from the FE.
- **Sync i18n**: Never add a translation to one file without the other.
- **RTK Prefix**: Always use `rtk` for terminal commands during execution.
