import Image from "next/image";
import type { Metadata } from "next";
import { site, verzekeraars, werkgebied } from "@/lib/site";
import Reveal from "@/components/reveal";
import Faq, { FaqJsonLd } from "@/components/faq";
import { CtaBanner, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kraamzorg in Zaandam | Wat je kunt verwachten tijdens je kraamtijd",
  description:
    "Alles over kraamzorg in Zaandam: medische controles, borstvoedingsbegeleiding, babyverzorging en steun na een thuisbevalling of ziekenhuisbevalling. 100% vergoed vanuit de basisverzekering.",
  alternates: { canonical: "/kraamzorg/" },
};

const diensten = [
  {
    title: "Medische controles",
    text: "Dagelijkse checks van moeder en baby: temperatuur, gewicht, wondgenezing en algemeen welzijn. Bij twijfel schakel ik direct je verloskundige in.",
  },
  {
    title: "Borstvoedingsbegeleiding",
    text: "Ondersteuning bij aanleggen, houding en voedingsmomenten. Ook bij flesvoeding help ik je met dezelfde aandacht.",
  },
  {
    title: "Babyverzorging",
    text: "Van het eerste badje tot verschonen. Ik leer jou en je partner de basisvaardigheden met geduld en rust.",
  },
  {
    title: "Huishoudelijke hulp",
    text: "Lichte ondersteuning in huis, zodat jij kunt rusten en herstellen.",
  },
  {
    title: "Voorlichting & advies",
    text: "Praktisch advies over herstel, voeding, slaapritme en alles wat bij de kraamperiode komt kijken.",
  },
  {
    title: "Emotionele steun",
    text: "Een luisterend oor en begripvolle begeleiding bij alle emoties die de kraamtijd met zich meebrengt.",
  },
];

const stappen = [
  {
    title: "Kennismaken",
    text: "We bespreken jouw wensen en situatie. Vrijblijvend, bij jou thuis of telefonisch.",
  },
  {
    title: "Indicatie aanvragen",
    text: "Je verloskundige vraagt een kraamzorgindicatie aan bij je zorgverzekeraar.",
  },
  {
    title: "Aanvraag indienen",
    text: "Ik regel de aanvraag en samen plannen we de kraamweek.",
  },
  {
    title: "Zorg ontvangen",
    text: "Tijdens de kraamweek sta ik voor je klaar met zorg, rust en aandacht.",
  },
];

const faqs = [
  {
    question: "Wat doet een kraamverzorgende precies?",
    answer:
      "Een kraamverzorgende controleert de gezondheid van moeder en baby, begeleidt bij borst- of flesvoeding, leert je de babyverzorging, helpt licht in het huishouden en biedt emotionele steun.",
  },
  {
    question: "Hoe lang duurt de kraamweek?",
    answer:
      "De kraamperiode duurt meestal 8 tot 10 dagen. Het aantal uren per dag hangt af van je indicatie, vaak tussen de 3 en 8 uur per dag.",
  },
  {
    question: "Wat kost kraamzorg?",
    answer:
      "Niets. Kraamzorg wordt volledig vergoed vanuit de basisverzekering en valt niet onder het eigen risico.",
  },
  {
    question: "Kan ik kraamzorg krijgen na een thuisbevalling of ziekenhuisbevalling?",
    answer:
      "Ja. Of je nu thuis of in het ziekenhuis bevalt: zodra jullie thuis zijn, start de kraamzorg. Ik stem de eerste zorgdag af op het moment dat jullie thuiskomen.",
  },
  {
    question: "Wanneer vindt het intakegesprek plaats?",
    answer:
      "Meestal rond de 30e tot 34e week van je zwangerschap, bij jou thuis of telefonisch.",
  },
];

export default function KraamzorgPage() {
  return (
    <>
      <PageHero
        eyebrow="Kraamzorg in Zaandam"
        title="Wat je kunt verwachten tijdens je kraamtijd"
        intro="Persoonlijke kraamzorg aan huis in Zaandam en de Zaanstreek. Van medische controles tot een luisterend oor. Ook na een thuisbevalling."
      />

      {/* Badges */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <ul className="-mt-2 flex flex-wrap justify-center gap-3 pb-4">
            {["100% vergoed", "Nederlands & Arabisch", "Ook na thuisbevalling"].map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white px-5 py-2.5 text-sm font-bold text-plum-700 shadow-sm"
              >
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Diensten */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Mijn zorg voor jou</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
              Wat ik doe tijdens de kraamweek
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diensten.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 3) * 100}
              className="rounded-[2rem] border border-blush-100 bg-white p-8 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)]"
            >
              <span className="font-display text-4xl font-semibold text-blush-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-xl font-medium text-plum-900">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-plum-500">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vergoeding */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal>
            <Eyebrow>Volledig vergoed</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
              Geen eigen risico, geen verrassingen
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-plum-500">
              Kraamzorg wordt vergoed vanuit de basisverzekering en valt niet onder je eigen risico. Ik werk met alle grote zorgverzekeraars.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {verzekeraars.map((v) => (
                <li key={v} className="rounded-full border border-blush-200 bg-white px-5 py-2.5 text-sm font-bold text-plum-700">
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Stappen */}
      <section className="bg-plum-900 py-20 text-cream-100 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-bold tracking-[0.14em] text-blush-300 uppercase">
                Zo werkt het
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-white text-balance sm:text-4xl">
                Van aanmelding tot kraamweek
              </h2>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stappen.map((stap, i) => (
              <Reveal as="li" key={stap.title} delay={i * 120} className="rounded-[2rem] bg-white/5 p-8">
                <span className="font-display text-5xl font-semibold text-rose-400">{i + 1}</span>
                <h3 className="font-display mt-5 text-xl font-medium text-white">{stap.title}</h3>
                <p className="mt-3 leading-relaxed text-cream-100/70">{stap.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={300} className="mt-12 text-center">
            <a
              href={site.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-rose-400"
            >
              Meld je aan voor kraamzorg
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
              Vragen over kraamzorg in Zaandam
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200} className="mt-14">
          <Faq items={faqs} />
        </Reveal>
        <FaqJsonLd items={faqs} />
      </section>

      <CtaBanner />
    </>
  );
}
