# João Pedro Galiza | Personal Landing Page

A modern, high-performance portfolio website showcasing full-stack development expertise, projects, and professional experience. Built with cutting-edge web technologies and optimized for both user experience and conversion.

## 🌟 Features

- **Modern Design System**: Clean, professional interface with smooth animations powered by Framer Motion
- **Multi-language Support**: Fully internationalized with English and Portuguese translations
- **Performance Optimized**: Built with Next.js 15 App Router for maximum performance and fast loading times
- **Responsive Design**: Mobile-first approach using Tailwind CSS for seamless experience across all devices
- **Type-Safe**: Full TypeScript implementation ensuring code reliability and developer experience
- **Accessibility First**: Semantic HTML and WCAG compliance for inclusive design
- **SEO Optimized**: Next.js metadata and structured content for better search engine visibility

## 📋 Sections

- **Hero**: Eye-catching introduction with key highlights
- **About**: Professional summary and career focus
- **Skills**: Technical expertise organized by categories
- **Academic**: Educational background and certifications
- **Projects**: Showcase of notable projects and achievements
- **Contact**: Easy ways to get in touch

## 🛠️ Tech Stack

| Technology        | Version | Purpose                         |
| ----------------- | ------- | ------------------------------- |
| **Next.js**       | 15.3.4  | React framework with App Router |
| **React**         | 19.0    | UI library                      |
| **TypeScript**    | 5.8.3   | Type-safe JavaScript            |
| **Tailwind CSS**  | 3.4.17  | Utility-first styling           |
| **Framer Motion** | 12.38.0 | Advanced animations             |
| **ESLint**        | 9.28.0  | Code quality                    |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd personal-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Available Scripts

- **`npm run dev`** - Start local development server with hot reload
- **`npm run build`** - Create optimized production build
- **`npm start`** - Start production server (requires build first)
- **`npm run type-check`** - Validate TypeScript types without emitting files
- **`npm run lint`** - Run ESLint to check code quality

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with language provider
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── layout/            # Layout components (header, container)
│   ├── motion/            # Animation components
│   └── ui/                # Utility UI components
├── data/                  # Static content and assets
├── i18n/                  # Internationalization
│   ├── dictionaries.ts    # Translation configuration
│   ├── language-provider  # React context for language
│   └── translations/      # Language files (en, pt)
├── lib/                   # Utility functions
├── sections/              # Page sections components
├── styles/                # Global and design tokens CSS
└── types/                 # TypeScript type definitions
```

## 🌐 Internationalization

The site supports multiple languages with seamless switching:

- 🇬🇧 **English** (en)
- 🇵🇹 **Portuguese** (pt)

Language preferences are managed through React Context and persist across sessions.

## ⚙️ Configuration

- **`tailwind.config.ts`** - Tailwind CSS customization
- **`next.config.ts`** - Next.js configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`eslint.config.mjs`** - ESLint rules
- **`postcss.config.mjs`** - PostCSS plugins

## 🎨 Design & Styling

The project uses a comprehensive design system:

- **CSS Tokens** (`styles/tokens.css`) - Centralized design values
- **Global Styles** (`styles/globals.css`) - Base styling
- **Tailwind Classes** - Component-level styling
- **Motion Components** - Smooth reveal animations

## 🔗 Connect

- **GitHub**: [github.com/jpgaliza](https://github.com/jpgaliza)
- **LinkedIn**: [linkedin.com/in/jpgaliza](https://www.linkedin.com/in/jpgaliza/)
- **Email**: jpfgaliza@gmail.com

## 📝 License

This project is open source and available for personal and commercial use.

---

**Crafted with attention to detail and modern web standards**
