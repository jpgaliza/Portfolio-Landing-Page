"use client";

import { Container } from "@/components/layout";
import { MotionCard, MotionSection } from "@/components/motion";
import { SectionHeading, Tag } from "@/components/ui";
import { useTranslations } from "@/i18n";

export function Skills() {
  const { t } = useTranslations();

  return (
    <MotionSection id="skills" className="section-divider scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.heading}
          description={t.skills.description}
        />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {t.skills.groups.map((group) => (
            <MotionCard
              className="glass-panel rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200/25 sm:p-6"
              key={group.title}
            >
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
