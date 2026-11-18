import devroastPreview from "@/data/content/devroast-preview.png";
import plafonPreview from "@/data/content/plafon-preview.png";
import ranked11Preview from "@/data/content/ranked11-preview.png";
import type { TranslationDictionary } from "../types";

export const pt: TranslationDictionary = {
  meta: {
    languageName: "Português",
    languageToggleLabel: "Trocar idioma para inglês",
    portfolioLabel: "jpgaliza"
  },
  navigation: [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Acadêmico", href: "#academic" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" }
  ],
  hero: {
    location: "Crato, CE · Desenvolvedor Full Stack @ NExTI",
    name: "João Pedro Galiza",
    role: "Desenvolvedor Full-Stack",
    summary:
      "Construo aplicações web e mobile com React, Next.js, Laravel e bancos relacionais — da arquitetura de APIs à interface final.",
    primaryCta: "Ver Projetos",
    secondaryCta: "Contato",
    focusLabel: "Foco Técnico",
    highlights: [
      "Frontend e Mobile com React, Next.js, TypeScript e React Native",
      "APIs e backends em Laravel (PHP), Node.js e bancos MySQL/PostgreSQL",
      "Arquiteturas local-first, containers Docker e automação com LLMs"
    ],
    socials: [
      { label: "GitHub", href: "https://github.com/jpgaliza" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jpgaliza/" }
    ]
  },
  about: {
    eyebrow: "Perfil",
    heading: "Sobre",
    body: [
      "Sou graduando em Sistemas de Informação na UniFAP (conclusão prevista para dezembro de 2027), em Crato (CE), e atuo como Desenvolvedor Full Stack na NExTI, trabalhando com React, Next.js, Laravel, PHP e MySQL.",
      "Meu foco é resolver problemas práticos com código legível e arquitetura previsível — desde aplicações web com Supabase e testes E2E até sistemas em Docker com PostgreSQL, aplicativos mobile em React Native e ferramentas local-first integradas a modelos de linguagem via Ollama."
    ]
  },
  skills: {
    eyebrow: "Stack",
    heading: "Habilidades",
    description:
      "Tecnologias e práticas aplicadas no desenvolvimento de produtos web e mobile em produção.",
    groups: [
      {
        title: "Frontend & Mobile",
        items: ["React", "Next.js", "TypeScript", "React Native", "Vue.js", "Tailwind CSS"]
      },
      {
        title: "Backend & Dados",
        items: ["Laravel", "PHP", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Supabase"]
      },
      {
        title: "Infra & Práticas",
        items: ["Docker", "APIs REST", "Testes (Vitest / Playwright)", "Acessibilidade", "Git"]
      }
    ]
  },
  academic: {
    eyebrow: "Educação",
    heading: "Acadêmico",
    description: "Formação superior e base técnica em engenharia de software e sistemas.",
    items: [
      {
        degree: "Bacharelado em Sistemas de Informação",
        institution: "Centro Universitário Paraíso (UniFAP) — Crato, CE",
        period: "2023 – Dez/2027 (Previsão)",
        description:
          "Graduação com foco em engenharia de software, estruturas de dados, bancos de dados relacionais, sistemas distribuídos e desenvolvimento de aplicações web e mobile."
      }
    ]
  },
  projects: {
    eyebrow: "Trabalhos Selecionados",
    heading: "Projetos",
    description:
      "Projetos públicos selecionados com foco em problema resolvido, arquitetura de dados e entrega prática.",
    liveDemoLabel: "Demo ao vivo",
    githubLabel: "GitHub",
    noLiveDemoLabel: "Execução local",
    items: [
      {
        title: "Plafon",
        description:
          "Aplicação mobile-first de controle financeiro pessoal que simplifica o registro de receitas, teto de gastos e assinaturas recorrentes. Construída com Next.js App Router, Supabase, Recharts e suporte bilíngue.",
        githubHref: "https://github.com/jpgaliza/plafon",
        image: plafonPreview,
        imageAlt: "Preview da página inicial do Plafon",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"]
      },
      {
        title: "Ranked11",
        description:
          "Jogo diário de trivia sobre Copas do Mundo com desafio sincronizado à meia-noite UTC e pontuação por distância. Desenvolvido em Next.js 15, TypeScript, dnd-kit, next-intl e cobertura de testes com Vitest e Playwright.",
        liveDemoHref: "https://ranked11.vercel.app",
        githubHref: "https://github.com/jpgaliza/Ranked11",
        image: ranked11Preview,
        imageAlt: "Preview da página inicial do Ranked11",
        tags: ["Next.js 15", "TypeScript", "Vitest", "Playwright"]
      },
      {
        title: "ATS Resume Studio",
        description:
          "Estúdio de currículos local-first voltado à adequação para sistemas ATS sem expor dados pessoais na nuvem. Integra editor em React, API tipada com persistência em PostgreSQL/Drizzle, renderização PDF via Forme e endpoints compatíveis com Ollama.",
        githubHref: "https://github.com/jpgaliza/ats-resume",
        tags: ["React 19", "TypeScript", "PostgreSQL", "Ollama / Local-First"]
      },
      {
        title: "StudyRats",
        description:
          "Plataforma de organização de estudos com aplicativo mobile em React Native (Expo) integrado a uma API REST em Laravel. Ambiente conteinerizado com Docker, Traefik e PostgreSQL em topologia master/réplica.",
        githubHref: "https://github.com/jpgaliza/StudyRats",
        tags: ["React Native", "Laravel", "PostgreSQL", "Docker"]
      },
      {
        title: "DevRoast",
        description:
          "Aplicação web para análise e revisão direta de trechos de código com foco em clareza de feedback e usabilidade. Desenvolvida em Next.js e TypeScript com deploy contínuo na Vercel.",
        liveDemoHref: "https://devroast-five.vercel.app/",
        githubHref: "https://github.com/jpgaliza/devroast",
        image: devroastPreview,
        imageAlt: "Preview da página inicial do DevRoast",
        tags: ["Next.js", "TypeScript", "Full-Stack", "UX"]
      },
      {
        title: "SoccerIQ",
        description:
          "Quiz interativo sobre futebol estruturado em arquitetura monolítica moderna com Laravel 12 no backend, Vue.js 3 com Inertia.js na camada de interface e persistência em MySQL.",
        githubHref: "https://github.com/jpgaliza/SoccerIQ",
        tags: ["Laravel 12", "PHP", "Vue.js 3", "Inertia.js"]
      }
    ]
  },
  contact: {
    eyebrow: "Entre em contato",
    heading: "Contato",
    body: "Disponível para conversar sobre desenvolvimento full-stack, projetos técnicos e oportunidades de engenharia de software.",
    form: {
      nameLabel: "Seu nome",
      namePlaceholder: "Como devo te chamar?",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Sobre o que você quer falar?",
      messageLabel: "Mensagem",
      messagePlaceholder: "Conte um pouco sobre sua ideia, projeto ou oportunidade.",
      buttonLabel: "Enviar pelo Gmail",
      helperText: "O botão abre o Gmail em uma nova aba com assunto e mensagem preenchidos."
    }
  }
};
