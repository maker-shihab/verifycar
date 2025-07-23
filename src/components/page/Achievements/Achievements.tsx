"use client";
import { achievementData } from "@/content/achievements";
import { AchievementData } from "@/types/types";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

interface AchievementsProps {
  data?: AchievementData;
}

function Achievements({ data = achievementData }: AchievementsProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-4 pb-4">
            <h3 className="bg-gradient-text text-gradient font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {data.title}
            </h3>
            <p className="font-normal md:font-medium pt-2 text-base sm:text-lg">
              {data.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-5" ref={ref}>
              {data.stats.map((stat, index) => (
                <div key={index} className="flex flex-col text-center gap-2">
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    {hasAnimated ? (
                      <CountUp
                        end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                        duration={2.5}
                        decimals={parseFloat(stat.value) % 1 !== 0 ? 2 : 0}
                      />
                    ) : (
                      '0'
                    )}
                    {stat.valueExtra}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-2xl sm:rounded-3xl py-5 px-6 sm:py-7 sm:px-10 space-y-4">
            {data.steps.map((step) => (
              <div key={step.number} className="flex flex-col md:flex-row items-start gap-3 sm:gap-4">
                <div>
                  <h2 className="text-[#E8E8E8] text-7xl sm:text-8xl lg:text-9xl font-bold">
                    {step.number}
                  </h2>
                </div>
                <div className="space-y-1">
                  <h4 className="text-dark font-semibold text-lg sm:text-2xl lg:text-3xl">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;