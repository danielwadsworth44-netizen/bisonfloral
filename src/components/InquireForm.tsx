"use client";

import { useState } from "react";

const eventTypes = [
  { value: "", label: "Event type" },
  { value: "wedding", label: "Wedding" },
  { value: "elopement", label: "Elopement" },
  { value: "dinner-party", label: "Dinner party" },
  { value: "corporate", label: "Corporate" },
  { value: "at-home", label: "At-home / editorial" },
  { value: "other-event", label: "Other" },
] as const;

const floralOptions = [
  { id: "bridal-bouquet", label: "Bridal bouquet" },
  { id: "bridesmaids-bouquets", label: "Bridesmaids" },
  { id: "boutonnieres", label: "Boutonnieres" },
  { id: "centerpieces", label: "Centerpieces" },
  { id: "ceremony-floral", label: "Ceremony" },
  { id: "other-floral", label: "Other" },
] as const;

/* text-base (16px) avoids iOS zoom on field focus */
const lineInput =
  "w-full min-w-0 border-0 border-b border-[#241915]/45 bg-transparent py-2.5 [font-family:var(--font-display)] text-base text-[#241915] outline-none transition placeholder:text-[#241915]/38 placeholder:italic focus:border-[#972d3e]";

const labelClass =
  "block [font-family:var(--font-display)] text-[0.95rem] text-[#241915] md:text-[1rem]";

export function InquireForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#d96889]/25 bg-surface px-5 py-8 text-center shadow-[0_8px_28px_rgba(151,45,62,0.06)]">
        <p className="[font-family:var(--font-display)] text-xl text-[#241915]">Thank you</p>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#4b3833]">
          Avery will reply soon. Instagram works too if you&apos;re in a hurry.
        </p>
      </div>
    );
  }

  return (
    <form
      className="mx-auto max-w-2xl min-w-0 space-y-7"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="inquire-names" className={labelClass}>
            Name(s) <span className="text-[#972d3e]">*</span>
          </label>
          <input
            id="inquire-names"
            name="names"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name(s)"
            className={`${lineInput} mt-1.5`}
          />
        </div>
        <div>
          <label htmlFor="inquire-email" className={labelClass}>
            Email <span className="text-[#972d3e]">*</span>
          </label>
          <input
            id="inquire-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={`${lineInput} mt-1.5`}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="inquire-event-type" className={labelClass}>
            Type
          </label>
          <div className="relative mt-1.5">
            <select
              id="inquire-event-type"
              name="eventType"
              defaultValue=""
              className={`${lineInput} cursor-pointer appearance-none pr-8`}
            >
              {eventTypes.map((opt) => (
                <option key={opt.value || "placeholder"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#241915]/45"
              aria-hidden
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="inquire-event-date" className={labelClass}>
            Date
          </label>
          <input
            id="inquire-event-date"
            name="eventDate"
            type="date"
            className={`${lineInput} mt-1.5 cursor-pointer [color-scheme:light]`}
          />
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <label htmlFor="inquire-location" className={labelClass}>
            Location
          </label>
          <input
            id="inquire-location"
            name="eventLocation"
            type="text"
            autoComplete="off"
            placeholder="Venue or area"
            className={`${lineInput} mt-1.5`}
          />
        </div>
      </div>

      <fieldset className="border-0 p-0">
        <legend className={`${labelClass} mb-2`}>Florals needed</legend>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-3">
          {floralOptions.map((opt) => (
            <li key={opt.id}>
              <label
                htmlFor={`floral-${opt.id}`}
                className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-md py-1 [font-family:var(--font-display)] text-sm text-[#241915] leading-tight active:bg-black/[0.03]"
              >
                <input
                  id={`floral-${opt.id}`}
                  name="florals"
                  type="checkbox"
                  value={opt.id}
                  className="h-4 w-4 shrink-0 rounded border-[#241915]/35 text-[#972d3e] focus:ring-[#972d3e]/35"
                />
                {opt.label}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <div>
        <label htmlFor="inquire-budget" className={labelClass}>
          Budget
        </label>
        <input
          id="inquire-budget"
          name="budget"
          type="text"
          placeholder="Rough range is fine—or say you're not sure yet"
          className={`${lineInput} mt-1.5`}
        />
      </div>

      <div>
        <label htmlFor="inquire-more" className={labelClass}>
          Anything else?
        </label>
        <textarea
          id="inquire-more"
          name="more"
          rows={3}
          placeholder="Palette, wedding party size, photographer—whatever helps"
          className="mt-2 w-full min-w-0 resize-y border border-[#241915]/18 bg-surface-elevated/90 px-3 py-2.5 [font-family:var(--font-display)] text-base text-[#241915] outline-none placeholder:text-[#241915]/38 placeholder:italic focus:border-[#972d3e]/45"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-full bg-[#aa004f] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition active:scale-[0.98] hover:bg-[#972d3e] sm:w-auto"
      >
        Send
      </button>
    </form>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
