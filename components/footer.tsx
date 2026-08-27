import Link from "next/link";
import Image from "next/image";
import { footerCertLinks, navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-plum-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Merk */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5">
                <Image
                  src="/images/logo-icon.webp"
                  alt="Inas Kraamzorg logo"
                  width={48}
                  height={40}
                  className="h-full w-auto"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl font-semibold text-white">
                  Inas
                </span>
                <span className="text-xs font-bold tracking-[0.22em] text-blush-300 uppercase">
                  Kraamzorg
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream-100/75">
              Persoonlijke kraamzorg in Zaandam en de Zaanstreek. Samen zorgen
              we voor een rustige en vertrouwde start voor jou en je baby.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Volg Inas Kraamzorg op Instagram"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-rose-500"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>

          {/* Pagina's */}
          <nav aria-label="Footer navigatie">
            <h2 className="text-sm font-bold tracking-[0.18em] text-blush-300 uppercase">
              Pagina&apos;s
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-cream-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.signup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-400 transition-colors hover:text-rose-300"
                >
                  Meld je nu aan
                </a>
              </li>
            </ul>
          </nav>

          {/* Kwaliteit & vergoeding */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.18em] text-blush-300 uppercase">
              Kwaliteit &amp; vergoeding
            </h2>
            <ul className="mt-5 space-y-3">
              {footerCertLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-cream-100/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-blush-300"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              100% vergoed door alle zorgverzekeraars
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.18em] text-blush-300 uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-[15px] text-cream-100/75">
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>Zaandam &amp; de Zaanstreek</li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp mij direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-cream-100/60 md:flex-row">
          <p>
            ©{year} {site.legalName}. Alle rechten voorbehouden.
          </p>
          <p>
            Gemaakt met <span aria-hidden="true">♥</span> voor een warme start
          </p>
          <p>
            Webdesign door{" "}
            <a
              href="https://www.webboostpartner.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blush-300 transition-colors hover:text-white"
            >
              Webboostpartner
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
