import atsResumePreview from "@/data/content/ats-resume-preview.webp";
import devroastPreview from "@/data/content/devroast-preview.png";
import plafonPreview from "@/data/content/plafon-preview.png";
import ranked11Preview from "@/data/content/ranked11-preview.png";
import socceriqPreview from "@/data/content/socceriq-preview.png";
import studyratsPreview from "@/data/content/studyrats-preview.png";
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
    location: "Crato, CE · Desenvolvedor Full Stack",
    name: "João Pedro Galiza",
    role: "Desenvolvedor Full-Stack",
    summary:
      "Construo aplicações web com React, Next.js, TypeScript e Laravel, cuidando desde a arquitetura de APIs e bancos relacionais até a interface final.",
    primaryCta: "Ver Projetos",
    secondaryCta: "Contato",
    focusLabel: "Foco Técnico",
    highlights: [
      "Full Stack com React, Next.js, TypeScript e Laravel",
      "APIs REST em PHP e Node.js com bancos MySQL e PostgreSQL",
      "Arquiteturas local-first, containers Docker e integração com LLMs"
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
      "Sou graduando em Sistemas de Informação na UniFAP, com conclusão prevista para dezembro de 2027, em Crato (CE). Trabalho com desenvolvimento web Full Stack usando React, Next.js, TypeScript, Laravel, PHP e MySQL.",
      "Gosto de resolver problemas práticos com código limpo e arquitetura direta, seja em aplicações web com Supabase, sistemas em Docker com PostgreSQL ou ferramentas local-first integradas a modelos de linguagem via Ollama."
    ]
  },
  skills: {
    eyebrow: "Stack",
    heading: "Habilidades",
    description:
      "Tecnologias e práticas que utilizo no desenvolvimento de aplicações web.",
    groups: [
      {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS"]
      },
      {
        title: "Backend & Dados",
        items: ["Laravel", "PHP", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Supabase"]
      },
      {
        title: "Infra & Práticas",
        items: ["Docker", "APIs REST", "UI Responsiva", "Acessibilidade", "Git"]
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
        institution: "Centro Universitário Paraíso (UniFAP), Crato, CE",
        period: "2023 a Dez/2027 (Previsão)",
        description:
          "Graduação voltada a engenharia de software, estruturas de dados, bancos de dados relacionais, sistemas distribuídos e desenvolvimento de aplicações web."
      }
    ]
  },
  projects: {
    eyebrow: "Trabalhos Selecionados",
    heading: "Projetos",
    description:
      "Projetos públicos selecionados com foco no problema resolvido, arquitetura de dados e entrega prática.",
    liveDemoLabel: "Demo ao vivo",
    githubLabel: "GitHub",
    noLiveDemoLabel: "Execução local",
    items: [
      {
        title: "Plafon",
        description:
          "Aplicação web de controle financeiro pessoal pensada para simplificar o registro de receitas, teto de gastos e assinaturas recorrentes. Construída com Next.js App Router, Supabase, Recharts e suporte bilíngue.",
        liveDemoHref: "https://plafonn.vercel.app/",
        githubHref: "https://github.com/jpgaliza/plafon",
        image: plafonPreview,
        imageAlt: "Preview da página inicial do Plafon",
        tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"]
      },
      {
        title: "Ranked11",
        description:
          "Jogo diário de trivia sobre Copas do Mundo com desafio sincronizado à meia-noite UTC e pontuação por distância. Desenvolvido em Next.js 15, TypeScript, dnd-kit e next-intl.",
        liveDemoHref: "https://ranked11.vercel.app",
        githubHref: "https://github.com/jpgaliza/Ranked11",
        image: ranked11Preview,
        imageAlt: "Preview da página inicial do Ranked11",
        tags: ["Next.js 15", "TypeScript", "dnd-kit", "next-intl"]
      },
      {
        title: "ATS Resume",
        description:
          "Editor de currículos local-first voltado à adequação para sistemas ATS sem expor dados pessoais na nuvem. Integra interface em React, API tipada com PostgreSQL e Drizzle, geração de PDF via Forme e endpoints compatíveis com Ollama.",
        githubHref: "https://github.com/jpgaliza/ats-resume",
        image: atsResumePreview,
        imageAlt: "Preview do editor do ATS Resume",
        tags: ["React 19", "TypeScript", "PostgreSQL", "Ollama / Local-First"]
      },
      {
        title: "StudyRats",
        description:
          "Plataforma de organização de estudos com frontend em React integrado a uma API REST em Laravel. Ambiente conteinerizado com Docker, Traefik e PostgreSQL em topologia master e réplica.",
        githubHref: "https://github.com/jpgaliza/StudyRats",
        image: studyratsPreview,
        imageAlt: "Preview da tela inicial do StudyRats",
        tags: ["React", "Laravel", "PostgreSQL", "Docker"]
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
        image: socceriqPreview,
        imageAlt: "Preview da página inicial do SoccerIQ",
        tags: ["Laravel 12", "PHP", "Vue.js 3", "Inertia.js"]
      }
    ]
  },
  contact: {
    eyebrow: "Entre em contato",
    heading: "Contato",
    body: "Disponível para conversar sobre desenvolvimento full-stack, projetos técnicos e oportunidades na área de software.",
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
