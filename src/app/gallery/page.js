import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPageContent from "@/components/GalleryPageContent";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <GalleryPageContent />
      <Footer />
    </div>
  );
}
