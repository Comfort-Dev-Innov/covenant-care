import OurStory from "@/components/sections/OurStory";
import SatellitesSection from "@/components/sections/SatellitesSection";
import CTASection from "@/components/sections/CTASection";
import ManagmentTeamSection from "@/components/sections/ManagmentTeamSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CoreValues from "@/components/sections/CoreValues";
import CompanyGoals from "@/components/sections/CompanyGoals";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OurStory />
      <CoreValues/>
      <CompanyGoals />
      <SatellitesSection />
      <ManagmentTeamSection />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
