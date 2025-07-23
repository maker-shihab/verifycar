"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Achievements from "@/components/page/Achievements/Achievements";
import Contact from "@/components/page/Contact/Contact";
import Hero from "@/components/page/Hero/Hero";
import Pricing from "@/components/page/Pricing/Pricing";
import { motion, Variants } from "framer-motion";

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "backOut" }
  }
};


export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={fadeUp}
        >
          <Hero />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
        >
          <Achievements />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleIn}
        >
          <Pricing />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
              }
            }
          }}
        >
          <Contact />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}