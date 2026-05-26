import type { StaticImageData } from "next/image";

export type Locale = "en" | "pt";

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type TranslationDictionary = {
  meta: {
    languageName: string;
    languageToggleLabel: string;
    portfolioLabel: string;
  };
  navigation: NavigationItem[];
  hero: {
    location: string;
    name: string;
    role: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    focusLabel: string;
    highlights: string[];
    socials: SocialLink[];
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    description: string;
    groups: Array<{
      title: string;
      items: string[];
    }>;
  };
  academic: {
    eyebrow: string;
    heading: string;
    description: string;
    items: Array<{
      degree: string;
      institution: string;
      period: string;
      description: string;
    }>;
  };
  projects: {
    eyebrow: string;
    heading: string;
    description: string;
    liveDemoLabel: string;
    githubLabel: string;
    noLiveDemoLabel: string;
    items: Array<{
      title: string;
      description: string;
      liveDemoHref?: string;
      githubHref?: string;
      image?: StaticImageData;
      imageAlt?: string;
      tags: string[];
    }>;
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      buttonLabel: string;
      helperText: string;
    };
  };
};
