import { Phone } from "lucide-react";

import { PHONE } from "@/data/company";
import { PRODUCTS_HREF } from "@/data/navigation";

const BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export default function TaglineBand() {
  return (
    <section className="bg-white px-4 py-14 text-center text-navy sm:py-20">
      <h1 className="font-heading text-3xl font-medium sm:text-4xl lg:text-5xl">
        Resistance welding controls, trusted worldwide
      </h1>
      <p className="mt-3 text-base text-navy/70 sm:text-lg">Since 1936</p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={PRODUCTS_HREF}
          className={`${BUTTON} bg-brand text-white hover:bg-brand/90`}
        >
          Explore products
        </a>
        <a
          href={PHONE.href}
          className={`${BUTTON} ring-1 ring-navy/40 hover:bg-navy/5`}
        >
          <Phone className="size-4" strokeWidth={1.75} aria-hidden />
          Call {PHONE.display}
        </a>
      </div>
    </section>
  );
}
