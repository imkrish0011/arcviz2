import React, { useState, useEffect, useRef } from 'react';

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "73%",
      label: "Time automated",
      text: "Nearly half of all working hours are spent on tasks that should never reach a human. Nouva handles them instantly.",
      highlight: "Nouva handles them instantly."
    },
    {
      value: "3.5x",
      label: "Output multiplier",
      text: "Teams that embrace AI don't just work faster — they produce three times more output with the exact same number of people.",
      highlight: "three times more output"
    },
    {
      value: "99.4%",
      label: "Team alignment",
      text: "Most professionals know repetitive work is killing their productivity. The majority are still waiting for a solution.",
      highlight: "The majority are still waiting for a solution."
    }
  ];

  return (
    <section id="why-it-matters" ref={sectionRef} className="py-24 md:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-[#99a0b0] mb-5 uppercase tracking-wider">
            Why It Matters
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
            The way teams work is changing. <span className="text-white/50">Most are still catching up.</span>
          </h2>
        </div>

        {/* 3 Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-[#0e131d]/60 border border-white/[0.08] hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#8cff2e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 flex items-baseline gap-1">
                  <span className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#8cff2e] mb-4">
                  {stat.label}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#99a0b0] leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
