import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Lock, Network } from 'lucide-react';
import { AwsIcon, AzureIcon, GcpIcon } from './icons/ArchVizIcons';
import { ScrollReveal } from './ui/ScrollReveal';

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="relative py-36 md:py-48 bg-[#080a08] overflow-hidden">
      {/* High-Impact Atmospheric Cosmic Vortex Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/assets/images/cosmic-nebula.jpg"
          alt="Cosmic galaxy atmosphere"
          className="w-full h-full object-cover object-center opacity-70 filter brightness-110 contrast-125 saturate-125 scale-105"
        />
        {/* Glowing Radial Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#0ea5e9]/15 rounded-full blur-[140px]" />
        {/* Soft Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08] via-transparent to-[#080a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#080a08_90%)]" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        <ScrollReveal direction="zoom" delay={50} distance="30px">
          <div className="p-8 sm:p-14 md:p-20 rounded-2xl border border-white/[0.12] bg-[#0c0f0c]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group">
            {/* Subtle Horizon Glow Stripe */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-60" />
            
            <div className="max-w-3xl relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] text-[11px] font-mono text-[#858a85] uppercase tracking-wider mb-8 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                Connect in Minutes • Zero Agent Overhead
              </span>
              
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#f1f2ee] leading-[0.98] mb-6 font-sans">
                Your cloud is already running. <br />
                <span className="text-[#f1f2ee]">
                  Give it an operating system.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#888d96] mb-10 leading-relaxed font-normal max-w-xl font-sans">
                Attach an AWS, Azure, or GCP read-only IAM role and generate your living multi-cloud infrastructure graph in under two minutes. Zero host agent installation required.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs tracking-wide transition-all duration-200 shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.55)] group font-mono"
                >
                  Connect your cloud
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#f1f2ee] border border-white/[0.12] hover:border-white/30 font-medium text-xs tracking-wide transition-all duration-150 font-mono backdrop-blur-sm"
                >
                  Request architecture walkthrough
                </Link>
              </div>

              <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-7 text-xs font-mono text-[#858a85]">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" /> Read-only cross-account IAM
                </span>
                <span className="flex items-center gap-2.5">
                  <AwsIcon className="w-4 h-4" />
                  <AzureIcon className="w-4 h-4" />
                  <GcpIcon className="w-4 h-4" />
                  <span>AWS • Azure • GCP Native</span>
                </span>
                <span className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#38bdf8]" /> SOC2 Type II Certified
                </span>
                <span className="flex items-center gap-2 text-[#38bdf8]">
                  <Network className="w-3.5 h-3.5" /> Living Topology Sync
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
