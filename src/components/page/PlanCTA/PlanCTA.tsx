import { ctaData } from "@/styles/cta";
import { CtaSection } from "@/types/types";

interface CtaProps {
  data?: CtaSection;
  className?: string;
}

function PlanCTA({ data = ctaData, className = "" }: CtaProps) {
  return (
    <section className="py-5 md:py-10">
      <div className="container mx-auto">
        <div className="planCta">
          <div className={`space-y-2 sm:space-y-3 max-w-xl w-full ${className}`}>
            <h2 className="text-gradient bg-gradient-text font-bold text-2xl sm:text-3xl lg:text-4xl pb-2 sm:pb-3">
              {data.title}
            </h2>
            <p className="text-sm sm:text-lg pb-2 sm:pb-3 font-normal leading-relaxed">
              {data.description}
            </p>
            <button
              type="button"
              className="bg-white text-dark rounded-full px-8 sm:px-12 lg:px-20 py-2 sm:py-3 border border-transparent hover:border-white hover:bg-transparent hover:text-white text-xs sm:text-sm font-medium focus:outline-none transition-all duration-300 w-full sm:w-auto text-center"
            >
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanCTA