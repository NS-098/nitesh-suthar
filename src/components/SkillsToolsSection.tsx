import React, { useState } from 'react';
import {
  Wrench,
  Search,
  ExternalLink,
  Key,
  Share2,
  Briefcase,
  Sparkles,
  Cpu,
  Code2,
  MessageSquare,
  Table,
  BarChart3,
  SearchCheck,
  MapPin,
  Users,
  ShoppingBag,
  MessageCircle,
  Twitter,
  Sparkle,
  CheckCircle,
  Filter
} from 'lucide-react';
import { skillsList, toolsList } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsToolsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'seo' | 'social' | 'ai' | 'core'>('all');

  const filteredSkills = selectedCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-4 h-4 text-cyan-400" />;
      case 'ExternalLink': return <ExternalLink className="w-4 h-4 text-sky-400" />;
      case 'Key': return <Key className="w-4 h-4 text-amber-400" />;
      case 'Share2': return <Share2 className="w-4 h-4 text-pink-400" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Code2': return <Code2 className="w-4 h-4 text-cyan-300" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-blue-400" />;
      case 'Table': return <Table className="w-4 h-4 text-emerald-300" />;
      default: return <CheckCircle className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'SearchCheck': return <SearchCheck className="w-6 h-6 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-red-400" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6 text-green-400" />;
      case 'Twitter': return <Twitter className="w-6 h-6 text-sky-300" />;
      case 'Sparkle': return <Sparkle className="w-6 h-6 text-purple-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Capabilities & Tool Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Marketing Platforms
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical skills and essential tools utilized across search optimization, lead handling, and modern AI content operations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter Skills:</span>
          </div>

          {[
            { id: 'all', label: 'All Skills' },
            { id: 'seo', label: 'SEO & Search' },
            { id: 'social', label: 'Social & Lead Handling' },
            { id: 'ai', label: 'AI & Vibe Coding' },
            { id: 'core', label: 'Core & Data' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as any)}
              type="button"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 transition-all hover:bg-slate-900 shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800/90 text-cyan-400 border border-slate-700">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="capitalize">{skill.category === 'core' ? 'Core Professional' : skill.category}</span>
                <span className="text-cyan-400 font-medium">Applied</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Platforms & Tools Grid (from PDF logos) */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Featured Tools & Platforms
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Core tool ecosystem referenced in the PDF for analytics, search diagnostics, marketplace leads, and AI acceleration.
              </p>
            </div>
            <span className="text-xs font-semibold text-cyan-400 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 self-start sm:self-auto">
              8 Core Platforms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolsList.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 leading-snug">
                      {tool.name}
                    </h4>
                    <span className="text-[10px] text-cyan-400 font-medium">
                      {tool.badge}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  {tool.roleInWorkflow}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
