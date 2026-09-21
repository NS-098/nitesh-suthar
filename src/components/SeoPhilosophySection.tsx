import React from 'react';
import { Compass, Eye, Target, ShieldCheck, TrendingUp, Quote, Sparkles } from 'lucide-react';
import { seoPhilosophy } from '../data/portfolioData';

export const SeoPhilosophySection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    visibility: <Eye className="w-5 h-5 text-cyan-400" />,
    leads: <Target className="w-5 h-5 text-sky-400" />,
    trust: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    growth: <TrendingUp className="w-5 h-5 text-purple-400" />
  };

  return (
    <section id="philosophy" className="py-20 lg:py-28 border-b border-slate-800/60 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {seoPhilosophy.title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            My perspective on the fundamental value search optimization brings across the entire digital marketing lifecycle.
          </p>
        </div>

        {/* Featured Quote Banner */}
        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/20 p-8 sm:p-10 mb-12 shadow-2xl overflow-hidden">
          <Quote className="absolute top-4 right-6 w-24 h-24 text-slate-800/40 pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed tracking-tight">
              "{seoPhilosophy.mainQuote}"
            </blockquote>
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              {seoPhilosophy.secondaryText}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                NS
              </div>
              <div>
                <span className="text-sm font-bold text-white block">
                  Nitesh Suthar
                </span>
                <span className="text-xs text-cyan-400 font-medium block">
                  SEO & SMM Executive
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid derived directly from PDF quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoPhilosophy.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                  {iconMap[pillar.id]}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  {pillar.metric}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span>Core Pillar</span>
                <span className="text-cyan-400 font-mono">0{pillar.id === 'visibility' ? '1' : pillar.id === 'leads' ? '2' : pillar.id === 'trust' ? '3' : '4'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
