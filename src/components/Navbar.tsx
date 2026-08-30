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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#080a08]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg' 
        : 'bg-[#080a08]/40 backdrop-blur-sm border-b border-white/[0.04] py-4'
    }`}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <ArchVizBrand />
        </Link>

        {/* Clean, Uncluttered Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-normal text-[#858a86]">
          <Link
            to="/living-model"
            className={`transition-colors cursor-pointer ${
              location.pathname === '/living-model' ? 'text-[#38bdf8] font-medium' : 'hover:text-[#f2f2ee]'
            }`}
          >
            Living Model
          </Link>
          <Link
            to="/agents"
            className={`transition-colors cursor-pointer ${
              location.pathname === '/agents' ? 'text-[#38bdf8] font-medium' : 'hover:text-[#f2f2ee]'
            }`}
          >
            Agents & Autonomy
          </Link>
          <Link
            to="/security"
            className={`transition-colors cursor-pointer ${
              location.pathname === '/security' ? 'text-[#38bdf8] font-medium' : 'hover:text-[#f2f2ee]'
            }`}
          >
            Security & Trust
          </Link>
          <Link
            to="/memory"
            className={`transition-colors cursor-pointer ${
              location.pathname === '/memory' ? 'text-[#38bdf8] font-medium' : 'hover:text-[#f2f2ee]'
            }`}
          >
            Memory
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-lg transition-all duration-150 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] cursor-pointer"
          >
            Connect cloud
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[#858a86] hover:text-[#f2f2ee] focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d100d] border-b border-white/[0.08] px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-4 text-sm font-normal text-[#858a86]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Overview
            </Link>
            <Link
              to="/living-model"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Living Model
            </Link>
            <Link
              to="/agents"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Agents & Autonomy
            </Link>
            <Link
              to="/security"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Security & Trust
            </Link>
            <Link
              to="/memory"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f2f2ee] transition-colors py-1 cursor-pointer"
            >
              Memory
            </Link>
            <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium text-white bg-[#0ea5e9] hover:bg-[#38bdf8] rounded-lg text-center cursor-pointer shadow-md"
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
