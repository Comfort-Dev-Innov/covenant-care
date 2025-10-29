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
        className="w-full py-4 px-0 flex items-center justify-between text-left hover:opacity-70 transition-opacity cursor-pointer"
      >
        <span className="text-foreground font-medium pr-4 cursor-pointer font-[family-name:var(--font-inter)]">
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-6 pt-2 text-foreground/80 px-12">
          {faq.isHTML ? (
            <div className="prose prose-sm max-w-none">{faq.answer}</div>
          ) : (
            <p>{faq.answer}</p>
          )}
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
      className="w-full max-w-[1202px] min-w-[300px] mx-auto px-4 py-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold sm:text-left text-center mb-8 font-archivo-black text-[#2B3D4F]">
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
