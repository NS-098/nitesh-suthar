import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Linkedin,
  Instagram,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { contactDetails } from '../data/portfolioData';

interface ContactSectionProps {
  onCopySuccess: (text: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopySuccess }) => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('SEO Audit & Strategy');
  const [messageInput, setMessageInput] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    onCopySuccess(`Copied ${type === 'email' ? 'Email address' : 'Phone number'} to clipboard!`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${nameInput || 'Portfolio Visitor'}: ${serviceNeeded}`);
    const body = encodeURIComponent(
      `Hello Nitesh,\n\nName: ${nameInput || 'Not provided'}\nEmail: ${emailInput || 'Not provided'}\nService Needed: ${serviceNeeded}\n\nMessage:\n${messageInput || 'I would like to discuss potential SEO & Digital Marketing collaboration.'}\n\nBest regards.`
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Nitesh! My name is ${nameInput || 'Portfolio Visitor'}. I'm interested in "${serviceNeeded}". ${messageInput ? `Details: ${messageInput}` : 'Would love to connect!'}`
    );
    window.open(`https://wa.me/917984735053?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Whether you have an SEO challenge, need social media management, or want to discuss digital growth strategies, let's connect.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Cards (Left) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                    >
                      {contactDetails.email}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-email"
                  onClick={() => handleCopy(contactDetails.email, 'email')}
                  type="button"
                  aria-label="Copy Email"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                id="link-send-email-direct"
                href={`mailto:${contactDetails.email}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <span>Compose in your email app</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile / Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Mobile Contact
                    </span>
                    <a
                      href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <button
                  id="btn-copy-phone"
                  onClick={() => handleCopy(contactDetails.phone, 'phone')}
                  type="button"
                  aria-label="Copy Phone"
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-3 flex items-center gap-4">
                <a
                  id="link-call-phone-direct"
                  href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <span>Click to call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  id="link-whatsapp-direct"
                  href={contactDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300 font-medium"
                >
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Media Channels (Instagram & LinkedIn from prompt) */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-4">
                Follow Me on Social Media
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="social-card-linkedin"
                  href={contactDetails.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/50 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block group-hover:text-sky-300 transition-colors">
                      LinkedIn
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      Connect Professionally
                    </span>
                  </div>
                </a>

                <a
                  id="social-card-instagram"
                  href={contactDetails.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-pink-500/50 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-pink-950/80 border border-pink-800/50 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block group-hover:text-pink-300 transition-colors">
                      Instagram
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      @nitesh_sharma096
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Direct Message Composer (Right) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Draft an inquiry and dispatch it instantly via email or WhatsApp.
                </p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            <form onSubmit={handleSendViaEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-form-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-form-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-form-email"
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="e.g. rahul@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-form-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Focus Area / Requirement
                </label>
                <select
                  id="contact-form-service"
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white outline-none transition-all cursor-pointer"
                >
                  <option value="SEO Audit & Organic Traffic Growth">SEO Audit & Organic Traffic Growth</option>
                  <option value="Social Media Channel Management">Social Media Channel Management</option>
                  <option value="IndiaMART B2B Lead Handling">IndiaMART B2B Lead Handling</option>
                  <option value="AI Content Creation & Prompt Strategy">AI Content Creation & Prompt Strategy</option>
                  <option value="Full-time / Project Role Inquiry">Full-time / Project Role Inquiry</option>
                  <option value="General Collaboration">General Collaboration</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-form-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message / Context
                </label>
                <textarea
                  id="contact-form-message"
                  rows={4}
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Share a few words about your project, goals, or role..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm text-white placeholder:text-slate-400 outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  id="btn-submit-email-inquiry"
                  type="submit"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>

                <button
                  id="btn-submit-whatsapp-inquiry"
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 font-bold text-xs border border-emerald-700/50 transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
