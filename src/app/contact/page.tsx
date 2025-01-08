"use client";
import React from "react";
import { Stats } from "@/components/stats";
export default function Contact() {
  return (
    <div className="bg-[#FAF3E3] min-h-screen">
      <div className="container mx-auto px-8 py-52 grid md:grid-cols-2 gap-12">
        {/* Contact Information Section */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact</h1>
          <p className="text-lg text-gray-700 mb-8">
            Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
            at adipiscing sit morbi aliquet mauris porttitor nisi.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div>
              <p className="text-gray-800 font-semibold">ADDRESS</p>
              <p className="text-gray-600">
                1234 N Spring St, Los Angeles, CA <br />
                90012, United States.
              </p>
            </div>
            {/* Phone */}
            <div>
              <p className="text-gray-800 font-semibold">PHONE</p>
              <p className="text-gray-600">+01 - 123 456 7890</p>
            </div>
            {/* Email */}
            <div>
              <p className="text-gray-800 font-semibold">EMAIL</p>
              <p className="text-gray-600">mail@example.com</p>
            </div>
          </div>

          <div className='pt-12'></div>
            <Stats />
            <div className='pt-12'></div>
          
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Let&#39;s Talk</h2>
          <form action="#" method="POST" className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#D4A69B] focus:border-[#D4A69B]"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#D4A69B] focus:border-[#D4A69B]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#D4A69B] focus:border-[#D4A69B]"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#D4A69B] focus:border-[#D4A69B]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Comment or Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#D4A69B] focus:border-[#D4A69B]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="inline-block bg-[#D4A69B] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-[#B68979] transition duration-300"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
