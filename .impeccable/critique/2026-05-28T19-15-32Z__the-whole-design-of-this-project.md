---
target: the whole design of this project
total_score: 27
p0_count: 2
p1_count: 3
timestamp: 2026-05-28T19-15-32Z
slug: the-whole-design-of-this-project
---

## Design Health Score

| #         | Heuristic                       | Score     | Key Issue                                          |
| --------- | ------------------------------- | --------- | -------------------------------------------------- |
| 1         | Visibility of System Status     | 3         | Form submit state and tab indicator work           |
| 2         | Match System / Real World       | 4         | Natural Indonesian, restaurant conventions         |
| 3         | User Control and Freedom        | 3         | Hours link is a dead #contact self-link            |
| 4         | Consistency and Standards       | 2         | Clone-stamped kicker grammar across all sections   |
| 5         | Error Prevention                | 3         | Required fields, date/select constrain input       |
| 6         | Recognition Rather Than Recall  | 3         | Nav labels, tabs, form labels all visible          |
| 7         | Flexibility and Efficiency      | 2         | Single scroll path; no mobile shortcuts            |
| 8         | Aesthetic and Minimalist Design | 2         | Section repetition fatigue; missing hero image     |
| 9         | Error Recovery                  | 2         | Success state shown; no inline validation feedback |
| 10        | Help and Documentation          | 3         | Contact info present; form self-explanatory        |
| **Total** |                                 | **27/40** | **Acceptable**                                     |

## Anti-Patterns Verdict

Partially AI-generated. Cormorant Garamond + Space Mono (both reflex-reject), clone-stamped kicker grammar across every section, hero with zero photography, palette guessable from category. Counterbalanced by: three-panel menu system, mat-board frame in About, quality animation choreography.

## Priority Issues

**[P0] No mobile navigation** — Nav.tsx:35. All nav links hidden on mobile. Showstopper for a restaurant site.

**[P0] Hero has zero photography** — Hero.tsx:7. CSS gradient only. No appetite signal. Explicit brand ban for restaurant sites.

**[P1] Reflex-reject fonts** — globals.css:12-13. Cormorant Garamond + Space Mono. Both on the brand reflex-reject list.

**[P1] Clone-stamped section kickers** — About, Menu, Gallery, Contact all use identical [line][LABEL] + h2-with-italic-emerald-word grammar. AI scaffolding tell.

**[P1] Gallery grid breaks on mobile** — Gallery.tsx:75. grid-cols-12 without responsive override; 12 columns at 375px is illegible.

## Persona Red Flags

**Mia (Mobile-first local foodie):** Nav gone on mobile, no food photography in hero, hours link goes nowhere. Abandons.

**Riko (Regular customer):** Must scroll through hero + about + menu + gallery to reach address. Journey is frustrating.

## Minor Observations

- #ffffff pure white in token — should be tinted
- scrollbar hidden globally — accessibility concern
- #contact self-link for hours
- Copyright year: 2024 (stale)
- Space Mono visible in CategoryBlock subtitles and About caption
- Inline rgba values bypass token system
