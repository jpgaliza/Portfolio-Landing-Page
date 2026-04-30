"use client";

import { Container } from "@/components/layout";
import { MotionCard, MotionLink, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { useTranslations } from "@/i18n";

export function Contact() {
  const { t } = useTranslations();

  return (
    <MotionSection id="contact" className="section-divider scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionCard className="glass-panel grid gap-8 rounded-lg p-5 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:gap-10 lg:p-10">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.heading}
            description={t.contact.body}
          />
          <div className="space-y-5 text-muted sm:space-y-6">
            <MotionLink
              className="block break-words text-xl font-semibold text-foreground transition hover:text-accent sm:text-2xl"
              href={`mailto:${t.contact.email}`}
            >
              {t.contact.email}
            </MotionLink>
            <div className="flex flex-wrap gap-3">
              {t.hero.socials.map((social) => (
                <MotionLink
                  aria-label={`${social.label} - João Pedro Galiza`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-muted transition hover:border-blue-200/25 hover:text-foreground"
                  href={social.href}
                  key={social.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {social.label}
                </MotionLink>
              ))}
            </div>
          </div>
        </MotionCard>
      </Container>
    </MotionSection>
  );
}
