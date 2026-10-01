import CertificationsBand from "./components/CertificationsBand";
import HeroVideo from "./components/HeroVideo";
import ProductsBand from "./components/ProductsBand";
import TaglineBand from "./components/TaglineBand";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroVideo />
      <TaglineBand />
      <CertificationsBand />
      <ProductsBand />
    </main>
  );
}
