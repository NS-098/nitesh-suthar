import { Project, SkillItem, ToolItem, ExperienceItem, ContactDetails } from '../types';

export const contactDetails: ContactDetails = {
  name: "Nitesh Suthar",
  title: "Professional Digital Marketer + Social Media Manager & SEO Executive",
  email: "niteshsuthar6787@gmail.com",
  phone: "+91 7984735053",
  whatsappUrl: "https://wa.me/917984735053?text=Hi%20Nitesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20digital%20marketing%20and%20SEO.",
  linkedinUrl: "https://www.linkedin.com/in/nitesh-suthar-7956193b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  instagramUrl: "https://www.instagram.com/nitesh_sharma096?stkn=MTNxN2lmazV5Yzh5aQ==",
};

export const bioData = {
  greeting: "Hello, I'm",
  name: "Nitesh Suthar",
  headline: "Professional Digital Marketer + Social Media Manager & SEO Executive",
  tagline: "Connecting businesses with the right audience through data-driven SEO, strategic social media, and modern AI workflows.",
  whoIAm: [
    "I'm currently working as an SEO & SMM Executive, where I'm gaining hands-on experience in digital marketing, search engine optimization, and social media management.",
    "I started my professional journey with an internship at ROYAL TINT, where I had the opportunity to learn and work on real-world marketing tasks. This experience helped me develop practical skills, understand how digital marketing works in a business environment, and continuously improve my communication and problem-solving abilities.",
    "I'm passionate about learning new technologies, exploring AI, and building skills that can create real-world impact."
  ],
  status: "Available for SEO, SMM & Marketing Roles",
};

export const seoPhilosophy = {
  title: "SEO Is More Than Just Branding",
  mainQuote:
    "SEO is not just about increasing brand visibility or getting a website to rank on Google. It is one of the core pillars of Digital Marketing, helping businesses connect with the right audience at the right time.",
  secondaryText:
    "From improving search visibility and organic traffic to generating qualified leads, increasing conversions, building trust, and supporting long-term business growth, SEO plays a crucial role across the digital marketing journey.",
  pillars: [
    {
      id: "visibility",
      title: "Search Visibility & Traffic",
      description: "Driving qualified, intent-driven organic visitors to your digital touchpoints consistently without high ad dependency.",
      metric: "Organic Reach"
    },
    {
      id: "leads",
      title: "High-Intent Qualified Leads",
      description: "Connecting prospective buyers exactly when they actively search for solutions, elevating conversion rates.",
      metric: "Buyer Intent"
    },
    {
      id: "trust",
      title: "Credibility & Trust",
      description: "Top search ranking and well-structured content signal domain authority, instilling customer confidence.",
      metric: "Authority Signal"
    },
    {
      id: "growth",
      title: "Long-Term Growth",
      description: "Compounding value over time that continuously fuels sustainable business scaling and digital presence.",
      metric: "Compounding ROI"
    }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    role: "SEO & SMM Executive",
    company: "Current Role",
    period: "Present",
    type: "Full-time Professional",
    description:
      "Gaining hands-on experience in comprehensive digital marketing execution, on-page & off-page search engine optimization, social media management, and multi-channel lead acquisition.",
    achievements: [
      "Executing on-page and off-page SEO strategies to enhance search rankings and organic visibility",
      "Managing social media presence and driving community engagement across core brand channels",
      "Handling lead qualification workflows on B2B platforms such as IndiaMART",
      "Integrating modern AI tools (Gemini, ChatGPT, Google AI Studio) for rapid content ideation and workflow efficiency"
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "ROYAL TINT",
    period: "Career Foundation",
    type: "Internship",
    description:
      "Started professional marketing journey working directly on real-world marketing tasks in a commercial business environment.",
    achievements: [
      "Worked hands-on across practical business marketing operations and promotional activities",
      "Gained deep understanding of how commercial digital marketing drives customer interest",
      "Developed practical problem-solving capabilities in dynamic business scenarios",
      "Refined professional cross-functional communication and collaborative execution skills"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "unrestate",
    title: "UNRESTATE",
    category: "Real Estate Web Platform",
    url: "https://unrestate.netlify.app/",
    displayUrl: "unrestate.netlify.app",
    description:
      "A modern digital platform designed for property discovery and real estate showcase, built with clean responsive architecture, optimized page structure for search visibility, and seamless user browsing.",
    highlights: [
      "Responsive, clean UI designed for intuitive property exploration",
      "Optimized content hierarchy and search-friendly markup",
      "Fast loading speeds with mobile-first layout responsiveness"
    ],
    role: "Platform Development & Digital Presentation",
    tags: ["Real Estate", "Web Showcase", "SEO Architecture", "Responsive Design"],
    accentColor: "from-blue-600 to-cyan-500"
  },
  {
    id: "hema-mahendi-art",
    title: "HEMA MAHENDI ART",
    category: "Artistry & Bridal Service Portfolio",
    url: "https://hemamahendiart.netlify.app/",
    displayUrl: "hemamahendiart.netlify.app",
    description:
      "A dedicated digital portfolio and booking showcase for Hema Mahendi Art, highlighting exquisite bridal henna designs, service catalog, and direct inquiry channels for clients.",
    highlights: [
      "Visual design gallery featuring intricate artistry and bridal packages",
      "Streamlined client inquiry touchpoints for rapid booking communication",
      "Local service presentation structured for search and social discoverability"
    ],
    role: "Service Portfolio Showcase & Marketing Presence",
    tags: ["Bridal Artistry", "Service Portfolio", "Lead Generation", "Client Showcase"],
    accentColor: "from-amber-600 to-rose-500"
  }
];

export const skillsList: SkillItem[] = [
  {
    name: "On-Page SEO",
    category: "seo",
    description: "Meta tags, header hierarchies, URL optimization, image alt tags, and keyword placement for search crawlers.",
    level: "Core Competency",
    iconName: "Search"
  },
  {
    name: "Off-Page SEO",
    category: "seo",
    description: "Authority building, external link analysis, business citations, and brand mentions across relevant domains.",
    level: "Core Competency",
    iconName: "ExternalLink"
  },
  {
    name: "Keyword Research",
    category: "seo",
    description: "Identifying high-volume, low-competition keywords and analyzing search intent to drive target audience reach.",
    level: "Strategic",
    iconName: "Key"
  },
  {
    name: "Social Media Handling",
    category: "social",
    description: "Managing brand profiles, regular publishing, audience interaction, and engagement growth strategies.",
    level: "Hands-on",
    iconName: "Share2"
  },
  {
    name: "IndiaMART Lead Handling",
    category: "social",
    description: "Managing B2B marketplace buyer inquiries, fast lead response, and commercial requirement follow-ups.",
    level: "Specialized",
    iconName: "Briefcase"
  },
  {
    name: "AI Content Creation",
    category: "ai",
    description: "Crafting marketing copy, blog briefs, and social captions with prompt engineering and editorial polish.",
    level: "Modern Workflow",
    iconName: "Sparkles"
  },
  {
    name: "AI Tools (ChatGPT, Gemini, AI Studio)",
    category: "ai",
    description: "Leveraging state-of-the-art LLMs for competitive research, content structuring, and process automation.",
    level: "Advanced Usage",
    iconName: "Cpu"
  },
  {
    name: "Vibe Coding",
    category: "ai",
    description: "Rapid AI-assisted web prototyping, frontend testing, and interactive marketing page experimentation.",
    level: "Innovative",
    iconName: "Code2"
  },
  {
    name: "Professional Communication",
    category: "core",
    description: "Clear client correspondence, stakeholder reporting, and effective problem-solving in business settings.",
    level: "Interpersonal",
    iconName: "MessageSquare"
  },
  {
    name: "Excel & Data Organization",
    category: "core",
    description: "Data analysis, lead management sheets, SEO audit tracking, and structured reporting spreadsheets.",
    level: "Analytical",
    iconName: "Table"
  }
];

export const toolsList: ToolItem[] = [
  {
    name: "Google Analytics",
    category: "analytics",
    roleInWorkflow: "Traffic tracking, visitor behavior analysis, and conversion funnel monitoring.",
    iconName: "BarChart3",
    badge: "Web Analytics"
  },
  {
    name: "Google Search Console",
    category: "search",
    roleInWorkflow: "Organic search performance, indexing status, keyword queries, and click-through rates.",
    iconName: "SearchCheck",
    badge: "SEO Diagnostics"
  },
  {
    name: "Google Business Profile",
    category: "search",
    roleInWorkflow: "Local SEO optimization, business discovery on Maps, and local customer inquiries.",
    iconName: "MapPin",
    badge: "Local Search"
  },
  {
    name: "LinkedIn Sales Navigator",
    category: "leads",
    roleInWorkflow: "B2B prospecting, target industry research, and business network connection.",
    iconName: "Users",
    badge: "B2B Prospecting"
  },
  {
    name: "IndiaMART",
    category: "leads",
    roleInWorkflow: "B2B trade inquiries, buyer matching, and prompt sales lead qualification.",
    iconName: "ShoppingBag",
    badge: "Lead Handling"
  },
  {
    name: "WhatsApp Broadcast",
    category: "social",
    roleInWorkflow: "Direct customer communications, customer retention broadcasts, and timely updates.",
    iconName: "MessageCircle",
    badge: "Direct Engagement"
  },
  {
    name: "X (Twitter)",
    category: "social",
    roleInWorkflow: "Real-time industry tracking, social reach, and digital brand voice participation.",
    iconName: "Twitter",
    badge: "Social Reach"
  },
  {
    name: "Google AI Studio",
    category: "ai",
    roleInWorkflow: "Exploring cutting-edge Gemini models, AI prototyping, and prompt development.",
    iconName: "Sparkle",
    badge: "Generative AI"
  }
];
