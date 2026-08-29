import React from 'react';
import { Link } from 'react-router-dom';
import { NouvaLogo } from './icons/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#030305] pt-16 pb-12 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <NouvaLogo />
            </Link>
            <p className="text-sm text-[#858b9c] max-w-sm leading-relaxed">
              The precision platform that helps modern teams work faster, smarter, and at scale.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#858b9c]">
              <li>
                <a href="/#why-it-matters" className="hover:text-white transition-colors">
                  Why It Matters
                </a>
              </li>
              <li>
                <a href="/#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Information
            </h4>
            <ul className="space-y-3 text-sm text-[#858b9c]">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms-of-service" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/404" className="hover:text-white transition-colors">
                  404
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Socials
            </h4>
            <ul className="space-y-3 text-sm text-[#858b9c]">
              <li>
                <a
                  href="https://x.com/kadircalik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#858b9c] gap-4">
          <div>
            © {new Date().getFullYear()} Nouva by{' '}
            <a
              href="https://x.com/kadircalik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff2d46] transition-colors"
            >
              Kadir Calik
            </a>
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d46] shadow-[0_0_8px_rgba(255,45,70,0.8)]" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
