'use client';

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { sectionContent } from "@/content/sectionContent";
import { termsData } from "@/content/termsOfService";
import { TermsOfServiceProps } from "@/types/types";
import { motion } from 'framer-motion';
import Image from "next/image";

export default function TerminiDiServizioPage() {
  const pageContent = sectionContent["termsOfService"];

  return (
    <>
      <Header />
      <main className="pt-32 lg:pt-44 pb-10 px-4">
        <section className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sectionContent"
          >
            <div className="mb-8">
              <h2 className="mb-4 text-center text-gradient bg-gradient-text">
                {pageContent.title}
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 pt-5 md:pt-10">
            {termsData.map((term: TermsOfServiceProps, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                className="flex flex-col"
              >
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center justify-center gap-2 bg-[#1D1D1D] rounded-xl h-10 w-10">
                    <Image
                      src="/assets/shield.png"
                      alt="Section Icon"
                      className="w-5 h-5"
                      width={22}
                      height={22}
                    />
                  </div>
                  <h2 className="text-base md:text-lg font-medium text-yellow-400">
                    {term.title}
                  </h2>
                </div>

                {term.sections.map((section, subIndex) => (
                  <motion.div
                    key={subIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="mb-4"
                  >
                    <h3 className="text-base md:text-lg font-medium pb-2">
                      {section.heading}
                    </h3>
                    <p className="text-sm text-gray-100">{section.content}</p>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}