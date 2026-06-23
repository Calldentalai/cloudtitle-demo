import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";

export const metadata = {
  title: "Submit Order — Cloud Title",
  description:
    "Submit a new title order to Cloud Title — Safe Listing™ pre-clearance or a standard post-contract order. We confirm within 2 business hours.",
  robots: { index: false, follow: false },
};

const safeListingFields = ["Property Address", "MLS # (optional)", "Listing Agent Name", "Brokerage", "Email", "Phone"];
const standardFields = ["Property Address", "Closing Date", "Buyer Name", "Seller Name", "Listing Agent / Buyer's Agent", "Email", "Phone"];

const nextSteps = [
  { label: "Within 2 hours", title: "Order confirmed.", body: "Email + phone confirmation. A title officer is named on the file." },
  { label: "Within 24 hours", title: "Search initiated.", body: "Status update visible in the file portal — placeholder for the Cloud Title file system." },
  { label: "Within 48 hours", title: "Pre-clearance report.", body: "Liens, satisfactions, probate gaps — all surfaced before the listing goes live." },
];

export default function SubmitOrder() {
  return (
    <SubpageShell
      eyebrow="Open an order"
      h1="Submit a title order."
      sub="Two paths. Safe Listing™ pre-clears title at the moment you take the listing. Standard orders run after contract. Both confirmed within two business hours."
      hideStickyCta
      heroStats={[
        { label: "Confirmation", value: "2 business hrs", accent: true, foot: "email + phone" },
        { label: "Search initiated", value: "Within 24 hrs", accent: true, foot: "of receiving the order" },
        { label: "Pre-clearance report", value: "Within 48 hrs", accent: true, foot: "Safe Listing™ orders" },
      ]}
    >
      {/* TWO PATHS — comparison pair with intake forms */}
      <section className={s.section} aria-labelledby="paths">
        <div className={s.sectionHead} data-align="split">
          <div>
            <p className={s.sectionIndex}>01 / Pick the order type</p>
            <h2 id="paths" className={s.sectionH2}>Safe Listing™ or standard post-contract.</h2>
          </div>
          <p className={s.sectionLead}>
            If you have a listing but no contract yet, Safe Listing&trade; pre-clears at Day 1 and costs nothing if it doesn&rsquo;t sell. If the contract is already executed, the standard order opens the file immediately.
          </p>
        </div>

        <div className={s.comparePair}>
          <DemoForm className={`${s.compareCard} ${s.intakeCard}`} data-tone="accent">
            <p className={`${s.compareLabel} ${s.compareLabelAccent}`}>Option 1 · Safe Listing&trade; (pre-contract)</p>
            <p className={s.cardBody}>
              We pre-clear title at Day 1. You launch the listing knowing it&rsquo;s clean.
              <br /><strong>$0 if the listing doesn&rsquo;t sell.</strong>
            </p>
            <ul className={s.compareList}>
              <li className={s.compareStep}><span className={s.check} aria-hidden="true" /><span>48-hour pre-clearance report</span></li>
              <li className={s.compareStep}><span className={s.check} aria-hidden="true" /><span>Safe Listing&trade; Certified badge</span></li>
              <li className={s.compareStep}><span className={s.check} aria-hidden="true" /><span>$0 if the listing doesn&rsquo;t sell</span></li>
            </ul>
            <div className={s.intakeFields}>
              {safeListingFields.map((f) => (
                <label key={f} className={s.field}>
                  <span>{f}</span>
                  <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                </label>
              ))}
            </div>
            <button type="submit" className={s.btnPrimary}>Submit Safe Listing&trade;</button>
          </DemoForm>

          <DemoForm className={`${s.compareCard} ${s.intakeCard}`}>
            <p className={s.compareLabel}>Option 2 · Standard order (post-contract)</p>
            <p className={s.cardBody}>
              Contract already executed. We open the file, order the search, and issue commitment within 24 hours of receiving the executed contract.
            </p>
            <ul className={s.compareList}>
              <li className={s.compareStep}><span className={s.compareDotQuiet} aria-hidden="true" /><span>Commitment within 24 hours</span></li>
              <li className={s.compareStep}><span className={s.compareDotQuiet} aria-hidden="true" /><span>Closing-day attendance included</span></li>
              <li className={s.compareStep}><span className={s.compareDotQuiet} aria-hidden="true" /><span>Underwritten by Fidelity or First American</span></li>
            </ul>
            <div className={s.intakeFields}>
              {standardFields.map((f) => (
                <label key={f} className={s.field}>
                  <span>{f}</span>
                  <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                </label>
              ))}
            </div>
            <button type="submit" className={s.btnGhost}>Submit standard order</button>
          </DemoForm>
        </div>

        <p className={s.intakeSupport} style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Demo forms — do not submit. Real submission wires to GoHighLevel in the Divi build phase (CONTENT-GAPS §7).
        </p>
      </section>

      {/* WHAT HAPPENS NEXT — numbered timeline */}
      <section className={s.section} data-surface="sand" aria-labelledby="next">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>02 / What happens next</p>
          <h2 id="next" className={s.sectionH2}>From submit to pre-clearance, in three confirmed checkpoints.</h2>
        </div>

        <div className={s.cardGrid} data-cols="3">
          {nextSteps.map((step, i) => (
            <article key={step.label} className={s.numberedCard} data-emphasis={i === 0 ? "accent" : undefined}>
              <p className={s.numberedIndex}>
                {String(i + 1).padStart(2, "0")}<small>{step.label}</small>
              </p>
              <h3 className={s.cardTitle}>{step.title}</h3>
              <p className={s.cardBody}>{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
