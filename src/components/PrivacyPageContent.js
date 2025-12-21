"use client";

import Image from "next/image";
import { useState } from "react";

export default function PrivacyPageContent() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "INTRODUCTION & SCOPE" },
    { id: "information", label: "INFORMATION WE COLLECT" },
    { id: "usage", label: "HOW WE USE DATA" },
    { id: "hipaa", label: "HIPAA & SECURITY PROTOCOLS" },
    { id: "data-sharing", label: "DATA SHARING & THIRD PARTIES" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Privacy & Policy"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Privacy & Policy
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Privacy Content Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-6 py-4 rounded-full font-semibold text-sm transition-colors flex items-center justify-between ${
                      activeSection === section.id
                        ? "bg-gray-900 text-white"
                        : "bg-[#f8f6f3] text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {section.label}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Introduction & Scope
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p>
                      At Quality Care, we recognize that the privacy of your personal information, especially when it concerns health and senior living, is a matter of profound importance and trust. This Privacy Policy is designed to provide you with a comprehensive understanding of how we collect, process, manage, and safeguard the data of our seniors, their family members, and legal representatives through our digital platforms, including our website, mobile applications, and other communication portals.
                    </p>
                    <p>
                      We operate with a deep sense of mission and duty, cognizant that many of our residents are elderly or require specialty-dignified care for the elderly. We understand that navigating home care options can be a complex and emotional journey, and our goal is to ensure that your personal information is safeguarded when you're exploring the home care we provide in the home. This policy applies to all visitors of the Quality Care website and users of our digital outreach services.
                    </p>
                    <p>
                      By accessing our site or engaging with our official website, you acknowledge that you have been informed of our practices regarding your personal data. We operate in strict compliance with applicable state and federal privacy regulations, including the Health Insurance Portability and Accountability Act (HIPAA) where applicable, humane that assumes our ethical and legal obligations extend far beyond what statutes require, given the inherently's legal and moral meaning. It is a promise of transparency to the families we serve, outlining exactly what we do with your information and, more importantly, what we do not do—such as selling your data to third-party advertisers.
                    </p>
                    <p>
                      We encourage you to read this introduction and the subsequent sections thoroughly to understand your rights, our obligations, and the security measures we have implemented to protect the legacy and well-being of the seniors in our care.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "information" && (
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Information We Collect
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p>
                      We collect various types of information to provide and improve our services. This includes personal identification information such as names, contact details, and demographic information. We also collect health-related information when necessary to provide appropriate care services.
                    </p>
                    <p>
                      Additionally, we may collect technical information such as IP addresses, browser types, and device information when you visit our website. This helps us improve our digital services and ensure a better user experience.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "usage" && (
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    How We Use Data
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p>
                      The information we collect is used primarily to provide high-quality care services to our residents. We use your data to coordinate care plans, communicate with family members, and ensure the safety and well-being of all residents.
                    </p>
                    <p>
                      We also use collected data to improve our services, maintain records as required by law, process payments, and communicate important updates about our facilities and services.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "hipaa" && (
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    HIPAA & Security Protocols
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p>
                      Quality Care is committed to maintaining the highest standards of data security and complying with HIPAA regulations. We implement comprehensive security measures including encryption, secure data storage, and restricted access to protected health information.
                    </p>
                    <p>
                      Our staff receives regular training on privacy practices and security protocols. We conduct regular audits and assessments to ensure our systems meet or exceed industry standards for protecting sensitive information.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === "data-sharing" && (
                <div>
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: "var(--font-recoleta)" }}
                  >
                    Data Sharing & Third Parties
                  </h2>
                  <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                    <p>
                      We do not sell, rent, or trade your personal information to third parties for marketing purposes. We only share information when necessary to provide our services, comply with legal obligations, or with your explicit consent.
                    </p>
                    <p>
                      In some cases, we may share information with healthcare providers, insurance companies, or legal authorities when required by law or necessary for the care and safety of our residents. All third parties with access to your information are bound by strict confidentiality agreements.
                    </p>
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
