import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Copy,
  Check,
  Globe,
  Maximize2,
  X,
  Smartphone,
  Monitor,
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onCopySuccess: (text: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onCopySuccess }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  const handleCopyLink = (project: Project) => {
    navigator.clipboard.writeText(project.url);
    setCopiedId(project.id);
    onCopySuccess(`Copied link for ${project.title}`);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Verified Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Live Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Live web platforms showcasing responsive layouts, search optimization structures, and targeted digital presentation.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>2 Live Netlify Deployments</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700/80 transition-all flex flex-col justify-between group"
            >
              {/* Card Banner / Header */}
              <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-r from-slate-900 to-slate-950 flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    {project.category}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      id={`btn-copy-${project.id}`}
                      onClick={() => handleCopyLink(project)}
                      type="button"
                      aria-label={`Copy link for ${project.title}`}
                      className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                      title="Copy project URL"
                    >
                      {copiedId === project.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    
                    <button
                      id={`btn-preview-modal-${project.id}`}
                      onClick={() => {
                        setPreviewProject(project);
                        setDeviceMode('desktop');
                      }}
                      type="button"
                      aria-label={`Preview ${project.title} inside iframe`}
                      className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                      title="Interactive Live Preview Modal"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{project.displayUrl}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Features & Optimization:
                    </span>
                    <ul className="space-y-2">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags & Action CTAs */}
                <div className="pt-6 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      id={`project-visit-btn-${project.id}`}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      id={`project-quick-preview-btn-${project.id}`}
                      onClick={() => {
                        setPreviewProject(project);
                        setDeviceMode('desktop');
                      }}
                      type="button"
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all cursor-pointer"
                    >
                      <span>Interactive Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Preview Modal */}
        {previewProject && (
          <div
            id="project-preview-modal-backdrop"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
          >
            <div
              id="project-preview-modal-content"
              className="w-full max-w-5xl h-[88vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {previewProject.title} – Live Preview
                    </h4>
                    <span className="text-[10px] text-cyan-400 font-mono">
                      {previewProject.displayUrl}
                    </span>
                  </div>
                </div>

                {/* Device Mode Switcher */}
                <div className="hidden sm:flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    type="button"
                    className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      deviceMode === 'desktop'
                        ? 'bg-cyan-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    type="button"
                    className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                      deviceMode === 'mobile'
                        ? 'bg-cyan-500 text-slate-950 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={previewProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-medium transition-colors"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setPreviewProject(null)}
                    type="button"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close preview modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="flex-1 bg-slate-950 p-2 sm:p-4 flex items-center justify-center overflow-auto">
                <div
                  className={`h-full transition-all duration-300 shadow-2xl rounded-lg overflow-hidden border border-slate-800 ${
                    deviceMode === 'mobile'
                      ? 'w-[375px] max-w-full rounded-[2rem] border-4 border-slate-700'
                      : 'w-full'
                  }`}
                >
                  <iframe
                    src={previewProject.url}
                    title={previewProject.title}
                    className="w-full h-full bg-white"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
