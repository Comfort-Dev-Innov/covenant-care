import OurStory from "@/components/sections/OurStory";
import SatellitesSection from "@/components/sections/SatellitesSection";
import CTASection from "@/components/sections/CTASection";
import ManagmentTeamSection from "@/components/sections/ManagmentTeamSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <OurStory />
      <ManagmentTeamSection />
      <SatellitesSection />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
}
