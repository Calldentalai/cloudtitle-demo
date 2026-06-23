# Cloud Title Website — Team Onboarding

> **New to this project? Read this top to bottom once.** It gives you the full picture: what we're building, who the client is, the documents the client sent, the scope decisions we made together, the toolchain you'll use to build, and what happens next. Everything links to the source files in this repo so you can verify any detail yourself.

---

## 1. What this project is

A complete redesign of **cloudtitle.com** — a Florida title-insurance agency — on **WordPress + Divi 5**.

The whole site is engineered to funnel toward one flagship product: **Safe Listing™**. Every page decision should push the visitor toward a Safe Listing submission. If a design or copy choice doesn't serve that funnel, question it.

- **Platform is locked:** WordPress + Divi 5. We are **not** proposing or evaluating alternatives.
- **Engagement shape:** one-time build, not an ongoing retainer.
- **Build approach:** everything is built **from scratch** on Divi 5 (confirmed with the client).
- **Target timeline:** ~8 weeks from kickoff (can compress to 4–5 weeks if the client returns approvals within 24–48h).

The authoritative scope lives in **[`AGREED-SCOPE.md`](./AGREED-SCOPE.md)** — read that second, right after this file.

---

## 2. Who's who

| Role | Person | Notes |
|---|---|---|
| **Client** | Thomas Heimann, Cloud Title LLC | Deeply AI-fluent — runs his own AI content stack producing 20–30 pieces/day. Do **not** pitch him AI tooling. We deliver positioning + a conversion-focused site. |
| **Project owner** | Mohammad | Runs the engagement and the client relationship. Signs off on direction. **All scope changes and commercial questions route through him** — never accept scope additions directly from the client. |
| **Team** | Designers, developers, content/SEO | That's you. You work from this repo. |

> ⚠️ **Sibling project, do not touch:** `cloud-title-chat/` is a *separate* product (an AI chat widget) for the same client. It is not part of this website build. Don't modify it from here.

---

## 3. The documents the client sent us

The client (Thomas) sent **three source documents**. These are the source of truth for requirements. They live in **[`briefs-from-thomas/`](./briefs-from-thomas/)**:

| Document | What's in it |
|---|---|
| **Website Redesign Executive Brief.docx** | Positioning, target audience, brand tone. Start here for the "why." |
| **Website Redesign – Final Technical & Legal Implementation Brief.docx** | Platform, full information architecture (the page list), tracking stack, legal/guarantee language requirements. |
| **Complete Homepage Copy – Divi Implementation Version.docx** | The homepage copy, **to be used verbatim**. Don't rewrite it. |

**Hard rules that come straight from these briefs:**
- **Legal and guarantee language is locked.** Never edit it without explicit Mohammad/Thomas approval.
- **Homepage copy is used exactly as supplied.** No paraphrasing.
- **Statistics display as "Based on internal averages"** where appropriate (client instruction).
- **Every CTA connects to a GoHighLevel (GHL) form.** No CTA ships pointing anywhere else.

---

## 4. The back-and-forth: how we landed on the scope

This matters because **the scope you'll build is smaller than what we originally proposed** — and that was the client's call, in writing. Understanding this prevents you from accidentally building things that were deliberately cut.

**The flow:**

1. **We sent a proposal** → [`proposal-sent/proposal-scope-summary.md`](./proposal-sent/proposal-scope-summary.md)
   A 4-phase, 8-week build (Foundation → Design & Build → SEO+AI → Blog + Auto-Blog Engine), plus a 5th future phase (inside-sales follow-up).

2. **Thomas responded and trimmed scope** → [`response-from-thomas/2026-05-thomas-response-to-proposal.md`](./response-from-thomas/2026-05-thomas-response-to-proposal.md)
   He said the redesign is "exactly what I need" and moved forward — but **cut scope rather than renegotiating value**. He concentrated the engagement on the **Design & Build** phase.

**What he removed and why:**

| Removed | His reasoning |
|---|---|
| Phase 1 (Foundation/Tooling) as a separate phase | Meta Pixel, Search Console, Google Business Profile already live; site too small to audit. Folded the small tracking work into the main build. |
| Phase 3 (SEO + AI) as a separate phase | He considers schema, RankMath, `llms.txt`, Core Web Vitals **part of building the site properly** — not a separate phase. Not looking for an SEO retainer. |
| Phase 4 auto-blog engine + 90-day ops | Cloud Title **already produces 20–30 content pieces/day** via their own AI stack. The engine adds no value for them. *(We still build the blog itself — just not the automation.)* |
| Phase 5 inside-sales follow-up | He's **building this internally.** Out of scope for us. |

**What he confirmed he wants (all in-scope):**
- The **full page list** built, none treated as an add-on (see §5).
- The **blog fully configured** in the build (grid, 5 categories, RankMath, CTA blocks, author attribution, social sharing) — he supplies the seed posts.
- **3 homepage concepts in Figma** before any Divi build begins.
- **2 revision rounds per page** (his own suggestion — and a hard cap).
- One-time SEO/schema/`llms.txt`/Core Web Vitals/GA4 events **folded into the build**.
- **Legal pages preserved verbatim.**

The response doc includes a full alignment check confirming **none of this conflicts with his original briefs** — he only trimmed what *we* had added on top.

> **Net effect for you:** Build the full site beautifully on Divi 5. Configure the blog (but no auto-posting engine). Bake SEO in as you go. Don't build the CRM/inside-sales layer. Respect the 2-revisions-per-page cap.

---

## 5. What we're building (the pages)

1. **Home** — copy already supplied verbatim
2. **Safe Listing™** — flagship product page (client supplying most copy + video)
3. **Agents** (parent + 4 subpages): Start Safe Listing · Submit Title Order · Rush Commitment · Marketing Resources
4. **Buyers & Sellers**
5. **Resources** (parent + subpages): Blog (Cloud Title Intelligence™) · FAQ · Case Studies
6. **About**
7. **Contact**
8. **Legal pages** — preserved verbatim, do not alter

Plus: **sticky navigation** with a persistent right-aligned **"Start Safe Listing"** CTA.

Full detail, deadlines for client-provided assets, and the complete hard-rules list are in **[`AGREED-SCOPE.md`](./AGREED-SCOPE.md)**.

---

## 6. The build toolchain — Divi 5 + DiviOps MCP

We build the Divi 5 pages with AI assistance through an **MCP server** that gives Claude Code typed, programmatic control over Divi pages, sections, modules, and the design system — so we author pages fast without hand-guessing Divi's block format.

**The server we use: DiviOps.** Chosen specifically because the site is on **Divi 5** and we're building **from scratch**.

👉 **Full setup instructions, prerequisites, and usage are in [`tooling/divi-mcp-setup.md`](./tooling/divi-mcp-setup.md).** Read that before you try to build any page.

The short version:
- Divi 5.1+ and WordPress 6.5+ required.
- Three parts: an MCP server (`@diviops/mcp-server`), a WordPress plugin, and a Claude Code skill.
- Point it at a **staging** install — never production during the build.
- Use `dry_run` previews before committing page writes.

---

## 7. Your next steps

**Before you build anything:**

1. **Read in order:** this file → [`AGREED-SCOPE.md`](./AGREED-SCOPE.md) → the three briefs in [`briefs-from-thomas/`](./briefs-from-thomas/) → the [scope response](./response-from-thomas/2026-05-thomas-response-to-proposal.md).
2. **Open the three `.docx` briefs** and absorb the positioning, IA, and homepage copy. These are the requirements.
3. **Set up the toolchain** per [`tooling/divi-mcp-setup.md`](./tooling/divi-mcp-setup.md) against a staging site.

**The build sequence (respect the gates):**

| Gate | What it is |
|---|---|
| **1. Kickoff** | Confirmed by Mohammad. Access + assets requested. |
| **2. Figma direction lock** | Deliver **3 homepage concepts** in Figma. Client picks one. Only then do we move into the Divi build. |
| **3. Page-by-page sign-off** | Build page by page. **Max 2 revision rounds per page.** Flag round 2 explicitly so scope doesn't drift. Next page starts after sign-off. |
| **4. Pre-launch QA** | All pages, mobile-first (test at 375 / 768 / 1024 / 1440), every CTA wired to GHL. |
| **5. Launch** | Client signs off → submit sitemap, GA4 events live, monitor. |

**Waiting on the client (don't silently stall — escalate to Mohammad if any slips):**
- Safe Listing™ + Agents page copy and video (within ~2 weeks of kickoff)
- Brand assets (logo files, fonts)
- Agent photography / video demos
- **GHL form IDs / embeds — needed by Week 3 of the build**
- Tracking access (GA4, GTM, Meta Pixel, Search Console) — client provisions Week 1

---

## 8. Hard rules — memorize these

1. **Don't alter guarantee or legal language** without explicit Mohammad/Thomas approval.
2. **Statistics shown as "Based on internal averages"** where appropriate.
3. **Every CTA wires to a GoHighLevel form** — nothing else.
4. **Don't propose platform changes.** WordPress + Divi 5 is locked.
5. **Don't add scope** (no blog automation, no CRM workflows, no retainer pitches). Out of scope means out.
6. **Respect the 2-revisions-per-page cap.** Document changes; flag round 2 explicitly.
7. **Escalate scope changes to Mohammad** — don't accept additions directly from the client.
8. **Don't touch** `cloud-title-chat/` (separate product) or the client's read-only master folder.
9. **Never use an LLM for fee/price math** (carryover rule from the sibling chatbot project).
10. **Commercial terms (price, payment) live elsewhere** — intentionally not in this repo. If you need them, ask Mohammad.

---

## 9. Repo map

```
cloud-title-website/
├── TEAM-ONBOARDING.md        ← you are here (start here)
├── AGREED-SCOPE.md           ← what we're building (read second)
├── CLAUDE.md                 ← instructions for AI assistants working in this repo
├── briefs-from-thomas/       ← the client's 3 source documents (requirements)
├── response-from-thomas/     ← the client's written scope confirmation
├── proposal-sent/            ← our original proposal (background only — superseded by AGREED-SCOPE)
└── tooling/
    └── divi-mcp-setup.md     ← how to set up the Divi 5 build toolchain
```
