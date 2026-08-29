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
    <div className="min-h-screen bg-[#030305] text-[#f1f1f4] selection:bg-[#ff2d46] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-44 md:pb-36 relative">
        {/* Ambient Red & Navy Glow */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-[#ff2d46]/10 via-blue-900/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-[680px] mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Contact us
            </h1>
            <p className="text-base sm:text-lg text-[#858b9c]">
              Have a question or need help? We'll get back to you shortly.
            </p>
          </div>

          {/* Form Container */}
          <div className="p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-[#08080c]/90 border border-white/[0.08] shadow-2xl backdrop-blur-xl">
            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#ff2d46]/15 border border-[#ff2d46]/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,45,70,0.3)]">
                  <CheckCircle2 className="w-8 h-8 text-[#ff2d46]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-sm sm:text-base text-[#858b9c] mb-8 max-w-sm mx-auto">
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
                      First name<span className="text-[#ff2d46]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.firstName ? 'border-[#ff2d46]' : 'border-white/10 focus:border-[#ff2d46]/60'
                      } text-white placeholder-white/25 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.firstName && (
                      <p className="text-[#ff2d46] text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white mb-2">
                      Last name<span className="text-[#ff2d46]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.lastName ? 'border-[#ff2d46]' : 'border-white/10 focus:border-[#ff2d46]/60'
                      } text-white placeholder-white/25 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.lastName && (
                      <p className="text-[#ff2d46] text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-white mb-2">
                      Email<span className="text-[#ff2d46]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="jane@framer.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                        errors.email ? 'border-[#ff2d46]' : 'border-white/10 focus:border-[#ff2d46]/60'
                      } text-white placeholder-white/25 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[#ff2d46] text-xs mt-1">{errors.email}</p>
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
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-white/30 text-white placeholder-white/25 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Subject<span className="text-[#ff2d46]">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#08080c] border ${
                      errors.subject ? 'border-[#ff2d46]' : 'border-white/10 focus:border-[#ff2d46]/60'
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
                    <p className="text-[#ff2d46] text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-medium text-white mb-2">
                    Your message<span className="text-[#ff2d46]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's on your mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
                      errors.message ? 'border-[#ff2d46]' : 'border-white/10 focus:border-[#ff2d46]/60'
                    } text-white placeholder-white/25 text-sm focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-[#ff2d46] text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#ff2d46] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#ff2d46]"
                  />
                  <label htmlFor="newsletter" className="text-xs text-[#858b9c] cursor-pointer">
                    I'd like to receive updates and news via email.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ff2d46] to-[#e11d48] hover:from-[#ff4d61] hover:to-[#ff2d46] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(255,45,70,0.35)]"
                >
                  Send message
                </button>

                {/* Disclaimer */}
                <p className="text-center text-xs text-[#858b9c] pt-2">
                  By submitting, you agree to our{' '}
                  <Link to="/legal/terms-of-service" className="text-white hover:text-[#ff2d46] transition-colors">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/legal/privacy-policy" className="text-white hover:text-[#ff2d46] transition-colors">
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
