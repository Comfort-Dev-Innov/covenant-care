"use client";

import React from "react";
const links = {
  facebook: "https://www.facebook.com/covenantcare",
  instagram: "https://www.instagram.com/covenantcare",
  email: "covenantcare@gmail.com",
  phone: "9937277628",
  phone2: "9206799195",
};

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#f2ece5] py-16 px-4">
      <div className=" mx-auto text-center w-full">
        {/* Tagline */}
        <p className="text-capitalize text-2xl font-medium text-[#181818] uppercase tracking-wider mb-4 font-inter w-full">
          Here when you need us most.
        </p>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C4F5E] mb-8 font-inter w-full">
          With love and care that endures.
        </h2>

        {/* CTA Button */}
        <div className="mb-16">
          {/* To be changed when plan section is implemented */}
          <button
            onClick={() => alert("Select insurance policy from the menu above")}
            className="inline-flex items-center gap-4 px-[18px] py-[10px] cursor-pointer border-2 border-[#181818] rounded-lg bg-transparent text-[#181818] font-medium hover:bg-[#181818] hover:text-[#f2ece5] transition-colors duration-300 font-inter"
          >
            Inquire Now
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Social Media and Contact Links */}
        <div className="flex flex-col flex-wrap sm:flex-row items-center justify-center gap-8 text-[#181818]">
          {/* Facebook */}
          <div
            onClick={() => window.open(links.facebook, "_blank")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#181818] flex items-center justify-center hover:bg-[#181818] hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4 cursor-pointer hover:scale-110 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <a className="font-medium font-inter no-underline hover:underline transition-all ease-in-out duration-300">
              Covenant Care
            </a>
          </div>

          {/* Instagram */}
          <div
            onClick={() => window.open(links.instagram, "_blank")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#181818] flex items-center justify-center hover:bg-[#181818] hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4 cursor-pointer hover:scale-110 transition-all duration-300 "
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <a className="font-medium font-inter no-underline hover:underline transition-all ease-in-out duration-300">
              @covenant_care
            </a>
          </div>

          {/* Email */}
          <div
            onClick={() => window.open(`mailto:${links.email}`, "_blank")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#181818] flex items-center justify-center hover:bg-[#181818] hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4 cursor-pointer hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <a className="font-medium font-inter no-underline hover:underline transition-all ease-in-out duration-300">
              covenantcare@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full border-2 border-[#181818] flex items-center justify-center hover:bg-[#181818] hover:text-white transition-all duration-300">
              <svg
                className="w-4 h-4 cursor-pointer hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="font-medium font-inter no-underline">
              <a
                href={`tel:63${links.phone}`}
                className=" hover:underline transition-all ease-in-out duration-300"
              >
                0{links.phone}
              </a>{" "}
              /{" "}
              <a
                href={`tel:63${links.phone2}`}
                className=" hover:underline transition-all ease-in-out duration-300"
              >
                0{links.phone2}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
