'use client'; // Add this at the very top

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import { checkoutData } from "@/content/checkout";
import { pricingPlans } from "@/content/pricing";
import { motion } from 'framer-motion';
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CheckOut() {
  return (
    <>
      <Header />
      <main>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-32 md:pt-44 pb-20"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl w-full mx-auto gap-6 lg:gap-10">
              {/* Left Column - Form */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3 w-full"
              >
                {/* Back button */}
                <motion.div
                  whileHover={{ x: -5 }}
                  className="max-w-xs w-full"
                >
                  <button
                    type="button"
                    className="flex items-center gap-3 hover:underline"
                  >
                    <MoveLeft className="text-xl text-[#5B5B5B]" />
                    <span className="text-3xl md:text-4xl bg-gradient-text text-gradient font-bold">
                      {checkoutData.title}
                    </span>
                  </button>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pb-5 pt-3"
                >

                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + checkoutData.steps[0].fields.length * 0.05 }}
                    className={`form-control-dark ${checkoutData.steps[0].fields.length === 0 ? 'pt-5' : 'mt-5'} relative z-10`}
                  >
                    <h4 className="text-xl md:text-2xl font-medium">
                      {checkoutData.steps[0].title}
                    </h4>
                    {checkoutData.steps[0].fields.map((field, index) => (
                      <div key={index} className={`form-control-dark ${index === 0 ? 'pt-5' : 'mt-5'} relative z-10`}>
                        {field.icon && (
                          <span className="absolute left-4 top-3.5 -z-10 h-8 w-8 rounded-full bg-[#353535] flex items-center justify-center">
                            <Image
                              src={field.icon}
                              height={20}
                              width={20}
                              alt="icon"
                              className="w-4 h-4 md:w-5 md:h-5"
                            />
                          </span>
                        )}
                        <input
                          type={field.type}
                          className={field.icon ? '!pl-14' : ''}
                          placeholder={field.placeholder}
                          required={field.required}
                        />
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Payment Methods */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-3 pb-8"
                >
                  <h4 className="text-xl md:text-2xl font-medium">
                    2. Modalità di pagamento
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8">
                    {checkoutData.paymentMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        className={`payment-card ${method.bgColor} ${method.focusedBgColor} h-full min-h-[80px] flex flex-col items-center justify-center gap-2 p-4`}
                      >
                        <Image
                          src={method.icon}
                          height={method.height}
                          width={method.width}
                          alt={method.name}
                          className="object-contain max-h-12"
                        />
                        {method.name && (
                          <span className="text-sm md:text-base text-center">
                            {method.name}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Payment Details */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pb-10"
                >
                  <h4 className="text-xl md:text-2xl font-medium">
                    {checkoutData.steps[1].title}
                  </h4>
                  {checkoutData.steps[1].fields.map((field, index) => (
                    <div key={index} className="form-control-dark pt-5">
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    </div>
                  ))}

                  <label className="block text-white font-medium text-base md:text-lg pt-6 md:pt-8">
                    Indirizzo di fatturazione
                  </label>

                  {checkoutData.steps[2].fields.map((field, index) => (
                    <div key={index} className={`form-control-dark ${index === 0 ? 'pt-5' : 'mt-5'} relative z-10`}>
                      {field.icon && (
                        <span className="absolute left-4 top-3.5 -z-10 h-8 w-8 rounded-full bg-[#353535] flex items-center justify-center">
                          <Image
                            src={field.icon}
                            height={20}
                            width={20}
                            alt="icon"
                            className="w-4 h-4 md:w-5 md:h-5"
                          />
                        </span>
                      )}
                      <input
                        type={field.type}
                        className={field.icon ? '!pl-14' : ''}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    </div>
                  ))}

                  <div className="py-3">
                    <Link
                      href="#"
                      className="text-[#505050] font-medium text-sm md:text-base hover:text-white hover:underline transition-all duration-300"
                    >
                      {checkoutData.manualAddressText}
                    </Link>
                  </div>

                  <div className="mt-8 md:mt-10 w-full">
                    <button
                      type="submit"
                      className="bg-white text-dark rounded-full border-2 border-white py-3 md:py-4 px-6 md:px-10 hover:text-white hover:bg-transparent transition-all duration-300 w-full text-base md:text-lg"
                    >
                      {checkoutData.submitButtonText}
                    </button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Pricing Card */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-10 max-w-md w-full lg:sticky lg:top-32"
              >
                <PricingCard plan={pricingPlans[1]} />
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}