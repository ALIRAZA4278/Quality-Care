import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GeorgiaCompliancePageContent from "@/components/GeorgiaCompliancePageContent";

export const metadata = {
  title: "Georgia Compliance & Legal Disclosure | Quality Care Senior Living",
  description: "Georgia-specific compliance disclosures and legal information for Quality Care Senior Living, LLC.",
};

export default function GeorgiaCompliancePage() {
  return (
    <>
      <Navbar />
      <GeorgiaCompliancePageContent />
      <Footer />
    </>
  );
}
