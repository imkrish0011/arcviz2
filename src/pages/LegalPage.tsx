import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const LegalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const isPrivacy = slug === 'privacy-policy';

  const doc = isPrivacy
    ? {
        title: 'Privacy Policy',
        description: 'How we collect, use, and protect your data when using Nouva.',
        lastUpdated: 'August 2026',
        sections: [
          {
            heading: 'Who We Are',
            paragraphs: [
              'Nouva is a modern productivity and content platform designed for fast-moving teams. For the purposes of data protection law, Nouva is the data controller of your personal information. You can reach our privacy and security team directly at hello@nouva.com.'
            ]
          },
          {
            heading: 'What Data We Collect',
            paragraphs: [
              'We collect information necessary to provide and continually improve our platform:',
              '• Account Information: Name, email address, company name, and password when you create an account.',
              '• Billing Information: Payment details and transaction history processed securely through our payment partners.',
              '• Usage Data: Information about how you interact with Nouva, including feature usage, session duration, and device specifications.',
              '• Input and Generated Content: Prompts, briefs, and output text created within your team workspace.'
            ]
          },
          {
            heading: 'How We Use Your Data',
            paragraphs: [
              'We use your data to operate, maintain, and provide the features of Nouva; to process transactions and send related communications; to respond to comments and questions; and to monitor and analyze trends and usage.'
            ]
          },
          {
            heading: 'Legal Basis for Processing',
            paragraphs: [
              'We process personal data based on contractual necessity (to provide our services), legitimate business interests (improving our platform and preventing fraud), and compliance with legal obligations.'
            ]
          },
          {
            heading: 'How Long We Keep Your Data',
            paragraphs: [
              'We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'
            ]
          },
          {
            heading: 'Sharing Your Data',
            paragraphs: [
              'We do not sell your personal data. We only share information with trusted third-party service providers who assist us in operating our platform, subject to strict confidentiality and data protection agreements.'
            ]
          },
          {
            heading: 'Your Rights',
            paragraphs: [
              'Depending on your location, you may have rights regarding your personal data, including the right to access, correct, delete, or restrict the processing of your personal information. You may exercise these rights by contacting us at hello@nouva.com.'
            ]
          },
          {
            heading: 'Cookies',
            paragraphs: [
              'We use essential cookies and similar tracking technologies to track activity on our platform and remember user preferences. You can control cookies through your browser settings.'
            ]
          },
          {
            heading: 'Changes to This Policy',
            paragraphs: [
              'We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated revision date.'
            ]
          },
          {
            heading: 'Contact',
            paragraphs: [
              'If you have any questions or concerns regarding this Privacy Policy, please email us at hello@nouva.com.'
            ]
          }
        ]
      }
    : {
        title: 'Terms of Service',
        description: 'Please read these terms carefully before using the Nouva platform.',
        lastUpdated: 'August 2026',
        sections: [
          {
            heading: 'Use of the Platform',
            paragraphs: [
              'Nouva grants you a non-exclusive, non-transferable, revocable license to access and use our platform in accordance with these Terms of Service. You agree not to misuse our platform or help anyone else do so.'
            ]
          },
          {
            heading: 'Account Responsibility',
            paragraphs: [
              'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.'
            ]
          },
          {
            heading: 'Intellectual Property',
            paragraphs: [
              'All content, features, and functionality of Nouva (including software, design, text, and graphics) are owned by Nouva and protected by copyright and intellectual property laws. You retain full ownership of the inputs and outputs generated by your account.'
            ]
          },
          {
            heading: 'Subscriptions and Payments',
            paragraphs: [
              'Certain features of Nouva are provided on a subscription basis. Subscriptions automatically renew unless canceled prior to the end of the current billing cycle.'
            ]
          },
          {
            heading: 'Cancellation',
            paragraphs: [
              'You may cancel your subscription at any time through your account settings. Upon cancellation, you will retain access until the end of your prepaid period.'
            ]
          },
          {
            heading: 'Limitation of Liability',
            paragraphs: [
              'To the fullest extent permitted by law, Nouva shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability to you shall not exceed the amount you paid to us in the twelve months preceding the claim.'
            ]
          },
          {
            heading: 'Disclaimer of Warranties',
            paragraphs: [
              'Nouva is provided on an "as is" and "as available" basis. We do not guarantee that the platform will be error-free, uninterrupted, or meet your specific requirements.'
            ]
          },
          {
            heading: 'Changes to These Terms',
            paragraphs: [
              'We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated date. Continued use of the platform after changes are posted constitutes your acceptance of the revised terms.'
            ]
          },
          {
            heading: 'Governing Law',
            paragraphs: [
              'These terms are governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the relevant courts.'
            ]
          },
          {
            heading: 'Contact',
            paragraphs: [
              'If you have any questions about these terms, please email us at hello@nouva.com.'
            ]
          }
        ]
      };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#030305] text-[#f1f1f4] selection:bg-[#ff2d46] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-44 md:pb-36 relative">
        <div className="max-w-[860px] mx-auto px-6 md:px-10">
          {/* Top Switcher */}
          <div className="flex items-center gap-3 mb-8 text-xs font-semibold uppercase tracking-wider font-mono">
            <Link
              to="/legal/privacy-policy"
              className={`px-5 py-2.5 rounded-full transition-colors ${
                isPrivacy
                  ? 'bg-white text-[#030305] font-bold shadow-md'
                  : 'bg-white/[0.04] text-[#858b9c] hover:text-white border border-white/10'
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/terms-of-service"
              className={`px-5 py-2.5 rounded-full transition-colors ${
                !isPrivacy
                  ? 'bg-white text-[#030305] font-bold shadow-md'
                  : 'bg-white/[0.04] text-[#858b9c] hover:text-white border border-white/10'
              }`}
            >
              Terms of Service
            </Link>
          </div>

          {/* Title Header */}
          <div className="mb-14 pb-8 border-b border-white/10">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              {doc.title}
            </h1>
            <p className="text-base sm:text-lg text-[#858b9c] mb-4">
              {doc.description}
            </p>
            <div className="text-xs text-[#858b9c] font-mono">
              Last updated: {doc.lastUpdated}
            </div>
          </div>

          {/* Sections List */}
          <div className="space-y-12">
            {doc.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-sm sm:text-base text-[#858b9c] leading-relaxed">
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
