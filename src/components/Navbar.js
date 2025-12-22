"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import TourModal from "@/components/TourModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
      <nav className="bg-gradient-to-b from-gray-100 to-white py-4 sm:py-6 px-4 sm:px-6 relative shadow-lg">
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
                  src="/logo.png"
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
          className={`fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="bg-[#887904] p-4 flex items-center justify-between shrink-0">
            <h2 className="text-white font-bold text-lg tracking-wider">MENU</h2>
            <button
              onClick={toggleMobileMenu}
              className="text-white p-1 hover:bg-[#6d5f03] rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
          {/* Sidebar Menu Items */}
          <div className="py-3">
            <Link
              href="/"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              HOME
            </Link>
            <Link
              href="/about"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              ABOUT US
            </Link>
            <Link
              href="/services"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              SERVICES
            </Link>
            <Link
              href="/amenities"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              AMENITIES
            </Link>
            <Link
              href="/gallery"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              GALLERY
            </Link>
            <Link
              href="/our-team"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              OUR TEAM
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="block px-6 py-3 text-sm text-gray-900 font-medium hover:bg-gray-50 transition-all duration-300 border-b border-gray-100"
            >
              CONTACT US
            </Link>
          </div>

          {/* Call Us Section */}
          <div className="px-6 py-6 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#887904"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">CALL US ANYTIME:</span>
            </div>
            <a href="tel:+31425687922" className="text-xl font-bold text-gray-900 hover:text-[#887904] transition-colors">
              +314 256 8792 2
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="px-6 py-6 border-t border-gray-200">
            <div className="flex gap-3 justify-center">
              <a href="#" className="w-9 h-9 bg-[#887904] rounded-full flex items-center justify-center hover:bg-[#6d5f03] transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#887904] rounded-full flex items-center justify-center hover:bg-[#6d5f03] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#887904] rounded-full flex items-center justify-center hover:bg-[#6d5f03] transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#887904] rounded-full flex items-center justify-center hover:bg-[#6d5f03] transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-[#887904] rounded-full flex items-center justify-center hover:bg-[#6d5f03] transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Sidebar Footer - Contact Info */}
          <div className="bg-gray-50 px-6 py-5 border-t border-gray-200">
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#887904"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-xs text-gray-700 leading-tight">
                  123 Main Street, Decatur, GA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#887904"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-xs text-gray-700">
                  info@qualitycaresl.com
                </span>
              </div>
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
