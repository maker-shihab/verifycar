"use client";
import { contactData } from "@/content/contact";
import { ContactData } from "@/types/types";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
interface ContactProps {
  data?: ContactData;
}
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] }
  }
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] }
  }
};

function Contact({ data = contactData }: ContactProps) {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={slideFromLeft}
          >
            <div className="flex flex-col">
              <h2 className="bg-gradient-text text-gradient text-3xl sm:text-4xl lg:text-5xl pb-3 sm:pb-4 font-bold">
                {data.title}
              </h2>
              <p className="text-base sm:text-2xl lg:text-3xl font-normal pb-5 sm:pb-6 lg:pb-7 leading-normal">
                {data.subtitle}
              </p>
              <div className="space-y-2 pb-6 sm:pb-7 lg:pb-8 text-base sm:text-lg lg:text-xl font-normal">
                <p>{data.requirements.title}</p>
                <ul className="list-disc list-inside flex flex-col gap-1 sm:gap-2 pt-2 sm:pt-3">
                  {data.requirements.items.map((item, index) => (
                    <li key={index} className="text-sm sm:text-base lg:text-lg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info Section - Responsive borders and spacing */}
              <div className="space-y-3 sm:space-y-4 border-t border-[#3D3D3D] pt-6 sm:pt-7 lg:pt-8">
                <h3 className="text-lg sm:text-3xl font-semibold pb-1 sm:pb-2">
                  {data.contactInfo.title}
                </h3>

                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* Address Block */}
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin className="text-[#979797] w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-base sm:text-xl font-bold">
                        {data.contactInfo.address.street}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl text-[#717171]">
                      {data.contactInfo.address.city} ({data.contactInfo.address.region}) {data.contactInfo.address.postalCode}
                    </p>
                  </div>

                  {/* Phone Block */}
                  <div className="flex items-center gap-2 sm:gap-3 pt-2 sm:pt-3">
                    <Phone className="text-[#979797] w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-base sm:text-xl font-bold">
                      {data.contactInfo.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>


          {/* Right Column - Form */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={slideFromRight}
          >
            <div className="rounded-2xl md:rounded-3xl py-6 px-4 md:px-5 md:p-10 bg-white">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold text-dark">{data.form.title}</h3>
                <p className="text-base md:text-2xl font-normal text-[#505050]">
                  {data.form.subtitle}
                </p>
              </div>
              <div className="pt-4 md:pt-7 space-y-3">
                <div className="form-control">
                  <input
                    type="text"
                    className="w-full"
                    placeholder={data.form.fields.name}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    className="w-full"
                    placeholder={data.form.fields.email}
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    id="message"
                    placeholder={data.form.fields.message}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button className="btn-dark">{data.form.buttonText}</button>
                </div>
                <div className="max-w-md mx-auto text-sm md:text-base">
                  <p className="text-[#9E9E9E] text-center">
                    {data.form.termsText}{" "}
                    <a href="#" className="text-dark hover:underline">
                      {data.form.termsLinks.terms}
                    </a>{" "}
                    e la{" "}
                    <a href="#" className="text-dark hover:underline">
                      {data.form.termsLinks.privacy}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  )
}

export default Contact