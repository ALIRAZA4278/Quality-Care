"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TourModal from "@/components/TourModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white py-2.5 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-start gap-4 sm:gap-8 text-xs sm:text-sm">
          {/* Phone Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPhone(!showPhone)}
              className="sm:cursor-default flex items-center gap-2"
              aria-label="Toggle phone number"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[18px] sm:h-[18px] flex-shrink-0 drop-shadow-md"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden sm:inline">+314 256 8792 2</span>
            </button>
            {/* Mobile slide-in phone number */}
            <div
              className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                showPhone ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <a href="tel:+31425687922" className="whitespace-nowrap">
                +314 256 8792 2
              </a>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowEmail(!showEmail)}
              className="md:cursor-default flex items-center gap-2"
              aria-label="Toggle email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-[18px] sm:h-[18px] flex-shrink-0 drop-shadow-md"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="hidden md:inline">info@qualitycaresl.com</span>
            </button>
            {/* Mobile/tablet slide-in email */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                showEmail ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <a href="mailto:info@qualitycaresl.com" className="whitespace-nowrap text-[10px] sm:text-xs">
                info@qualitycaresl.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 sm:py-6 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Left Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10 flex-1 justify-end pr-32">
            <Link
              href="/"
              className="text-black font-medium hover:text-[#887904] text-[15px] transition-all duration-300 hover:scale-110 relative group"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-black font-medium hover:text-[#887904] text-[15px] transition-all duration-300 hover:scale-110 relative group"
            >
              ABOUT US
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-black font-medium hover:text-[#887904] text-[15px] transition-all duration-300 hover:scale-110 relative group"
            >
              SERVICES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/amenities"
              className="text-black font-medium hover:text-[#887904] text-[15px] transition-all duration-300 hover:scale-110 relative group"
            >
              AMENITIES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Center Logo with Circle Background */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 sm:-bottom-16">
            <Link href="/" className="block">
              <div className="bg-white rounded-full p-3 sm:p-5 border-2 sm:border-4 border-white shadow-lg">
                <Image
                  src="/logo.svg"
                  alt="Quality Care Senior Living"
                  width={110}
                  height={110}
                  className="object-contain w-[60px] h-[60px] sm:w-[110px] sm:h-[110px]"
                  priority
                  quality={100}
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10 flex-1 pl-32">
            <Link
              href="/gallery"
              className="text-black font-medium hover:text-[#887904] text-[15px] whitespace-nowrap transition-all duration-300 hover:scale-110 relative group"
            >
              GALLERY
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/our-team"
              className="text-black font-medium hover:text-[#887904] text-[15px] whitespace-nowrap transition-all duration-300 hover:scale-110 relative group"
            >
              OUR TEAM
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-black font-medium hover:text-[#887904] text-[15px] whitespace-nowrap transition-all duration-300 hover:scale-110 relative group"
            >
              CONTACT US
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#887904] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => setIsTourModalOpen(true)}
              className="bg-[#1a1a1a] text-white pl-8 pr-2 py-2.5 rounded-l-full rounded-r-full font-medium hover:bg-[#887904] hover:scale-105 active:scale-95 flex items-center gap-4 transition-all duration-300 text-[15px] whitespace-nowrap shadow-lg hover:shadow-xl group"
              style={{ borderRadius: "50px 50px 50px 50px" }}
            >
              BOOK A TOUR
              <div className="bg-white rounded-full p-3 flex items-center justify-center transition-all duration-300 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Mobile Book Tour Button */}
          <button
            onClick={() => setIsTourModalOpen(true)}
            className="lg:hidden bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-[#887904] active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            BOOK TOUR
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="bg-[#1a1a1a] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Quality Care"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm">
                Quality Care Senior Living
              </span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Sidebar Menu Items */}
          <div className="py-6">
            <Link
              href="/"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                HOME
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/about"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                ABOUT US
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/services"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                SERVICES
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/amenities"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                AMENITIES
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/gallery"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                GALLERY
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/our-team"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                OUR TEAM
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="block px-6 py-4 text-gray-900 font-medium hover:bg-[#887904] hover:text-white hover:pl-8 transition-all duration-300 border-b border-gray-100 relative group"
            >
              <span className="flex items-center gap-2">
                CONTACT US
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Sidebar Footer - Contact Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-6 border-t border-gray-200">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#887904"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-sm text-gray-700">+314 256 8792 2</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#887904"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-md"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm text-gray-700">
                  info@qualitycaresl.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Modal */}
      <TourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
      />
    </div>
  );
}
