import Image from "next/image";
import type { Metadata } from "next";
import { site, verzekeraars, werkgebied } from "@/lib/site";
import Reveal from "@/components/reveal";
import Faq, { FaqJsonLd } from "@/components/faq";
import { CtaBanner, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kraamzorg in Zaandam — Warme, professionele zorg aan huis",
  description:
    "Professionele kraamzorg in Zaandam en de Zaanstreek: medische controles, borstvoedingsbegeleiding, babyverzorging en emotionele steun. 100% vergoed vanuit de basisverzekering, geen eigen risico.",
  alternates: { canonical: "/kraamzorg/" },
};

const diensten = [
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Medische controles",
    text: "Dagelijkse gezondheidschecks voor moeder en baby: temperatuur, gewicht van je baby, wondgenezing, navelverzorging en het algemene welzijn. Ik houd de ontwikkeling nauwlettend in de gaten en schakel bij twijfel direct je verloskundige in.",
  },
  {
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    title: "Borstvoedingsbegeleiding",
    text: "Deskundige ondersteuning bij aanleggen, drinkhouding en voedingsmomenten. Met geduld en praktische tips help ik je op weg. Kies je voor flesvoeding? Ook dan begeleid ik je met dezelfde zorg en aandacht.",
  },
  {
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    title: "Babyverzorging",
    text: "Van het eerste badje tot verschonen en het herkennen van de signalen van je baby. Ik leer jou en je partner alle basisvaardigheden met geduld, zodat jullie vol vertrouwen verder kunnen.",
  },
  {
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75",
    title: "Huishoudelijke hulp",
    text: "Lichte ondersteuning in en om het huis: een opgeruimde keuken, een wasje, boodschappen of een maaltijd. Zodat jij kunt rusten en al je energie in je herstel en je baby kunt steken.",
  },
  {
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    title: "Voorlichting & advies",
    text: "Praktisch advies over je herstel, voeding, het slaapritme van je baby en alles wat bij de kraamperiode komt kijken. Geen vraag is te klein — ik neem de tijd voor al je vragen.",
  },
  {
    icon: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z",
    title: "Emotionele steun",
    text: "De kraamtijd brengt veel emoties met zich mee — van euforie tot onzekerheid. Ik bied een luisterend oor, herkennen en erkenning, en begripvolle begeleiding in jouw tempo.",
  },
];

const redenen = [
  {
    title: "Vaste verzorgende",
    text: "Altijd dezelfde vertrouwde persoon voor jou en je baby. Geen wisselende gezichten, maar één betrokken kraamverzorgster.",
  },
  {
    title: "Tweetalig",
    text: "Duidelijke uitleg in het Nederlands én het Arabisch. Communicatie in de taal waarin jij je het prettigst voelt.",
  },
  {
    title: "Persoonlijk",
    text: "Zorg die past bij jouw wensen, gewoonten en cultuur. Jullie gezin staat centraal in alles wat ik doe.",
  },
  {
    title: "Flexibel",
    text: "Een planning die aansluit bij jullie ritme en de behoeften van je gezin — geen strakke schema's, maar zorg op maat.",
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

const intakePunten = [
  { title: "Gezondheid", text: "Jouw gezondheid en die van je baby" },
  { title: "Geboorteplan", text: "Thuis of in het ziekenhuis" },
  { title: "Zorguren", text: "Hoeveel uur zorg je wenst" },
  { title: "Gezin", text: "Ondersteuning voor partner en kinderen" },
  { title: "Voeding", text: "Borstvoeding of flesvoeding" },
  { title: "Bijzonderheden", text: "Medische gegevens of allergieën" },
];

const faqs = [
  {
    question: "Wat doet een kraamverzorgende precies?",
    answer:
      "Een kraamverzorgende controleert dagelijks de gezondheid van moeder en baby, begeleidt bij borst- of flesvoeding, leert je alle vaardigheden voor de babyverzorging, helpt licht in het huishouden en biedt emotionele steun. Zij is het verlengstuk van je verloskundige in huis.",
  },
  {
    question: "Hoe lang duurt de kraamweek?",
    answer:
      "De kraamperiode duurt officieel 8 tot 10 dagen na de geboorte. Het aantal zorguren per dag hangt af van je indicatie en persoonlijke situatie — meestal tussen de 3 en 8 uur per dag. Tijdens de intake stemmen we dit af op jullie wensen.",
  },
  {
    question: "Wat kost kraamzorg mij?",
    answer:
      "Niets. Kraamzorg wordt volledig vergoed vanuit de basisverzekering en valt niet onder het eigen risico. Ik werk met alle grote zorgverzekeraars, waaronder Zilveren Kruis, CZ, VGZ, Menzis en DSW.",
  },
  {
    question: "Wanneer vindt het intakegesprek plaats?",
    answer:
      "Het intakegesprek plannen we rond de 30e tot 34e week van je zwangerschap, bij jou thuis of telefonisch. We bespreken je wensen, het geboorteplan, de zorguren en eventuele bijzonderheden, zodat de zorg helemaal past bij jullie gezin.",
  },
  {
    question: "Kan ik ook kraamzorg krijgen na een ziekenhuisbevalling?",
    answer:
      "Ja, zeker. Of je nu thuis of in het ziekenhuis bevalt: zodra jullie naar huis gaan, start de kraamzorg. Ik stem het tijdstip van de eerste zorgdag af op het moment dat jullie thuiskomen.",
  },
];

export default function KraamzorgPage() {
  return (
    <>
      <PageHero
        eyebrow="Kraamzorg in Zaandam"
        title="Warme, deskundige kraamzorg aan huis"
        intro="Persoonlijke en professionele kraamzorg in Zaandam en omgeving. Met aandacht, rust en vertrouwen begeleid ik jouw gezin tijdens de kraamweek — volledig vergoed vanuit de basisverzekering."
      />

      {/* Badges */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <ul className="-mt-2 flex flex-wrap justify-center gap-3 pb-4">
            {[
              "100% vergoed door zorgverzekeraars",
              "Nederlands & Arabisch",
              "24/7 bereikbaar in je kraamweek",
            ].map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white px-5 py-2.5 text-sm font-bold text-plum-700 shadow-sm"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-rose-500"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Wat doe ik */}
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
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-plum-500">
              Kraamzorg is meer dan zorg alleen — het is rust, vertrouwen en
              deskundigheid op het kwetsbaarste én mooiste moment van jullie
              leven.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {diensten.map((d, i) => (
            <Reveal
              key={d.title}
              delay={(i % 3) * 100}
              className="group rounded-[2rem] border border-blush-100 bg-white p-8 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-100 text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d={d.icon} />
                </svg>
              </span>
              <h3 className="font-display mt-6 text-xl font-medium text-plum-900">
                {d.title}
              </h3>
              <p className="mt-3 leading-relaxed text-plum-500">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Waarom kiezen */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <Eyebrow>Waarom Inas Kraamzorg</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Waarom gezinnen voor mij kiezen
              </h2>
            </Reveal>
            <div className="mt-10 space-y-5">
              {redenen.map((r, i) => (
                <Reveal
                  key={r.title}
                  delay={i * 100}
                  className="flex gap-5 rounded-3xl border border-blush-100 bg-white p-6 shadow-sm"
                >
                  <span
                    className="font-display text-3xl font-semibold text-blush-300"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-plum-900">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-plum-500">
                      {r.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150}>
            <Image
              src="/images/banner-slapende-baby.webp"
              alt="Vredig slapende pasgeboren baby tijdens de kraamweek in Zaandam"
              width={394}
              height={589}
              className="aspect-[3/4] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Vergoeding */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Image
              src="/images/zorgmoment.webp"
              alt="Warme, rustige woonkamer voorbereid op de kraamweek"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Volledig vergoed</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Geen eigen risico, geen verrassingen
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-plum-500">
                Kraamzorg wordt vergoed vanuit de basisverzekering en valt{" "}
                <strong className="font-bold text-plum-800">
                  niet onder je eigen risico
                </strong>
                . Ik werk met alle grote zorgverzekeraars, zodat jij je geen
                zorgen hoeft te maken over de kosten.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {verzekeraars.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-blush-200 bg-white px-5 py-2.5 text-sm font-bold text-plum-700"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={400}>
              <a
                href="https://www.zorgwijzer.nl/vergoeding/kraamzorg"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 font-bold text-rose-600 transition-colors hover:text-rose-700"
              >
                Bekijk de kraamzorguren en vergoedingen 2026
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
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zo werkt het */}
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
                Van aanmelding tot kraamweek
              </h2>
            </Reveal>
          </div>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stappen.map((stap, i) => (
              <Reveal
                as="li"
                key={stap.title}
                delay={i * 120}
                className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
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
              Meld je aan voor kraamzorg
            </a>
          </Reveal>
        </div>
      </section>

      {/* Intakegesprek */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Het intakegesprek</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Samen bereiden we de kraamweek voor
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-plum-500">
                Voor de geboorte plannen we een intakegesprek — bij jou thuis
                of telefonisch. Zo leren we elkaar kennen en stemmen we de zorg
                af op jouw situatie. We bespreken jouw wensen, gewoonten en
                eventuele bijzonderheden, zodat je kraamzorg helemaal past bij
                jullie gezin.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {intakePunten.map((p) => (
                  <li
                    key={p.title}
                    className="rounded-2xl border border-blush-100 bg-white px-5 py-4"
                  >
                    <p className="font-bold text-plum-900">{p.title}</p>
                    <p className="mt-0.5 text-sm text-plum-500">{p.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Image
              src="/images/baby-homepage.webp"
              alt="Pasgeboren baby slaapt rustig — kraamzorg op maat in de Zaanstreek"
              width={480}
              height={320}
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <Eyebrow>Werkgebied in Noord-Holland</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
              Altijd dichtbij, in de hele Zaanstreek
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-500">
              Ik bied kraamzorg aan huis in Zaandam en omliggende plaatsen. In
              alle rust en met aandacht, bij jou in de buurt.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {werkgebied.map((plaats) => (
                <li
                  key={plaats}
                  className="inline-flex items-center gap-2 rounded-full border border-blush-200 bg-white px-5 py-2.5 text-sm font-bold text-plum-700"
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
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Veelgestelde vragen</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
              Vragen over kraamzorg?
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
