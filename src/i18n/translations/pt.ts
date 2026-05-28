import devroastPreview from "@/data/content/devroast-preview.png";
import mestreNozaPreview from "@/data/content/mestre-noza-preview.png";
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
    location: "Disponível",
    name: "João Pedro Galiza",
    role: "Desenvolvedor Full-Stack",
    summary:
      "Desenvolvedor Full-Stack focado em criar interfaces de alta conversão e performance.",
    primaryCta: "Ver Projetos",
    secondaryCta: "Contato",
    focusLabel: "Foco",
    highlights: [
      "Interfaces de alta conversão",
      "Aplicações web orientadas à performance",
      "Desenvolvimento full-stack prático e organizado"
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
      "Sou estudante de Sistemas de Informação com foco em desenvolvimento Web Full Stack. Unindo tecnologias como React, Next.js e Laravel, crio soluções completas que integram interfaces intuitivas, APIs eficientes e inteligência artificial.",
      "Gosto de transformar ideias em produtos digitais reais, conectando a execução técnica do código ao impacto prático na experiência do usuário."
    ]
  },
  skills: {
    eyebrow: "Capacidades",
    heading: "Habilidades",
    description:
      "Tecnologias e práticas usadas para construir experiências web modernas e performáticas.",
    groups: [
      {
        title: "Frontend",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"]
      },
      {
        title: "Backend",
        items: ["Node.js", "APIs", "Bancos de Dados", "Autenticação", "Lógica de Servidor"]
      },
      {
        title: "Práticas",
        items: [
          "Design Responsivo",
          "Acessibilidade",
          "Performance",
          "UI focada em Conversão"
        ]
      }
    ]
  },
  academic: {
    eyebrow: "Educação",
    heading: "Acadêmico",
    description: "Formação acadêmica e base de estudos em tecnologia.",
    items: [
      {
        degree: "Sistemas de Informação",
        institution: "Centro Universitário Paraíso (UniFAP)",
        period: "2024 - Presente",
        description:
          "Graduação voltada a software, sistemas, tecnologia e desenvolvimento de produtos digitais."
      }
    ]
  },
  projects: {
    eyebrow: "Trabalhos Selecionados",
    heading: "Projetos",
    description:
      "Projetos selecionados com foco em usabilidade, apresentação visual e experiências web práticas.",
    liveDemoLabel: "Demo ao vivo",
    githubLabel: "GitHub",
    noLiveDemoLabel: "Sem demo ao vivo",
    items: [
      {
        title: "DevRoast",
        description:
          "Plataforma para analisar trechos de código com foco em praticidade e experiência do usuário.",
        liveDemoHref: "https://devroast-five.vercel.app/",
        githubHref: "https://github.com/jpgaliza",
        image: devroastPreview,
        imageAlt: "Preview da página inicial do DevRoast",
        tags: ["Full-Stack", "UX", "Análise de Código"]
      },
      {
        title: "Landing Page - Centro Cultural Mestre Noza",
        description:
          "Landing page institucional desenvolvida para apresentar o Centro Cultural Mestre Noza de forma moderna e visualmente atrativa.",
        githubHref: "https://github.com/jpgaliza",
        image: mestreNozaPreview,
        imageAlt: "Preview da Landing Page - Centro Cultural Mestre Noza",
        tags: ["Landing Page", "Institucional", "UI Design"]
      }
    ]
  },
  contact: {
    eyebrow: "Entre em contato",
    heading: "Contato",
    body: "Disponível para projetos, colaborações e oportunidades focadas em construir experiências digitais performáticas.",
    form: {
      nameLabel: "Seu nome",
      namePlaceholder: "Como devo te chamar?",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Sobre o que você quer falar?",
      messageLabel: "O que você quer enviar",
      messagePlaceholder: "Conte um pouco sobre sua ideia, projeto ou oportunidade.",
      buttonLabel: "Entrar em Contato",
      helperText: "O botão abre o Gmail com assunto e mensagem já preenchidos."
    }
  }
};
