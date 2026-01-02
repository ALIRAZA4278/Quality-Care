import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebsiteDisclaimerPageContent from "@/components/WebsiteDisclaimerPageContent";

export const metadata = {
  title: "Website Disclaimer | Quality Care Senior Living",
  description: "Website disclaimer and important information for Quality Care Senior Living, LLC.",
};

export default function WebsiteDisclaimerPage() {
  return (
    <>
      <Navbar />
      <WebsiteDisclaimerPageContent />
      <Footer />
    </>
  );
}
