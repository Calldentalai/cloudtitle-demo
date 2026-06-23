# Cloud Title — Website Redesign (cloudtitle.com)

This folder is the **team working space** for the WordPress + Divi redesign of cloudtitle.com.

> **Separate project:** `/Users/mohammadarhamansari/Code/cloud-title-chat/` is the AI chat widget — a different product. Don't modify it from here.

## Start here

1. **`TEAM-ONBOARDING.md`** — full walkthrough for a team member with zero context (project, client, the briefs, the scope back-and-forth, toolchain, next steps). **New team members read this first.**
2. **`AGREED-SCOPE.md`** — what we're building, the page list, the design process, deadlines, hard rules.
3. **`briefs-from-thomas/`** — the three source documents from the Client (Executive Brief, Technical & Legal Implementation Brief, Homepage Copy). Source of truth for requirements.
4. **`response-from-thomas/`** — the Client's own written confirmation of the trimmed scope (so the team can see scope decisions are not unilateral).
5. **`proposal-sent/`** — the proposal we originally sent. Background only; superseded by `AGREED-SCOPE.md`.
6. **`tooling/divi-mcp-setup.md`** — how to set up the Divi 5 build toolchain (DiviOps MCP server). Read before authoring pages.

## Who's who

- **Client:** Thomas Heimann, Cloud Title LLC (Florida title insurance agency)
- **Project owner:** Mohammad — runs the engagement, manages the relationship, signs off on direction
- **Team:** designers, developers, content/SEO support working from this folder

## Critical context

- **Safe Listing™ is the flagship product.** Every page decision should funnel toward Safe Listing submissions.
- **Thomas is deeply AI-fluent.** He runs his own AI stack, produces 20–30 content pieces per day in-house. Don't pitch him AI tooling — we're delivering positioning and a conversion-focused site.
- **He's building an inside-sales follow-up agent himself.** Out of scope. Don't try to scope around it.
- **Platform is locked: WordPress + Divi.** No alternatives.
- **All CTAs must connect to GoHighLevel forms.**
- **Legal and guarantee language is locked** — never edit without explicit approval.

## Process gates (must respect)

| Gate | Trigger | Output |
|---|---|---|
| 1. Project start | Kickoff confirmed by Mohammad | Brief team + access requests |
| 2. Figma direction lock | Client picks one of 3 homepage concepts | Move into Divi build |
| 3. Page-by-page sign-off | 2 revision rounds max per page | Next page begins |
| 4. Pre-launch QA | All pages, mobile-first, all CTAs wired to GHL | Client sign-off |
| 5. Launch | Client signs off | Sitemap submit, GA4 events live, monitor |

## Folder layout

```
cloud-title-website/
├── CLAUDE.md                                       ← you are here
├── TEAM-ONBOARDING.md                              ← full team walkthrough (new members start here)
├── AGREED-SCOPE.md                                 ← what we're building
├── briefs-from-thomas/                             ← Client's 3 source documents
│   ├── Website Redesign Executive Brief.docx
│   ├── Website Redesign – Final Technical & Legal Implementation Brief.docx
│   └── Complete Homepage Copy – Divi Implementation Version.docx
├── proposal-sent/
│   └── proposal-scope-summary.md                   ← original proposal (background only)
├── response-from-thomas/
│   └── 2026-05-thomas-response-to-proposal.md      ← Client's written scope confirmation
└── tooling/
    └── divi-mcp-setup.md                           ← Divi 5 build toolchain (DiviOps MCP)
```

## Sibling locations (read-only from here)

- `/Users/mohammadarhamansari/Code/cloud-title-chat/` — AI chat widget codebase (don't touch)
- `/Users/mohammadarhamansari/Clients/cloud-title/` — Client master folder (raw assets, audits, commercial docs — treat as read-only)

## Hard rules

- **Don't modify `cloud-title-chat/`** from this project.
- **Don't modify `/Users/mohammadarhamansari/Clients/cloud-title/`** — read-only source of truth.
- **Never use an LLM for fee math** (carryover liability rule from the chatbot project — same Client).
- **Commercial terms (price, payment) live elsewhere.** They are intentionally not in this folder. If you need them, ask Mohammad.
- **Escalate scope changes to Mohammad.** Don't accept scope additions directly from Thomas without confirming.
