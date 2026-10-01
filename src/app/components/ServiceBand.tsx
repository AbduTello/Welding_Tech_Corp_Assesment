import { GraduationCap, Phone } from "lucide-react";

import { PHONE } from "@/data/company";
import { SERVICE_HREF } from "@/data/navigation";
import { SERVICES, WTC_UNIVERSITY } from "@/data/services";

import SectionHeader from "./SectionHeader";
import { BUTTON, BUTTON_PRIMARY, TEXT_LINK } from "./styles";

export default function ServiceBand() {
  return (
    <section
      aria-labelledby="service-heading"
      className="bg-white px-4 py-16 text-navy sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="service-heading"
          title="Service and support that comes to you"
          intro="WTC's Technical Support Team (TST) travels the globe to help you, from start-up support to troubleshooting and emergency breakdowns."
        />

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
              className={`mt-5 ${BUTTON} bg-white text-navy hover:bg-white/90 focus-visible:outline-white`}
            >
              {WTC_UNIVERSITY.cta}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href={PHONE.href} className={BUTTON_PRIMARY}>
            <Phone className="size-4" strokeWidth={1.75} aria-hidden />
            Call TST at {PHONE.display}
          </a>
          <a href={SERVICE_HREF} className={TEXT_LINK}>
            See service and support
          </a>
        </div>
      </div>
    </section>
  );
}
