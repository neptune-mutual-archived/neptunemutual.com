import { Header } from "@components/HomePage/Header";
import { LandingPage } from "@components/HomePage/Landing";
import { Background, Hero } from "@components/utils/Background";
import { IndustryComponent } from "@components/HomePage/Industry";
import { GotCoveredComponent } from "@components/GotCovered/GotCovered";
import { CoverPoolComponent } from "@components/HomePage/CoverPoolComponent/CoverPool";
import { NeptuneEcosystemComponent } from "@components/HomePage/NeptuneEcosystem";
import { Roadmap } from "@components/HomePage/Roadmap";
import { OurTeamComponent } from "@components/HomePage/OurTeam";
import { HorizontalDivider } from "@components/utils/Divider";
import { CookiePolicy } from "@components/CookiePolicy";
import { BlogComponent } from "@components/HomePage/BlogComponent";

export function HomePage({ postsData }) {
  return (
    <div data-scroll-section className="relative overflow-x-hidden">
      <CookiePolicy />
      <Hero>
        <Header />
        <HorizontalDivider />
        <LandingPage />
      </Hero>
      <Background>
        <IndustryComponent />
      </Background>
      <BlogComponent blogs={postsData} />
      <GotCoveredComponent />
      <CoverPoolComponent />
      <NeptuneEcosystemComponent />
      <Roadmap />
      <OurTeamComponent />
    </div>
  );
}
