export type AboutStat = {
  value: string;
  label: string;
};

// Copy and photo from weldtechcorp.com (homepage About block and about.html)
export const HQ_PHOTO = {
  src: "/wtc-headquarters.jpg",
  alt: "Welding Technology Corp headquarters in Farmington Hills, Michigan",
  width: 1600,
  height: 935,
};

export const ABOUT_STATS: AboutStat[] = [
  { value: "1936", label: "Founded in Detroit" },
  { value: "100+", label: "Resistance welding patents" },
  { value: "Global", label: "Patents in every industrialized country" },
];
