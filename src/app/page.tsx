import { preload } from "react-dom";

import AboutBand from "@/components/home/AboutBand";
import CertificationsBand from "@/components/home/CertificationsBand";
import ConsultationBand from "@/components/home/ConsultationBand";
import HeroVideo from "@/components/home/HeroVideo";
import PortalCareersBand from "@/components/home/PortalCareersBand";
import ProductsBand from "@/components/home/ProductsBand";
import ServiceBand from "@/components/home/ServiceBand";
import StructuredData from "@/components/home/StructuredData";
import TaglineBand from "@/components/home/TaglineBand";
import { HERO_MEDIA } from "@/data/hero";

export default function Home() {
  // The hero poster is the first large thing on screen, so fetch it early
  preload(HERO_MEDIA.poster, { as: "image", fetchPriority: "high" });

  return (
    <main className="flex-1">
      <StructuredData />
      <HeroVideo />
      <TaglineBand />
      <CertificationsBand />
      <ProductsBand />
      <ServiceBand />
      <AboutBand />
      <ConsultationBand />
      <PortalCareersBand />
    </main>
  );
}
