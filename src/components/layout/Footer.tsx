import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { CERTIFICATIONS } from "@/data/certifications";
import { ADDRESS, PHONE, SOCIAL_LINKS } from "@/data/company";
import {
  CONTACT_HREF,
  FOOTER_LINK_GROUPS,
  TERMS_HREF,
} from "@/data/navigation";
import { asset } from "@/lib/asset";

const LINK =
  "rounded-sm decoration-brand decoration-2 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
const ICON = "mt-0.5 size-4 shrink-0 opacity-70";
const HEADING = "font-heading text-lg font-medium";

const isoPdf = CERTIFICATIONS.find((c) => c.code === "ISO 9001:2015")
  ?.certificate?.pdf;

// Lucide has no brand marks, so these are the Simple Icons paths (CC0)
function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`${ICON} fill-current`}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`${ICON} fill-current`}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// No search here yet: the header's search doesn't do anything so far, and a
// second inert input would be worse than none. Add one once search works.
export default function Footer() {
  // Static page, so the year is fixed at build time; it updates on each deploy
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-4 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          <div>
            <Image
              src={asset("/wtc-logo-white-transparent.png")}
              alt="Welding Technology Corp"
              width={400}
              height={103}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Resistance welding controls, trusted worldwide since 1936.
            </p>
          </div>

          {/* Three link lists; they share two of the four columns at lg */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2"
          >
            {FOOTER_LINK_GROUPS.map(({ title, links }) => (
              <div key={title}>
                <h2 className={HEADING}>{title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} className={LINK}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div>
            <h2 className={HEADING}>Contact</h2>
            <address className="mt-3 space-y-3 text-sm text-white/80 not-italic">
              <a href={PHONE.href} className={`flex gap-2 ${LINK}`}>
                <Phone className={ICON} strokeWidth={1.75} aria-hidden />
                {PHONE.display}
              </a>
              <a href={CONTACT_HREF} className={`flex gap-2 ${LINK}`}>
                <Mail className={ICON} strokeWidth={1.75} aria-hidden />
                Send a message
              </a>
              <a
                href={ADDRESS.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 ${LINK}`}
              >
                <MapPin className={ICON} strokeWidth={1.75} aria-hidden />
                <span>
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.locality}, {ADDRESS.country}
                </span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 ${LINK}`}
              >
                <LinkedInMark />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.youTube}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 ${LINK}`}
              >
                <YouTubeMark />
                YouTube
              </a>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} Welding Technology Corp. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href={TERMS_HREF} className={LINK}>
                Website Terms of Use
              </a>
            </li>
            {isoPdf && (
              <li>
                <a
                  href={isoPdf}
                  target="_blank"
                  rel="noopener"
                  className={LINK}
                >
                  ISO 9001:2015 certificate
                </a>
              </li>
            )}
            <li>
              <a href="#" className={`flex items-center gap-1.5 ${LINK}`}>
                <ArrowUp className="size-4" strokeWidth={1.75} aria-hidden />
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
