import React from 'react';
import { ArrowDown, ArrowUpRight, Linkedin, Instagram, Mail, Phone, Sparkles, TrendingUp, Search, Share2, CheckCircle2 } from 'lucide-react';
import { contactDetails, bioData } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden border-b border-slate-800/60"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Role Badge */}
            <div
              id="hero-status-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide mb-6 shadow-sm shadow-cyan-950/50 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{bioData.status}</span>
            </div>

            {/* Greeting & Name */}
            <div className="space-y-1 mb-4">
              <span className="text-xl sm:text-2xl font-light text-slate-400 tracking-tight block">
                {bioData.greeting}
              </span>
              <h1
                id="hero-name-heading"
                className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]"
              >
                Nitesh Suthar
              </h1>
            </div>

            {/* Exact Subtitle from PDF */}
            <div className="mt-2 mb-6">
              <h2
                id="hero-role-title"
                className="text-lg sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-slate-200"
              >
                Professional digital marketer + Social media manager & SEO executive
              </h2>
            </div>

            {/* Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Driving organic search rankings, targeted buyer acquisition, and modern brand engagement through hands-on technical SEO, IndiaMART lead management, and AI-accelerated workflows.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-btn-explore-projects"
                onClick={onExploreProjects}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
              >
                <span>View Live Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-get-in-touch"
                onClick={onContactClick}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm border border-slate-700 transition-all active:scale-95 cursor-pointer"
              >
                <span>Get in Touch</span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </button>

              <a
                id="hero-btn-whatsapp"
                href={contactDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/70 text-emerald-300 font-semibold text-sm border border-emerald-700/50 transition-all"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Direct Channels:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  id="hero-social-linkedin"
                  href={contactDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  id="hero-social-instagram"
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  id="hero-direct-phone"
                  href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{contactDetails.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Persona & Highlight Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Subtle accent border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

              {/* Profile Header Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-800 to-cyan-900 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-extrabold text-xl shadow-inner">
                    NS
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      Nitesh Suthar
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">
                      SEO & SMM Executive
                    </p>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Active</span>
                </div>
              </div>

              {/* Core Pillars from PDF */}
              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/90 flex items-start gap-3">
                  <Search className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Search Engine Optimization</h4>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      On-Page & Off-Page SEO, keyword intent mapping, rank tracking.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/90 flex items-start gap-3">
                  <Share2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Social Media & Lead Handling</h4>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      IndiaMART buyer inquiries, WhatsApp broadcast, social channels.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/90 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">Modern AI & Vibe Coding</h4>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                      Gemini, ChatGPT, AI Studio content creation & rapid web prototyping.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Career Anchors */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Foundation
                  </span>
                  <span className="text-xs font-bold text-slate-200 block mt-0.5">
                    ROYAL TINT
                  </span>
                  <span className="text-[10px] text-cyan-400 block">
                    Marketing Internship
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                    Featured Work
                  </span>
                  <span className="text-xs font-bold text-slate-200 block mt-0.5">
                    2 Live Platforms
                  </span>
                  <span className="text-[10px] text-cyan-400 block">
                    Unrestate & Hema Mahendi
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
