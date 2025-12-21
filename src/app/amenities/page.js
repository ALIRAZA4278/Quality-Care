import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmenitiesPageContent from "@/components/AmenitiesPageContent";

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AmenitiesPageContent />
      <Footer />
    </div>
  );
}
