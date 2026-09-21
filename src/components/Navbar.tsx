import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Linkedin, Instagram, PhoneCall, Mail } from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="nav-brand-link"
            href="#hero"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-lg tracking-wider shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              NS
            </div>
            <div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight block">
                Nitesh Suthar
              </span>
              <span className="text-xs text-cyan-400 font-medium tracking-wide block">
                SEO & Digital Marketer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Socials & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="nav-linkedin-icon"
              href={contactDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="nav-instagram-icon"
              href={contactDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="nav-cta-contact-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="nav-mobile-call-btn"
              href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700"
              aria-label="Call Nitesh"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-dropdown-menu"
            className="md:hidden mt-3 p-4 rounded-xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-slate-800/80 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  id="mobile-nav-linkedin"
                  href={contactDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  id="mobile-nav-instagram"
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="mobile-nav-mail"
                  href={`mailto:${contactDetails.email}`}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <a
                id="mobile-nav-contact-cta"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs tracking-wide shadow-md shadow-cyan-500/20"
              >
                <span>Hire / Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
