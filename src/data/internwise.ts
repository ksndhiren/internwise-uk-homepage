/**
 * Internwise homepage mock data.
 *
 * DEVELOPER HANDOFF NOTE:
 * All content below is static placeholder data for the preview.
 * Replace each array with a real API call / loader later, e.g.
 *   const { data: employers } = useQuery(employersQueryOptions)
 * Keep the same shapes so components don't need to change.
 */

export type NavLink = { label: string; href: string; hasDropdown?: boolean };

export const NAV_LINKS: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Job Search", href: "/job-search" },
  { label: "Candidates", href: "/candidates" },
  { label: "Employers", href: "/employers" },
  { label: "Resources", href: "/resources", hasDropdown: true },
];

/** Hero search tabs */
export const SEARCH_TABS = ["Search Internships", "Browse by Location", "Browse by Sector"] as const;

/** Trusted employer logos (text-based placeholders for the preview) */
export type BrandLogo = { name: string; color: string };
export const TRUSTED_LOGOS: BrandLogo[] = [
  { name: "Nike", color: "oklch(0.6 0.2 30)" },
  { name: "Cancer Research UK", color: "oklch(0.55 0.18 320)" },
  { name: "Oracle", color: "oklch(0.55 0.2 25)" },
  { name: "YouGov", color: "oklch(0.55 0.18 25)" },
  { name: "O2", color: "oklch(0.55 0.15 230)" },
  { name: "Penguin", color: "oklch(0.4 0.05 264)" },
  { name: "Deloitte", color: "oklch(0.5 0.12 150)" },
  { name: "Vodafone", color: "oklch(0.6 0.2 25)" },
];

/** Featured employers — replace with /api/employers/featured */
export type Employer = {
  name: string;
  industry: string;
  activeInternships: number;
  href: string;
};
export const FEATURED_EMPLOYERS: Employer[] = [
  { name: "J.P. Morgan", industry: "Finance", activeInternships: 250, href: "/employers/jpmorgan" },
  { name: "Microsoft", industry: "Technology", activeInternships: 180, href: "/employers/microsoft" },
  { name: "Deloitte", industry: "Professional Services", activeInternships: 120, href: "/employers/deloitte" },
  { name: "PwC", industry: "Professional Services", activeInternships: 95, href: "/employers/pwc" },
  { name: "Sky", industry: "Media & Entertainment", activeInternships: 60, href: "/employers/sky" },
  { name: "KPMG", industry: "Professional Services", activeInternships: 55, href: "/employers/kpmg" },
];

/** Featured internships — replace with /api/internships/featured */
export type Internship = {
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  href: string;
};
export const FEATURED_INTERNSHIPS: Internship[] = [
  {
    title: "Business & Leisure Travel Consultant Internship",
    company: "M3 Private Clients",
    location: "London, Greater London",
    type: "Full time",
    duration: "12 months",
    href: "/job-search/business-leisure-travel-consultant",
  },
  {
    title: "Graphics Designer",
    company: "MADE.inc",
    location: "Greater London",
    type: "Part time",
    duration: "3 months",
    href: "/job-search/graphics-designer",
  },
  {
    title: "Investment & Corporate Finance Intern",
    company: "Aztec Meridian",
    location: "Central London",
    type: "Full time",
    duration: "3 months",
    href: "/job-search/investment-corporate-finance",
  },
  {
    title: "Marketing & Social Media Intern",
    company: "Purple Patch",
    location: "Remote",
    type: "Part time",
    duration: "6 months",
    href: "/job-search/marketing-social-media",
  },
];

/** Browse by sector — replace with /api/sectors */
export const SECTORS: { label: string; href: string }[] = [
  { label: "Accounting Jobs", href: "/job-search?sector=accounting" },
  { label: "Administration Jobs", href: "/job-search?sector=administration" },
  { label: "Agriculture Jobs", href: "/job-search?sector=agriculture" },
  { label: "Charity / NGO Jobs", href: "/job-search?sector=charity" },
  { label: "Computing Jobs", href: "/job-search?sector=computing" },
  { label: "Design / Creative", href: "/job-search?sector=design" },
  { label: "Engineering Jobs", href: "/job-search?sector=engineering" },
  { label: "HR & Recruitment", href: "/job-search?sector=hr" },
  { label: "IT & Software", href: "/job-search?sector=it" },
];

/** Browse by location — replace with /api/locations */
export const LOCATIONS: { label: string; href: string }[] = [
  { label: "Jobs in London", href: "/job-search?location=london" },
  { label: "Jobs in Manchester", href: "/job-search?location=manchester" },
  { label: "Jobs in Birmingham", href: "/job-search?location=birmingham" },
  { label: "Jobs in Leeds", href: "/job-search?location=leeds" },
  { label: "Jobs in Bristol", href: "/job-search?location=bristol" },
  { label: "Jobs in Glasgow", href: "/job-search?location=glasgow" },
  { label: "Jobs in Edinburgh", href: "/job-search?location=edinburgh" },
  { label: "Jobs in Liverpool", href: "/job-search?location=liverpool" },
  { label: "Jobs in Sheffield", href: "/job-search?location=sheffield" },
  { label: "Jobs in Nottingham", href: "/job-search?location=nottingham" },
  { label: "Jobs in Brighton", href: "/job-search?location=brighton" },
  { label: "Jobs in Oxford", href: "/job-search?location=oxford" },
];

/** Candidate journey steps */
export const CANDIDATE_STEPS = [
  { title: "Build Your Profile", description: "Create your profile and showcase your skills." },
  { title: "Find Opportunities", description: "Search and apply for relevant internships." },
  { title: "Prepare & Interview", description: "Get tips and resources to ace your interviews." },
  { title: "Kick-start Your Career", description: "Gain experience and build your future." },
];

/** Employer journey steps */
export const EMPLOYER_STEPS = [
  { title: "Post a Vacancy", description: "Create your internship opportunity in minutes." },
  { title: "Find Candidates", description: "Access quality, pre-screened candidates." },
  { title: "Shortlist & Interview", description: "Shortlist and interview the right talent." },
  { title: "Onboard & Manage", description: "Onboard your intern and track progress." },
];

/**
 * Internwise in numbers.
 * EDITABLE CONSTANTS — update these values directly.
 */
export const STATS = {
  activeEmployers: 14096,
  activeCandidates: 398291,
  activeInternships: 833,
};

/** Hero floating stats */
export const HERO_STATS = {
  activeEmployers: "14,000+",
  activeCandidates: "398K+",
};

/** Latest career advice — replace with /api/blog/latest */
export type Article = {
  title: string;
  category: string;
  date: string;
  readingTime: string;
  href: string;
};
export const ARTICLES: Article[] = [
  {
    title: "How to write a CV that gets you an internship",
    category: "Career Tips",
    date: "May 10, 2024",
    readingTime: "5 min read",
    href: "/blog/how-to-write-a-cv",
  },
  {
    title: "Top 10 internship interview questions (and how to answer)",
    category: "Interview Tips",
    date: "Apr 25, 2024",
    readingTime: "6 min read",
    href: "/blog/top-10-interview-questions",
  },
  {
    title: "Skills employers look for in interns",
    category: "Career Advice",
    date: "Apr 12, 2024",
    readingTime: "4 min read",
    href: "/blog/skills-employers-look-for",
  },
  {
    title: "How to make the most of your internship",
    category: "Guides",
    date: "Mar 30, 2024",
    readingTime: "5 min read",
    href: "/blog/make-the-most-of-internship",
  },
];

/** Footer link groups */
export const FOOTER_LINKS = {
  candidates: [
    { label: "How it works", href: "/candidates" },
    { label: "Search Internships", href: "/job-search" },
    { label: "Career Advice", href: "/blog" },
    { label: "CV Writing Tips", href: "/blog/how-to-write-a-cv" },
    { label: "Interview Tips", href: "/blog/top-10-interview-questions" },
    { label: "Internships by Sector", href: "/job-search" },
    { label: "Internships by Location", href: "/job-search" },
  ],
  employers: [
    { label: "How it works", href: "/employers" },
    { label: "Post an Internship", href: "/post-vacancy" },
    { label: "Recruiter Dashboard", href: "/employer-dashboard" },
    { label: "Pricing", href: "/employers/pricing" },
  ],
  resources: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};
