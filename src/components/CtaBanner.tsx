import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-12 md:p-20 text-center bg-[#0e131d] shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/SEp6FrEl6Vgib3aBzRCdawZTbw.png"
              alt="Cinematic landscape background"
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c12] via-[#080c12]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              The work doesn't stop. <br />
              <span className="text-[#8cff2e]">Neither does Nouva.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#99a0b0] mb-10 leading-relaxed">
              From your first task to your entire team's workflow — Nouva grows with you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#8cff2e] hover:bg-[#9eff47] text-[#09090b] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_30px_rgba(140,255,46,0.3)] hover:shadow-[0_0_40px_rgba(140,255,46,0.5)] hover:-translate-y-0.5"
            >
              Get started free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
