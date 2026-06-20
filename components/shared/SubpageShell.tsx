import type { ReactNode } from "react";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import s from "./subpage.module.css";

interface SubpageShellProps {
  eyebrow: string;
  h1: string;
  sub: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children: ReactNode;
  /** Hide the floating Safe Listing sticky CTA on transactional pages
   * (Make Escrow Deposit, Submit Order, Contact) where it competes. */
  hideStickyCta?: boolean;
}

/**
 * Subpage shell — Editorial direction.
 *
 * Use on every interior page so nav, footer, hero band, and content
 * surfaces stay visually consistent with the homepage system.
 */
export function SubpageShell({
  eyebrow,
  h1,
  sub,
  primaryCta,
  secondaryCta,
  children,
  hideStickyCta = false,
}: SubpageShellProps) {
  return (
    <>
      <Nav />
      <main id="main" className={s.main}>
        <section className={s.hero} aria-labelledby="page-h1">
          <p className={s.heroEyebrow}>{eyebrow}</p>
          <h1 id="page-h1" className={s.heroH1}>{h1}</h1>
          <p className={s.heroSub}>{sub}</p>
          {(primaryCta || secondaryCta) && (
            <div className={s.heroCtaRow}>
              {primaryCta && (
                <a href={primaryCta.href} className={s.btnPrimary}>{primaryCta.label}</a>
              )}
              {secondaryCta && (
                <a href={secondaryCta.href} className={s.btnGhost}>{secondaryCta.label}</a>
              )}
            </div>
          )}
        </section>

        {children}
      </main>
      {!hideStickyCta && <StickyCTA />}
      <Footer />
    </>
  );
}

export { s as subpageStyles };
