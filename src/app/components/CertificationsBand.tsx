import { BadgeCheck } from "lucide-react";

import { CERTIFICATIONS } from "@/data/certifications";

import CertificateBadge from "./CertificateBadge";

const CARD =
  "flex w-full flex-col items-center gap-2 rounded-lg bg-white p-5 ring-1 ring-navy/15";

export default function CertificationsBand() {
  return (
    <section
      aria-labelledby="certifications-heading"
      className="border-t border-navy/10 bg-background px-4 py-14 text-center text-navy sm:py-20"
    >
      <p className="text-xs font-medium tracking-widest text-brand uppercase sm:text-sm">
        Quality &amp; Certifications
      </p>
      <h2
        id="certifications-heading"
        className="mx-auto mt-3 max-w-3xl font-heading text-2xl font-medium sm:text-3xl"
      >
        Built to support reliable welding operations in demanding automotive,
        aerospace, and industrial environments.
      </h2>

      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
        {CERTIFICATIONS.map(({ code, label, certificate }) => {
          const content = (
            <>
              <BadgeCheck
                className="size-6 text-brand"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="font-heading text-lg font-medium">{code}</span>
              <span className="text-sm text-navy/70">{label}</span>
            </>
          );

          return (
            <li key={code} className="flex">
              {certificate ? (
                <CertificateBadge
                  code={code}
                  certificate={certificate}
                  className={CARD}
                >
                  {content}
                </CertificateBadge>
              ) : (
                <div className={CARD}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
