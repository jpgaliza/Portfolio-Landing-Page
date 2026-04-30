import mestreNozaPreview from "@/data/content/mestre-noza-preview.png";
import type { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  meta: {
    languageName: "English",
    languageToggleLabel: "Switch language to Portuguese",
    portfolioLabel: "jpgaliza"
  },
  navigation: [
    { label: "Hero", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Academic", href: "#academic" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    location: "Brazil",
    name: "Joao Pedro Galiza",
    role: "Full-Stack Developer",
    summary:
      "Full-Stack Developer focused on building high-converting, high-performance interfaces.",
    primaryCta: "View Projects",
    secondaryCta: "Contact",
    focusLabel: "Focus",
    highlights: [
      "High-converting interfaces",
      "Performance-driven web applications",
      "Practical full-stack product development"
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
      "Joao Pedro Galiza is a Full-Stack Developer focused on creating interfaces that balance strong visual presentation, usability, and performance.",
      "His work connects frontend execution with practical product thinking, building digital experiences that are clear, fast, and conversion-oriented."
    ]
  },
  skills: {
    eyebrow: "Capabilities",
    heading: "Skills",
    description:
      "Technologies and practices used to build modern, performant web experiences.",
    groups: [
      {
        title: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"]
      },
      {
        title: "Backend",
        items: ["Node.js", "APIs", "Databases", "Authentication", "Server Logic"]
      },
      {
        title: "Practices",
        items: [
          "Responsive Design",
          "Performance",
          "Conversion-focused UI",
          "User Experience"
        ]
      }
    ]
  },
  academic: {
    eyebrow: "Education",
    heading: "Academic",
    description: "Academic background and formal education.",
    items: [
      {
        degree: "Information Systems",
        institution: "Centro Universitario Paraiso (UniFAP)",
        period: "2022 - Present",
        description:
          "Undergraduate program focused on software, systems, technology, and digital product development."
      }
    ]
  },
  projects: {
    eyebrow: "Selected Work",
    heading: "Projects",
    description:
      "Selected projects focused on usability, visual presentation, and practical web experiences.",
    liveDemoLabel: "Live demo",
    githubLabel: "GitHub",
    noLiveDemoLabel: "No live demo",
    items: [
      {
        title: "DevRoast",
        description:
          "Platform for analyzing code snippets with a focus on usability and user experience.",
        liveDemoHref: "https://devroast-five.vercel.app/",
        githubHref: "https://github.com/jpgaliza",
        tags: ["Full-Stack", "UX", "Code Analysis"]
      },
      {
        title: "Landing Page - Centro Cultural Mestre Noza",
        description:
          "Institutional landing page created to present Centro Cultural Mestre Noza in a modern and visually appealing way.",
        githubHref: "https://github.com/jpgaliza",
        image: mestreNozaPreview,
        imageAlt: "Preview of Landing Page - Centro Cultural Mestre Noza",
        tags: ["Landing Page", "Institutional", "UI Design"]
      }
    ]
  },
  contact: {
    eyebrow: "Get in touch",
    heading: "Contact",
    body: "Available for projects, collaborations, and opportunities focused on building high-performance digital experiences.",
    email: "jpfgaliza@gmail.com"
  }
};
