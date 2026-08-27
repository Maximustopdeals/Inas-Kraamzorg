"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-2xl border border-blush-200 bg-cream-50/60 px-5 py-3.5 text-plum-900 placeholder:text-plum-500/50 outline-none transition-all focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-blush-100";

const labelClass = "mb-2 block text-sm font-bold text-plum-800";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(site.formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-blush-100 bg-white p-10 text-center shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)]">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blush-100 text-rose-600">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
            aria-hidden="true"
          >
            <path d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </span>
        <h2 className="font-display mt-6 text-2xl font-medium text-plum-900">
          Bedankt voor je bericht!
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-plum-500">
          Je aanvraag is goed ontvangen. Ik neem zo snel mogelijk contact met
          je op — op werkdagen binnen 2 uur. Liever direct contact? Bel of app
          mij via{" "}
          <a
            href={site.phoneHref}
            className="font-bold text-rose-600 hover:text-rose-700"
          >
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-blush-100 bg-white p-6 shadow-[0_10px_40px_-12px_rgb(205_45_106/0.15)] sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className={labelClass}>
            Wat is je naam <span className="text-rose-500">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            autoComplete="name"
            placeholder="Je voor- en achternaam"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Wat is je e-mailadres <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jij@voorbeeld.nl"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="telefoon" className={labelClass}>
            Telefoonnummer <span className="text-rose-500">*</span>
          </label>
          <input
            id="telefoon"
            name="telefoonnummer"
            type="tel"
            required
            autoComplete="tel"
            placeholder="06 - 12 34 56 78"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="uitgerekend" className={labelClass}>
            Baby verwacht op <span className="text-rose-500">*</span>
          </label>
          <input
            id="uitgerekend"
            name="baby_verwacht_op"
            type="date"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="verloskundige" className={labelClass}>
            Verloskundige (naam)
          </label>
          <input
            id="verloskundige"
            name="verloskundige"
            type="text"
            placeholder="Naam van je verloskundigenpraktijk"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="zorgverzekeraar" className={labelClass}>
            Zorgverzekeraar
          </label>
          <input
            id="zorgverzekeraar"
            name="zorgverzekeraar"
            type="text"
            placeholder="Bijv. Zilveren Kruis, CZ, VGZ"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="gevonden" className={labelClass}>
            Hoe heb je mij gevonden? <span className="text-rose-500">*</span>
          </label>
          <select
            id="gevonden"
            name="hoe_gevonden"
            required
            defaultValue=""
            className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%236d4a5b%22%3E%3Cpath fill-rule=%22evenodd%22 d=%22M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z%22 clip-rule=%22evenodd%22/%3E%3C/svg%3E')] bg-[length:1.25rem] bg-[right_1.25rem_center] bg-no-repeat pr-12`}
          >
            <option value="" disabled>
              Maak een keuze
            </option>
            <option value="Google">Google</option>
            <option value="Facebook / Instagram">Facebook / Instagram</option>
            <option value="Familie / vrienden">Familie / vrienden</option>
            <option value="Anders">Anders</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="info" className={labelClass}>
            Aanvullende informatie
          </label>
          <textarea
            id="info"
            name="aanvullende_informatie"
            rows={5}
            placeholder="Vertel hier alles wat je mij wilt laten weten — bijvoorbeeld over je wensen, je gezinssituatie of vragen die je hebt."
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 rounded-2xl bg-red-50 px-5 py-4 text-sm font-semibold text-red-700"
        >
          Er ging iets mis bij het verzenden. Probeer het opnieuw of bel mij
          direct via {site.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 w-full rounded-full bg-plum-900 px-8 py-4 text-base font-bold text-white shadow-[0_12px_32px_-8px_rgb(46_27_36/0.45)] transition-all hover:-translate-y-0.5 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Verzenden…" : "Verzenden"}
      </button>
      <p className="mt-4 text-center text-sm text-plum-500">
        Je gegevens worden vertrouwelijk behandeld en alleen gebruikt om
        contact met je op te nemen.
      </p>
    </form>
  );
}
