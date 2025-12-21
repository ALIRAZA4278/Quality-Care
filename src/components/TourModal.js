"use client";

import { useState } from "react";
import Image from "next/image";

export default function TourModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="relative w-64 h-64 opacity-15">
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
          className="absolute top-6 right-6 text-[#887904] hover:text-gray-600 transition-colors z-10"
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

        {/* Modal Content */}
        <div className="relative p-8 sm:p-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-recoleta)" }}
          >
            Schedule a Tour
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            We'd love to meet you and show you our home. Please fill out the form below
            and choose your preferred date and time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
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
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
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
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
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
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400"
              />
            </div>

            {/* Preferred Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-semibold text-gray-900 mb-2">
                  Preferred Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors appearance-none bg-white"
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
              <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                Notes or Questions
              </label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Message"
                value={formData.notes}
                onChange={handleChange}
                rows="5"
                className="w-full px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:border-[#887904] transition-colors placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#12201B] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1a2d25] transition-colors inline-flex items-center gap-2 text-sm uppercase"
            >
              Book a Tour
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
