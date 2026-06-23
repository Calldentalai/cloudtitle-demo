# Proposal Sent to Thomas — Scope Summary

**Sent:** 2026-05-19
**Recipient:** Thomas Heimann, Cloud Title LLC

This is the scope and approach we proposed for the cloudtitle.com redesign. This document focuses on what we'll build and how — commercial terms are handled separately.

---

## Engagement shape

- **One-time build** (not an ongoing retainer)
- **Four phases**, with a fifth phase flagged as future / out of current scope
- **Target timeline:** 8 weeks comfortable, 4–5 weeks if approvals turn in 24–48 hours
- **Platform:** WordPress + Divi (retained, as Thomas specified)
- **Re-uses patterns** already running at First Movers AI (auto-blog pipeline, GHL Contact 360 schema) — we're porting proven infrastructure, not building from scratch

---

## Phase 1 — Foundation & Tooling

- Access setup (WordPress admin, hosting, GA4, GTM, Meta Pixel, Search Console, GHL)
- Light technical audit of the existing site
- Tracking layer baseline so Phase 2/3 changes can be measured

## Phase 2 — Design & Build (the core)

- Full information architecture per Thomas's Technical & Legal Implementation Brief
- All pages: Home · Safe Listing™ · Agents (Start Safe Listing · Submit Title Order · Rush Commitment · Marketing Resources) · Buyers & Sellers · Resources (Blog · FAQ · Case Studies) · About · Contact
- Sticky navigation with persistent "Start Safe Listing" CTA
- Mobile-first responsive design
- All CTAs wired to GoHighLevel forms
- Homepage copy used verbatim from Thomas's supplied document
- Legal pages preserved verbatim

## Phase 3 — SEO + AI Optimization

- Schema.org markup across all pages
- RankMath configuration
- `llms.txt` for AI crawler optimization
- Core Web Vitals tuning (target: under 2.5s load)
- Sitemap submission post-launch

## Phase 4 — Blog Launch + Auto-Blog Engine

- Blog template fully configured — grid layout, five categories (Cloud Title Intelligence™), CTA blocks, author attribution, social sharing
- Auto-blog engine connecting WordPress, RankMath, Search Console, keyword bank, image library
- Configurable cadence (slow burn through blitz)
- Slack approval gate before publish
- 90-day operations runway bundled in

## Phase 5 — Inside-Sales Follow-Up (FUTURE / OUT OF SCOPE)

- Long-cycle nurture system for ~700 Florida real estate agents
- GHL Contact 360 customer profile schema
- Multi-month follow-up sequences
- Flagged as future work — the data layer in Phases 1 + 3 is set up so this plugs in cleanly when Thomas is ready

---

## What we asked Thomas to confirm

1. Divi 4 or Divi 5? (affects automation depth)
2. GHL form readiness by Week 3
3. Brand assets — logo files, photography preferences, video demos
4. GA4 / GTM / Meta Pixel / Search Console status — fresh setup or partial?
5. Current hosting + Core Web Vitals baseline (PageSpeed score)
6. Blog cadence preference
7. Any existing case studies or agent testimonials to feature

---

## Demo links shared (for design quality reference)

**Dashboards** (modeled for the Phase 4 lightweight bonus):
- Hub linking 20+ dashboards: https://firstmoverai-sandy.vercel.app/
- Sales Intelligence: https://firstmoverai-sandy.vercel.app/dashboards/sales-intelligence-dashboard.html
- UTM Analytics (live GA4): https://firstmoverai-sandy.vercel.app/dashboards/utm-analytics-dashboard.html
- Prospect Re-engagement (GHL Contact 360 pattern): https://firstmoverai-sandy.vercel.app/dashboards/prospect-reengagement.html
- Strategic Synthesis: https://firstmoverai-sandy.vercel.app/dashboards/strategic-synthesis.html
- Content Calendar: https://firstmoverai-sandy.vercel.app/dashboards/content-calendar.html

**WordPress pages** (Elementor — we'll deliver the same conversion quality on Divi):
- AI Labs (~16K sessions/mo): https://firstmovers.ai/labs/
- Consulting (~11K sessions/mo): https://firstmovers.ai/consulting/
- Bootcamp: https://firstmovers.ai/bootcamp/
- Blueprint: https://firstmovers.ai/blueprint/
