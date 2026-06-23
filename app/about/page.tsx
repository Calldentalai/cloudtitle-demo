import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { ImageSlot } from "@/components/shared/ImageSlot";
import { copy } from "@/content/homepage-copy";

export const metadata = {
  title: "About — Cloud Title",
  description:
    "A Florida title agency built around AI-assisted pre-clearance. Licensed in all 67 counties, underwritten by Fidelity and First American.",
  robots: { index: false, follow: false },
};

const facts = [
  { label: "Founded in", value: "Florida" },
  { label: "Underwritten by", value: "Fidelity National Title · First American Title" },
  { label: "Coverage", value: "All 67 Florida counties" },
  { label: "Closed in 2025", value: "$127M+ — based on internal averages" },
];

const team = [
  { role: "Founder & principal", name: "Name pending", bio: "Sets the program, signs the policies, owns the underwriter relationships." },
  { role: "Lead title officer", name: "Name pending", bio: "Runs every search, every commitment, every cure. The deepest Florida county knowledge in the room." },
  { role: "Lead escrow officer", name: "Name pending", bio: "Owns the closing table. Wire safety, settlement statements, and the moment funds move." },
];

export default function About() {
  return (
    <SubpageShell
      eyebrow="About Cloud Title"
      h1="A title agency built for how Florida agents actually work."
      sub="Cloud Title is a fully licensed Florida title and escrow agency. We combine AI-driven pre-clearance with a real closing team — title officers, escrow officers, and underwriting counsel — so deals land on time without the day-28 surprises."
      heroImage={{
        src: "/assets/A3.png",
        alt: "Three Florida title professionals inside a modern glass-fronted Tampa office — environmental portrait, mid-morning sidelight",
        caption: "The team, Tampa office",
        prompt: "Editorial environmental portrait of a small Florida title agency team of 3 in a modern Tampa office.",
        ratio: "4/5",
      }}
      heroStats={[
        { label: "Closed in 2025", value: "$127M+", accent: true, foot: "based on internal averages" },
        { label: "Counties licensed", value: "67 / 67", accent: true, foot: "every Florida county" },
        { label: "Underwriters", value: "2 majors", accent: true, foot: "Fidelity & First American" },
      ]}
    >
      {/* POINT OF VIEW — narrative + pull quote */}
      <section className={s.section}>
        <div className={s.sectionHead} data-align="split">
          <div>
            <p className={s.sectionIndex}>01 / Our point of view</p>
            <h2 className={s.sectionH2}>Title work should be done up front — not at the eleventh hour.</h2>
          </div>
          <p className={s.sectionLead}>
            The traditional title workflow asks agents to wait until contract before anyone looks at the chain of title. That timing made sense before software could parallelize record search. It doesn&rsquo;t make sense now.
          </p>
        </div>

        <div className={s.twoCol} data-ratio="40-60">
          <figure className={s.imagePlate}>
            <div className={s.imagePlateWrap}>
              <ImageSlot
                src="/assets/A1.png"
                alt="Mid-century Sarasota School modernist home detail"
                ratio="4/5"
                tone="light"
                kind="supporting"
                caption="Sarasota architecture"
                prompt="Architectural detail of a mid-century Sarasota modernist home."
              />
            </div>
            <figcaption className={s.imagePlateCaption}>Built on Florida ground</figcaption>
          </figure>

          <div className={s.prose}>
            <p>
              Cloud Title flips the sequence. We pull the search at <strong>listing</strong>, resolve issues before they&rsquo;re ever in front of a buyer, and stand behind the work with our own underwriter relationships.
            </p>
            <p>
              We&rsquo;re not a software vendor pretending to be a title company. We&rsquo;re a Florida-licensed title agency that built better software because the closings demanded it.
            </p>
            <blockquote className={s.pullQuote}>
              The day-28 title surprise is a workflow problem, not a market reality.
            </blockquote>
            <p style={{ marginTop: "1.5rem" }}>
              <em>Placeholder copy — final founder narrative pending from Thomas (see CONTENT-GAPS §4).</em>
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS — fact strip */}
      <section className={s.section} data-surface="sand">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>02 / On paper</p>
          <h2 className={s.sectionH2}>Who we are, in four facts.</h2>
        </div>
        <ul className={s.factStrip} data-cols="4">
          {facts.map((f) => (
            <li key={f.label} className={s.factCell}>
              <span className={s.factLabel}>{f.label}</span>
              <span className={s.factValue}>{f.value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* TEAM — numbered cards w/ portrait placeholders */}
      <section className={s.section}>
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>03 / The team</p>
          <h2 className={s.sectionH2}>People who close deals — not a marketing tagline.</h2>
          <p className={s.sectionLead}>
            Team bios, photos, and roles pending from Thomas. At minimum we&rsquo;ll feature the founder, the lead title officer, and the lead escrow officer.
          </p>
        </div>

        <div className={s.cardGrid} data-cols="3">
          {team.map((m, i) => (
            <article key={m.role} className={s.card}>
              <p className={s.numberedIndex} style={{ fontSize: "1.5rem" }}>
                {String(i + 1).padStart(2, "0")}<small>{m.role}</small>
              </p>
              <h3 className={s.cardTitle}>{m.name}</h3>
              <p className={s.cardBody}>{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMPLIANCE — disclosure */}
      <section className={s.section} data-surface="bone">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>04 / Compliance</p>
          <h2 className={s.sectionH2}>Licensed, bonded, and regulated.</h2>
        </div>
        <div className={s.notice} data-tone="alert">
          <strong>Florida Office of Insurance Regulation.</strong>
          <span>{copy.faq.items[1].a}</span>
          <span>Cloud Title is licensed by the Florida OIR. License number pending from Thomas (CONTENT-GAPS §6).</span>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={s.section}>
        <div className={s.ctaBand}>
          <p className={s.ctaBandEyebrow}>Work with us</p>
          <h2 className={s.ctaBandH2}>The team behind every Safe Listing&trade; closing.</h2>
          <div className={s.ctaBandRow}>
            <a href="/safe-listing" className={s.ctaBandBtn}>How the program works</a>
            <a href="/contact" className={s.ctaBandBtnGhost}>Talk to the team</a>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
