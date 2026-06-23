# Divi 5 Build Toolchain — DiviOps MCP Setup

> How we build the Cloud Title Divi 5 pages with AI assistance. Read this before authoring any page. For project context, start with [`../TEAM-ONBOARDING.md`](../TEAM-ONBOARDING.md).

---

## Why an MCP server at all

We're building the whole site **from scratch on Divi 5**. An MCP (Model Context Protocol) server lets Claude Code read and write Divi pages **programmatically with the correct block format** — instead of hand-guessing Divi's JSON and producing broken layouts. It gives the AI typed control over pages, sections, modules, and the design system (global colors, variables, presets, Theme Builder layouts).

This is the same pattern other projects use with a WordPress MCP + Elementor MCP — here the equivalent for Divi is **DiviOps**.

---

## Why DiviOps (the decision)

There are two real, purpose-built Divi MCP servers. We evaluated both:

| | **DiviOps** ✅ *chosen* | **Respira** *(fallback)* |
|---|---|---|
| Built for | Claude Code + **Divi 5**, native | Multi-builder (16 builders), incl. Divi 4 **and** 5 |
| Tools | 74 typed Divi tools (`page_*`, `section_*`, `module_*`, design system, Theme Builder, SCF/CPT, WP-CLI) | ~130–172 universal tools across builders |
| Safety | `dry_run: true` preview on every write tool | Duplicate-first: clones each page before edits, approval before publish |
| Requirement | **Divi 5.1+, WP 6.5+** | Divi 4 or 5 |

**We chose DiviOps because:**
1. The site is on **Divi 5** — DiviOps is Divi-5-native and Claude-Code-native.
2. We're building **from scratch**, so there are no live pages to protect. Respira's main advantage (duplicate-first editing of *existing live* pages) doesn't apply yet — `dry_run` previews are sufficient for authoring new pages on staging.
3. It mirrors the MCP-server + WP-plugin + Claude-skill shape the team already knows.

**Keep Respira in your back pocket** only if we later (a) need to edit *live* Divi pages post-launch and want a hard duplicate-first gate, or (b) want one server that also covers Elementor sites from other projects.

> **Not MCP servers** (so they don't fit our workflow): **Divi5-ToolKit** (a Claude Code skill for Divi 5 CSS generation/validation — useful companion, no page-write API) and Elegant Themes' built-in **Divi 5 Command Center** (in-product AI only, not exposed over MCP).

---

## Prerequisites

- [ ] A **staging** WordPress install (never point this at production during the build)
- [ ] **WordPress 6.5+**
- [ ] **Divi 5.1+** active
- [ ] An **Application Password** for the build user (WP Admin → Users → your profile → Application Passwords)
- [ ] **Claude Code** installed locally
- [ ] `node` / `npx` available

---

## Setup steps

### 1. Install the WordPress plugin
Upload `diviops-agent.zip` via **WP Admin → Plugins → Add New → Upload Plugin**, then activate it.
*(Requires Divi 5.1+ and WordPress 6.5+.)*

### 2. Add the MCP server to Claude Code
Run this from the project, substituting the staging URL, WP username, and the Application Password you generated:

```bash
claude mcp add diviops-ct \
  --env WP_URL=https://staging.cloudtitle.com \
  --env WP_USER=<your-wp-username> \
  --env WP_APP_PASSWORD=xxxxXXXXxxxxXXXXxxxxXXXX \
  -- npx -y --package @diviops/mcp-server diviops-mcp
```

### 3. Install the Claude skill
This teaches Claude the correct Divi 5 block format (the part that prevents broken pages):

```bash
claude plugin install oaris-dev/diviops
```

### 4. Verify
Open Claude Code and confirm the `diviops-ct` server is connected and the Divi tools are listed.

---

## Working safely

- **Staging only** during the build. Don't connect to production until launch QA, and even then prefer exporting/importing reviewed layouts.
- **Use `dry_run: true`** on write tools first — it returns the plan without mutating the page. Review, then run for real.
- **Don't touch legal/guarantee modules** through automation. That language is locked (see project hard rules).
- **Wire CTAs to GoHighLevel forms only.** Don't let the AI insert placeholder or default links.
- **Application Passwords are secrets.** Never commit them to this repo. Keep them in your local Claude Code env config only.

---

## Notes / open items

- DiviOps offers an advanced (paid) tier for deeper per-module attribute maps. **Any decision involving paid add-ons goes through Mohammad** — commercial terms are handled outside this repo.
- Credentials (staging URL, App Passwords, hosting access) are provisioned per the kickoff access requests — ask Mohammad if you don't have them yet.

---

## Reference links

- DiviOps — GitHub: https://github.com/oaris-dev/diviops
- `@diviops/mcp-server` — npm: https://www.npmjs.com/package/@diviops/mcp-server
- DiviOps site: https://diviops.com/
- Respira (fallback, multi-builder): https://www.respira.press/mcp
- Divi5-ToolKit (companion skill, not MCP): https://github.com/cjsimon2/Divi5-ToolKit
