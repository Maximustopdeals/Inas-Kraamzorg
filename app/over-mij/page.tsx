import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import { CtaBanner, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Over mij — Maak kennis met kraamverzorgster Fatima",
  description:
    "Maak kennis met Fatima, gediplomeerd kraamverzorgster in Zaandam. Warme, persoonlijke zorg en tweetalige begeleiding (Nederlands/Arabisch) bij jou thuis in de Zaanstreek.",
  alternates: { canonical: "/over-mij/" },
};

const eigenschappen = [
  {
    title: "Betrokken",
    text: "Persoonlijke aandacht voor jouw gezin",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    title: "Rustig",
    text: "Werkt op een kalme, gestructureerde manier",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
  },
  {
    title: "Respectvol",
    text: "Oog voor cultuur, tradities en gewoonten",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
];

const expertise = [
  {
    title: "Borstvoedingsbegeleiding",
    text: "Ondersteuning bij aanleggen en voeden, met geduld en deskundigheid.",
  },
  {
    title: "Babyverzorging",
    text: "Van badje tot verschonen — ik leer je alle basisvaardigheden.",
  },
  {
    title: "Medische controles",
    text: "Dagelijkse controle van moeder en kind met aandacht voor signalen.",
  },
  {
    title: "Huishoudelijke zorg",
    text: "Lichte ondersteuning zodat jij rustig kunt herstellen.",
  },
];

const werkwijze = [
  {
    title: "Kennismaken",
    text: "We maken kennis en bespreken jouw wensen. Dit kan bij jou thuis of telefonisch, in het Nederlands of het Arabisch.",
  },
  {
    title: "Zorg op maat",
    text: "Samen stemmen we de zorg af op jouw situatie, zodat jij je gesteund en gehoord voelt.",
  },
  {
    title: "Begeleiding",
    text: "Tijdens de kraamweek sta ik voor je klaar met zorg, advies en een luisterend oor.",
  },
];

export default function OverMijPage() {
  return (
    <>
      <PageHero
        eyebrow="Over mij"
        title="Maak kennis met Fatima — jouw kraamverzorgster in Zaandam"
        intro="Warme, persoonlijke zorg en tweetalige ondersteuning (Nederlands/Arabisch) bij jou thuis in de Zaanstreek."
      />

      {/* Introductie */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-20">
          <Reveal className="relative lg:col-span-2">
            <div
              className="absolute -inset-4 -z-10 rounded-[3rem] bg-blush-100 blur-2xl"
              aria-hidden="true"
            />
            <Image
              src="/images/fatima-in-actie.webp"
              alt="Fatima — gediplomeerd kraamverzorgster van Inas Kraamzorg Zaandam"
              width={400}
              height={300}
              priority
              className="aspect-[4/4.4] w-full rounded-[2.5rem] object-cover object-top shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-white px-6 py-4 text-center shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]">
              <p className="font-display text-lg font-semibold text-plum-900">
                Fatima
              </p>
              <p className="text-sm font-semibold text-rose-600">
                Gediplomeerd kraamverzorgster
              </p>
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>Passie voor kraamzorg</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
                Warmte en deskundigheid, precies wanneer het ertoe doet
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-plum-500">
                <p>
                  Als kraamverzorgster met een achtergrond in zowel de
                  Nederlandse als Arabische cultuur begrijp ik hoe belangrijk
                  persoonlijke aandacht is tijdens deze bijzondere periode.
                  Mijn wens is om jonge gezinnen in Zaandam met warmte en
                  deskundigheid te begeleiden.
                </p>
                <p>
                  Met ruim <strong className="font-bold text-plum-800">6 jaar ervaring</strong>{" "}
                  in kraamzorg en expertise in borstvoedingsbegeleiding stem ik
                  mijn zorg af op jouw persoonlijke wensen en situatie. In alle
                  rust en met respect voor jullie gezin — zodat de eerste dagen
                  met je baby voelen zoals ze horen te voelen: veilig en
                  vertrouwd.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {eigenschappen.map((e) => (
                  <div
                    key={e.title}
                    className="rounded-3xl border border-blush-100 bg-white p-6 text-center shadow-sm"
                  >
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-100 text-rose-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d={e.icon} />
                      </svg>
                    </span>
                    <h3 className="font-display mt-4 text-lg font-medium text-plum-900">
                      {e.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-plum-500">
                      {e.text}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-gradient-to-b from-cream-50 via-blush-50/60 to-cream-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <Eyebrow>Mijn expertise</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Deskundige zorg, van begin tot eind
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((e, i) => (
              <Reveal
                key={e.title}
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
                  {e.title}
                </h3>
                <p className="mt-3 leading-relaxed text-plum-500">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tweetalige zorg */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2.5rem] bg-plum-900 px-6 py-14 text-center shadow-[0_32px_80px_-24px_rgb(46_27_36/0.5)] sm:px-12 lg:py-16">
          <Reveal>
            <Eyebrow>Tweetalige zorg</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mx-auto mt-6 max-w-2xl text-3xl leading-tight font-medium text-white text-balance sm:text-4xl">
              Een vertrouwd gesprek in jouw eigen taal
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-100/75">
              Als tweetalige kraamverzorgster zorg ik voor heldere communicatie
              en begrip. Geen taalbarrières — maar rust, duidelijkheid en
              aandacht in de taal die bij jou past.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <span className="rounded-full bg-white/10 px-6 py-3 text-lg font-bold text-white">
                Nederlands
              </span>
              <span
                lang="ar"
                className="rounded-full bg-rose-500 px-6 py-3 text-lg font-bold text-white"
              >
                العربية (Arabisch)
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Mijn werkwijze</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl lg:text-5xl">
                Persoonlijk, rustig en op maat
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-6">
              {werkwijze.map((stap, i) => (
                <Reveal as="li" key={stap.title} delay={i * 120} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-500 font-display text-xl font-semibold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-plum-900">
                      {stap.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-plum-500">
                      {stap.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={400}>
              <Link
                href="/contact/"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-plum-900 px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_-8px_rgb(46_27_36/0.45)] transition-all hover:-translate-y-0.5 hover:bg-rose-600"
              >
                Plan een vrijblijvend gesprek
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Image
              src="/images/hero-kraamzorg.webp"
              alt="Sfeervolle, rustige babykamer — zo voelt kraamzorg van Inas Kraamzorg"
              width={2048}
              height={1152}
              className="aspect-[4/3] w-full rounded-[2.5rem] object-cover shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Zin in een vrijblijvend gesprek?"
        text="Plan een kennismaking en ontdek hoe ik jou en je gezin kan ondersteunen tijdens de kraamperiode."
      />
    </>
  );
}
