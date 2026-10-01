import { GraduationCap, Phone } from "lucide-react";

import { PHONE } from "@/data/company";
import { SERVICE_HREF } from "@/data/navigation";
import { SERVICES, WTC_UNIVERSITY } from "@/data/services";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export default function ServiceBand() {
  return (
    <section
      aria-labelledby="service-heading"
      className="bg-white px-4 py-16 text-navy sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="service-heading"
          className="max-w-2xl font-heading text-3xl font-medium sm:text-4xl"
        >
          Service and support that comes to you
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-pretty text-navy/70 sm:text-lg">
          WTC&apos;s Technical Support Team (TST) travels the globe to help you,
          from start-up support to troubleshooting and emergency breakdowns.
        </p>

        {/* Services sit three across from md up; at lg the University panel joins them as a fourth column */}
        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-4 lg:gap-0">
          <ul className="grid gap-8 md:grid-cols-3 md:gap-0 lg:col-span-3">
            {SERVICES.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="border-l border-navy/15 pl-5 md:pr-6 lg:py-6"
              >
                <Icon
                  className="size-6 text-brand"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="mt-4 font-heading text-xl font-medium">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start rounded-lg bg-navy p-6 text-white">
            <GraduationCap className="size-6" strokeWidth={1.75} aria-hidden />
            <h3 className="mt-4 font-heading text-xl font-medium">
              {WTC_UNIVERSITY.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              {WTC_UNIVERSITY.description}
            </p>
            <a
              href={WTC_UNIVERSITY.href}
              className="mt-5 rounded-lg bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {WTC_UNIVERSITY.cta}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={PHONE.href}
            className={`inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand/90 ${FOCUS}`}
          >
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            Call TST at {PHONE.display}
          </a>
          <a
            href={SERVICE_HREF}
            className={`font-medium underline decoration-brand decoration-2 underline-offset-[6px] transition-colors hover:text-brand ${FOCUS}`}
          >
            See service and support
          </a>
        </div>
      </div>
    </section>
  );
}
