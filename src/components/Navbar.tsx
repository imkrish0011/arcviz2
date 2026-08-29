import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NouvaLogo } from './icons/Icons';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#080c12]/80 backdrop-blur-xl border-b border-white/[0.06] py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <NouvaLogo />
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#99a0b0]">
          <a
            href="/#why-it-matters"
            onClick={(e) => scrollToSection(e, 'why-it-matters')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Why It Matters
          </a>
          <a
            href="/#features"
            onClick={(e) => scrollToSection(e, 'features')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="/#pricing"
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="/#faq"
            onClick={(e) => scrollToSection(e, 'faq')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* Right CTA - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#09090b] bg-[#8cff2e] hover:bg-[#9eff47] rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(140,255,46,0.2)] hover:shadow-[0_0_25px_rgba(140,255,46,0.4)]"
          >
            Try Nouva
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e131d]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-5 text-base font-medium text-[#99a0b0]">
            <a
              href="/#why-it-matters"
              onClick={(e) => scrollToSection(e, 'why-it-matters')}
              className="hover:text-white transition-colors py-1"
            >
              Why It Matters
            </a>
            <a
              href="/#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="hover:text-white transition-colors py-1"
            >
              Features
            </a>
            <a
              href="/#pricing"
              onClick={(e) => scrollToSection(e, 'pricing')}
              className="hover:text-white transition-colors py-1"
            >
              Pricing
            </a>
            <a
              href="/#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="hover:text-white transition-colors py-1"
            >
              FAQ
            </a>
            <div className="pt-3 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#09090b] bg-[#8cff2e] hover:bg-[#9eff47] rounded-full transition-all text-center shadow-[0_0_20px_rgba(140,255,46,0.2)]"
              >
                Try Nouva
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
