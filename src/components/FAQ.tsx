import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from './icons/Icons';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Nouva really that different from ChatGPT?",
      a: "Yes. Nouva is built specifically for team workflows — with automation, output tracking, and collaboration built in. ChatGPT is a general tool. Nouva is a productivity platform."
    },
    {
      q: "Will it actually adapt to how we work?",
      a: "That's the whole point. Nouva learns your team's processes, preferences, and patterns — so every output feels like it was made for you, not generated for everyone."
    },
    {
      q: "How much can my team produce with Nouva?",
      a: "Pro and Teams plans are unlimited. Starter plans include 30 tasks per month — enough to get started and see the difference immediately."
    },
    {
      q: "What kind of workflows does Nouva support?",
      a: "Content creation, task automation, team collaboration, reporting, and more. New workflow types are added regularly based on user feedback."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. No contracts, no cancellation fees. You're in full control — cancel or downgrade whenever you want."
    },
    {
      q: "Is my data private?",
      a: "Yes. Everything your team produces in Nouva is fully encrypted and never shared with third parties. Your data is yours — always."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-36 relative bg-[#030305]">
      <div className="max-w-[860px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-semibold font-mono text-[#ff2d46] mb-5 uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            You have questions. <br className="hidden sm:inline" />
            <span className="text-white/40">We have answers.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#08080c] border-[#ff2d46]/30 shadow-xl'
                    : 'bg-[#08080c]/50 border-white/[0.06] hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4"
                >
                  <span className={`text-base sm:text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#ff2d46]/20 border border-[#ff2d46]/40 text-[#ff2d46]' : 'bg-white/[0.03] border border-white/10 text-white/50'
                  }`}>
                    {isOpen ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#858b9c] leading-relaxed border-t border-white/[0.04] pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
