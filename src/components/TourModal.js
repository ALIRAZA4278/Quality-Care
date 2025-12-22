"use client";

import { useState } from "react";
import Image from "next/image";

export default function TourModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    hearAboutUs: "",
    date: "",
    time: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/50 overflow-y-auto">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-md sm:max-w-xl w-full my-auto shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 opacity-10">
            <Image
              src="/about/leave.png"
              alt="Background"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#887904] hover:text-gray-600 transition-colors z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-5 sm:h-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="relative pt-8 px-4 pb-4 sm:pt-12 sm:px-8 sm:pb-6">
          <h2
            className="text-2xl sm:text-4xl font-black text-center text-gray-900 mb-1 sm:mb-3"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: "900" }}
          >
            Schedule a Tour
          </h2>
          <p className="text-center text-gray-600 text-[10px] sm:text-sm mb-2 sm:mb-5 px-1">
            We'd love to meet you and show you our home. Please fill out the form below
            and choose your preferred date and time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-1.5 sm:space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="eg. John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400 text-[11px] sm:text-base"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="123-456-789"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400 text-[11px] sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400 text-[11px] sm:text-base"
              />
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAboutUs" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                How did you hear about us?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                required
                className="w-full px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors appearance-none text-[11px] sm:text-base text-gray-900"
              >
                <option value="">Select</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Word of Mouth">Word of Mouth</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Event">Event</option>
              </select>
            </div>

            {/* Preferred Date and Time */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-4">
              <div>
                <label htmlFor="date" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-1.5 sm:px-4 py-1.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors text-[11px] sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                  Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-1.5 sm:px-4 py-1.5 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors appearance-none text-[11px] sm:text-base"
                >
                  <option value="">Select Time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </select>
              </div>
            </div>

            {/* Notes or Questions */}
            <div>
              <label htmlFor="notes" className="block text-[10px] sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1.5">
                Notes or Questions
              </label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Message"
                value={formData.notes}
                onChange={handleChange}
                rows="2"
                className="w-full px-2.5 sm:px-5 py-1.5 sm:py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400 resize-none text-[11px] sm:text-base"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#12201B] text-white px-4 sm:px-6 py-1.5 sm:py-3 rounded-full font-semibold hover:bg-[#1a2d25] transition-colors inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm uppercase w-full justify-center mt-0.5 sm:mt-2"
            >
              Book a Tour
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
                className="sm:w-4 sm:h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
