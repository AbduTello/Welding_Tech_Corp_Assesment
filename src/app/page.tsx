import AboutBand from "@/components/home/AboutBand";
import CertificationsBand from "@/components/home/CertificationsBand";
import ConsultationBand from "@/components/home/ConsultationBand";
import HeroVideo from "@/components/home/HeroVideo";
import PortalCareersBand from "@/components/home/PortalCareersBand";
import ProductsBand from "@/components/home/ProductsBand";
import ServiceBand from "@/components/home/ServiceBand";
import TaglineBand from "@/components/home/TaglineBand";

export default function Home() {
  return (
    <main className="flex-1">
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
