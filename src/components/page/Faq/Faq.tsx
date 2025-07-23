"use client";
import { faqData } from "@/content/faq";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-5">
          <div className="space-y-4 max-w-md w-full pt-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gradient bg-gradient-text">
              Domande?
            </h2>
            <p className="max-w-xs w-full">
              Lorem ipsum dolor sit amet consectetur. Tortor sit at cursus
              in.
            </p>
          </div>
          <div className="flex flex-col w-full">
            {faqData.map((faq, index) => (
              <div
                className="border-b border-[#323232]"
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between gap-5 cursor-pointer py-3 md:py-6 md:px-4">
                  <h3 className="text-base md:text-lg">{faq.question}</h3>
                  <span className="text-lg md:text-xl">
                    <ChevronDown />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out md:px-4 ${openIndex === index ? "max-h-screen pb-4" : "max-h-0"
                    }`}
                >
                  <p className="text-gray-400 text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq