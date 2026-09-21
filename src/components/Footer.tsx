import React from 'react';
import { ArrowUp, Linkedin, Instagram, Mail, Phone, Globe, Heart } from 'lucide-react';
import { contactDetails, projects } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070a10] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-base">
                NS
              </div>
              <span className="text-base font-bold text-white">Nitesh Suthar</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Professional digital marketer + Social media manager & SEO executive. Dedicated to organic visibility, qualified lead handling, and AI-accelerated growth.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                id="footer-linkedin-link"
                href={contactDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-instagram-link"
                href={contactDetails.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-mail-link"
                href={`mailto:${contactDetails.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                id="footer-phone-link"
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                aria-label="Call Mobile"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Navigation
            </span>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Who I Am</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
              <li><a href="#philosophy" className="hover:text-cyan-400 transition-colors">SEO Philosophy</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills & Platforms</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Featured Projects
            </span>
            <ul className="space-y-2">
              {projects.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors block leading-snug"
                  >
                    <span className="font-semibold text-slate-300 block">{proj.title}</span>
                    <span className="text-[11px] text-slate-400">{proj.displayUrl}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
              Contact Channels
            </span>
            <ul className="space-y-2.5">
              <li>
                <span className="text-[10px] uppercase text-slate-400 block">Email:</span>
                <a href={`mailto:${contactDetails.email}`} className="text-slate-300 hover:text-cyan-400 font-mono text-[11px]">
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-slate-400 block">Mobile:</span>
                <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} className="text-slate-300 hover:text-emerald-400 font-mono text-[11px]">
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase text-slate-400 block">WhatsApp:</span>
                <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-green-400 text-[11px]">
                  Direct Chat Link
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Nitesh Suthar. Built as an interactive modern portfolio based on verified PDF source material.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
