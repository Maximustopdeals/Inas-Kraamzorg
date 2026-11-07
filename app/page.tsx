import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { site, werkgebied } from "@/lib/site";
import Reveal from "@/components/reveal";
import Faq, { FaqJsonLd } from "@/components/faq";
import { CtaBanner, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kraamzorg Zaandam | Persoonlijke kraamverzorgster in de Zaanstreek",
  description:
    "Op zoek naar kraamzorg in Zaandam of de Zaanstreek? Fatima biedt warme, persoonlijke begeleiding tijdens je kraamtijd. Ook na een thuisbevalling. 100% vergoed. Meld je vrijblijvend aan.",
  alternates: { canonical: "/" },
};

const usps = [
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
    title: "Rust in je kraamtijd",
    text: "Jij kunt je richten op je herstel en je baby. Ik bewaak de rust in huis en neem wat ik kan uit handen.",
  },
  {
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    title: "Persoonlijke begeleiding",
    text: "Iedere situatie is anders. We stemmen de zorg af op jouw gezin, jullie wensen en jullie ritme.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.625z",
    title: "Vertrouwd aanspreekpunt",
    text: "Eén betrokken kraamverzorgster die met aandacht naast je staat, van de intake tot de laatste dag.",
  },
];

const faqs = [
  {
    question: "Wordt kraamzorg vergoed?",
    answer:
      "Ja. Kraamzorg wordt vergoed vanuit de basisverzekering en valt niet onder je eigen risico. Ik werk met alle grote zorgverzekeraars.",
  },
  {
    question: "Wanneer moet ik mij aanmelden?",
    answer:
      "Het liefst vóór de 16e week van je zwangerschap. Ben je verder? Neem gerust contact op. Vaak kan ik alsnog iets betekenen.",
  },
  {
    question: "In welke plaatsen werk je?",
    answer:
      "In Zaandam, Koog aan de Zaan, Wormerveer, Zaandijk, Oostzaan, Assendelft, Westzaan en Amsterdam-Noord.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-cream-50 to-cream-50 pt-32 lg:pt-40">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-blush-100 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-cream-200 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28">
          <div>
            <Reveal>
              <Eyebrow>Kraamzorg in Zaandam &amp; de Zaanstreek</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display mt-6 text-[2.6rem] leading-[1.08] font-medium tracking-tight text-plum-900 text-balance sm:text-6xl lg:text-[4.2rem]">
                Een warme start voor jou en je{" "}
                <span className="relative inline-block text-rose-600">
                  baby
                  <svg viewBox="0 0 220 22" fill="none" className="absolute -bottom-2 left-0 w-full text-blush-300" aria-hidden="true">
                    <path d="M3 17C60 7 160 7 217 14" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-plum-500">
                <strong className="font-bold text-plum-800">Gefeliciteerd met je zwangerschap!</strong>{" "}
                De eerste dagen na de geboorte zijn bijzonder, maar kunnen ook spannend zijn. Ik ben{" "}
                <strong className="font-bold text-plum-800">Fatima</strong>. Tijdens je kraamtijd sta ik naast je, zodat je met vertrouwen herstelt en geniet van je baby.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-plum-900 px-8 py-4 text-center text-base font-bold text-white shadow-[0_12px_32px_-8px_rgb(46_27_36/0.45)] transition-all hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Meld je nu aan
                </a>
                <Link
                  href="/contact/"
                  className="rounded-full border-2 border-blush-200 bg-white/60 px-8 py-4 text-center text-base font-bold text-plum-800 transition-colors hover:border-rose-400 hover:text-rose-600"
                >
                  Plan een kennismaking
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-plum-700">
                {["100% vergoed", "KCKZ-gecertificeerd", "NL & العربية"].map((chip) => (
                  <li key={chip} className="inline-flex items-center gap-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4.5 w-4.5 text-rose-500" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200} className="relative">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-blush-100 blur-2xl" aria-hidden="true" />
              <Image
                src="/images/hero-moeder-baby.webp"
                alt="Moeder met pasgeboren baby. Kraamzorg Zaandam"
                width={1672}
                height={941}
                priority
                fetchPriority="high"
                className="aspect-[4/3] w-full rounded-[2.5rem] object-cover object-center shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
              />
              <div className="absolute -bottom-6 -left-4 rounded-3xl bg-white px-6 py-5 shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)] sm:-left-8">
                <p className="font-display text-3xl font-semibold text-rose-600">200+</p>
                <p className="text-sm font-bold text-plum-700">tevreden gezinnen</p>
              </div>
              <div className="absolute -top-5 -right-3 rounded-3xl bg-plum-900 px-6 py-4 shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)] sm:-right-6">
                <p className="text-sm font-bold text-white">100% vergoed</p>
                <p className="text-xs text-cream-100/70">door alle zorgverzekeraars</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USP's */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {usps.map((usp, i) => (
            <Reveal
              key={usp.title}
              delay={i * 120}
              className="group rounded-[2rem] border border-blush-100 bg-white p-8 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-100 text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                  <path d={usp.icon} />
                </svg>
              </span>
              <h2 className="font-display mt-6 text-2xl font-medium text-plum-900">{usp.title}</h2>
              <p className="mt-3 leading-relaxed text-plum-500">{usp.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Korte kennismaking */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="relative order-2 lg:order-1">
            <Image
              src="/images/fatima-in-actie.webp"
              alt="Kraamverzorgster Fatima in Zaandam"
              width={400}
              height={300}
              className="aspect-[4/3.4] w-full rounded-[2.5rem] object-cover object-top shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>Maak kennis</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Ik ben Fatima, jouw kraamverzorgster in Zaandam
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-plum-500">
                Met persoonlijke aandacht en rust zorg ik ervoor dat jij je niet alleen voelt tijdens je kraamtijd. Door mijn achtergrond in zowel de Nederlandse als de Arabische cultuur begrijp ik hoe belangrijk respect en privacy zijn in deze periode.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/over-mij/"
                className="group mt-8 inline-flex items-center gap-2 font-bold text-rose-600 transition-colors hover:text-rose-700"
              >
                Meer over mij
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Werkgebied</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
              Kraamzorg aan huis in de Zaanstreek
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-plum-500">
              Ik kom bij je thuis in Zaandam en omliggende plaatsen. Ook na een thuisbevalling of ziekenhuisbevalling.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {werkgebied.map((plaats) => (
                <li
                  key={plaats}
                  className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white px-4 py-2 text-sm font-bold text-plum-700"
                >
                  {plaats}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Reviews teaser */}
      <section className="bg-gradient-to-b from-blush-50 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal>
            <Eyebrow>Ervaringen van ouders</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
              Wat gezinnen zeggen
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-plum-500">
              Lees de ervaringen van ouders uit Zaandam en de Zaanstreek die ik mocht begeleiden tijdens hun kraamtijd.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/reviews/"
                className="inline-flex items-center justify-center rounded-full bg-plum-900 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-rose-600"
              >
                Lees de reviews
              </Link>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-blush-200 bg-white/60 px-8 py-4 text-base font-bold text-plum-800 transition-colors hover:border-rose-400 hover:text-rose-600"
              >
                Volg op Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Korte FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
              Kort antwoord op je vragen
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
