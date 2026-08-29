import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const LegalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const isPrivacy = slug === 'privacy-policy';

  const doc = isPrivacy
    ? {
        title: 'Security & Privacy Policy',
        description: 'How ArchViz connects to your cloud, safeguards customer telemetry, and isolates credentials.',
        lastUpdated: 'August 2026',
        sections: [
          {
            heading: '1. Architecture & Telemetry Scope',
            paragraphs: [
              'ArchViz connects to customer cloud environments via read-only IAM roles using cross-account STS assume-role delegation. ArchViz never requests nor stores permanent AWS root or administrator credentials.',
              'Ingested data is strictly limited to infrastructure configuration metadata, topology graphs, CloudWatch metrics, and structured log events. Customer data stored within databases, S3 objects, or application payloads is never read or stored.'
            ]
          },
          {
            heading: '2. SOC2 & Data Encryption Standards',
            paragraphs: [
              'All data in transit is encrypted using TLS 1.3 with forward secrecy. All graph metadata at rest is encrypted using AWS KMS-managed keys with AES-256 standards.',
              'ArchViz adheres to strict SOC2 Type II and ISO-27001 data isolation policies. Customer graphs are cryptographically segregated in dedicated tenant namespaces.'
            ]
          },
          {
            heading: '3. Open Policy Agent (OPA) Guardrails',
            paragraphs: [
              'Any action or simulation plan evaluated by ArchViz is subject to customer-defined Open Policy Agent (OPA) rules. Write actions cannot proceed without passing organization policy constraints and multi-party human approval.'
            ]
          },
          {
            heading: '4. Data Retention & Deletion',
            paragraphs: [
              'Customers retain full ownership of their operational memory and topology history. Disconnecting an IAM role immediately halts all ingestion, and tenant graph data can be purged on demand via the console.'
            ]
          },
          {
            heading: '5. Security Inquiries',
            paragraphs: [
              'For vulnerability reports, SOC2 reports, or enterprise security questionnaires, contact security@archviz.io.'
            ]
          }
        ]
      }
    : {
        title: 'Terms of Service',
        description: 'Standard terms governing the use of the ArchViz Cloud Operating System platform.',
        lastUpdated: 'August 2026',
        sections: [
          {
            heading: '1. Platform Use & Access Grant',
            paragraphs: [
              'ArchViz Technologies Inc. grants you a non-exclusive license to use the ArchViz operating system to model, observe, investigate, and operate your authorized cloud infrastructure.'
            ]
          },
          {
            heading: '2. Customer Responsibilities',
            paragraphs: [
              'You are responsible for maintaining proper IAM role boundaries and ensuring that credential authorizations granted to ArchViz comply with your organization\'s internal security policies.'
            ]
          },
          {
            heading: '3. Service Level Agreement (SLA)',
            paragraphs: [
              'ArchViz provides a 99.95% availability SLA for the living topology engine and automated telemetry correlation pipelines for enterprise production plans.'
            ]
          },
          {
            heading: '4. Limitation of Liability',
            paragraphs: [
              'To the maximum extent permitted by applicable law, ArchViz shall not be liable for any indirect, incidental, or consequential damages arising out of cloud provider outages or external service interruptions.'
            ]
          },
          {
            heading: '5. Governing Law & Contact',
            paragraphs: [
              'These terms are governed by the laws of the State of Delaware. Inquiries may be directed to legal@archviz.io.'
            ]
          }
        ]
      };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-36 relative">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          {/* Top Switcher */}
          <div className="flex items-center gap-3 mb-8 text-xs font-mono">
            <Link
              to="/legal/privacy-policy"
              className={`px-4 py-2 rounded transition-colors ${
                isPrivacy
                  ? 'bg-[#12151a] text-[#ededed] border border-[#1e2229] font-medium'
                  : 'bg-transparent text-[#888d96] hover:text-[#ededed] border border-transparent'
              }`}
            >
              Security & Privacy
            </Link>
            <Link
              to="/legal/terms-of-service"
              className={`px-4 py-2 rounded transition-colors ${
                !isPrivacy
                  ? 'bg-[#12151a] text-[#ededed] border border-[#1e2229] font-medium'
                  : 'bg-transparent text-[#888d96] hover:text-[#ededed] border border-transparent'
              }`}
            >
              Terms of Service
            </Link>
          </div>

          {/* Title Header */}
          <div className="mb-12 pb-6 border-b border-[#1e2229]">
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#ededed] mb-3">
              {doc.title}
            </h1>
            <p className="text-sm text-[#888d96] mb-3">
              {doc.description}
            </p>
            <div className="text-xs text-[#5e636e] font-mono">
              Last updated: {doc.lastUpdated}
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-10">
            {doc.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-base font-semibold text-[#ededed] font-mono">
                  {section.heading}
                </h2>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#888d96] leading-relaxed font-sans">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
