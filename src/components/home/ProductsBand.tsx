import Image from "next/image";

import { PRODUCT_CATEGORIES, type ProductCategory } from "@/data/products";

import SectionHeader from "@/components/ui/SectionHeader";
import { TEXT_LINK } from "@/components/ui/styles";
import WeldSeam from "./WeldSeam";

export default function ProductsBand() {
  return (
    <section
      aria-labelledby="products-heading"
      className="bg-ink px-4 py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="products-heading"
          title="Controls and software for every resistance welding application"
          intro="Weld control hardware and welding software, both from WTC. One system, joined at the weld."
        />

        {/* No column gap from md up, so the two banners meet as one strip */}
        <ul className="mt-10 grid gap-12 sm:mt-14 md:grid-cols-2 md:gap-0">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <li key={category.title}>
              <CategoryItem category={category} isFirst={index === 0} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CategoryItem({
  category: { title, description, cta, href, image },
  isFirst,
}: {
  category: ProductCategory;
  isFirst: boolean;
}) {
  return (
    <article>
      <div className="relative">
        {/* Square off the corners where the banners meet */}
        <div
          className={`overflow-hidden rounded-lg ${
            isFirst ? "md:rounded-r-none" : "md:rounded-l-none"
          }`}
        >
          {/* Both banners are 1912x703, shown uncropped because the cabinet image has text baked into a corner */}
          <Image
            src={image.src}
            alt={image.alt}
            width={1912}
            height={703}
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            className="h-auto w-full"
          />
        </div>
        {!isFirst && <WeldSeam />}
      </div>

      <div className="mt-6 max-w-md md:pr-8">
        <h3 className="font-heading text-2xl font-medium sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-white/75">{description}</p>

        <a href={href} className={`mt-6 ${TEXT_LINK}`}>
          {cta}
        </a>
      </div>
    </article>
  );
}
