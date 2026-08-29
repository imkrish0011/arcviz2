import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CheckCircle2, ArrowRight,   } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    provider: 'AWS',
    scale: '50-500 instances',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid work email is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] font-sans antialiased selection:bg-[#0ea5e9] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-36 relative">
        <div className="max-w-[640px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="text-xs font-mono text-[#0ea5e9] tracking-wider uppercase block mb-2">
              Cloud Discovery & Access
            </span>
            <h1 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#ededed] mb-3">
              Connect your cloud
            </h1>
            <p className="text-sm sm:text-base text-[#888d96]">
              Request early console access or schedule an architecture walkthrough with an infrastructure engineer.
            </p>
          </div>

          {/* Form Container */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#0e1013] border border-[#1e2229] shadow-2xl">
            {isSubmitted ? (
              <div className="py-10 text-center animate-in fade-in zoom-in duration-200">
                <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#10b981]" />
                </div>
                <h3 className="text-xl font-medium text-[#ededed] mb-2 font-mono">Access Request Received</h3>
                <p className="text-xs sm:text-sm text-[#888d96] mb-6 max-w-sm mx-auto">
                  Our infrastructure team will provision your tenant credentials and follow up within 2 business hours.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#12151a] hover:bg-[#181b22] text-[#ededed] border border-[#1e2229] text-xs font-mono transition-all"
                >
                  Return to System Overview
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-[#888d96] mb-1.5 uppercase text-[10px]">
                    Full Name <span className="text-[#0ea5e9]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded bg-[#08090a] border ${
                      errors.name ? 'border-[#ef4444]' : 'border-[#1e2229] focus:border-[#0ea5e9]'
                    } text-[#ededed] placeholder-[#3a3e48] focus:outline-none transition-colors text-xs`}
                  />
                  {errors.name && <p className="text-[#ef4444] text-[10px] mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#888d96] mb-1.5 uppercase text-[10px]">
                      Work Email <span className="text-[#0ea5e9]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded bg-[#08090a] border ${
                        errors.email ? 'border-[#ef4444]' : 'border-[#1e2229] focus:border-[#0ea5e9]'
                      } text-[#ededed] placeholder-[#3a3e48] focus:outline-none transition-colors text-xs`}
                    />
                    {errors.email && <p className="text-[#ef4444] text-[10px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-[#888d96] mb-1.5 uppercase text-[10px]">
                      Company <span className="text-[#0ea5e9]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Infrastructure"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded bg-[#08090a] border ${
                        errors.company ? 'border-[#ef4444]' : 'border-[#1e2229] focus:border-[#0ea5e9]'
                      } text-[#ededed] placeholder-[#3a3e48] focus:outline-none transition-colors text-xs`}
                    />
                    {errors.company && <p className="text-[#ef4444] text-[10px] mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#888d96] mb-1.5 uppercase text-[10px]">
                      Primary Cloud
                    </label>
                    <select
                      value={formData.provider}
                      onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#08090a] border border-[#1e2229] focus:border-[#0ea5e9] text-[#ededed] focus:outline-none transition-colors text-xs"
                    >
                      <option value="AWS">Amazon Web Services (AWS)</option>
                      <option value="GCP">Google Cloud Platform (GCP)</option>
                      <option value="Azure">Microsoft Azure</option>
                      <option value="Multi-Cloud">Multi-Cloud / Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#888d96] mb-1.5 uppercase text-[10px]">
                      Infrastructure Scale
                    </label>
                    <select
                      value={formData.scale}
                      onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-[#08090a] border border-[#1e2229] focus:border-[#0ea5e9] text-[#ededed] focus:outline-none transition-colors text-xs"
                    >
                      <option value="<50 instances">&lt; 50 resources</option>
                      <option value="50-500 instances">50 – 500 resources</option>
                      <option value="500-2500 instances">500 – 2,500 resources</option>
                      <option value="2500+ instances">2,500+ resources (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#888d96] mb-1.5 uppercase text-[10px]">
                    Use Case / Architectural Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. Investigating ECS latency spikes, automated Terraform drift detection, OPA policy enforcement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-[#08090a] border border-[#1e2229] focus:border-[#0ea5e9] text-[#ededed] placeholder-[#3a3e48] focus:outline-none transition-colors resize-none text-xs font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-medium text-xs tracking-wider uppercase transition-all duration-150 shadow-sm"
                >
                  Request Console Provisioning
                </button>

                <div className="pt-2 text-center text-[10px] text-[#5e636e]">
                  Read-only IAM deployment • Zero agents required •{' '}
                  <Link to="/legal/privacy-policy" className="text-[#888d96] hover:underline">
                    Security Policy
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
