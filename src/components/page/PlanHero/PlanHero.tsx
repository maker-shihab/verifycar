import { starterPlanData } from "@/content/plan";
import { PlanBannerData } from "@/types/types";
import Image from "next/image";

interface PlanBannerProps {
  data?: PlanBannerData;
}
function PlanHero({ data = starterPlanData }: PlanBannerProps) {
  return (
    <>
      <section className="planBanner pt-32 md:py-52">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 pt-20 md:pt-32 pb-10 md:pb-20">
            <div className="flex flex-col">
              <h4 className="text-[#979797] text-base md:text-xl">
                {data.packageName}
              </h4>
              <h1 className="block">{data.title}</h1>
              <p
                className="pt-2 md:pt-4  text-sm md:text-xl"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>

            <div className="flex-1 flex flex-col gap-3 md:gap-5 max-w-md w-full">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-1 md:gap-2">
                  <Image
                    src={feature.icon}
                    height={0}
                    width={0}
                    alt="feature icon"
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]"
                    priority
                  />
                  <div className="pl-2">
                    <span className="text-sm md:text-base">{feature.title}</span>
                    {feature.description && (
                      <p className="text-[#9D9D9D] text-xs md:text-sm">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-5 md:-mt-32 relative z-10">
            {data.cards.map((card, index) => (
              <div
                key={index}
                className={`space-y-2 rounded-xl p-5 md:p-8 ${card.variant === 'white' ? 'bg-white text-dark' : 'border border-white'
                  }`}
              >
                <h3 className="text-lg md:text-2xl font-bold">
                  {card.title}
                </h3>
                <p className={`text-sm md:text-base ${card.variant === 'white' ? 'text-gray-400' : ''
                  }`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PlanHero