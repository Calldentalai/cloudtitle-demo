import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { ImageSlot } from "@/components/shared/ImageSlot";
import { copy } from "@/content/homepage-copy";

export const metadata = {
  title: "Safe Listing™ — Cloud Title",
  description:
    "Pre-clear title at listing — not at contract. Florida's first proactive title protection program for agents. Pay nothing if your listing doesn't sell.",
  robots: { index: false, follow: false },
};

export default function SafeListing() {
  const benefits = copy.safeListing.benefits;
  const included = copy.included.groups;
  const oldSteps = copy.howItWorks.oldWay.steps.slice(0, 4);
  const safeSteps = copy.howItWorks.safeWay.steps.slice(0, 4);

  return (
    <SubpageShell
      eyebrow="The program"
      h1="Safe Listing™ — title protection for your commission."
      sub="Pre-clear title at Day 1 of the listing. Discover and resolve issues before the first offer arrives — so your closings land on time and your listing presentations get sharper."
      primaryCta={{ label: copy.included.cta, href: "#start" }}
      secondaryCta={{ label: "Watch 2-minute demo", href: "#demo" }}
      heroImage={{
        src: "/assets/A1.png",
        alt: "Mid-century Sarasota School modernist home detail — concrete soffit meeting floor-to-ceiling glass under hard noon Florida light",
        caption: "Coastal architecture, Sarasota",
        prompt: "Architectural detail photograph of a mid-century Sarasota School modernist home in coastal Florida — concrete soffit and floor-to-ceiling glass meeting, hard noon light casting sharp diagonal shadows, slightly bleached high-key palette, no people, no foliage, no palms, no beach. Editorial magazine photography, Hasselblad medium format, f/8, natural daylight only.",
        ratio: "4/5",
      }}
      heroStats={[
        { label: "Pre-clearance window", value: "48 hours", accent: true },
        { label: "Closing time", value: "10 days", accent: true, foot: "vs. 30-day industry standard" },
        { label: "If listing doesn't sell", value: "$0", accent: true, foot: "we absorb the search cost" },
      ]}
    >
      {/* WHAT YOU GET — three-up numbered cards */}
      <section className={s.section} aria-labelledby="what-you-get">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>01 / Everything included</p>
          <h2 id="what-you-get" className={s.sectionH2}>Three workstreams. One Florida-licensed agency. Zero post-contract surprises.</h2>
          <p className={s.sectionLead}>
            Safe Listing&trade; isn&rsquo;t a single product — it&rsquo;s the full title and escrow apparatus shifted to the front of the deal. Here&rsquo;s what&rsquo;s included the moment you open the order.
          </p>
        </div>

        <div className={s.cardGrid} data-cols="3">
          {included.map((group, i) => (
            <article key={group.label} className={s.numberedCard} data-emphasis={i === 1 ? "accent" : undefined}>
              <p className={s.numberedIndex}>
                {String(i + 1).padStart(2, "0")}<small>{group.label}</small>
              </p>
              <ul className={s.bulletList}>
                {group.items.slice(0, 5).map((item) => (
                  <li key={item} className={s.bulletItem}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* WHY IT WORKS — benefits with check marks */}
      <section className={s.section} data-surface="sand" aria-labelledby="benefits">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>02 / The benefits</p>
          <h2 id="benefits" className={s.sectionH2}>Why Florida agents protect every listing this way.</h2>
        </div>
        <ul className={s.benefitGrid} data-cols="3">
          {benefits.map((b) => (
            <li key={b} className={s.benefitCard}>
              <span className={s.check} aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* HOW IT WORKS — old vs new comparison + supporting image */}
      <section className={s.section} aria-labelledby="how">
        <div className={s.sectionHead} data-align="split">
          <div>
            <p className={s.sectionIndex}>03 / How it works</p>
            <h2 id="how" className={s.sectionH2}>{copy.howItWorks.h2}</h2>
          </div>
          <p className={s.sectionLead}>
            The sequence changes everything. Pulling search at listing instead of contract resolves liens, satisfactions, and probate gaps before they ever see a buyer&rsquo;s lawyer.
          </p>
        </div>

        <div className={s.comparePair}>
          <article className={s.compareCard} data-tone="quiet">
            <p className={s.compareLabel}>{copy.howItWorks.oldWay.label}</p>
            <ul className={s.compareList}>
              {oldSteps.map((step) => (
                <li key={step} className={s.compareStep}>
                  <span className={s.compareDotQuiet} aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className={s.compareResult}>{copy.howItWorks.oldWay.result}</p>
          </article>

          <article className={s.compareCard} data-tone="accent">
            <p className={`${s.compareLabel} ${s.compareLabelAccent}`}>{copy.howItWorks.safeWay.label}</p>
            <ul className={s.compareList}>
              {safeSteps.map((step) => (
                <li key={step} className={s.compareStep}>
                  <span className={s.check} aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className={`${s.compareResult} ${s.compareResultAccent}`}>{copy.howItWorks.safeWay.result}</p>
          </article>
        </div>
      </section>

      {/* PRICING — two-up + supporting figure */}
      <section className={s.section} data-surface="bone" aria-labelledby="pricing">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>04 / How pricing works</p>
          <h2 id="pricing" className={s.sectionH2}>{copy.included.totalValue}</h2>
          <p className={s.sectionLead}>
            Two outcomes, two prices. Both rest on the same underwriter relationships — Fidelity National Title and First American Title.
          </p>
        </div>

        <div className={s.twoCol} data-ratio="40-60">
          <figure className={s.imagePlate}>
            <div className={s.imagePlateWrap}>
              <ImageSlot
                src="/assets/A2.png"
                alt="Aerial straight-down view of a Florida coastal causeway meeting the ocean — pure geometric line of white concrete and blue-grey water"
                ratio="4/5"
                tone="light"
                kind="supporting"
                caption="Causeway, Gulf Coast"
                prompt="Aerial straight-down photograph of a Florida coastal causeway and the geometric line where land meets ocean."
              />
            </div>
            <figcaption className={s.imagePlateCaption}>Causeway, Gulf Coast</figcaption>
          </figure>

          <div>
            <ul className={s.factStrip} data-cols="3" style={{ marginBottom: "1.5rem" }}>
              <li className={s.factCell}>
                <span className={s.factLabel}>Total value</span>
                <span className={s.factValue}>{copy.included.totalValue}</span>
              </li>
              <li className={s.factCell}>
                <span className={s.factLabel}>If it sells</span>
                <span className={s.factValue}>{copy.included.ifSells}</span>
              </li>
              <li className={s.factCell}>
                <span className={s.factLabel}>If it doesn&rsquo;t</span>
                <span className={s.factValue}>{copy.included.ifNotSells}</span>
              </li>
            </ul>
            <p className={s.prose}>
              <strong>If your listing sells,</strong> the standard policy and closing fees are absorbed in the closing settlement — no out-of-pocket cost to the agent.
              <br /><br />
              <strong>If your listing doesn&rsquo;t sell,</strong> Cloud Title absorbs the proactive search cost. You walk away clean.
            </p>
            <p className={s.intakeSupport} style={{ marginTop: "1.25rem" }}>
              Final pricing and program terms to be confirmed by Cloud Title — placeholder copy in this demo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={s.section} aria-labelledby="cta">
        <div className={s.ctaBand}>
          <p className={s.ctaBandEyebrow}>Begin</p>
          <h2 id="cta" className={s.ctaBandH2}>Open a Safe Listing&trade; before your next presentation.</h2>
          <div className={s.ctaBandRow}>
            <a href="/submit-order" className={s.ctaBandBtn}>Submit a listing</a>
            <a href="/contact" className={s.ctaBandBtnGhost}>Talk to a closer</a>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
