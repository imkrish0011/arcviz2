import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArchVizBrand } from './icons/ArchVizIcons';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Living Model', path: '/living-model' },
    { name: 'Agents', path: '/agents' },
    { name: 'Security', path: '/security' },
    { name: 'Memory', path: '/memory' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#080a08]/80 backdrop-blur-2xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group cursor-pointer flex-shrink-0">
          <ArchVizBrand />
        </Link>

        {/* Center Nav Links — Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-3.5 py-1.5 rounded-lg text-[13px] transition-all duration-200 cursor-pointer ${
                isActive(link.path)
                  ? 'text-[#f1f2ee] font-medium'
                  : 'text-[#6b6e6b] hover:text-[#c8cac8]'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[#38bdf8]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] text-[#f1f2ee] text-xs font-medium transition-all duration-200 border border-white/[0.08] hover:border-white/[0.16] cursor-pointer group"
          >
            Connect cloud
            <ArrowRight className="w-3 h-3 text-[#858a85] group-hover:text-[#f1f2ee] group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#858a86] hover:text-[#f2f2ee] focus:outline-none cursor-pointer transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#080a08]/95 backdrop-blur-2xl border-b border-white/[0.06] space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm transition-colors cursor-pointer ${
                isActive(link.path)
                  ? 'text-[#f1f2ee] bg-white/[0.05] font-medium'
                  : 'text-[#6b6e6b] hover:text-[#f1f2ee] hover:bg-white/[0.03]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 mt-2 border-t border-white/[0.06]">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-2.5 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] text-[#f1f2ee] text-xs font-medium border border-white/[0.08] transition-colors cursor-pointer"
            >
              Connect your cloud →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
