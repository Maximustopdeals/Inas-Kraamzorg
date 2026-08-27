"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-cream-50/90 shadow-[0_4px_30px_-10px_rgb(46_27_36/0.15)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Inas Kraamzorg — naar home"
        >
          <Image
            src="/images/logo-icon.webp"
            alt="Inas Kraamzorg logo"
            width={44}
            height={37}
            className="h-11 w-auto"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-plum-900">
              Inas
            </span>
            <span className="text-[11px] font-bold tracking-[0.22em] text-rose-600 uppercase">
              Kraamzorg
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Hoofdnavigatie"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-blush-100 text-rose-700"
                  : "text-plum-700 hover:bg-blush-50 hover:text-rose-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.signup}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full bg-plum-900 px-6 py-2.5 text-[15px] font-bold text-white shadow-[0_8px_24px_-8px_rgb(46_27_36/0.45)] transition-all hover:-translate-y-0.5 hover:bg-rose-600 hover:shadow-[0_12px_28px_-8px_rgb(46_27_36/0.55)]"
          >
            Meld je nu aan
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={site.signup}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-plum-900 px-4 py-2 text-sm font-bold whitespace-nowrap text-white transition-colors hover:bg-rose-600 shadow-[0_8px_24px_-8px_rgb(46_27_36/0.45)]"
          >
            Meld je nu aan
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blush-100 text-plum-800"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full rounded bg-current transition-all duration-300 ${open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      </header>

      {/* Mobiel menu — buiten <header> gehouden: de backdrop-blur van de
          header maakt de header anders het referentiekader voor dit vaste
          paneel, waardoor het op mobiel 0px hoog wordt en onzichtbaar blijft. */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-cream-50/98 backdrop-blur-xl transition-all duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col gap-2 overflow-y-auto px-6 pt-8 pb-16"
          aria-label="Mobiele navigatie"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={`rounded-2xl px-5 py-4 font-display text-2xl font-medium transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${
                isActive(link.href)
                  ? "bg-blush-100 text-rose-700"
                  : "text-plum-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={`mt-6 flex flex-col gap-3 transition-all delay-300 duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            <a
              href={site.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-plum-900 px-6 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-rose-600 shadow-[0_12px_32px_-10px_rgb(46_27_36/0.45)]"
            >
              Meld je nu aan
            </a>
            <a
              href={site.phoneHref}
              className="rounded-full border-2 border-blush-200 px-6 py-4 text-center text-lg font-bold text-plum-800"
            >
              Bel {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
