import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HipaaPageContent from "@/components/HipaaPageContent";

export default function HipaaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HipaaPageContent />
      <Footer />
    </div>
  );
}
