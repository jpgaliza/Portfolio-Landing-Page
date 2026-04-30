"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "@/i18n";
import { siteConfig } from "@/lib/site";
import { Container } from "./container";

type FlagIconProps = {
  locale: "en" | "pt";
};

function FlagIcon({ locale }: FlagIconProps) {
  if (locale === "pt") {
    return (
      <svg
        aria-hidden="true"
        className="h-3.5 w-5 shrink-0"
        fill="none"
        viewBox="0 0 24 16"
      >
        <rect
          className="opacity-35"
          height="15"
          rx="1.5"
          stroke="currentColor"
          width="23"
          x="0.5"
          y="0.5"
        />
        <path
          d="M12 3.1 20 8l-8 4.9L4 8l8-4.9Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
        <circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 16"
    >
      <rect
        className="opacity-35"
        height="15"
        rx="1.5"
        stroke="currentColor"
        width="23"
        x="0.5"
        y="0.5"
      />
      <path d="M1 4.5h22M1 8h22M1 11.5h22" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 1h9v7H1V1Z" fill="currentColor" opacity="0.75" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18A10.93 10.93 0 0 1 12 6.07c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.79 1.07.79 2.16v3.14c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5ZM.36 8.02h4.28V23H.36V8.02Zm7.17 0h4.1v2.05h.06c.57-1.08 1.96-2.22 4.04-2.22 4.32 0 5.12 2.84 5.12 6.54V23h-4.27v-7.64c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V23H7.53V8.02Z" />
    </svg>
  );
}

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { locale, t, toggleLocale } = useTranslations();
  const currentLocale = locale === "en" ? "EN" : "PT";

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 24) {
      setHidden(false);
      return;
    }

    setHidden(latest > previous);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%", opacity: hidden ? 0.88 : 1 }}
      className="sticky top-0 z-20 border-b border-white/10 bg-background/70 shadow-[0_1px_0_rgb(255_255_255_/_0.04)] backdrop-blur-2xl"
      initial={false}
      onFocusCapture={() => setHidden(false)}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-x-4 gap-y-3 py-3 sm:min-h-20 sm:flex-nowrap sm:py-0">
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#hero"
            className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-xs font-bold tracking-[0.22em] text-transparent sm:text-sm"
          >
            {t.meta.portfolioLabel}
          </a>
          <div className="flex items-center gap-1.5 text-blue-100/80">
            <a
              aria-label="GitHub - Joao Pedro Galiza"
              className="rounded-md p-1.5 transition duration-200 hover:text-blue-200"
              href={siteConfig.github}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              aria-label="LinkedIn - Joao Pedro Galiza"
              className="rounded-md p-1.5 transition duration-200 hover:text-blue-200"
              href={siteConfig.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <nav
            aria-label={locale === "pt" ? "Navegação principal" : "Primary navigation"}
            className="max-w-[calc(100vw-7rem)] overflow-x-auto sm:max-w-none sm:overflow-visible"
          >
            <ul className="flex w-max items-center justify-end gap-1 text-xs text-muted sm:grid sm:w-[32rem] sm:grid-cols-6 sm:gap-0 sm:text-sm lg:w-[38rem]">
              {t.navigation.map((item) => (
                <li
                  className="relative min-w-0 before:hidden before:absolute before:left-0 before:top-1/2 before:h-4 before:w-px before:-translate-y-1/2 before:bg-white/10 sm:before:block sm:first:before:hidden"
                  key={item.href}
                >
                  <a
                    className="relative block px-2.5 py-2 text-center transition duration-200 after:absolute after:bottom-1 after:left-2.5 after:h-px after:w-[calc(100%-1.25rem)] after:origin-right after:scale-x-0 after:bg-blue-300 after:transition-transform after:duration-300 after:ease-out hover:text-foreground hover:after:scale-x-100 focus-visible:after:scale-x-100 sm:px-1 sm:after:left-1/2 sm:after:w-10 sm:after:-translate-x-1/2 lg:after:w-12"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            aria-label={t.meta.languageToggleLabel}
            aria-live="polite"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-blue-300/20 bg-blue-300/[0.07] px-3 py-2 text-xs font-bold text-blue-100 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] transition duration-200 hover:border-blue-200/35 hover:bg-blue-300/[0.12] sm:text-sm"
            onClick={toggleLocale}
            title={t.meta.languageToggleLabel}
            type="button"
          >
            <FlagIcon locale={locale} />
            {currentLocale}
          </button>
        </div>
      </Container>
    </motion.header>
  );
}
