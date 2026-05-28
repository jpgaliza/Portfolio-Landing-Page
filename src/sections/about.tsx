"use client";

import { Container } from "@/components/layout";
import { MotionCard, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { useTranslations } from "@/i18n";

export function About() {
  const { t } = useTranslations();

  return (
    <MotionSection
      id="about"
      className="section-divider scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.heading} />
          <MotionCard className="glass-panel space-y-5 rounded-lg p-5 text-base leading-8 text-muted sm:p-7 sm:text-lg sm:leading-9 lg:p-8 text-justify">
            {t.about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </MotionCard>
        </div>
      </Container>
    </MotionSection>
  );
}
