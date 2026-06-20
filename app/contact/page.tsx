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

export default function Contact() {
  return (
    <SubpageShell
      eyebrow="Contact"
      h1="Talk to the closing team."
      sub="Phone is fastest during business hours. Outside those, email or the form below — we respond within one business day."
      hideStickyCta
    >
      <section className={s.section}>
        <div className={s.contactRow}>
          <div className={s.contactCell}>
            <span className={s.contactLabel}>Phone</span>
            <span className={s.contactValue}>(XXX) XXX-XXXX <em style={{ opacity: 0.5 }}>· pending</em></span>
          </div>
          <div className={s.contactCell}>
            <span className={s.contactLabel}>Email</span>
            <span className={s.contactValue}>hello@cloudtitle.com <em style={{ opacity: 0.5 }}>· confirm</em></span>
          </div>
          <div className={s.contactCell}>
            <span className={s.contactLabel}>Hours</span>
            <span className={s.contactValue}>Mon–Fri · 9:00–6:00 ET <em style={{ opacity: 0.5 }}>· confirm</em></span>
          </div>
        </div>

        <div className={s.contactRow}>
          <div className={s.contactCell}>
            <span className={s.contactLabel}>Office</span>
            <span className={s.contactValue}>Street address pending · Florida</span>
          </div>
          <div className={s.contactCell}>
            <span className={s.contactLabel}>License</span>
            <span className={s.contactValue}>FL OIR license # pending</span>
          </div>
          <div className={s.contactCell}>
            <span className={s.contactLabel}>Coverage</span>
            <span className={s.contactValue}>All 67 Florida counties</span>
          </div>
        </div>
      </section>

      <section className={s.section} data-surface="sand">
        <div className={s.twoCol}>
          <div>
            <p className={s.sectionEyebrow}>Send a message</p>
            <h2 className={s.sectionH2}>For everything that isn&rsquo;t an open file.</h2>
            <p className={s.prose}>
              If you already have an open file with us, please call your closing officer directly or email them — they&rsquo;re fastest on file-specific questions.
              <br /><br />
              For new agent inquiries, partnership conversations, press, or anything else — drop us a note and we&rsquo;ll route you to the right person.
            </p>
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
