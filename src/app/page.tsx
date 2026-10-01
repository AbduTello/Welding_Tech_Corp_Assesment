import AboutBand from "./components/AboutBand";
import CertificationsBand from "./components/CertificationsBand";
import ConsultationBand from "./components/ConsultationBand";
import HeroVideo from "./components/HeroVideo";
import PortalCareersBand from "./components/PortalCareersBand";
import ProductsBand from "./components/ProductsBand";
import ServiceBand from "./components/ServiceBand";
import TaglineBand from "./components/TaglineBand";

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
