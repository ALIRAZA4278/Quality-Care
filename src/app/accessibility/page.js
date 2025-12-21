import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityPageContent from "@/components/AccessibilityPageContent";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AccessibilityPageContent />
      <Footer />
    </div>
  );
}
