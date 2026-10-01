"use client";

import { ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useId, useRef } from "react";

import type { Certificate } from "@/data/certifications";

type CertificateBadgeProps = {
  code: string;
  certificate: Certificate;
  className: string;
  children: React.ReactNode;
};

// Turns a certification card into a button that opens a preview of the
// certificate. Native <dialog> handles focus trapping, Esc, and the backdrop.
export default function CertificateBadge({
  code,
  certificate,
  className,
  children,
}: CertificateBadgeProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  // Lock page scroll while open, same as the hero video modal
  function openModal() {
    document.body.style.overflow = "hidden";
    dialogRef.current?.showModal();
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`${className} group cursor-pointer transition-shadow hover:ring-2 hover:ring-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy`}
      >
        {children}
        <span className="mt-1 text-xs font-medium text-brand underline-offset-2 group-hover:underline">
          View certificate
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        // Runs for every way the dialog closes: Esc, the ✕ button, or a backdrop click
        onClose={() => (document.body.style.overflow = "")}
        // A click directly on the <dialog> (not its children) is a backdrop click
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
        className="m-auto max-h-[95vh] w-[calc(100%-2rem)] max-w-xl rounded-lg bg-white p-0 text-navy backdrop:bg-black/30 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-start justify-between gap-4 border-b border-navy/10 px-5 py-4 text-left">
          <div>
            <h3 id={titleId} className="font-heading text-xl font-medium">
              {code} Certificate
            </h3>
            <p className="text-sm text-navy/70">
              Issued by {certificate.issuer} · Valid through{" "}
              {certificate.validThrough}
            </p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close certificate preview"
            className="cursor-pointer rounded-md p-1 hover:bg-navy/5 focus-visible:outline-2 focus-visible:outline-navy"
          >
            <X className="size-5" strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="bg-navy/3 p-4">
          <Image
            src={certificate.image}
            width={certificate.imageWidth}
            height={certificate.imageHeight}
            alt={`${code} certificate of registration for Welding Technology Corporation`}
            className="mx-auto h-auto max-h-[70vh] w-auto shadow-sm ring-1 ring-navy/10"
          />
        </div>

        <div className="flex justify-end border-t border-navy/10 px-5 py-3">
          <a
            href={certificate.pdf}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
          >
            Open full PDF
            <ExternalLink className="size-4" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </dialog>
    </>
  );
}
