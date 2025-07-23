"use client";
import { footerMenuItems } from "@/content/menu";
import { motion, Variants } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "backOut" }
  }
};

const Footer = () => {
  return (
    <footer className="pt-10 md:pt-20 pb-5">
      <div className="container mx-auto">
        <div>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={scaleIn}
          >
            <div className="flex items-center flex-col justify-center gap-2">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={245}
                  height={72}
                  className="w-auto h-10 md:h-[72px]"
                  priority
                  sizes="(max-width: 768px) 50px, 145px"
                />
              </Link>
              <h5 className="text-center pb-3 text-lg md:text-2xl font-semibold">
                Via corso della repubblica 322
                <span className="block text-[#A2A2A2] text-base md:text-xl font-normal">
                  Velletri (RM) 00049
                </span>
              </h5>
              <h5 className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="text-[#A2A2A2]" />
                +39 379 211 5840
              </h5>
              <h5 className="text-sm md:text-base">
                <span className="text-[#A2A2A2]">P.IVA:</span> 17543201002
              </h5>
            </div>
          </motion.section>
          <div className="flex items-center flex-col-reverse md:flex-row justify-between gap-5 pt-5">
            <ul className="flex items-center flex-col md:flex-row gap-2 md:gap-5">
              {footerMenuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm md:text-base py-2 px-3 flex items-center hover:text-yellow-400 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/" className="text-sm md:text-base hover:underline hover:text-yellow-400">info@verifycar.it</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
