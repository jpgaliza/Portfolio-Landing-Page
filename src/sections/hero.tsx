"use client";

import { Container } from "@/components/layout";
import { MotionCard, MotionLink, MotionSection } from "@/components/motion";
import { useTranslations } from "@/i18n";

export function Hero() {
  const { t } = useTranslations();

  return (
    <MotionSection
      id="hero"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-24 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-accent-line" />
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.26em]">
              {t.hero.location}
            </p>
            <h1 className="mt-5 max-w-4xl bg-gradient-to-br from-white via-blue-50 to-blue-300 bg-clip-text text-4xl font-semibold tracking-normal text-transparent min-[380px]:text-5xl sm:mt-6 sm:text-6xl lg:text-8xl">
              {t.hero.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-blue-100 sm:mt-6 sm:text-2xl lg:text-3xl">
              {t.hero.role}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              {t.hero.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-10 sm:gap-4">
              <MotionLink
                className="inline-flex justify-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgb(37_99_235_/_0.28)] sm:px-6"
                href="#projects"
              >
                {t.hero.primaryCta}
              </MotionLink>
              <MotionLink
                className="inline-flex justify-center rounded-md border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-bold text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-200/35 hover:bg-white/[0.07] sm:px-6"
                href="#contact"
              >
                {t.hero.secondaryCta}
              </MotionLink>
            </div>
          </div>
          <MotionCard className="glass-panel rounded-lg p-5 sm:p-7 lg:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200 sm:text-sm sm:tracking-[0.22em]">
              {t.hero.focusLabel}
            </h2>
            <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {t.hero.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="border-l border-blue-300/25 pl-4 text-sm leading-7 text-foreground sm:text-base"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </MotionCard>
        </div>
      </Container>
    </MotionSection>
  );
}
