import { RefreshCcw, Settings2, Wrench, type LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

// Copy adapted from the Service & Support block on weldtechcorp.com and
// weldtechcorp.com/service-repairs.html
export const SERVICES: Service[] = [
  {
    title: "Repair",
    description:
      "Standardized repairs in key global locations, including software and hardware updates.",
    icon: Wrench,
  },
  {
    title: "Setup",
    description: "System and tooling setup for new and existing installations.",
    icon: Settings2,
  },
  {
    title: "Retrofit",
    description: "Retrofit solutions that bring legacy systems up to date.",
    icon: RefreshCcw,
  },
];

export const WTC_UNIVERSITY = {
  title: "WTC University",
  description:
    "Self-paced online training for maintenance technicians and resistance welding professionals.",
  cta: "Sign up for courses",
  href: "https://moodle.weldtechcorp.com",
};
