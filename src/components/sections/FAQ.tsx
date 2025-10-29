"use client";

import React, { useState } from "react";
import { faqData, FAQItem } from "@/constants/faqData";

interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-foreground/20">
      <button
        onClick={onClick}
        className="w-full py-4 px-0 flex items-center justify-between text-left hover:opacity-70 transition-all duratoin-300 cursor-pointer"
      >
        <span className="text-foreground text-[18px] md:text-[20px] font-light pr-4 cursor-pointer font-inter">
          {faq.question}
        </span>
        <svg
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pt-2 text-foreground/80 px-12 text-[16px] md:text-[18px] font-light">
            {faq.isHTML ? (
              <div className="prose prose-sm max-w-none">{faq.answer}</div>
            ) : (
              <p>{faq.answer}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full max-w-[1280px] mx-auto max-md:px-[10px] py-16 md:py-36"
    >
      <h2 className="text-[24px] md:text-[45px] text-center sm:text-left mb-8 font-archivo-black text-primary">
        Frequently Asked <br /> Questions
      </h2>
      <div className="">
        {faqData.map((faq, index) => (
          <FAQItemComponent
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
