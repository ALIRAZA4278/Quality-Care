import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactPageContent />
      <Footer />
    </div>
  );
}
