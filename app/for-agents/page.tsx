import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { copy } from "@/content/homepage-copy";

export const metadata = {
  title: "For Agents — Cloud Title",
  description:
    "Built for Florida real estate agents. Co-marketing assets, faster closings, and a title partner that helps you win listing presentations.",
  robots: { index: false, follow: false },
};

const advantages = [
  {
    label: "Win the listing",
    title: "Show up with a real differentiator.",
    body: "Walk into a listing presentation able to say the property is already title pre-cleared. Beat agents still quoting 30-day closes.",
  },
  {
    label: "Close on time",
    title: "Stop losing commissions at day 28.",
    body: "AI-driven pre-clearance surfaces liens, satisfactions, and probate gaps at Day 1, not the week before closing.",
  },
  {
    label: "Co-marketing",
    title: "Plug into our Florida agent network.",
    body: "Co-branded social posts, email exposure to the Cloud Title agent list, and the Safe Listing Certified badge for every cleared property.",
  },
];

export default function ForAgents() {
  return (
    <SubpageShell
      eyebrow="For Florida agents"
      h1="Built for the listings you're trying to win."
      sub="Cloud Title is a title and escrow partner — not a SaaS. We close the deal, we underwrite the policy, we sit at the table on closing day. The Safe Listing™ program is built around how you actually sell."
      primaryCta={{ label: "Get started", href: "#start" }}
      secondaryCta={{ label: "Schedule a 15-minute call", href: "#schedule" }}
    >
      <section className={s.section}>
        <p className={s.sectionEyebrow}>The agent advantage</p>
        <h2 className={s.sectionH2}>{copy.aiDifference.h2}</h2>
        <div className={s.cardGrid} data-cols="3">
          {advantages.map((a) => (
            <article key={a.label} className={s.card}>
              <p className={s.cardLabel}>{a.label}</p>
              <h3 className={s.cardTitle}>{a.title}</h3>
              <p className={s.cardBody}>{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={s.section} data-surface="sand">
        <div className={s.twoCol}>
          <div>
            <p className={s.sectionEyebrow}>Why we exist</p>
            <h2 className={s.sectionH2}>{copy.unfairAdvantage.h2}</h2>
          </div>
          <div className={s.prose}>
            {copy.unfairAdvantage.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <p className={s.sectionEyebrow}>What&rsquo;s next</p>
        <h2 className={s.sectionH2}>Two ways to start</h2>
        <div className={s.cardGrid}>
          <article className={s.card}>
            <p className={s.cardLabel}>Open a Safe Listing</p>
            <p className={s.cardBody}>
              Send us the property — we&rsquo;ll pre-clear title within 48 hours and you launch the listing knowing it&rsquo;s clean.
            </p>
            <a href="#start" className={s.btnPrimary} style={{ marginTop: "1.25rem" }}>Submit Order</a>
          </article>
          <article className={s.card}>
            <p className={s.cardLabel}>Talk to a closer first</p>
            <p className={s.cardBody}>
              15 minutes on the phone with the team. We&rsquo;ll walk through your average pipeline and tell you straight if Safe Listing helps.
            </p>
            <a href="#schedule" className={s.btnGhost} style={{ marginTop: "1.25rem" }}>Schedule a call</a>
          </article>
        </div>
      </section>
    </SubpageShell>
  );
}
