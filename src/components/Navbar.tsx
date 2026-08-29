import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';
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
      isScrolled 
        ? 'bg-[#080a08]/80 backdrop-blur-md border-b border-white/[0.06] py-3.5' 
        : 'bg-transparent border-b border-transparent py-5'
    }`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <ArchVizBrand />
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-normal text-[#858a86]">
          <a
            href="/#living-system"
            onClick={(e) => scrollToSection(e, 'living-system')}
            className="hover:text-[#f2f2ee] transition-colors"
          >
            Product
          </a>
          <a
            href="/#problem"
            onClick={(e) => scrollToSection(e, 'problem')}
            className="hover:text-[#f2f2ee] transition-colors"
          >
            How it works
          </a>
          <a
            href="/#security"
            onClick={(e) => scrollToSection(e, 'security')}
            className="hover:text-[#f2f2ee] transition-colors"
          >
            Security
          </a>
          <a
            href="/#memory"
            onClick={(e) => scrollToSection(e, 'memory')}
            className="hover:text-[#f2f2ee] transition-colors"
          >
            Memory
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded transition-colors duration-150"
          >
            Connect cloud
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#858a86] hover:text-[#f2f2ee] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d100d] border-b border-white/[0.06] px-6 py-6 transition-all">
          <div className="flex flex-col gap-4 text-sm font-normal text-[#858a86]">
            <a
              href="/#living-system"
              onClick={(e) => scrollToSection(e, 'living-system')}
              className="hover:text-[#f2f2ee] transition-colors py-1"
            >
              Product
            </a>
            <a
              href="/#problem"
              onClick={(e) => scrollToSection(e, 'problem')}
              className="hover:text-[#f2f2ee] transition-colors py-1"
            >
              How it works
            </a>
            <a
              href="/#security"
              onClick={(e) => scrollToSection(e, 'security')}
              className="hover:text-[#f2f2ee] transition-colors py-1"
            >
              Security
            </a>
            <a
              href="/#memory"
              onClick={(e) => scrollToSection(e, 'memory')}
              className="hover:text-[#f2f2ee] transition-colors py-1"
            >
              Memory
            </a>
            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded text-center"
              >
                Connect cloud
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
