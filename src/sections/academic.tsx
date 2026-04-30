"use client";

import { Container } from "@/components/layout";
import { MotionArticle, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { useTranslations } from "@/i18n";

export function Academic() {
  const { t } = useTranslations();

  return (
    <MotionSection id="academic" className="section-divider scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.academic.eyebrow}
          title={t.academic.heading}
          description={t.academic.description}
        />
        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5 lg:mt-12">
          {t.academic.items.map((item) => (
            <MotionArticle
              className="glass-panel rounded-lg p-5 transition duration-200 hover:border-blue-200/25 sm:p-7 lg:p-8"
              key={`${item.degree}-${item.institution}`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-sm text-muted sm:text-base">
                    {item.institution}
                  </p>
                </div>
                <p className="w-fit rounded-full border border-blue-300/15 bg-blue-300/[0.06] px-3 py-1 text-xs font-semibold text-accent sm:text-sm">
                  {item.period}
                </p>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </MotionArticle>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
