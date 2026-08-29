import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from './icons/Icons';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      priceMonthly: 0,
      priceYearly: 0,
      description: "Perfect for individuals who want to explore what AI can do.",
      popular: false,
      benefits: [
        "30 tasks per month",
        "1 active project at a time",
        "3 content formats",
        "Standard output speed",
        "Community support"
      ]
    },
    {
      name: "Pro",
      priceMonthly: 19,
      priceYearly: 15,
      description: "For creators and professionals who need speed and flexibility.",
      popular: true,
      benefits: [
        "Unlimited tasks & drafts",
        "Unlimited active projects",
        "All content formats",
        "Priority processing speed",
        "Brand voice personalization"
      ]
    },
    {
      name: "Teams",
      priceMonthly: 49,
      priceYearly: 39,
      description: "For fast-moving teams that want to scale output together.",
      popular: false,
      benefits: [
        "Everything in Pro",
        "Shared team workspaces",
        "Centralized billing & admin",
        "Advanced team analytics",
        "Dedicated support & onboarding"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-36 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-[#99a0b0] mb-5 uppercase tracking-wider">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight mb-8">
            Start free, <br className="hidden sm:inline" />
            <span className="text-white/50">scale when ready.</span>
          </h2>

          {/* Billing Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#0e131d] border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                !isYearly
                  ? 'bg-white text-[#09090b] font-semibold shadow-sm'
                  : 'text-[#99a0b0] hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                isYearly
                  ? 'bg-white text-[#09090b] font-semibold shadow-sm'
                  : 'text-[#99a0b0] hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="bg-[#8cff2e]/20 text-[#8cff2e] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                20% off
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl md:rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#121926] to-[#0e131d] border-2 border-[#8cff2e]/40 shadow-[0_0_50px_rgba(140,255,46,0.08)] lg:-translate-y-2'
                    : 'bg-[#0e131d]/60 border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8cff2e] text-[#09090b] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-[#99a0b0] min-h-[40px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/[0.08]">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs sm:text-sm text-[#99a0b0]">
                      / user / month
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                        <div className="w-4 h-4 rounded-full bg-[#8cff2e]/15 flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-2.5 h-2.5 text-[#8cff2e]" />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-[#8cff2e] hover:bg-[#9eff47] text-[#09090b] shadow-[0_0_20px_rgba(140,255,46,0.25)]'
                      : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10'
                  }`}
                >
                  Get started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
