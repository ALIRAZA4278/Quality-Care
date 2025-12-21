import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/AboutPageContent";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </div>
  );
}
