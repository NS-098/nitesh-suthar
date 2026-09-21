import React from 'react';
import { User, Briefcase, GraduationCap, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { bioData } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Who I Am and What I Do
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive look at my professional focus, practical background, and commitment to impactful marketing techniques.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-sm font-bold">
                01
              </span>
              <span>Hands-On Executive & Digital Marketer</span>
            </h3>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-slate-200 font-medium">
                {bioData.whoIAm[0]}
              </p>
              <p>
                {bioData.whoIAm[1]}
              </p>
              <p className="text-cyan-200/90 font-medium">
                {bioData.whoIAm[2]}
              </p>
            </div>

            {/* Direct Values directly derived from PDF */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  Real-world business marketing execution
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  Continuous problem-solving & communication growth
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  Hands-on SEO & Social Media campaign management
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-300">
                  Active exploration of generative AI & automation tools
                </span>
              </div>
            </div>
          </div>

          {/* Key Milestones & Focus Areas */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Current Executive Focus Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Current Role: SEO & SMM Executive
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Actively applying search engine optimization strategies, social media channel supervision, and lead routing to connect brands with active audiences.
              </p>
            </div>

            {/* ROYAL TINT Internship Foundation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Internship Foundation: ROYAL TINT
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gained real-world marketing exposure, business commercial understanding, practical task delivery, and enhanced interpersonal communication.
              </p>
            </div>

            {/* AI & Technology Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-slate-800 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400 mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                AI & Future-Facing Skills
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Passionate about learning new technologies, experimenting with Google AI Studio, Gemini, and ChatGPT to build workflows that yield measurable impact.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
