import Link from "next/link";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-1.5 text-[13px] font-bold tracking-[0.14em] text-rose-700 uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true" />
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-cream-50 to-cream-50 pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blush-100 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cream-200 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-display mt-6 text-4xl leading-[1.12] font-medium tracking-tight text-plum-900 text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-500">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CtaBanner({
  title = "Klaar voor een rustige en vertrouwde start?",
  text = "Meld je vrijblijvend aan voor kraamzorg in Zaandam en omgeving. Ik neem snel contact met je op voor een persoonlijke kennismaking.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-plum-900 px-6 py-16 text-center shadow-[0_32px_80px_-24px_rgb(46_27_36/0.5)] sm:px-12 lg:py-20">
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-blush-300/15 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="font-display relative mx-auto max-w-2xl text-3xl leading-tight font-medium text-white text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream-100/80">
            {text}
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-rose-500 px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_-8px_rgb(229_64_126/0.6)] transition-all hover:-translate-y-0.5 hover:bg-rose-400 sm:w-auto"
            >
              Meld je nu aan
            </a>
            <a
              href={site.phoneHref}
              className="w-full rounded-full border-2 border-white/25 px-8 py-4 text-base font-bold text-white transition-colors hover:border-white/50 hover:bg-white/5 sm:w-auto"
            >
              Bel {site.phone}
            </a>
          </div>
          <p className="relative mt-6 text-sm font-semibold text-blush-300">
            100% vergoed door alle zorgverzekeraars
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function ContactCard() {
  return (
    <Link
      href="/contact/"
      className="group inline-flex items-center gap-2 font-bold text-rose-600 transition-colors hover:text-rose-700"
    >
      Neem contact op
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
  );
}
