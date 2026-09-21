import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Foundation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical marketing execution from foundational business internships to active executive responsibilities.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-slate-700 before:to-transparent">
          
          {experiences.map((exp, index) => {
            const isCurrent = exp.period.toLowerCase().includes('present');
            return (
              <div
                key={exp.role + index}
                className="relative pl-10 sm:pl-16 group"
              >
                {/* Timeline Pin */}
                <div
                  className={`absolute left-2.5 sm:left-6.5 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full border-2 ${
                    isCurrent
                      ? 'bg-cyan-400 border-cyan-300 shadow-md shadow-cyan-400/50'
                      : 'bg-slate-900 border-slate-500'
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium">
                        <Building2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Core Achievements & Responsibilities */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/90">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Highlights & Competencies:
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {exp.achievements.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-2 text-xs text-slate-300 leading-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
