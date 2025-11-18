"use client";

import React, { useRef } from "react";
import { Industries } from "@/lib/data";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function CareersForm() {
  const industriesRef = (useRef < HTMLDivElement) | (null > null);

  return (
    <section className="py-20 bg-[#201D1F]">
      <div id="careers" className="container max-w-7xl mx-auto px-5">
        <div className="flex flex-col max-w-[620px] items-start justify-start">
          <h2 className="text-3xl text-start text-primary font-bold mb-4">
            Take Your Career to the Next Level
          </h2>
          <p className="text-lg text-white">
            Ready to make a bold move in your career? Join a team that values
            your skills, supports your growth, and empowers you to achieve more.
            Apply now and start your next chapter with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-16 mt-4">
          {/* Industries Cards - Sticky Left */}
          <div
            ref={industriesRef}
            className="flex flex-col gap-y-5 md:sticky md:top-20 md:max-h-[80vh] md:overflow-auto lg:pr-4 md:pr-0 pr-0"
          >
            {Industries.map((industry) => (
              <Link
                href={industry.href}
                key={industry.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.shortdesc}</p>
              </Link>
            ))}
          </div>

          {/* Form Section */}
          <div>
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase text-white">
                Apply Now
              </h2>
              <form
                action="https://formsubmit.co/9352e79a91ce748f9489d0c72dbcc46b"
                method="POST"
                className="space-y-6"
              >
                <select
                  title="Select Industry"
                  className="w-full px-4 py-3 text-primary border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  name="industry"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Industry
                  </option>
                  {Industries.map((industry) => (
                    <option key={industry.id} value={industry.title}>
                      {industry.title}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-primary text-[18px] font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 outline-none py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-primary text-[18px] font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-primary text-[18px] font-medium mb-2"
                  >
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-primary text-[18px] font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-primary text-[18px] font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                {/* Hidden FormSubmit settings */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Job Application Received"
                />
                <input type="hidden" name="_next" value="" />

                <button
                  type="submit"
                  className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition-colors"
                >
                  Apply Job <FaPaperPlane className="inline" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
