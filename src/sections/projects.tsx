"use client";

import Image from "next/image";
import { Container } from "@/components/layout";
import { MotionArticle, MotionSection } from "@/components/motion";
import { SectionHeading, Tag } from "@/components/ui";
import { useTranslations } from "@/i18n";

export function Projects() {
  const { t } = useTranslations();

  return (
    <MotionSection id="projects" className="section-divider scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.heading}
          description={t.projects.description}
        />
        <div className="mt-8 grid gap-5 sm:mt-10 lg:mt-12 lg:grid-cols-2">
          {t.projects.items.map((project) => (
            <MotionArticle
              className="glass-panel flex min-h-0 flex-col rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200/25 sm:p-7 lg:min-h-72"
              key={project.title}
            >
              {project.image ? (
                <div className="relative mb-5 overflow-hidden rounded-md border border-white/10 bg-white/[0.04] sm:mb-6">
                  <Image
                    alt={project.imageAlt ?? project.title}
                    className="aspect-video h-auto w-full object-cover"
                    placeholder="blur"
                    src={project.image}
                  />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 sm:mt-6">
                {project.liveDemoHref ? (
                  <a
                    aria-label={`${t.projects.liveDemoLabel}: ${project.title}`}
                    className="text-sm font-semibold text-accent transition hover:text-blue-200"
                    href={project.liveDemoHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t.projects.liveDemoLabel}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-muted">
                    {t.projects.noLiveDemoLabel}
                  </span>
                )}
                {project.githubHref ? (
                  <a
                    aria-label={`${t.projects.githubLabel}: ${project.title}`}
                    className="text-sm font-semibold text-accent transition hover:text-blue-200"
                    href={project.githubHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t.projects.githubLabel}
                  </a>
                ) : null}
              </div>
            </MotionArticle>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
