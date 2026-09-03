const portrait = "/portfolio/portrait.webp";
const ghlCover = "/portfolio/ghl-cover.webp";
const makeCover = "/portfolio/make-cover.webp";
const n8nCover = "/portfolio/n8n-cover.webp";
const zapierCover = "/portfolio/zapier-cover.webp";
const toolsGroup = "/portfolio/tools-group.webp";
const certZapier = "/portfolio/cert-zapier.webp";
const certMake = "/portfolio/cert-make.webp";
const certN8n = "/portfolio/cert-n8n.webp";
const certGhl = "/portfolio/cert-ghl.webp";
const ghl1 = "/portfolio/ghl-1.webp";
const ghl2 = "/portfolio/ghl-2.webp";
const make1 = "/portfolio/make-1.webp";
const n8n1 = "/portfolio/n8n-1.webp";
const n8n2 = "/portfolio/n8n-2.webp";
const n8n3 = "/portfolio/n8n-3.webp";
const zapier1 = "/portfolio/zapier-1.webp";

export const profile = {
  name: "George Edrey Ladim",
  role: "Technical Virtual Assistant",
  headline: "CRM & Automation Support · Email & Lead Management Automation",
  email: "georgeedreyladim1@gmail.com",
  phone: "+63 919 000 6001",
  phoneHref: "tel:+639190006001",
  location: "Metro Manila, Philippines",
  linkedin: "https://linkedin.com/in/georgeedreyladim",
  linkedinLabel: "linkedin.com/in/georgeedreyladim",
  portrait: portrait,
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Case Studies" },
  { href: "#tools", label: "Tools" },
  { href: "#certificates", label: "Certificates" },
];


export const values = ["Detail-oriented", "Process-focused", "Adaptable", "Automation-minded"];

export const aboutParagraphs = [
  "I'm a Technical Virtual Assistant focused on CRM support, workflow automation, email management automation, lead management automation, and the practical day-to-day operations that keep a business moving.",
  "Before moving into the VA industry, I spent more than 10 years in production and manufacturing for a multinational company — an environment where a missed step has a cost. That built the habits I still work by: documented process, attention to detail, and accuracy under pressure.",
  "Today I pair that operations mindset with Zapier, Make.com, n8n, GoHighLevel, Google Workspace, Trello, Asana, and AI platforms. I map how a process actually runs, find the repetitive steps, and turn them into workflows that hold up without supervision.",
  "The goal is simple: less of your week spent on repetitive work, more of it spent on decisions, customers, and growth.",
];

export const services = [
  {
    n: "01",
    title: "CRM & Lead Management Support",
    copy: "Contacts, opportunities, pipelines, follow-ups, and lead stages kept organized so inquiries stop falling through the cracks.",
    points: ["Lead capture and routing", "Pipeline organization", "Automated follow-up workflows"],
    featured: true,
  },
  {
    n: "02",
    title: "Workflow Automation",
    copy: "Tools connected and repetitive processes automated with Zapier, Make.com, n8n, and GoHighLevel.",
    points: ["Triggers, conditions, filters & routing", "APIs, webhooks & data movement", "AI-assisted workflow steps"],
    featured: true,
  },
  {
    n: "03",
    title: "Email Management Automation",
    copy: "Inbox workflows organized, repetitive follow-ups automated, and email activity wired into the rest of your process.",
    points: [],
  },
  {
    n: "04",
    title: "Administrative & Operations Support",
    copy: "File organization, spreadsheets, research, documentation, reporting, and routine operational tasks handled consistently.",
    points: [],
  },
  {
    n: "05",
    title: "Project & Task Management Support",
    copy: "Tasks, deadlines, project boards, status updates, and team follow-ups kept current through structured workflows.",
    points: [],
  },
  {
    n: "06",
    title: "AI-Assisted Business Support",
    copy: "AI applied to document analysis, content assistance, structured data extraction, and workflow decision steps.",
    points: [],
  },
  {
    n: "07",
    title: "Customer Support",
    copy: "Patient, professional handling of customer questions, transactions, orders, refunds, and service concerns.",
    points: [],
  },
  {
    n: "08",
    title: "Research & Data Management",
    copy: "Information collected, verified, and structured for lead lists, spreadsheets, research tasks, and internal records.",
    points: [],
  },
];

export type CaseStudy = {
  id: string;
  platform: string;
  title: string;
  summary: string;
  intro: string;
  tags: string[];
  cover: string;
  challenge: string;
  solution: string;
  demonstrates: string[];
  gallery: { src: string; alt: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "ghl",
    platform: "GoHighLevel",
    title: "Instant Lead Response & Proposal Automation",
    summary:
      "Captures new inquiries, sends immediate follow-up, initiates a call, evaluates interest, and routes the lead into the right proposal or nurture path.",
    intro:
      "A fully automated lead-response workflow built inside GoHighLevel to capture new inquiries, follow up quickly, qualify interest, and route prospects into the appropriate next step.",
    tags: ["CRM", "SMS", "Calls", "Conditions", "Lead Follow-up"],
    cover: ghlCover,
    challenge:
      "Manual lead handling means checking form submissions, updating the CRM, sending acknowledgments, remembering follow-ups, calling prospects, judging interest, sending proposals, and moving pipeline stages. It is repetitive admin work, and it is exactly where leads get lost.",
    solution:
      "The workflow captures a form submission, tags the contact, sends an SMS, waits 15 minutes, initiates a follow-up call, waits for a response, and branches on reply or timeout. Interested leads receive proposal documents; the rest move into a separate nurture workflow.",
    demonstrates: [
      "GoHighLevel forms, CRM workflows, tags, SMS and calls",
      "Wait steps, contact-reply events, timeouts and branching conditions",
      "Automated proposal delivery and follow-up workflow routing",
    ],
    gallery: [
      { src: ghl1, alt: "GoHighLevel workflow part 1" },
      { src: ghl2, alt: "GoHighLevel workflow part 2" },
    ],
  },
  {
    id: "make",
    platform: "Make.com",
    title: "Automated Xero Transaction Export & Asana Attachment",
    summary:
      "Rebuilds a required accounting export from transaction-level Xero data, structures it as CSV, and attaches it to the matching completed Asana task.",
    intro:
      "An accounting-data automation that replaces a manual Xero report download and Asana upload with a structured Make.com scenario.",
    tags: ["Xero API", "Asana", "CSV", "Router", "Data Processing"],
    cover: makeCover,
    challenge:
      "The requested General Ledger Detail report was not exposed through the Xero API, so the workflow could not simply download the same report a user sees in the Xero interface.",
    solution:
      "The scenario watches completed Asana tasks, pulls transaction-level accounting data from Xero, routes and iterates the records, builds a CSV-like output through Google Sheets and aggregation steps, uploads the generated file to Asana, and clears the temporary spreadsheet data.",
    demonstrates: [
      "Working around an API limitation with an alternative data strategy",
      "Routers, iterators, aggregators and temporary data staging",
      "Connecting accounting data with project and task management workflows",
    ],
    gallery: [{ src: make1, alt: "Make.com Xero to Asana automation scenario" }],
  },
  {
    id: "n8n",
    platform: "n8n",
    title: "AI Job Search & Resume Optimization Automation",
    summary:
      "A Slack-controlled workflow that searches jobs, processes opportunities, tailors resumes with AI, creates application materials, and reports back.",
    intro:
      "A Slack-controlled AI workflow that automates repetitive job-search preparation while keeping the final application decision with the user.",
    tags: ["AI Agent", "Slack", "Google Docs", "Gmail", "Job API"],
    cover: n8nCover,
    challenge:
      "Searching job boards, checking relevance, reading descriptions, editing resumes, drafting application emails or proposals, saving separate files, and tracking links takes hours once it is repeated across many opportunities.",
    solution:
      "The workflow validates a Slack query, calls a job-search API, checks results, loops through opportunities, retrieves a master resume from Google Docs, uses an LLM to tailor application content, checks Google Drive for duplicates, updates customized documents, creates Gmail drafts when needed, and returns application details to Slack.",
    demonstrates: [
      "AI agents and structured-output processing",
      "API calls, loops, conditional logic and duplicate checks",
      "Slack, Google Docs, Google Drive and Gmail integration",
    ],
    gallery: [
      { src: n8n1, alt: "n8n workflow overview" },
      { src: n8n2, alt: "n8n workflow part 2" },
      { src: n8n3, alt: "n8n workflow part 3" },
    ],
  },
  {
    id: "zapier",
    platform: "Zapier",
    title: "Automated Content Repurposing & Distribution",
    summary:
      "Turns one uploaded audio or video file into a transcript, blog content, and platform-ready social posts using AI, Filters, Looping, and Paths.",
    intro:
      "A multi-step Zapier workflow that transforms one long-form media file into several written marketing assets and distributes approved content to social channels.",
    tags: ["OpenAI", "Google Drive", "Filters", "Paths", "Social Publishing"],
    cover: zapierCover,
    challenge:
      "Repurposing long-form content by hand means downloading media, transcribing it, reviewing the transcript, writing blog articles, adapting them per platform, publishing each post, and logging what was created.",
    solution:
      "The Zap triggers when an audio or video file lands in Google Drive, filters the file type, uses AI to produce the transcript and two blogs, filters unwanted words, loops through line items, then uses Paths to send approved content to Facebook and LinkedIn.",
    demonstrates: [
      "Google Drive triggers and AI content generation",
      "Filters, Looping and Paths for controlled automation",
      "Multi-channel content distribution from one source asset",
    ],
    gallery: [{ src: zapier1, alt: "Zapier content repurposing workflow" }],
  },
];

export const toolsImage = toolsGroup;

export const toolCategories = [
  "CRM & Sales",
  "Automation",
  "AI Platforms",
  "Project Management",
  "Productivity",
  "Communication",
  "Creative",
];

export const certificates = [
  { img: certZapier, title: "No Code Automation with Zapier", issuer: "Tara AI Community+", date: "August 26, 2026" },
  { img: certMake, title: "No Code Automation with Make.com", issuer: "Tara AI Community+", date: "August 28, 2026" },
  { img: certN8n, title: "AI Automation with n8n", issuer: "Technical Virtual Assistants PH", date: "August 31, 2026" },
  { img: certGhl, title: "HighLevel CRM", issuer: "Tara AI Community+", date: "September 1, 2026" },
];

export const processSteps = [
  {
    n: "01",
    title: "Map",
    copy: "We walk through the process as it actually runs today — every click, handoff, and exception.",
  },
  {
    n: "02",
    title: "Trim",
    copy: "Duplicate entry, manual copying, and steps that exist only out of habit get removed before anything is automated.",
  },
  {
    n: "03",
    title: "Build",
    copy: "The workflow is built in your stack, with branching for the real edge cases — not just the happy path.",
  },
  {
    n: "04",
    title: "Hand over",
    copy: "You get documentation, a tested workflow, and a clear view of what runs automatically and what still needs a human.",
  },
];
