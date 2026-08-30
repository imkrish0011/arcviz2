import React, { useState } from 'react';
import { ShieldCheck, Lock, KeyRound, FileCheck2, Users, Key, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export const TrustAndSecurity: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('read-only');

  const securityPillars = [
    {
      id: 'read-only',
      title: "Read-Only by Default",
      icon: <ShieldCheck className="w-5 h-5 text-[#10b981]" />,
      tag: "IAM Scope",
      summary: "ArchViz connects to your cloud via standard read-only IAM roles with zero default write permissions.",
      bullets: [
        "Uses standard AmazonReadOnlyAccess and Azure Reader roles",
        "Zero host agents, sidecars, or daemonsets required",
        "Impossible for system to modify resources in discovery mode"
      ]
    },
    {
      id: 'policy-controlled',
      title: "Policy-Controlled Actions",
      icon: <Lock className="w-5 h-5 text-[#38bdf8]" />,
      tag: "Deterministic Guardrails",
      summary: "Every proposed remediation is strictly evaluated against Open Policy Agent (OPA) compliance rules before generation.",
      bullets: [
        "Enforces organizational change-window constraints",
        "Blocks breaking schema updates or unvetted port changes",
        "Strict blast-radius limits enforced at runtime"
      ]
    },
    {
      id: 'human-approval',
      title: "Human Dual-Key Authorization",
      icon: <KeyRound className="w-5 h-5 text-[#f59e0b]" />,
      tag: "Hardware Signed",
      summary: "High-impact production actions require explicit hardware signoff (WebAuthn / FIDO2) from authorized engineers.",
      bullets: [
        "Dual-key signoff for tier-1 production modifications",
        "Cryptographically signed authorization payload",
        "Zero unprompted write execution in production"
      ]
    },
    {
      id: 'audit-trail',
      title: "Immutable Audit Trail",
      icon: <FileCheck2 className="w-5 h-5 text-[#a855f7]" />,
      tag: "Compliance",
      summary: "Every graph hop, diagnostic reasoning step, simulation result, and execution event is cryptographically logged.",
      bullets: [
        "Exportable to SIEM (Splunk, Datadog, AWS CloudTrail)",
        "SOC2 Type II & ISO 27001 compliance ready",
        "100% replayable operational chronology"
      ]
    },
    {
      id: 'tenant-isolation',
      title: "Complete Tenant Isolation",
      icon: <Users className="w-5 h-5 text-[#38bdf8]" />,
      tag: "Zero Shared State",
      summary: "Customer system models and telemetry are strictly isolated in dedicated customer-partitioned data planes.",
      bullets: [
        "Zero cross-tenant model training or shared memory",
        "AES-256 encryption at rest and TLS 1.3 in transit",
        "Customer-managed encryption keys (CMEK) supported"
      ]
    },
    {
      id: 'credential-isolation',
      title: "Ephemeral Credential Isolation",
      icon: <Key className="w-5 h-5 text-[#10b981]" />,
      tag: "STS Tokens",
      summary: "Write credentials are never stored. ArchViz mints temporary 15-minute IAM STS tokens scoped only to the approved target.",
      bullets: [
        "15-minute maximum token lifetime",
        "Strictly scoped to specific resource ARNs",
        "Immediate auto-revocation post-execution"
      ]
    }
  ];

  return (
    <section id="security-trust" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-[#080a08] relative overflow-hidden font-mono text-xs">
      {/* Seamless Top Atmospheric Background Layer - Extends smoothly down past header */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none opacity-70 filter contrast-125 brightness-110 saturate-125">
        <img
          src="/assets/images/security-shield-bg.jpg"
          alt="Cyber security matrix background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a08]/50 via-[#080a08]/85 to-[#080a08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#080a08_90%)]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 relative z-10">
        {/* Page Hero Header */}
        <ScrollReveal direction="up" delay={50} distance="30px">
          <div className="max-w-3xl mb-16 md:mb-20 font-sans">
            <span className="text-[11px] font-mono text-[#858a85] uppercase tracking-wider block mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Enterprise Trust & Governance
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#f1f2ee] leading-[1.0] mb-6">
              Security by design. <br />
              <span className="text-[#858a85]">Zero-trust cloud governance.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#888d96] leading-relaxed max-w-2xl font-sans">
              ArchViz operates on strict least-privilege principles. Read-only IAM discovery by default, bounded action policies, hardware WebAuthn signoffs, and complete cryptographic auditability.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {securityPillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} direction="up" delay={120 + idx * 60} distance="40px">
              <div
                onClick={() => setActiveItem(pillar.id)}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group ${
                  activeItem === pillar.id
                    ? 'border-[#10b981] bg-[#0d100d]/95 shadow-[0_0_30px_rgba(16,185,129,0.15)] scale-[1.01]'
                    : 'border-white/[0.08] bg-[#0d100d]/80 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#505551] uppercase tracking-wider">{pillar.tag}</span>
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-white/20 transition-colors">
                      {pillar.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#f1f2ee] font-sans mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#858a85] font-sans leading-relaxed mb-4">
                    {pillar.summary}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-white/[0.04] text-[11px] text-[#858a85]">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#10b981] mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.04] flex items-center justify-between text-[11px]">
                  <span className="text-[#10b981] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Enterprise Verified
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
