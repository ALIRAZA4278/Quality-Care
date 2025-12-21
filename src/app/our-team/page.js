import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurTeamPageContent from "@/components/OurTeamPageContent";
import CaregiversSection from "@/components/CaregiversSection";

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <OurTeamPageContent />
      <CaregiversSection />
      <Footer />
    </div>
  );
}
