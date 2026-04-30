import { SiteHeader } from "@/components/layout";
import { About, Academic, Contact, Hero, Projects, Skills } from "@/sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Academic />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
