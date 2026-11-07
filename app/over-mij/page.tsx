import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { CtaBanner, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Over mij | Fatima, kraamverzorgster in Zaandam",
  description:
    "Maak kennis met Fatima, gediplomeerd kraamverzorgster in Zaandam. Warme, rustige begeleiding tijdens je kraamtijd, ook in het Arabisch. Respect voor cultuur en privacy.",
  alternates: { canonical: "/over-mij/" },
};

const eigenschappen = [
  {
    title: "Betrokken",
    text: "Persoonlijke aandacht voor jouw gezin",
  },
  {
    title: "Rustig",
    text: "Werkt op een kalme, gestructureerde manier",
  },
  {
    title: "Respectvol",
    text: "Oog voor cultuur, tradities en gewoonten",
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
        title="Maak kennis met Fatima"
        intro="Gediplomeerd kraamverzorgster in Zaandam. Warme, rustige begeleiding tijdens je kraamtijd, met oog voor cultuur en privacy."
      />

      {/* Introductie */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-20">
          <Reveal className="relative lg:col-span-2">
            <Image
              src="/images/fatima-in-actie.webp"
              alt="Fatima, kraamverzorgster in Zaandam"
              width={400}
              height={300}
              priority
              className="aspect-[4/4.4] w-full rounded-[2.5rem] object-cover object-top shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
            />
            <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-white px-6 py-4 text-center shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]">
              <p className="font-display text-lg font-semibold text-plum-900">Fatima</p>
              <p className="text-sm font-semibold text-rose-600">Gediplomeerd kraamverzorgster</p>
            </div>
          </Reveal>
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>Passie voor kraamzorg</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
                Warmte en deskundigheid wanneer het ertoe doet
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-plum-500">
                <p>
                  Als kraamverzorgster met een achtergrond in zowel de Nederlandse als de Arabische cultuur begrijp ik hoe belangrijk persoonlijke aandacht, respect en privacy zijn tijdens de kraamtijd.
                </p>
                <p>
                  Met ruim 6 jaar ervaring begeleid ik gezinnen in Zaandam en de Zaanstreek. Mijn wens is dat de eerste dagen met je baby veilig en vertrouwd voelen, of je nu kiest voor een thuisbevalling of in het ziekenhuis bevalt.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {eigenschappen.map((e) => (
                  <div key={e.title} className="rounded-3xl border border-blush-100 bg-white p-6 text-center shadow-sm">
                    <h3 className="font-display text-lg font-medium text-plum-900">{e.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-plum-500">{e.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tweetalige zorg */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-[2.5rem] bg-plum-900 px-6 py-14 text-center sm:px-12 lg:py-16">
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
              Ik begeleid gezinnen in zowel het Nederlands als het Arabisch. Zo kun je in de taal praten waarin jij je het prettigst voelt, zonder taalbarrière.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <span className="rounded-full bg-white/10 px-6 py-3 text-lg font-bold text-white">Nederlands</span>
              <span lang="ar" className="rounded-full bg-rose-500 px-6 py-3 text-lg font-bold text-white">
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
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
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
                    <h3 className="font-display text-xl font-medium text-plum-900">{stap.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-plum-500">{stap.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={400}>
              <Link
                href="/contact/"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-plum-900 px-8 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-rose-600"
              >
                Plan een vrijblijvend gesprek
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Image
              src="/images/hero-kraamzorg.webp"
              alt="Rustige sfeer tijdens de kraamtijd in Zaandam"
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
