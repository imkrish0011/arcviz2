import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    newsletter: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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
    <div className="min-h-screen bg-[#080c12] text-white selection:bg-[#99a0b0] selection:text-[#09090b]">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-44 md:pb-36 relative">
        {/* Ambient Glow */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-amber-600/10 via-pink-600/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[680px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Contact us
            </h1>
            <p className="text-base sm:text-lg text-[#99a0b0]">
              Have a question or need help? We'll get back to you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-[#0e131d]/80 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#8cff2e]/20 border border-[#8cff2e]/40 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-[#8cff2e]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-sm sm:text-base text-[#99a0b0] mb-8 max-w-sm mx-auto">
                  We'll review your request and get back to you shortly.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Return to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First and Last Name Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white mb-2">
                      First name<span className="text-[#8cff2e]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                      } text-white placeholder-white/30 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white mb-2">
                      Last name<span className="text-[#8cff2e]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.lastName ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                      } text-white placeholder-white/30 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white mb-2">
                      Email<span className="text-[#8cff2e]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@framer.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                      } text-white placeholder-white/30 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/30 text-white placeholder-white/30 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Subject<span className="text-[#8cff2e]">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#0e131d] border ${
                      errors.subject ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                    } text-white text-sm focus:outline-none transition-colors`}
                  >
                    <option value="" disabled>Select…</option>
                    <option value="General inquiry">General inquiry</option>
                    <option value="Pricing & plans">Pricing & plans</option>
                    <option value="Technical support">Technical support</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Your message<span className="text-[#8cff2e]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-white/30'
                    } text-white placeholder-white/30 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#8cff2e] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#8cff2e]"
                  />
                  <label htmlFor="newsletter" className="text-xs text-[#99a0b0] cursor-pointer">
                    I'd like to receive updates and news via email.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#8cff2e] hover:bg-[#9eff47] text-[#09090b] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(140,255,46,0.25)] hover:shadow-[0_0_30px_rgba(140,255,46,0.4)]"
                >
                  Send message
                </button>

                {/* Disclaimer */}
                <p className="text-center text-xs text-[#99a0b0] pt-2">
                  By submitting, you agree to our{' '}
                  <Link to="/legal/terms-of-service" className="text-white hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/legal/privacy-policy" className="text-white hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
