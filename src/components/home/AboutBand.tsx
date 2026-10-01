import Image from "next/image";

import { ABOUT_STATS, HQ_PHOTO } from "@/data/about";
import { ABOUT_HREF } from "@/data/navigation";

import SectionHeader from "@/components/ui/SectionHeader";
import { TEXT_LINK } from "@/components/ui/styles";

export default function AboutBand() {
  return (
    <section
      aria-labelledby="about-heading"
      className="border-t border-navy/10 bg-background px-4 py-16 text-navy sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Natural ratio, uncropped, so the building's sign stays in view */}
        <Image
          src={HQ_PHOTO.src}
          alt={HQ_PHOTO.alt}
          width={HQ_PHOTO.width}
          height={HQ_PHOTO.height}
          sizes="(min-width: 1152px) 552px, (min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full rounded-lg"
        />

        <div>
          <SectionHeader
            id="about-heading"
            title="Built in Farmington Hills, MI"
            intro="WTC's roots go back to a Detroit garage in 1936. Today our Technical Center in Farmington Hills houses every core department, including assembly lines and full load test stations, supporting customers around the world."
          />

          <dl className="mt-8 grid grid-cols-3">
            {ABOUT_STATS.map(({ value, label }) => (
              // Value shown above its label but read after it; justify-end packs both to the top in reverse order
              <div
                key={value}
                className="flex flex-col-reverse justify-end border-l border-navy/15 pr-3 pl-4"
              >
                <dt className="mt-1 text-sm leading-snug opacity-75">
                  {label}
                </dt>
                <dd className="font-heading text-3xl font-medium">{value}</dd>
              </div>
            ))}
          </dl>

          <a href={ABOUT_HREF} className={`mt-8 ${TEXT_LINK}`}>
            Read more about WTC
          </a>
        </div>
      </div>
    </section>
  );
}
