import { asset } from "@/lib/asset";

export type ProductCategory = {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: { src: string; alt: string };
};

// Copy adapted from weldtechcorp.com/products-solutions.html
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    title: "Weld controls",
    description:
      "Resistance welding controls for spot, seam, robotic, portable gun, and projection welding, with superior welding algorithms, accuracy, and built-in diagnostics.",
    cta: "Explore controls",
    href: "https://www.weldtechcorp.com/products/WTC-Series6000.html",
    image: {
      src: asset("/control-cabinets.png"),
      alt: "WTC resistance welding control cabinets",
    },
  },
  {
    title: "Software algorithms",
    description:
      "Adaptive welding technology (RAFT) and current regulation controls in FPGA systems, the key ingredients for optimal productivity.",
    cta: "Explore software",
    href: "https://www.weldtechcorp.com/products/adaptive-solutions.html",
    image: {
      src: asset("/weld-data-charts.png"),
      alt: "Weld data charts over a resistance spot weld",
    },
  },
];
