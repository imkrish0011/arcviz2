import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, ShieldCheck } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-36 border-t border-[#1e2229] bg-[#08090a] relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="p-8 sm:p-14 md:p-20 rounded-lg bg-[#0e1013] border border-[#1e2229] relative overflow-hidden shadow-2xl">
          {/* Technical subtle grid background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-3">
              Get Started in Minutes
            </span>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#ededed] leading-tight mb-4">
              Connect your cloud. <br />
              <span className="text-[#888d96]">See what ArchViz understands.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#888d96] mb-8 leading-relaxed font-normal">
              Connect an AWS read-only IAM role and generate your living infrastructure graph in under two minutes. No agent installation required.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-sm transition-all duration-150 shadow-sm"
              >
                Connect your cloud
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded bg-[#08090a] hover:bg-[#12151a] text-[#ededed] border border-[#1e2229] hover:border-[#2e3440] font-medium text-sm transition-all duration-150"
              >
                Request architecture walkthrough
              </Link>
            </div>

            <div className="mt-10 pt-6 border-t border-[#1e2229] flex flex-wrap items-center gap-6 text-xs font-mono text-[#888d96]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" /> Read-only IAM discovery
              </span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" /> AWS, Terraform & GitHub native
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" /> SOC2 Type II Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
