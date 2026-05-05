import FeatureCards from "@/components/feature-cards";
import HeroVideo from "@/components/hero-video";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <FeatureCards />
      </main>
    </>
  );
}
