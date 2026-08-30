import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Lock } from 'lucide-react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-36 md:py-48 border-t border-white/[0.06] bg-[#080a08] relative overflow-hidden">
      {/* Background Cosmic & Neural Blend Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-25 filter contrast-125">
        <img
          src="/assets/images/cosmic-nebula.jpg"
          alt="Cosmic background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-[#080a08]/75 to-[#080a08]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal direction="zoom" delay={50} distance="30px">
          <div className="p-8 sm:p-14 md:p-18 rounded-2xl border border-white/[0.1] bg-[#0d100d]/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            {/* Ambient Radial Lights */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#38bdf8]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#a855f7]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-[#858a85] uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                Connect in Minutes • Zero Agent Overhead
              </span>
              
              <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#f1f2ee] leading-[1.02] mb-6">
                Your cloud is already running. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f1f2ee] via-[#ffffff] to-[#38bdf8]">
                  Give it an operating system.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#888d96] mb-10 leading-relaxed font-normal max-w-xl">
                Connect an AWS, Azure, or GCP read-only IAM role and generate your living infrastructure model in under two minutes. Zero agent installation required.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs tracking-wide transition-all duration-200 shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] group"
                >
                  Connect your cloud
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-transparent hover:bg-white/[0.04] text-[#f1f2ee] border border-white/[0.1] hover:border-white/25 font-medium text-xs tracking-wide transition-colors duration-150"
                >
                  Request architecture walkthrough
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-xs font-mono text-[#858a85]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" /> Read-only cross-account IAM
                </span>
                <span className="flex items-center gap-2">
                  <AwsIcon className="w-4 h-4" />
                  <AzureIcon className="w-4 h-4" />
                  <GcpIcon className="w-4 h-4" />
                  <span>AWS, Azure & GCP Native</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#38bdf8]" /> SOC2 Type II Certified
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
