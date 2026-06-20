import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { copy } from "@/content/homepage-copy";

export const metadata = {
  title: "About — Cloud Title",
  description:
    "A Florida title agency built around AI-assisted pre-clearance. Licensed in all 67 counties, underwritten by Fidelity and First American.",
  robots: { index: false, follow: false },
};

const facts = [
  { label: "Founded in", value: "Florida" },
  { label: "Underwritten by", value: "Fidelity National Title & First American Title" },
  { label: "Coverage", value: "All 67 Florida counties" },
  { label: "Closed in 2025", value: "$127M+ — based on internal averages" },
];

export default function About() {
  return (
    <SubpageShell
      eyebrow="About Cloud Title"
      h1="A title agency built for how Florida agents actually work."
      sub="Cloud Title is a fully licensed Florida title and escrow agency. We combine AI-driven pre-clearance with a real closing team — title officers, escrow officers, and underwriting counsel — so deals land on time without the day-28 surprises."
    >
      <section className={s.section}>
        <div className={s.twoCol}>
          <div>
            <p className={s.sectionEyebrow}>Our point of view</p>
            <h2 className={s.sectionH2}>Title work should be done up front, not at the eleventh hour.</h2>
          </div>
          <div className={s.prose}>
            <p>
              The traditional title workflow asks agents to wait until contract before anyone looks at the chain of title. That timing made sense before software could parallelize record search. It doesn&rsquo;t make sense now.
            </p>
            <p>
              Cloud Title flips the sequence. We pull the search at <strong>listing</strong>, resolve issues before they&rsquo;re ever in front of a buyer, and stand behind the work with our own underwriter relationships.
            </p>
            <p>
              <em>Placeholder copy — final founder narrative and team bios pending from Thomas (see CONTENT-GAPS §4).</em>
            </p>
          </div>
        </div>
      </section>

      <section className={s.section} data-surface="sand">
        <p className={s.sectionEyebrow}>The facts</p>
        <h2 className={s.sectionH2}>Who we are, on paper.</h2>
        <div className={s.cardGrid} data-cols="3">
          {facts.map((f) => (
            <article key={f.label} className={s.card}>
              <p className={s.cardLabel}>{f.label}</p>
              <p className={s.cardBody}>{f.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <p className={s.sectionEyebrow}>The team</p>
        <h2 className={s.sectionH2}>People who close deals, not a marketing tagline.</h2>
        <p className={s.prose}>
          Team bios, photos, and roles go here. Pending from Thomas — at minimum we&rsquo;ll feature the founder, the lead title officer, and the lead escrow officer.
        </p>
        <div className={s.cardGrid} data-cols="3">
          {[1, 2, 3].map((i) => (
            <article key={i} className={s.card}>
              <p className={s.cardLabel}>Team member</p>
              <h3 className={s.cardTitle}>Name pending</h3>
              <p className={s.cardBody}>Role · short bio · what they own in the closing process.</p>
            </article>
          ))}
        </div>
      </section>

      <section className={s.section} data-surface="sand">
        <div className={s.notice}>
          <strong>Compliance:</strong> {copy.faq.items[1].a} Cloud Title is licensed by the Florida Office of Insurance Regulation. License number pending from Thomas (CONTENT-GAPS §6).
        </div>
      </section>
    </SubpageShell>
  );
}
