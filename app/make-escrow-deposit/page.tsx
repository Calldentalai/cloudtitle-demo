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

const methods = [
  {
    label: "Wire transfer",
    title: "Bank-to-bank, same-day settlement.",
    body: "Most common for earnest money and full deposits. Wire instructions are issued only after we&rsquo;ve verified the recipient with you by phone.",
    foot: "Never trust an emailed change in wire info without calling our office first.",
  },
  {
    label: "ACH / e-check",
    title: "Smaller deposits and rush situations.",
    body: "Routed through our verified escrow platform. Slower to clear than a wire — plan 1–2 business days for funds to be available.",
    foot: "Platform integration confirmed with Thomas (CONTENT-GAPS §7).",
  },
  {
    label: "Certified check",
    title: "Drop-off or overnight delivery.",
    body: "We confirm physical receipt by email and phone the same business day the check lands at our office.",
    foot: "Office address pending — CONTENT-GAPS §5.",
  },
];

export default function MakeEscrowDeposit() {
  return (
    <SubpageShell
      eyebrow="Escrow utility"
      h1="Make an escrow deposit."
      sub="Initiate an earnest money or escrow deposit for a transaction with Cloud Title. We confirm receipt the same business day and post to the file."
      primaryCta={{ label: "Get wire instructions", href: "#wire" }}
      hideStickyCta
      heroStats={[
        { label: "Receipt confirmation", value: "Same day", accent: true, foot: "by email and phone" },
        { label: "Posted to file", value: "Under 24 hrs", accent: true, foot: "with the assigned closer" },
        { label: "Wire fraud rate", value: "0 incidents", accent: true, foot: "voice verification required" },
      ]}
    >
      {/* WIRE FRAUD ALERT — pinned at the top because it is the single
          most important thing on this page. */}
      <section className={s.section} aria-labelledby="alert">
        <div className={s.notice} data-tone="alert">
          <strong id="alert">Wire fraud warning — read before initiating any transfer.</strong>
          <span>
            Cloud Title will <strong>never</strong> send updated wire instructions by email or text. If you receive any message claiming our wire details have changed,
            <strong> stop, do not send funds, and call our office</strong> at the number you confirmed at the start of your transaction.
          </span>
          <span>Verify all wire details by voice before initiating any transfer.</span>
        </div>
      </section>

      {/* THREE METHODS — numbered cards */}
      <section className={s.section} data-surface="sand" aria-labelledby="methods">
        <div className={s.sectionHead} data-align="split">
          <div>
            <p className={s.sectionIndex}>01 / Deposit methods</p>
            <h2 id="methods" className={s.sectionH2}>Three ways to deposit. One escrow account.</h2>
          </div>
          <p className={s.sectionLead}>
            Pick the method your transaction supports. All three settle into the same Cloud Title escrow account, and all three get the same same-day confirmation.
          </p>
        </div>

        <div className={s.cardGrid} data-cols="3">
          {methods.map((m, i) => (
            <article key={m.label} className={s.numberedCard} data-emphasis={i === 0 ? "accent" : undefined}>
              <p className={s.numberedIndex}>
                {String(i + 1).padStart(2, "0")}<small>{m.label}</small>
              </p>
              <h3 className={s.cardTitle}>{m.title}</h3>
              <p className={s.cardBody} dangerouslySetInnerHTML={{ __html: m.body }} />
              <p className={s.intakeSupport}>{m.foot}</p>
            </article>
          ))}
        </div>
      </section>

      {/* REQUEST WIRE INSTRUCTIONS — intake form */}
      <section className={s.section} id="wire" aria-labelledby="request">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>02 / Request wire instructions</p>
          <h2 id="request" className={s.sectionH2}>Send us the deposit details. We&rsquo;ll call you to verify.</h2>
          <p className={s.sectionLead}>
            Submit the file information below. A licensed escrow officer will call the depositor at the number provided, confirm the file, and issue verified wire instructions during that call.
          </p>
        </div>

        <div className={s.twoCol} data-ratio="40-60">
          <div>
            <ul className={s.bulletList}>
              <li className={s.bulletItem}><strong>You submit:</strong> the property address, file number, depositor identity, and amount.</li>
              <li className={s.bulletItem}><strong>We call:</strong> the depositor at the phone provided — never a different number.</li>
              <li className={s.bulletItem}><strong>We issue:</strong> wire instructions during that verification call, in writing only after voice confirmation.</li>
              <li className={s.bulletItem}><strong>You wire:</strong> from your bank, with the verified instructions. We confirm receipt the same business day.</li>
            </ul>
          </div>

          <DemoForm className={s.intakeCard}>
            <p className={s.cardLabel}>File details</p>
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
              Demo form — does not submit. Real wiring to your escrow portal happens during the Divi build phase.
            </p>
          </DemoForm>
        </div>
      </section>
    </SubpageShell>
  );
}
