import { SiteFooter, SiteHeader } from "@/components/layout";
import { FeatureList, Hero, Showcase } from "@/views/home";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Showcase />
        <FeatureList />
      </main>
      <SiteFooter />
    </>
  );
}
