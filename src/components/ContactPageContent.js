import Image from "next/image";

export default function ContactPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Contact Us"
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
            Contact Us
          </h1>
          <div className="w-32 h-1 bg-[#887904] mx-auto mt-6"></div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-[#f8f6f3] rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-[#887904] rounded-full p-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <p className="text-base font-semibold text-gray-900">+234 256 8792 2</p>
            </div>

            {/* Email Card */}
            <div className="bg-[#f8f6f3] rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-[#887904] rounded-full p-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <p className="text-base font-semibold text-gray-900">info@qualitycaresi.com</p>
            </div>

            {/* Address Card */}
            <div className="bg-[#f8f6f3] rounded-3xl p-6 flex items-center gap-4">
              <div className="bg-[#887904] rounded-full p-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-base font-semibold text-gray-900">2033 Sombrero Way SE,</p>
                <p className="text-base font-semibold text-gray-900">Atlanta, GA 30316</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Map */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5466494949987!2d-0.1220994871307612!3d51.50318637169487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sRiverside%20Building%2C%20County%20Hall%2C%20Westminster%20Bridge%20Rd%2C%20London%20SE1%207JA%2C%20UK!5e0!3m2!1sen!2sus!4v1766317314261!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right - Form */}
            <div className="order-1 lg:order-2">
              <h3
                className="text-xl sm:text-2xl mb-3"
                style={{
                  fontFamily: "var(--font-aulletta)",
                  color: "#887904",
                }}
              >
                Send us a message
              </h3>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-recoleta)" }}
              >
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8">
                Have questions or want to schedule a tour? We're here to help.
              </p>

              <form className="space-y-6">
                {/* Full Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-6 py-4 bg-[#f8f6f3] rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#887904]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-6 py-4 bg-[#f8f6f3] rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#887904]"
                  />
                </div>

                {/* Phone and Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-6 py-4 bg-[#f8f6f3] rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#887904]"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Preferred Tour Date"
                      className="w-full px-6 py-4 bg-[#f8f6f3] rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#887904]"
                    />
                    <svg
                      className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#887904"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-[#f8f6f3] rounded-3xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#887904] resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#887904] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#6a5f03] transition-colors inline-flex items-center gap-2"
                >
                  SEND MESSAGE
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
