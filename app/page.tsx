import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { site, werkgebied } from "@/lib/site";
import Reveal from "@/components/reveal";
import Faq, { FaqJsonLd } from "@/components/faq";
import { CtaBanner, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kraamzorg Zaandam & Zaanstreek — Persoonlijke zorg voor moeder en baby",
  description:
    "Kraamzorg in Zaandam door kraamverzorgster Fatima: warme, persoonlijke begeleiding tijdens je kraamweek. 100% vergoed vanuit de basisverzekering. Tweetalig (NL/AR). Meld je nu aan.",
  alternates: { canonical: "/" },
};

const usps = [
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
    title: "Rust in de eerste kraamweek",
    text: "Zodat jij je volledig kunt richten op je herstel en je baby. Ik bewaak de rust in huis en neem je alles uit handen wat kan.",
  },
  {
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    title: "Persoonlijke begeleiding",
    text: "Iedere situatie is anders. Daarom stemmen we de zorg volledig af op jouw gezin, jullie wensen en jullie ritme.",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.125a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.625z",
    title: "Vertrouwd aanspreekpunt",
    text: "Eén betrokken kraamverzorgster die met aandacht naast je staat — van de intake tot de laatste dag van de kraamweek.",
  },
];

const diensten = [
  {
    title: "Medische controles",
    text: "Dagelijkse checks voor moeder en baby: temperatuur, gewicht, wondgenezing en algemeen welzijn.",
  },
  {
    title: "Borstvoedingsbegeleiding",
    text: "Deskundige ondersteuning bij aanleggen, houding en voeden. Ook voor flesvoeding, als dat jullie keuze is.",
  },
  {
    title: "Babyverzorging",
    text: "Van het eerste badje tot verschonen — ik leer je alle basisvaardigheden met geduld en vertrouwen.",
  },
  {
    title: "Huishoudelijke hulp",
    text: "Lichte ondersteuning in huis, zodat jij kunt rusten en herstellen van de bevalling.",
  },
  {
    title: "Voorlichting & advies",
    text: "Advies over herstel, voeding, slaapritme en antwoorden op al je vragen over de kraamperiode.",
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
    question: "Wordt kraamzorg vergoed door mijn zorgverzekeraar?",
    answer:
      "Ja. Kraamzorg wordt vergoed vanuit de basisverzekering en valt niet onder je eigen risico. Ik werk met alle grote zorgverzekeraars, zoals Zilveren Kruis, CZ, VGZ, Menzis en DSW. Je betaalt dus zelf niets voor de zorg.",
  },
  {
    question: "Wanneer moet ik mij aanmelden voor kraamzorg?",
    answer:
      "Meld je het liefst vóór de 16e week van je zwangerschap aan. Zo is er voldoende tijd voor een intakegesprek en is je plek in de planning rond je uitgerekende datum gegarandeerd. Ben je verder in je zwangerschap? Neem gerust contact op — vaak kan ik alsnog iets betekenen.",
  },
  {
    question: "Hoeveel uur kraamzorg krijg ik?",
    answer:
      "Het aantal uur wordt bepaald door de indicatie van je verloskundige of het kraamzorgbureau, meestal tussen de 24 en 80 uur, verdeeld over 8 tot 10 dagen. Tijdens het intakegesprek bespreken we wat past bij jouw situatie en wensen.",
  },
  {
    question: "In welke plaatsen bied je kraamzorg aan?",
    answer:
      "Ik werk in heel de Zaanstreek en omgeving: Zaandam, Koog aan de Zaan, Wormerveer, Zaandijk, Oostzaan, Assendelft, Westzaan en Amsterdam-Noord. Woon je net buiten dit gebied? Bel of app me gerust om de mogelijkheden te bespreken.",
  },
  {
    question: "Bied je ook begeleiding in het Arabisch?",
    answer:
      "Ja, ik ben tweetalig en begeleid gezinnen in zowel het Nederlands als het Arabisch. Geen taalbarrières, maar een vertrouwd gesprek in jouw eigen taal — ook tijdens het intakegesprek en de kraamweek zelf.",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-cream-50 to-cream-50 pt-32 lg:pt-40">
        <div
          className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-blush-100 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-cream-200 blur-3xl"
          aria-hidden="true"
        />
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
                  <svg
                    viewBox="0 0 220 22"
                    fill="none"
                    className="absolute -bottom-2 left-0 w-full text-blush-300"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 17C60 7 160 7 217 14"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-plum-500">
                <strong className="font-bold text-plum-800">
                  Gefeliciteerd met je zwangerschap!
                </strong>{" "}
                De eerste dagen na de geboorte zijn bijzonder, maar kunnen ook
                spannend zijn. Ik ben <strong className="font-bold text-plum-800">Fatima</strong> —
                tijdens de kraamweek sta ik naast je, zodat je met vertrouwen
                herstelt en geniet van je baby.
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
                {[
                  "100% vergoed",
                  "KCKZ-gecertificeerd",
                  "NL & العربية",
                ].map((chip) => (
                  <li key={chip} className="inline-flex items-center gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4.5 w-4.5 text-rose-500"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[3rem] bg-blush-100 blur-2xl"
                aria-hidden="true"
              />
              <Image
                src="/images/hero-kraamzorg.webp"
                alt="Sfeervolle babykamer in warme roze en crème tinten — Inas Kraamzorg Zaandam"
                width={2048}
                height={1152}
                priority
                className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
              />
              <div className="absolute -bottom-6 -left-4 rounded-3xl bg-white px-6 py-5 shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)] sm:-left-8">
                <p className="font-display text-3xl font-semibold text-rose-600">
                  200+
                </p>
                <p className="text-sm font-bold text-plum-700">
                  tevreden gezinnen
                </p>
              </div>
              <div className="absolute -top-5 -right-3 rounded-3xl bg-plum-900 px-6 py-4 shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)] sm:-right-6">
                <p className="text-sm font-bold text-white">
                  100% vergoed
                </p>
                <p className="text-xs text-cream-100/70">
                  door alle zorgverzekeraars
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== USP's ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {usps.map((usp, i) => (
            <Reveal
              key={usp.title}
              delay={i * 120}
              className="group rounded-[2rem] border border-blush-100 bg-white p-8 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-100 text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d={usp.icon} />
                </svg>
              </span>
              <h2 className="font-display mt-6 text-2xl font-medium text-plum-900">
                {usp.title}
              </h2>
              <p className="mt-3 leading-relaxed text-plum-500">{usp.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== KENNISMAKING MET FATIMA ===== */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="relative order-2 lg:order-1">
            <Image
              src="/images/fatima-in-actie.webp"
              alt="Kraamverzorgster Fatima van Inas Kraamzorg met een pasgeboren baby"
              width={400}
              height={300}
              className="aspect-[4/3.4] w-full rounded-[2.5rem] object-cover object-top shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
            <div className="absolute -right-4 -bottom-6 max-w-[15rem] rounded-3xl bg-rose-500 px-6 py-5 text-white shadow-[0_24px_60px_-20px_rgb(46_27_36/0.35)] sm:-right-8">
              <p className="font-display text-lg leading-snug font-medium">
                &ldquo;Je voelt je nooit alleen in je kraamweek&rdquo;
              </p>
            </div>
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
                Met persoonlijke aandacht, rust en professionele begeleiding
                zorg ik ervoor dat jij je nooit alleen voelt. Met een
                achtergrond in zowel de Nederlandse als Arabische cultuur
                begrijp ik hoe belangrijk persoonlijke aandacht is tijdens deze
                bijzondere periode.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["6+ jaar", "ervaring in kraamzorg"],
                  ["200+", "gezinnen begeleid"],
                  ["100%", "vergoed door verzekeraar"],
                  ["24/7", "bereikbaar in je kraamweek"],
                ].map(([stat, label]) => (
                  <li
                    key={label}
                    className="rounded-2xl border border-blush-100 bg-white px-5 py-4"
                  >
                    <p className="font-display text-2xl font-semibold text-rose-600">
                      {stat}
                    </p>
                    <p className="text-sm font-semibold text-plum-500">
                      {label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={400}>
              <Link
                href="/over-mij/"
                className="group mt-9 inline-flex items-center gap-2 font-bold text-rose-600 transition-colors hover:text-rose-700"
              >
                Meer over mij
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== DIENSTEN ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Wat ik voor je doe</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
              Complete kraamzorg, helemaal op jou afgestemd
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-plum-500">
              Van medische controles tot een luisterend oor — tijdens de
              kraamweek zorg ik voor moeder, baby én het hele gezin.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diensten.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 3) * 100}
              className="rounded-[2rem] border border-blush-100 bg-white p-8 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            >
              <span
                className="font-display text-4xl font-semibold text-blush-300"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-xl font-medium text-plum-900">
                {d.title}
              </h3>
              <p className="mt-3 leading-relaxed text-plum-500">{d.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-12 text-center">
          <Link
            href="/kraamzorg/"
            className="inline-flex items-center gap-2 rounded-full bg-plum-900 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-plum-800"
          >
            Alles over kraamzorg
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Reveal>
      </section>

      {/* ===== ZO WERKT HET ===== */}
      <section className="bg-plum-900 py-20 text-cream-100 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-bold tracking-[0.14em] text-blush-300 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" aria-hidden="true" />
                Zo werkt het
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                In vier stappen geregeld
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-5 text-lg leading-relaxed text-cream-100/75">
                Van aanmelding tot de eerste kraamdag — ik neem je bij de hand
                en regel alles met je verloskundige en zorgverzekeraar.
              </p>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stappen.map((stap, i) => (
              <Reveal
                as="li"
                key={stap.title}
                delay={i * 120}
                className="relative rounded-[2rem] bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span
                  className="font-display text-5xl font-semibold text-rose-400"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="font-display mt-5 text-xl font-medium text-white">
                  {stap.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cream-100/70">
                  {stap.text}
                </p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={300} className="mt-12 text-center">
            <a
              href={site.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_-8px_rgb(229_64_126/0.5)] transition-all hover:-translate-y-0.5 hover:bg-rose-400"
            >
              Start je aanmelding
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== WERKGEBIED ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Werkgebied</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Kraamzorg aan huis in heel de Zaanstreek
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-plum-500">
                Ik bied kraamzorg aan huis in Zaandam en omliggende plaatsen.
                In alle rust en met aandacht — bij jou in de buurt. Meer dan{" "}
                <strong className="font-bold text-plum-800">200 gezinnen</strong>{" "}
                in de Zaanstreek kozen al voor mijn persoonlijke aanpak.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {werkgebied.map((plaats) => (
                  <li
                    key={plaats}
                    className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white px-4 py-2 text-sm font-bold text-plum-700"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 text-rose-500"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {plaats}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Image
              src="/images/gezin-baby.webp"
              alt="Gelukkig gezin met pasgeboren baby na kraamzorg in Zaandam"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
        </div>
      </section>

      {/* ===== REVIEWS TEASER ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="order-2 lg:order-1">
            <Image
              src="/images/stilleven-kraamzorg.webp"
              alt="Zachte roze hydrofiele doek met gebreide babyslofjes — kraamzorg Zaandam"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>Ervaringen van ouders</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Gezinnen over Inas Kraamzorg
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-plum-500">
                Niets zegt meer dan de ervaringen van ouders die je
                voorgingen. Lees op Google wat gezinnen in Zaandam en de
                Zaanstreek over mijn begeleiding schrijven — en waarom zij
                andere ouders Inas Kraamzorg aanraden.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/reviews/"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-plum-900 px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_-8px_rgb(46_27_36/0.45)] transition-all hover:-translate-y-0.5 hover:bg-rose-600"
                >
                  Lees de reviews
                </Link>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blush-200 bg-white/60 px-8 py-4 text-base font-bold text-plum-800 transition-colors hover:border-rose-400 hover:text-rose-600"
                >
                  Volg op Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
              Alles wat je wilt weten over kraamzorg
            </h2>
          </Reveal>
        </div>
        <Reveal delay={200} className="mt-14">
          <Faq items={faqs} />
        </Reveal>
        <FaqJsonLd items={faqs} />
      </section>

      {/* ===== CTA ===== */}
      <CtaBanner />
    </>
  );
}
