"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function WebsiteDisclaimerPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Website Disclaimer"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-4 mt-10">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Website Disclaimer
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Website Disclaimer Content */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Introduction */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Quality Care Senior Living, LLC.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">Effective Date:</span> January 1st, 2026
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                The information provided on the Quality Care Senior Living website is for general informational purposes only. While we strive to keep information accurate, current, and reliable, we make no guarantees of any kind regarding the completeness, accuracy, or suitability of the information contained on this website.
              </p>
            </div>

            {/* No Medical or Healthcare Advice */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                No Medical or Healthcare Advice
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Quality Care Senior Living is a senior living and supportive care provider. Nothing on this website constitutes medical advice, diagnosis, or treatment.
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Information presented is not intended to replace professional medical, healthcare, or legal advice</li>
                <li>Residents, families, and visitors should consult licensed healthcare professionals for medical decisions</li>
                <li>Use of this website does not create a physician-patient, caregiver-patient, or clinical relationship</li>
              </ul>
            </div>

            {/* No Guarantee of Services or Outcomes */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                No Guarantee of Services or Outcomes
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Descriptions of services, amenities, programs, or care offerings on this website are informational only and may vary by location, resident needs, licensing status, and availability.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Specific services, accommodations, or outcomes</li>
                <li>Availability of rooms, programs, or staffing</li>
                <li>Admission, eligibility, or continued residency</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                All services are subject to assessment, agreement, and applicable regulations.
              </p>
            </div>

            {/* External Links Disclaimer */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                External Links Disclaimer
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                This website may contain links to third-party websites or services for convenience or informational purposes.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                Quality Care Senior Living:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Does not control third-party websites</li>
                <li>Is not responsible for their content, accuracy, or privacy practices</li>
                <li>Does not endorse external sites unless explicitly stated</li>
              </ul>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mt-3">
                Accessing third-party websites is done at your own risk.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Limitation of Liability
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                To the fullest extent permitted by law, Quality Care Senior Living shall not be liable for any damages arising out of or related to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm md:text-base text-gray-700 ml-4">
                <li>Use or inability to use this website</li>
                <li>Reliance on website content</li>
                <li>Errors, omissions, or delays in information</li>
                <li>Unauthorized access to or misuse of data</li>
              </ul>
            </div>

            {/* Website Availability */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Website Availability
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                We do not guarantee uninterrupted or error-free access to the website. We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.
              </p>
            </div>

            {/* Acceptance of Disclaimer */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Acceptance of Disclaimer
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                By using this website, you acknowledge that you have read, understood, and agree to this Disclaimer.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Contact Information
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                For questions regarding this Disclaimer, please contact:
              </p>
              <div className="bg-[#f8f6f3] p-4 sm:p-6 rounded-lg space-y-2">
                <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold">
                  Quality Care Senior Living, LLC
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  2033 Sombrero Way SE,<br />
                  Atlanta, GA 30316
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Email: <a href="mailto:sjohnson@qualitycareseniorliving.com" className="text-[#887904] hover:underline">sjohnson@qualitycareseniorliving.com</a>
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  Phone: <a href="tel:+16789108466" className="text-[#887904] hover:underline">1 (678) 910-8466</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
