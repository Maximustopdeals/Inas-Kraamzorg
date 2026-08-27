import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import ElfsightReviews from "@/components/elfsight-reviews";
import { CtaBanner, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Reviews — Ervaringen van ouders over kraamzorg in Zaandam",
  description:
    "Lees de Google-reviews van ouders over Inas Kraamzorg in Zaandam. Ontdek waarom gezinnen in de Zaanstreek kiezen voor de persoonlijke begeleiding van kraamverzorgster Fatima.",
  alternates: { canonical: "/reviews/" },
};

const redenen = [
  {
    title: "Help andere ouders",
    text: "Jouw ervaring geeft toekomstige ouders vertrouwen bij hun keuze voor kraamzorg in Zaandam.",
  },
  {
    title: "Waardevolle feedback",
    text: "Je feedback helpt mij om de zorg nog beter af te stemmen op de wensen van ouders.",
  },
  {
    title: "Delen van vertrouwen",
    text: "Eerlijke ervaringen bouwen vertrouwen op binnen de gemeenschap in de Zaanstreek.",
  },
  {
    title: "Persoonlijke verhalen",
    text: "Elk verhaal is uniek en helpt ouders te begrijpen wat ze van de kraamweek kunnen verwachten.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Wat ouders zeggen over Inas Kraamzorg"
        intro="Echte ervaringen van gezinnen in Zaandam en de Zaanstreek — rechtstreeks van Google."
      />

      {/* Google Reviews widget */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-blush-100 bg-white p-4 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] sm:p-8">
            <ElfsightReviews />
          </div>
        </Reveal>
      </section>

      {/* Jouw ervaring delen */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow>Jouw ervaring maakt het verschil</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Help andere ouders bij hun keuze
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-lg leading-relaxed text-plum-500">
                Als ouder weet je hoe belangrijk het is om een goede
                kraamverzorgende te vinden. Jouw review kan voor andere
                aanstaande ouders de doorslag geven om met een gerust hart voor
                Inas Kraamzorg te kiezen.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {redenen.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 100}
                className="rounded-[2rem] border border-blush-100 bg-white p-8 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
              >
                <span
                  className="font-display text-4xl font-semibold text-blush-300"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-xl font-medium text-plum-900">
                  {r.title}
                </h3>
                <p className="mt-3 leading-relaxed text-plum-500">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bedankt */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8 lg:py-24">
        <Reveal>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mx-auto h-12 w-12 text-rose-500"
            aria-hidden="true"
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
            Van harte bedankt
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-500">
            Ik waardeer elke ervaring die ouders met mij delen enorm. Het is
            een voorrecht om gezinnen te mogen begeleiden tijdens deze
            bijzondere periode, en jullie feedback inspireert mij elke dag om
            de best mogelijke zorg te bieden. Of je nu net bent bevallen of het
            al wat langer geleden is — ik vind het ontzettend fijn als je jouw
            ervaring wilt delen.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="font-display mt-8 text-2xl font-medium text-rose-600 italic">
            — Fatima, kraamverzorgende bij Inas Kraamzorg Zaandam
          </p>
        </Reveal>
      </section>

      <CtaBanner
        title="Ook een warme start voor jouw gezin?"
        text="Sluit je aan bij de meer dan 200 gezinnen in de Zaanstreek die kozen voor persoonlijke kraamzorg van Inas Kraamzorg."
      />
    </>
  );
}
