import atsResumePreview from "@/data/content/ats-resume-preview.webp";
import devroastPreview from "@/data/content/devroast-preview.png";
import plafonPreview from "@/data/content/plafon-preview.png";
import ranked11Preview from "@/data/content/ranked11-preview.png";
import socceriqPreview from "@/data/content/socceriq-preview.png";
import studyratsPreview from "@/data/content/studyrats-preview.png";
import type { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  meta: {
    languageName: "English",
    languageToggleLabel: "Switch language to Portuguese",
    portfolioLabel: "jpgaliza"
  },
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Academic", href: "#academic" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    location: "Crato, CE · Full-Stack Developer",
    name: "João Pedro Galiza",
    role: "Full-Stack Developer",
    summary:
      "Building web applications with React, Next.js, TypeScript, and Laravel, from API and relational database architecture to the final interface.",
    primaryCta: "View Projects",
    secondaryCta: "Contact",
    focusLabel: "Technical Focus",
    highlights: [
      "Full-Stack development with React, Next.js, TypeScript, and Laravel",
      "REST APIs in PHP and Node.js backed by MySQL and PostgreSQL",
      "Local-first architectures, Docker containers, and local LLM workflows"
    ],
    socials: [
      { label: "GitHub", href: "https://github.com/jpgaliza" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jpgaliza/" }
    ]
  },
  about: {
    eyebrow: "Profile",
    heading: "About",
    body: [
      "I am an Information Systems undergraduate at UniFAP, expected to graduate in December 2027, based in Crato, CE, Brazil. I work on Full-Stack web development with React, Next.js, TypeScript, Laravel, PHP, and MySQL.",
      "I focus on solving practical problems with clean code and straightforward architecture, whether in web apps powered by Supabase, containerized systems with PostgreSQL, or local-first tools integrated with Ollama."
    ]
  },
  skills: {
    eyebrow: "Stack",
    heading: "Skills",
    description:
      "Technologies and practices I use to build web applications.",
    groups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS"]
      },
      {
        title: "Backend & Data",
        items: ["Laravel", "PHP", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Supabase"]
      },
      {
        title: "Infra & Practices",
        items: ["Docker", "REST APIs", "Responsive UI", "Accessibility", "Git"]
      }
    ]
  },
  academic: {
    eyebrow: "Education",
    heading: "Academic",
    description: "Undergraduate degree and technical foundation in software engineering and systems.",
    items: [
      {
        degree: "B.S. in Information Systems",
        institution: "Centro Universitário Paraíso (UniFAP), Crato, CE",
        period: "2023 to Dec 2027 (Expected)",
        description:
          "Undergraduate program focused on software engineering, data structures, relational databases, distributed systems, and web application development."
      }
    ]
  },
  projects: {
    eyebrow: "Selected Work",
    heading: "Projects",
    description:
      "Selected public repositories focused on solved problems, data architecture, and practical engineering.",
    liveDemoLabel: "Live demo",
    githubLabel: "GitHub",
    noLiveDemoLabel: "Local setup",
    items: [
      {
        title: "Plafon",
        description:
          "Personal finance web app designed for fast transaction logging, spending-cap tracking, and subscription monitoring. Built with Next.js App Router, Supabase, Recharts, and i18n support.",
        githubHref: "https://github.com/jpgaliza/plafon",
        image: plafonPreview,
        imageAlt: "Preview of Plafon homepage",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"]
      },
      {
        title: "Ranked11",
        description:
          "Daily World Cup ranking trivia game with UTC midnight rotation and distance-based scoring. Built with Next.js 15, TypeScript, dnd-kit, and next-intl.",
        liveDemoHref: "https://ranked11.vercel.app",
        githubHref: "https://github.com/jpgaliza/Ranked11",
        image: ranked11Preview,
        imageAlt: "Preview of Ranked11 homepage",
        tags: ["Next.js 15", "TypeScript", "dnd-kit", "next-intl"]
      },
      {
        title: "ATS Resume",
        description:
          "Local-first ATS resume tailoring app keeping personal data off external clouds. Combines a React 19 editor, typed API with PostgreSQL and Drizzle, Forme PDF rendering, and Ollama-compatible local LLM endpoints.",
        githubHref: "https://github.com/jpgaliza/ats-resume",
        image: atsResumePreview,
        imageAlt: "Preview of ATS Resume editor",
        tags: ["React 19", "TypeScript", "PostgreSQL", "Ollama / Local-First"]
      },
      {
        title: "StudyRats",
        description:
          "Study management platform pairing a React frontend with a Laravel REST API. Fully containerized with Docker, Traefik, and PostgreSQL in a master and replica setup.",
        githubHref: "https://github.com/jpgaliza/StudyRats",
        image: studyratsPreview,
        imageAlt: "Preview of StudyRats start screen",
        tags: ["React", "Laravel", "PostgreSQL", "Docker"]
      },
      {
        title: "DevRoast",
        description:
          "Web platform for reviewing and analyzing code snippets with a focus on fast feedback and clean UX. Built with Next.js and TypeScript and deployed on Vercel.",
        liveDemoHref: "https://devroast-five.vercel.app/",
        githubHref: "https://github.com/jpgaliza/devroast",
        image: devroastPreview,
        imageAlt: "Preview of DevRoast homepage",
        tags: ["Next.js", "TypeScript", "Full-Stack", "UX"]
      },
      {
        title: "SoccerIQ",
        description:
          "Interactive football quiz built on a modern monolithic stack using Laravel 12 on the backend, Vue.js 3 with Inertia.js on the frontend, and MySQL persistence.",
        githubHref: "https://github.com/jpgaliza/SoccerIQ",
        image: socceriqPreview,
        imageAlt: "Preview of SoccerIQ homepage",
        tags: ["Laravel 12", "PHP", "Vue.js 3", "Inertia.js"]
      }
    ]
  },
  contact: {
    eyebrow: "Get in touch",
    heading: "Contact",
    body: "Open to discussing full-stack development, technical projects, and software engineering opportunities.",
    form: {
      nameLabel: "Your name",
      namePlaceholder: "How should I call you?",
      subjectLabel: "Subject",
      subjectPlaceholder: "What do you want to talk about?",
      messageLabel: "Message",
      messagePlaceholder: "Tell me a bit about your idea, project, or opportunity.",
      buttonLabel: "Send via Gmail",
      helperText: "The button opens Gmail in a new tab with the subject and message pre-filled."
    }
  }
};
