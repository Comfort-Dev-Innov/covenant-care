import OurStory from "@/components/sections/OurStory";

import SatellitesSection from "@/components/sections/SatellitesSection";

// import ManagmentTeamSection from "@/components/sections/ManagmentTeamSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <OurStory />
      <SatellitesSection />
      <CTASection />
    </div>
  );
}
