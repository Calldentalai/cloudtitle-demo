import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";

export const metadata = {
  title: "Make an Escrow Deposit — Cloud Title",
  description:
    "Initiate an escrow deposit with Cloud Title. Wire instructions, ACH, or e-check — secure, attorney-verified, with same-day confirmation.",
  robots: { index: false, follow: false },
};

const fields = ["Property Address", "File / Order #", "Depositor Name", "Email", "Phone", "Amount"];

export default function MakeEscrowDeposit() {
  return (
    <SubpageShell
      eyebrow="Escrow"
      h1="Make an escrow deposit."
      sub="Initiate an earnest money or escrow deposit for a transaction with Cloud Title. We confirm receipt the same business day and post to the file."
      primaryCta={{ label: "Get wire instructions", href: "#wire" }}
      hideStickyCta
    >
      <section className={s.section}>
        <div className={s.twoCol}>
          <div>
            <p className={s.sectionEyebrow}>Three ways to deposit</p>
            <h2 className={s.sectionH2}>Choose the method your transaction supports.</h2>
            <div className={s.cardGrid}>
              <article className={s.card}>
                <p className={s.cardLabel}>1 · Wire transfer</p>
                <p className={s.cardBody}>
                  Most common. Bank-to-bank, same-day. Wire instructions are issued only after we&rsquo;ve verified the recipient with you by phone — never trust an emailed change in wire info without calling our office first.
                </p>
              </article>
              <article className={s.card}>
                <p className={s.cardLabel}>2 · ACH / e-check</p>
                <p className={s.cardBody}>
                  Smaller deposits and rush situations. Routed through our verified escrow platform — placeholder; integration confirmed with Thomas (see CONTENT-GAPS §7).
                </p>
              </article>
              <article className={s.card}>
                <p className={s.cardLabel}>3 · Certified check</p>
                <p className={s.cardBody}>
                  Drop-off or overnight to the Cloud Title office (address pending — CONTENT-GAPS §5). We confirm receipt by email and phone.
                </p>
              </article>
            </div>
          </div>

          <DemoForm className={s.intakeCard}>
            <p className={s.cardLabel}>Request wire instructions</p>
            <div className={s.intakeFields}>
              {fields.map((f) => (
                <label key={f} className={s.field}>
                  <span>{f}</span>
                  <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                </label>
              ))}
            </div>
            <button type="submit" className={s.btnPrimary}>Request instructions</button>
            <p className={s.intakeSupport}>
              Demo form — does not submit. Real wiring of this form to your escrow portal happens during the Divi build phase.
            </p>
          </DemoForm>
        </div>
      </section>

      <section className={s.section} data-surface="sand" id="wire">
        <div className={s.notice}>
          <strong>Wire fraud warning:</strong> Cloud Title will never send updated wire instructions by email or text. If you receive any message claiming our wire details have changed,
          <strong> stop, do not send funds, and call our office</strong> at the number you confirmed at the start of your transaction.
          Verify all wire details by voice before initiating any transfer.
        </div>
      </section>
    </SubpageShell>
  );
}
