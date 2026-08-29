import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="p-10 sm:p-16 md:p-20 rounded-lg border border-white/[0.07] bg-[#0d100d]/60 backdrop-blur-sm relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4">
              Get Started in Minutes
            </span>
            
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f2f2ee] leading-[1.04] mb-6">
              Your cloud is already running. <br />
              <span className="text-[#858a85]">Give it an operating system.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#888d96] mb-10 leading-relaxed font-normal">
              Connect an AWS, Azure, or GCP read-only IAM role and generate your living infrastructure graph in under two minutes. No agent installation required.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs tracking-wide transition-colors duration-150"
              >
                Connect your cloud
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-transparent hover:bg-white/[0.04] text-[#f2f2ee] border border-white/[0.08] hover:border-white/20 font-medium text-xs tracking-wide transition-colors duration-150"
              >
                Request architecture walkthrough
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-6 text-xs font-mono text-[#858a85]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" /> Read-only cross-account IAM
              </span>
              <span className="flex items-center gap-2">
                <AwsIcon className="w-3.5 h-3.5" />
                <AzureIcon className="w-3.5 h-3.5" />
                <GcpIcon className="w-3.5 h-3.5" />
                <span>AWS, Azure & GCP Native</span>
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
