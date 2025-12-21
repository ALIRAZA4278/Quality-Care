import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPageContent from "@/components/PrivacyPageContent";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PrivacyPageContent />
      <Footer />
    </div>
  );
}
