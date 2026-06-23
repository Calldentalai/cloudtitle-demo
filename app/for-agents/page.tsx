import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { ImageSlot } from "@/components/shared/ImageSlot";
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

const testimonial = copy.socialProof.testimonials[0];

export default function ForAgents() {
  return (
    <SubpageShell
      eyebrow="For Florida agents"
      h1="Built for the listings you're trying to win."
      sub="Cloud Title is a title and escrow partner — not a SaaS. We close the deal, we underwrite the policy, we sit at the table on closing day. The Safe Listing™ program is built around how you actually sell."
      primaryCta={{ label: "Get started", href: "/submit-order" }}
      secondaryCta={{ label: "Schedule a 15-minute call", href: "/contact" }}
      heroImage={{
        src: "/assets/A3.png",
        alt: "Three Florida title professionals inside a modern glass-fronted Tampa office — environmental portrait",
        caption: "The closing team, Tampa office",
        prompt: "Editorial environmental portrait of a small Florida title agency team of 3, modern glass-fronted Tampa office, mid-morning sidelight.",
        ratio: "4/5",
      }}
      heroStats={[
        { label: "Listings supported", value: "$127M+", accent: true, foot: "closed in 2025 — based on internal averages" },
        { label: "Agent rating", value: "4.9 / 5", accent: true, foot: "based on internal averages" },
        { label: "Florida coverage", value: "67 / 67", accent: true, foot: "counties — licensed statewide" },
      ]}
    >
      {/* THREE ADVANTAGES — numbered cards */}
      <section className={s.section}>
        <div className={s.sectionHead} data-align="split">
          <div>
            <p className={s.sectionIndex}>01 / The agent advantage</p>
            <h2 className={s.sectionH2}>Three things that change when title work moves to Day 1.</h2>
          </div>
          <p className={s.sectionLead}>
            Most agents lose deals at the same point in the process — the post-contract title surprise. Pre-clearing inverts that. Here&rsquo;s what you can say in your next presentation that no competitor can.
          </p>
        </div>

        <div className={s.cardGrid} data-cols="3">
          {advantages.map((a, i) => (
            <article key={a.label} className={s.numberedCard} data-emphasis={i === 0 ? "accent" : undefined}>
              <p className={s.numberedIndex}>
                {String(i + 1).padStart(2, "0")}<small>{a.label}</small>
              </p>
              <h3 className={s.cardTitle}>{a.title}</h3>
              <p className={s.cardBody}>{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY WE EXIST — split column with image + pull quote */}
      <section className={s.section} data-surface="sand">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>02 / Why we exist</p>
          <h2 className={s.sectionH2}>{copy.unfairAdvantage.h2}</h2>
        </div>

        <div className={s.twoCol} data-ratio="40-60">
          <figure className={s.imagePlate}>
            <div className={s.imagePlateWrap}>
              <ImageSlot
                src="/assets/A2.png"
                alt="Aerial straight-down view of a Florida coastal causeway"
                ratio="4/5"
                tone="light"
                kind="supporting"
                caption="Florida coast"
                prompt="Aerial straight-down of a Florida coastal causeway."
              />
            </div>
            <figcaption className={s.imagePlateCaption}>Florida market, on paper</figcaption>
          </figure>

          <div className={s.prose}>
            {copy.unfairAdvantage.body.slice(0, 3).map((p) => <p key={p}>{p}</p>)}
            <blockquote className={s.pullQuote}>
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <p style={{ marginTop: "1rem", fontSize: "var(--text-sm)", color: "var(--color-ink-muted)" }}>
              — {testimonial.name}, {testimonial.role}
            </p>
          </div>
        </div>
      </section>

      {/* TWO PATHS TO START — comparison pair */}
      <section className={s.section}>
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>03 / Two ways to start</p>
          <h2 className={s.sectionH2}>Open an order, or talk to a closer first.</h2>
          <p className={s.sectionLead}>
            Both paths end at the same place: a Florida-licensed closer assigned to your file. Pick whichever matches where you are right now.
          </p>
        </div>

        <div className={s.comparePair}>
          <article className={s.compareCard} data-tone="accent">
            <p className={`${s.compareLabel} ${s.compareLabelAccent}`}>Path A · Open a Safe Listing</p>
            <p className={s.cardBody}>
              Send us the property — we&rsquo;ll pre-clear title within 48 hours and you launch the listing knowing it&rsquo;s clean. The fastest way to use what you read here in a presentation this week.
            </p>
            <ul className={s.compareList}>
              <li className={s.compareStep}><span className={s.check} aria-hidden="true" /><span>Pre-clearance within 48 hours</span></li>
              <li className={s.compareStep}><span className={s.check} aria-hidden="true" /><span>Safe Listing&trade; Certified badge for the listing</span></li>
              <li className={s.compareStep}><span className={s.check} aria-hidden="true" /><span>$0 if the listing doesn&rsquo;t sell</span></li>
            </ul>
            <div className={s.heroCtaRow}>
              <a href="/submit-order" className={s.btnPrimary}>Submit Order</a>
            </div>
          </article>

          <article className={s.compareCard}>
            <p className={s.compareLabel}>Path B · Talk to a closer first</p>
            <p className={s.cardBody}>
              15 minutes on the phone with the team. We&rsquo;ll walk through your average pipeline and tell you straight if Safe Listing&trade; helps — or if a standard order is the better call.
            </p>
            <ul className={s.compareList}>
              <li className={s.compareStep}><span className={s.compareDotQuiet} aria-hidden="true" /><span>15-minute pipeline review</span></li>
              <li className={s.compareStep}><span className={s.compareDotQuiet} aria-hidden="true" /><span>Direct line to a licensed closer</span></li>
              <li className={s.compareStep}><span className={s.compareDotQuiet} aria-hidden="true" /><span>No order opened until you&rsquo;re ready</span></li>
            </ul>
            <div className={s.heroCtaRow}>
              <a href="/contact" className={s.btnGhost}>Schedule a call</a>
            </div>
          </article>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={s.section}>
        <div className={s.ctaBand}>
          <p className={s.ctaBandEyebrow}>Ready</p>
          <h2 className={s.ctaBandH2}>Bring Safe Listing&trade; into your next presentation.</h2>
          <div className={s.ctaBandRow}>
            <a href="/safe-listing" className={s.ctaBandBtn}>Read the program</a>
            <a href="/submit-order" className={s.ctaBandBtnGhost}>Submit a listing</a>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
