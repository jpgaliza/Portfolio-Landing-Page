import Link from "next/link";
import { Container } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

export default function NotFoundPage() {
  return (
    <main className="py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="404"
            title="Página não encontrada"
            description={
              "A página que você está tentando acessar não existe ou foi movida."
            }
          />

          <p className="mt-6 text-sm leading-7 text-muted">
            Verifique o endereço ou volte para a página inicial.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-blue-200/20 bg-gradient-to-r from-blue-300/20 via-cyan-300/25 to-blue-200/20 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-blue-200/35"
            >
              Voltar ao início
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/6 px-5 py-3 text-sm font-medium text-muted transition hover:text-foreground"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
