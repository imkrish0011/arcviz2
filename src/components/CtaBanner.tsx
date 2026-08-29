import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#030305]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-12 md:p-20 text-center bg-[#08080c] shadow-2xl">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/SEp6FrEl6Vgib3aBzRCdawZTbw.png"
              alt="Cinematic landscape background"
              className="w-full h-full object-cover opacity-25 filter contrast-[1.1] saturate-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/75 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ff2d46]/15 blur-[140px] pointer-events-none rounded-full" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
              The work doesn't stop. <br />
              <span className="text-[#ff2d46]">Neither does Nouva.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#858b9c] mb-10 leading-relaxed">
              From your first task to your entire team's production engine — Nouva scales effortlessly with you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-[#ff2d46] to-[#e11d48] hover:from-[#ff4d61] hover:to-[#ff2d46] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_35px_rgba(255,45,70,0.4)] hover:shadow-[0_0_45px_rgba(255,45,70,0.6)] hover:-translate-y-0.5"
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
