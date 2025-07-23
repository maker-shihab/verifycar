"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/page/Contact/Contact";
import Faq from "@/components/page/Faq/Faq";
import PlanCTA from "@/components/page/PlanCTA/PlanCTA";
import PlanHero from "@/components/page/PlanHero/PlanHero";
import Review from "@/components/page/Review/Review";
import { motion, Variants } from "framer-motion";

// Properly typed variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" }
  }
};

const bounceUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Plan() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* PlanHero */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={fadeUp}
        >
          <PlanHero />
        </motion.section>

        {/* Review */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={slideFromLeft}
        >
          <Review />
        </motion.section>

        {/* Contact */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={slideFromRight}
        >
          <Contact />
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={scaleUp}
        >
          <Faq />
        </motion.section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          variants={bounceUp}
        >
          <PlanCTA />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}