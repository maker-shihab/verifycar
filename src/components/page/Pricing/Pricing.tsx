import PricingCard from "@/components/PricingCard";
import { pricingPlans } from "@/content/pricing";
import { sectionContent } from "@/content/sectionContent";

function Pricing() {
  const pageContent = sectionContent["pricing"];
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="sectionContent">
          <div className="mb-8 text-center">
            <h2 className="text-lg md:text-2xl font-bold mb-4 text-gradient bg-gradient-text">
              {pageContent.title}
            </h2>
            <p className="whitespace-pre-line text-base md:text-lg text-white">
              {pageContent.paragraph}
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center pt-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing