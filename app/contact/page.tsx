import { SubpageShell, subpageStyles as s } from "@/components/shared/SubpageShell";
import { DemoForm } from "@/components/shared/DemoForm";
import { fieldAttrs } from "@/components/shared/formFields";

export const metadata = {
  title: "Contact — Cloud Title",
  description:
    "Reach Cloud Title. Phone, email, office address, and a direct message form. Florida-licensed title and escrow agency.",
  robots: { index: false, follow: false },
};

const contactFields = ["Your Name", "Email", "Phone", "Reason for inquiry", "Message"];

const primary = [
  { label: "Phone", value: "(XXX) XXX-XXXX", note: "pending" },
  { label: "Email", value: "hello@cloudtitle.com", note: "confirm" },
  { label: "Hours", value: "Mon–Fri · 9:00–6:00 ET", note: "confirm" },
];

const secondary = [
  { label: "Office", value: "Street address pending · Florida", note: "" },
  { label: "License", value: "FL OIR license # pending", note: "" },
  { label: "Coverage", value: "All 67 Florida counties", note: "" },
];

export default function Contact() {
  return (
    <SubpageShell
      eyebrow="Contact"
      h1="Talk to the closing team."
      sub="Phone is fastest during business hours. Outside those, email or the form below — we respond within one business day."
      hideStickyCta
      primaryCta={{ label: "Open a Safe Listing™", href: "/submit-order" }}
      secondaryCta={{ label: "Read the program", href: "/safe-listing" }}
      heroStats={[
        { label: "First response", value: "Same business day", accent: true, foot: "for new inquiries" },
        { label: "Escalation", value: "Direct to a closer", accent: true, foot: "for open files — call your officer" },
        { label: "Hours", value: "9–6 ET", accent: true, foot: "Mon–Fri · confirm pending" },
      ]}
    >
      {/* DIRECT CHANNELS — fact strip */}
      <section className={s.section} aria-labelledby="channels">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>01 / Direct channels</p>
          <h2 id="channels" className={s.sectionH2}>Phone first. Email second. Form last.</h2>
          <p className={s.sectionLead}>
            If you have an open file with us, call your assigned closer directly — they&rsquo;re fastest on anything file-specific. For everything else, use one of these.
          </p>
        </div>

        <ul className={s.factStrip} data-cols="3" style={{ marginBottom: "1.25rem" }}>
          {primary.map((c) => (
            <li key={c.label} className={s.factCell}>
              <span className={s.factLabel}>{c.label}</span>
              <span className={s.factValue}>
                {c.value} {c.note && <em style={{ fontStyle: "normal", color: "var(--color-ink-muted)", fontSize: "var(--text-xs)" }}>· {c.note}</em>}
              </span>
            </li>
          ))}
        </ul>
        <ul className={s.factStrip} data-cols="3">
          {secondary.map((c) => (
            <li key={c.label} className={s.factCell}>
              <span className={s.factLabel}>{c.label}</span>
              <span className={s.factValue}>{c.value}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SEND A MESSAGE — split prose + form */}
      <section className={s.section} data-surface="sand" aria-labelledby="message">
        <div className={s.sectionHead}>
          <p className={s.sectionIndex}>02 / Send a message</p>
          <h2 id="message" className={s.sectionH2}>For everything that isn&rsquo;t an open file.</h2>
        </div>

        <div className={s.twoCol} data-ratio="40-60">
          <div className={s.prose}>
            <p>
              <strong>New agent inquiry?</strong> Tell us the brokerage and your average listing volume — we&rsquo;ll send back a Florida-specific Safe Listing&trade; brief.
            </p>
            <p>
              <strong>Partnership conversation?</strong> Underwriters, county recorders, escrow platform integrators — note the partnership type in the form and we&rsquo;ll route to Thomas directly.
            </p>
            <p>
              <strong>Press or general?</strong> We&rsquo;ll triage and route within one business day.
            </p>
            <blockquote className={s.pullQuote}>
              Call us before you call a competitor. We&rsquo;d rather lose a deal cleanly than fix a closing surprise.
            </blockquote>
          </div>

          <DemoForm className={s.intakeCard}>
            <p className={s.cardLabel}>Direct message</p>
            <div className={s.intakeFields}>
              {contactFields.map((f) => (
                <label key={f} className={s.field}>
                  <span>{f}</span>
                  {f === "Message" ? (
                    <textarea name="message" placeholder={f} aria-label={f} rows={5} />
                  ) : (
                    <input {...fieldAttrs(f)} placeholder={f} aria-label={f} />
                  )}
                </label>
              ))}
            </div>
            <button type="submit" className={s.btnPrimary}>Send message</button>
            <p className={s.intakeSupport}>
              Demo form — does not submit. Wires to GoHighLevel in the Divi build phase.
            </p>
          </DemoForm>
        </div>
      </section>
    </SubpageShell>
  );
}
