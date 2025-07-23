'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import contentSections from "@/content/markdownContent";
import { sectionContent } from "@/content/sectionContent";
import { motion } from 'framer-motion';

export default function MarkDown() {
  const pageContent = sectionContent["markdown"];
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 md:pt-44">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="sectionContent">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="mb-8">
                    <h2 className="text-2xl !leading-normal font-bold mb-4 text-gradient bg-gradient-text">
                      {pageContent.title}
                    </h2>
                    <p className="whitespace-pre-line text-gray-200">
                      {pageContent.paragraph}
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-8">
                {contentSections.map((section, index) => (
                  <motion.section
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1 // Staggered delay
                    }}
                    className="mb-8"
                  >
                    <h2 className="text-2xl md:text-[32px] font-bold text-gray-200 mb-4">
                      {section.title}
                    </h2>
                    <p className="whitespace-pre-line text-gray-200 text-base">
                      {section.content}
                    </p>
                  </motion.section>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
