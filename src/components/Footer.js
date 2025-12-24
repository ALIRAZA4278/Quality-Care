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
                  href="https://facebook.com"
                  target="_blank"
                  className="bg-[#2a3f35] hover:bg-[#887904] hover:scale-110 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
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
                  href="https://linkedin.com"
                  target="_blank"
                  className="bg-[#2a3f35] hover:bg-[#887904] hover:scale-110 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="bg-[#2a3f35] hover:bg-[#887904] hover:scale-110 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="bg-[#2a3f35] hover:bg-[#887904] hover:scale-110 active:scale-95 p-2 sm:p-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="sm:w-[18px] sm:h-[18px]"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
