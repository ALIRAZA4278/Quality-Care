import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsPageContent from "@/components/TermsPageContent";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TermsPageContent />
      <Footer />
    </div>
  );
}
