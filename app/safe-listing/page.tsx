import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { copy } from "@/content/homepage-copy";

export const metadata = {
  title: "Safe Listing™ — Cloud Title",
  description:
    "Pre-clear title at listing — not at contract. Florida's first proactive title protection program for agents. Pay nothing if your listing doesn't sell.",
  robots: { index: false, follow: false },
};

/**
 * Subpage scaffold. Copy is placeholder + verbatim hero brief language.
 * Final copy comes from Thomas (see CONTENT-GAPS.md §4).
 */
export default function SafeListing() {
  const benefits = copy.safeListing.benefits;
  const included = copy.included.groups;

  return (
    <SubpageShell
      eyebrow="The program"
      h1="Safe Listing™ — title protection for your commission."
      sub="Pre-clear title at Day 1 of the listing. Discover and resolve issues before the first offer arrives — so your closings land on time and your listing presentations get sharper."
      primaryCta={{ label: copy.included.cta, href: "#start" }}
      secondaryCta={{ label: "Watch 2-minute demo", href: "#demo" }}
    >
      <section className={s.section}>
        <p className={s.sectionEyebrow}>What you get</p>
        <h2 className={s.sectionH2}>Everything in the Safe Listing™ program</h2>
        <div className={s.cardGrid} data-cols="3">
          {included.map((group) => (
            <article key={group.label} className={s.card}>
              <p className={s.cardLabel}>{group.label}</p>
              <ul className={s.bulletList}>
                {group.items.map((item) => (
                  <li key={item} className={s.bulletItem}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={s.section} data-surface="sand">
        <p className={s.sectionEyebrow}>The benefits</p>
        <h2 className={s.sectionH2}>Why Florida agents protect every listing this way</h2>
        <ul className={s.bulletList}>
          {benefits.map((b) => (
            <li key={b} className={s.bulletItem}>{b}</li>
          ))}
        </ul>
      </section>

      <section className={s.section}>
        <p className={s.sectionEyebrow}>How pricing works</p>
        <h2 className={s.sectionH2}>{copy.included.totalValue}</h2>
        <div className={s.cardGrid}>
          <article className={s.card}>
            <p className={s.cardLabel}>If your listing sells</p>
            <p className={s.cardBody}>{copy.included.ifSells}</p>
          </article>
          <article className={s.card}>
            <p className={s.cardLabel}>If it doesn&rsquo;t sell</p>
            <p className={s.cardBody}>{copy.included.ifNotSells} — we absorb the cost of the proactive title search.</p>
          </article>
        </div>
        <p className={s.intakeSupport} style={{ marginTop: "1.25rem" }}>
          Final pricing and program terms to be confirmed by Cloud Title — placeholder copy in this demo.
        </p>
      </section>
    </SubpageShell>
  );
}
