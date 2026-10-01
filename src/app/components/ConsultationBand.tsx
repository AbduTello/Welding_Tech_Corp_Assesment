import { Phone } from "lucide-react";
import Image from "next/image";

import { PHONE } from "@/data/company";

import { BUTTON } from "./styles";

export default function ConsultationBand() {
  return (
    <section
      aria-labelledby="consultation-heading"
      className="relative isolate overflow-hidden px-4 py-14 text-white sm:py-20"
    >
      {/* Decorative: a support agent beside WTC's weld software, from the original homepage */}
      <Image
        src="/consultation-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Same deep navy as the Products band; keeps the text readable over the bright screens */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-ink/85" />

      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <h2
          id="consultation-heading"
          className="font-heading text-3xl font-medium text-balance sm:text-4xl"
        >
          Phone Consultation
        </h2>
        {/* Focus outline is white here; the shared navy one would vanish on the dark band */}
        <a
          href={PHONE.href}
          className={`${BUTTON} shrink-0 bg-brand text-white hover:bg-brand/90 focus-visible:outline-white`}
        >
          <Phone className="size-4" strokeWidth={1.75} aria-hidden />
          Call {PHONE.display}
        </a>
      </div>
    </section>
  );
}
