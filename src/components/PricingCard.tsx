"use client";
import { PricingPlan } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard = ({ plan }: PricingCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-3xl py-7 md:py-10 px-5 md:px-10">
        <div className="space-y-2 text-dark">
          <h3 className="text-2xl md:text-4xl font-bold">{plan.title}</h3>
          <p className="text-gray-600 text-sm md:text-base">{plan.description}</p>
        </div>

        <div className="space-y-4 my-4">
          <h3 className="text-2xl md:text-3xl font-bold text-dark">{plan.price}</h3>
          <Link
            href="/checkout"
            className="flex items-center justify-center border md:border-2 border-dark text-dark py-3 px-5 rounded-full w-full hover:bg-dark hover:text-white transition-all duration-300"
          >
            {plan.buttonText}
          </Link>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 pt-3">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 relative">
                <Image
                  src={feature.icon}
                  alt={feature.text}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="text-base md:text-lg text-dark">{feature.text}</h4>
                <p className="text-sm text-[#5B5B5B]">{feature?.textContent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
