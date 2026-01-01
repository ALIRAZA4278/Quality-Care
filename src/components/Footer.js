import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#12201B] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Newsletter Form */}
            <div>
              <h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 uppercase"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Subscribe Our Newsletter
              </h2>

              <form>
                <div className="bg-[#2a3f35] rounded-lg p-2 sm:p-2.5 flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 bg-transparent px-2 sm:px-2.5 py-1.5 sm:py-2 text-white placeholder:text-gray-400 focus:outline-none text-[10px] sm:text-xs"
                  />
                  <button
                    type="submit"
                    className="bg-white text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold hover:bg-[#887904] hover:text-white hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-1.5 transition-all duration-300 uppercase text-[10px] sm:text-xs shadow-md hover:shadow-lg group whitespace-nowrap"
                  >
                    Subscribe
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-3 sm:mt-4">
                  <input
                    type="checkbox"
                    id="news"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-gray-400"
                  />
                  <label htmlFor="news" className="text-xs sm:text-sm text-gray-300">
                    Send Me News About Outsorcy
                  </label>
                </div>
              </form>
            </div>

            {/* Right Side - Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-full p-6 sm:p-7 md:p-8 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Quality Care Senior Living"
                  width={150}
                  height={150}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 uppercase">About Us</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              We believe every resident deserves dignity, love, and a peaceful environment they can call home.
            </p>

            {/* Social Media */}
            <div className="mt-4 sm:mt-5">
              <h4 className="text-xs sm:text-sm font-semibold mb-2 uppercase">Social Media</h4>
              <div className="flex gap-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61585888921260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a3f35] hover:bg-[#887904] hover:scale-110 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/qualitycareseniorliving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a3f35] hover:bg-[#887904] hover:scale-110 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → About Us
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Gallery
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 uppercase">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#personal-care" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Personal Care Assistance
                </Link>
              </li>
              <li>
                <Link href="/services#medication" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Medication Reminders
                </Link>
              </li>
              <li>
                <Link href="/services#meals" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Home-Cooked Meals
                </Link>
              </li>
              <li>
                <Link href="/services#activities" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Daily Activities
                </Link>
              </li>
              <li>
                <Link href="/services#housekeeping" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Housekeeping & Laundry
                </Link>
              </li>
              <li>
                <Link href="/services#companionship" className="text-gray-300 hover:text-[#887904] hover:pl-2 transition-all duration-300 inline-block text-xs sm:text-sm">
                  → Companionship & Emotional Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm sm:text-base font-bold mb-3 uppercase">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5 drop-shadow-md sm:w-[18px] sm:h-[18px]"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-gray-300 text-xs sm:text-sm">
                  2033 Sombrero Way SE,<br />
                  Atlanta, GA 30316
                </span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 drop-shadow-md sm:w-[18px] sm:h-[18px]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <Link href="tel:+31425687922" className="text-gray-300 hover:text-[#887904] transition-colors text-xs sm:text-sm">
                  +314 256 8792 2
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 drop-shadow-md sm:w-[18px] sm:h-[18px]"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <Link href="mailto:info@qualitycaresl.com" className="text-gray-300 hover:text-[#887904] transition-colors text-xs sm:text-sm">
                  info@qualitycaresl.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs text-gray-400">
            <p className="text-center sm:text-left">© 2025 QUALITY CARE SENIOR LIVING. ALL RIGHTS RESERVED.</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 items-center">
              <Link href="/privacy" className="hover:text-white transition-colors uppercase text-[10px] sm:text-xs">
                Privacy & Policy
              </Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors uppercase text-[10px] sm:text-xs">
                Terms of Use
              </Link>
              <Link href="/hipaa-policy" className="hover:text-white transition-colors uppercase text-[10px] sm:text-xs">
                HIPAA Policy
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors uppercase text-[10px] sm:text-xs whitespace-nowrap">
                Accessibility Statement
              </Link>
              <Link href="/accessibility" className="hover:opacity-80 transition-all duration-300 hover:scale-110" aria-label="Accessibility">
                <Image
                  src="/footer.png"
                  alt="Accessibility"
                  width={28}
                  height={28}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
