"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function PrivacyPageContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "INTRODUCTION & SCOPE" },
    { id: "information", label: "INFORMATION WE COLLECT" },
    { id: "usage", label: "HOW WE USE DATA" },
    { id: "data-sharing", label: "DATA SHARING & THIRD PARTIES" },
    { id: "hipaa", label: "HIPAA & SECURITY PROTOCOLS" },
    { id: "data-retention", label: "DATA RETENTION" },
    { id: "children", label: "CHILDREN'S PRIVACY" },
    { id: "rights", label: "YOUR RIGHTS & CHOICES" },
    { id: "policy-updates", label: "POLICY UPDATES" },
    { id: "contact", label: "CONTACT INFORMATION" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] flex items-center justify-center mt-[70px] sm:mt-[80px] md:mt-[90px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Privacy & Policy"
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
            Privacy Policy
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-1"></div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Introduction Paragraph */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12 text-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Quality Care Senior Living
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              Quality Care Senior Living ("we," "our," or "us") is committed to protecting the privacy, dignity, and confidentiality of our residents, families, visitors, employees, and website users. This Privacy Policy explains how we collect, use, protect, and share information in compliance with applicable federal and state laws, including laws governing senior living and healthcare services in the State of Georgia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2 sm:space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm transition-colors flex items-center justify-between ${
                      activeSection === section.id
                        ? "bg-gray-900 text-white"
                        : "bg-[#f8f6f3] text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {section.label}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="sm:w-5 sm:h-5"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3">
              {activeSection === "introduction" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Introduction & Scope
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      This Privacy Policy applies to all personal information collected by Quality Care Senior Living through:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>Our website and online forms</li>
                      <li>Phone calls, emails, and written communications</li>
                      <li>In-person interactions</li>
                      <li>Resident admissions and care-related services</li>
                      <li>Employment and vendor relationships</li>
                    </ul>
                    <p>
                      This policy governs how we handle personal, sensitive, and protected information related to residents, prospective residents, families, staff, caregivers, contractors, and website visitors.
                    </p>
                    <p className="font-semibold">
                      By using our services or website, you consent to the practices described in this Privacy Policy.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "information" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Information We Collect
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      We may collect the following categories of information:
                    </p>

                    {/* Personal Information */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                        Personal Information
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>Full name</li>
                        <li>Address and location information</li>
                        <li>Phone number and email address</li>
                        <li>Emergency contact details</li>
                        <li>Date of birth</li>
                      </ul>
                    </div>

                    {/* Resident & Care-Related Information */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                        Resident & Care-Related Information
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>Health-related information provided for care coordination</li>
                        <li>Medical history and care needs (when applicable)</li>
                        <li>Insurance or payment-related details</li>
                        <li>Admission and residency documentation</li>
                      </ul>
                    </div>

                    {/* Website & Digital Information */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                        Website & Digital Information
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>IP address</li>
                        <li>Browser type and device information</li>
                        <li>Pages visited and interaction data</li>
                        <li>Online inquiry and contact form submissions</li>
                      </ul>
                    </div>

                    {/* Employment & Vendor Information */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                        Employment & Vendor Information
                      </h3>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>Resume and employment application details</li>
                        <li>Background and credential verification (where applicable)</li>
                        <li>Business contact information</li>
                      </ul>
                    </div>

                    <p className="font-semibold">
                      We only collect information that is necessary to provide safe, effective, and compliant services.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "usage" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    How We Use Data
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      Information collected by Quality Care Senior Living is used for the following purposes:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>Providing senior living and care services</li>
                      <li>Processing inquiries, tours, and admissions</li>
                      <li>Communicating with residents, families, and authorized representatives</li>
                      <li>Coordinating care, staffing, and facility operations</li>
                      <li>Billing, payments, and administrative functions</li>
                      <li>Maintaining safety, security, and compliance</li>
                      <li>Improving our services, website, and resident experience</li>
                      <li>Meeting legal, regulatory, and licensing requirements</li>
                    </ul>
                    <p className="font-semibold">
                      We do not sell personal information to third parties.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "hipaa" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    HIPAA & Security Protocols
                  </h2>
                  <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      Quality Care Senior Living follows strict safeguards to protect sensitive and protected information.
                    </p>

                    {/* HIPAA Awareness */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                        HIPAA Awareness
                      </h3>
                      <p>
                        When applicable, we comply with the Health Insurance Portability and Accountability Act (HIPAA) and applicable state privacy laws regarding protected health information (PHI).
                      </p>
                    </div>

                    {/* Security Measures */}
                    <div>
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                        Security Measures
                      </h3>
                      <p className="mb-3">
                        We implement administrative, technical, and physical safeguards, including:
                      </p>
                      <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                        <li>Restricted access to sensitive data</li>
                        <li>Secure digital systems and password protection</li>
                        <li>Role-based access for staff</li>
                        <li>Staff training on confidentiality and privacy</li>
                        <li>Secure storage of physical records</li>
                      </ul>
                    </div>

                    <p className="font-semibold">
                      Only authorized personnel are permitted to access sensitive or protected information.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "data-sharing" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Data Sharing & Third Parties
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      We may share information only when necessary and permitted by law, including:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>With authorized healthcare providers involved in resident care</li>
                      <li>With service providers supporting operations (IT, billing, compliance)</li>
                      <li>With government or regulatory agencies as required by law</li>
                      <li>With emergency services when necessary for safety or care</li>
                    </ul>
                    <p className="font-semibold">
                      All third-party partners are required to maintain appropriate confidentiality and security standards.
                    </p>
                    <p className="font-semibold">
                      We do not share personal data for marketing purposes without consent.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "children" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Children's Privacy
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      Our services and website are not intended for children under the age of 13. We do not knowingly collect personal information from children without parental or legal guardian consent.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "rights" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Your Rights & Choices
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      Depending on applicable law, individuals may have the right to:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>Request access to their personal information</li>
                      <li>Request corrections to inaccurate information</li>
                      <li>Request limitations on certain uses or disclosures</li>
                      <li>Withdraw consent where applicable</li>
                    </ul>
                    <p className="font-semibold">
                      Requests must be submitted in writing and may be subject to verification.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "data-retention" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Data Retention
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      We retain personal and resident information only for as long as necessary to:
                    </p>
                    <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                      <li>Provide services</li>
                      <li>Meet legal, regulatory, and licensing requirements</li>
                      <li>Resolve disputes or enforce agreements</li>
                    </ul>
                    <p className="font-semibold">
                      Once information is no longer required, it is securely disposed of.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "policy-updates" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Policy Updates
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      We may update this Privacy Policy periodically to reflect changes in laws, regulations, or operational practices. Updates will be posted on our website with a revised effective date.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "contact" && (
                <div>
                  <h2
                    className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4 sm:mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Contact Information
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    <p>
                      If you have questions, concerns, or requests related to this Privacy Policy, please contact:
                    </p>
                    <div className="bg-[#f8f6f0] p-4 sm:p-6 rounded-lg">
                      <p className="text-xs sm:text-sm md:text-base text-gray-900 font-semibold mb-2">
                        Quality Care Senior Living, LLC
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1">
                        2033 Sombrero Way SE,
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1">
                        Atlanta, GA 30316
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-1">
                        Email: info@qualitycareseniorliving.com
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700">
                        Phone: 1 (678) 910-8466
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
