import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesPageContent from "@/components/ServicesPageContent";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ServicesPageContent />
      <Footer />
    </div>
  );
}
