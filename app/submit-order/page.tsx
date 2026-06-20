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

export default function SubmitOrder() {
  return (
    <SubpageShell
      eyebrow="Open an order"
      h1="Submit a title order."
      sub="Two paths. Safe Listing™ pre-clears title at the moment you take the listing. Standard orders run after contract. Both confirmed within two business hours."
      hideStickyCta
    >
      <section className={s.section}>
        <p className={s.sectionEyebrow}>Pick the order type</p>
        <h2 className={s.sectionH2}>Safe Listing™ or standard post-contract.</h2>

        <div className={s.cardGrid}>
          <DemoForm className={s.intakeCard}>
            <p className={s.cardLabel}>Option 1 · Safe Listing™ (pre-contract)</p>
            <p className={s.cardBody}>
              We pre-clear title at Day 1. You launch the listing knowing it&rsquo;s clean.
              <br /><strong>$0 if the listing doesn&rsquo;t sell.</strong>
            </p>
            <div className={s.intakeFields}>
              {safeListingFields.map((f) => (
                <label key={f} className={s.field}>
                  <span>{f}</span>
                  <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                </label>
              ))}
            </div>
            <button type="submit" className={s.btnPrimary}>Submit Safe Listing</button>
          </DemoForm>

          <DemoForm className={s.intakeCard}>
            <p className={s.cardLabel}>Option 2 · Standard order (post-contract)</p>
            <p className={s.cardBody}>
              Contract already executed. We open the file, order the search, and issue commitment within 24 hours of receiving the executed contract.
            </p>
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

        <p className={s.intakeSupport} style={{ marginTop: "1.5rem" }}>
          Demo forms — do not submit. Real submission wires to GoHighLevel in the Divi build phase (CONTENT-GAPS §7).
        </p>
      </section>

      <section className={s.section} data-surface="sand">
        <div className={s.notice}>
          <strong>What happens next:</strong> We confirm receipt of your order by email and phone within two business hours.
          A title officer is assigned, the search is initiated, and you&rsquo;ll have a status update in our portal — placeholder for the Cloud Title file system — within 24 hours.
        </div>
      </section>
    </SubpageShell>
  );
}
