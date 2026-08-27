import type { Metadata } from "next";
import { site } from "@/lib/site";
import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";
import { Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact — Neem vrijblijvend contact op",
  description:
    "Neem contact op met Inas Kraamzorg in Zaandam. Bel 06-24933335, mail info@inaskraamzorg.nl of stuur een bericht via het contactformulier. Reactie binnen 2 uur op werkdagen.",
  alternates: { canonical: "/contact/" },
};

const contactKaarten = [
  {
    title: "Bellen",
    value: site.phone,
    href: site.phoneHref,
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
    external: false,
  },
  {
    title: "WhatsApp",
    value: "App mij direct",
    href: site.whatsapp,
    icon: "M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z",
    external: true,
  },
  {
    title: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
    external: false,
  },
  {
    title: "Instagram",
    value: "@kraamzorg_inas",
    href: site.instagram,
    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
    external: true,
  },
];

const stappen = [
  { title: "Jouw gegevens", text: "Vul het formulier in" },
  { title: "Jouw vraag", text: "Ik ontvang je bericht direct" },
  { title: "Ik neem contact op", text: "Binnen 2 uur op werkdagen" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Neem vrijblijvend contact op"
        intro="Heb je een vraag of wil je kennismaken? Een goed gesprek is de basis van vertrouwen — ik denk graag met je mee."
      />

      {/* Contactkaarten */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactKaarten.map((kaart, i) => (
            <Reveal key={kaart.title} delay={i * 100}>
              <a
                href={kaart.href}
                {...(kaart.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col items-center rounded-[2rem] border border-blush-100 bg-white p-7 text-center shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgb(46_27_36/0.22)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blush-100 p-3.5 text-rose-600 transition-colors group-hover:bg-rose-500 group-hover:text-white">
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
                    <path d={kaart.icon} />
                  </svg>
                </span>
                <h2 className="font-display mt-4 text-lg font-medium text-plum-900">
                  {kaart.title}
                </h2>
                <p className="mt-1 text-sm font-semibold break-all text-rose-600">
                  {kaart.value}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formulier */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <Eyebrow>Stuur een bericht</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl leading-tight font-medium tracking-tight text-plum-900 text-balance sm:text-4xl">
                Ik reageer binnen 2 uur op werkdagen
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-relaxed text-plum-500">
                Het formulier is de snelste manier om contact op te nemen.
                Vertel me waar je bent in je zwangerschap en wat je zoekt — ik
                denk vrijblijvend met je mee.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <ol className="mt-10 space-y-5">
                {stappen.map((stap, i) => (
                  <li key={stap.title} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blush-100 font-display text-lg font-semibold text-rose-600">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold text-plum-900">{stap.title}</p>
                      <p className="text-sm text-plum-500">{stap.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 rounded-3xl bg-blush-50 p-6">
                <p className="font-bold text-plum-900">
                  Liever direct aanmelden?
                </p>
                <p className="mt-1.5 leading-relaxed text-plum-500">
                  Je kunt je ook meteen aanmelden voor kraamzorg via mijn
                  partner Kraamzorg 1op1.
                </p>
                <a
                  href={site.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-rose-600 transition-colors hover:text-rose-700"
                >
                  Meld je nu aan
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
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
