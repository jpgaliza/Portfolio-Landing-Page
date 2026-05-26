"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/layout";
import { MotionCard, MotionLink, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/ui";
import { useTranslations } from "@/i18n";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const { t } = useTranslations();
  const [name, setName] = useState("");
  const [subjectLine, setSubjectLine] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      subjectLine.trim()
        ? subjectLine.trim()
        : name.trim()
          ? `Contato de ${name.trim()}`
          : "Contato pelo site",
    );
    const body = encodeURIComponent(
      [name.trim() ? `Nome: ${name.trim()}` : null, "", message.trim()]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${subject}&body=${body}&tf=1`;
  }

  return (
    <MotionSection
      id="contact"
      className="section-divider scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionCard className="glass-panel grid gap-8 rounded-lg p-5 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-10">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.heading}
            description={t.contact.body}
          />
          <div className="space-y-5 sm:space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-muted">
                  {t.contact.form.nameLabel}
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition focus:border-accent/50 focus:bg-white/[0.06]"
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-muted">
                  {t.contact.form.subjectLabel}
                </span>
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition focus:border-accent/50 focus:bg-white/[0.06]"
                  name="subject"
                  placeholder={t.contact.form.subjectPlaceholder}
                  value={subjectLine}
                  onChange={(event) => setSubjectLine(event.target.value)}
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-muted">
                  {t.contact.form.messageLabel}
                </span>
                <textarea
                  className="min-h-40 w-full resize-y rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground placeholder:text-muted/70 outline-none transition focus:border-accent/50 focus:bg-white/[0.06]"
                  name="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </label>

              <button
                className="inline-flex w-full items-center justify-center rounded-full border border-blue-200/20 bg-gradient-to-r from-blue-300/20 via-cyan-300/25 to-blue-200/20 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-blue-200/35 hover:from-blue-300/30 hover:via-cyan-300/35 hover:to-blue-200/25 sm:w-auto"
                type="submit"
              >
                {t.contact.form.buttonLabel}
              </button>
            </form>

            <p className="text-sm leading-6 text-muted">
              {t.contact.form.helperText}
            </p>
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
