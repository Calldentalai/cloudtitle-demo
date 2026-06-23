import type { ReactNode } from "react";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { ConceptShell } from "@/components/shell/ConceptShell";
import { ImageSlot } from "@/components/shared/ImageSlot";
import s from "./subpage.module.css";

interface HeroImage {
  src: string;
  alt: string;
  caption: string;
  prompt: string;
  ratio?: string;
  tone?: "light" | "dark";
}

interface HeroStat {
  label: string;
  value: string;
  accent?: boolean;
  foot?: string;
}

interface SubpageShellProps {
  eyebrow: string;
  h1: string;
  sub: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Editorial hero plate — turns the type-only hero into an asymmetric
   * two-up composition with caption (mirrors the homepage hero). */
  heroImage?: HeroImage;
  /** Optional stat strip under the hero — mirrors the homepage service strip. */
  heroStats?: HeroStat[];
  children: ReactNode;
  /** Hide the floating Safe Listing sticky CTA on transactional pages
   * (Make Escrow Deposit, Submit Order, Contact) where it competes. */
  hideStickyCta?: boolean;
}

/**
 * Subpage shell — Editorial direction.
 *
 * Renders nav, hero, content, optional sticky CTA and footer wrapped in the
 * Concierge concept theme. Two hero modes:
 *   - type-only:   pass eyebrow/h1/sub only
 *   - editorial:   pass heroImage (+ optional heroStats) for the asymmetric
 *                  plate that visually matches the homepage.
 */
export function SubpageShell({
  eyebrow,
  h1,
  sub,
  primaryCta,
  secondaryCta,
  heroImage,
  heroStats,
  children,
  hideStickyCta = false,
}: SubpageShellProps) {
  const hasPlate = Boolean(heroImage);

  return (
    <ConceptShell slug="editorial">
      <Nav />
      <main id="main" className={s.main}>
        <section
          className={hasPlate ? s.heroPlate : s.hero}
          aria-labelledby="page-h1"
        >
          {hasPlate ? (
            <div className={s.heroPlateGrid}>
              <div className={s.heroPlateCopy}>
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
              </div>
              <figure className={s.heroImageFigure}>
                <div className={s.heroImageWrap}>
                  <ImageSlot
                    src={heroImage!.src}
                    alt={heroImage!.alt}
                    caption={heroImage!.caption}
                    prompt={heroImage!.prompt}
                    ratio={heroImage!.ratio ?? "4/5"}
                    tone={heroImage!.tone ?? "light"}
                    kind="hero"
                    priority
                  />
                </div>
                <figcaption className={s.heroImageCaption}>{heroImage!.caption}</figcaption>
              </figure>
            </div>
          ) : (
            <>
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
            </>
          )}

          {heroStats && heroStats.length > 0 && (
            <ul className={s.statStrip} aria-label="At a glance">
              {heroStats.map((stat) => (
                <li key={stat.label} className={s.statCell}>
                  <span className={s.statLabel}>{stat.label}</span>
                  <span className={stat.accent ? s.statValueAccent : s.statValue}>
                    {stat.value}
                  </span>
                  {stat.foot && <span className={s.statFoot}>{stat.foot}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>

        {children}
      </main>
      {!hideStickyCta && <StickyCTA />}
      <Footer />
    </ConceptShell>
  );
}

export { s as subpageStyles };
