import nikeLogo from "@/assets/live-crops/logo-nike.png";
import cancerResearchUkLogo from "@/assets/live-crops/logo-cancer-research-uk.png";
import oracleLogo from "@/assets/live-crops/logo-oracle.png";
import youGovLogo from "@/assets/live-crops/logo-yougov.png";
import o2Logo from "@/assets/live-crops/logo-o2.png";
import penguinLogo from "@/assets/live-crops/logo-penguin.png";

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

/** Trusted employer logos from the live homepage */
export type BrandLogo = {
  name: string;
  src: string;
  alt: string;
  widthClass?: string;
};
export const TRUSTED_LOGOS: BrandLogo[] = [
  {
    name: "Nike",
    src: nikeLogo,
    alt: "Nike logo",
    widthClass: "w-28",
  },
  {
    name: "Cancer Research UK",
    src: cancerResearchUkLogo,
    alt: "Cancer Research UK logo",
    widthClass: "w-36",
  },
  {
    name: "Oracle",
    src: oracleLogo,
    alt: "Oracle logo",
    widthClass: "w-36",
  },
  {
    name: "YouGov",
    src: youGovLogo,
    alt: "YouGov logo",
    widthClass: "w-36",
  },
  {
    name: "O2",
    src: o2Logo,
    alt: "O2 logo",
    widthClass: "w-24",
  },
  {
    name: "Penguin",
    src: penguinLogo,
    alt: "Penguin Books logo",
    widthClass: "w-24",
  },
];

/** Featured employers from the live homepage */
export type Employer = {
  name: string;
  industry: string;
  activeInternships: number;
  href: string;
};
export const FEATURED_EMPLOYERS: Employer[] = [
  {
    name: "Carlotta London Ltd",
    industry: "Fashion & Accessories",
    activeInternships: 0,
    href: "https://www.internwise.co.uk/CarlottaLondon",
  },
  {
    name: "Travel Online Group Limited",
    industry: "Financial Services / Banking",
    activeInternships: 2,
    href: "https://www.internwise.co.uk/CurrencyOnlineGroup",
  },
  {
    name: "JBROWN Global Limited",
    industry: "Property Management / Real Estate",
    activeInternships: 2,
    href: "https://www.internwise.co.uk/jbrowninternational",
  },
  {
    name: "JAG-UFS (International) Limited",
    industry: "Freight / Logistics / Procurement",
    activeInternships: 1,
    href: "https://www.internwise.co.uk/JAGUFS",
  },
  {
    name: "London Property Staging Ltd",
    industry: "Property Management / Real Estate",
    activeInternships: 1,
    href: "https://www.internwise.co.uk/SonjaLPS",
  },
  {
    name: "Hephaestus Technologies Ltd",
    industry: "Aerospace / Engineering",
    activeInternships: 6,
    href: "https://www.internwise.co.uk/HEPHAESTUSTECHNOLOGIESLTD",
  },
];

/** Featured internships from the live homepage */
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
    title: "Social Media & Marketing Executive",
    company: "JAG-UFS (INTERNATIONAL) LIMITED",
    location: "Feltham / Camberley, South East England",
    type: "Part-time/Full-time",
    duration: "7 - 12 months",
    href: "https://www.internwise.co.uk/job/35319/social-media-marketing-executive",
  },
  {
    title: "Social Media and Content Intern - Home Staging",
    company: "LONDON PROPERTY STAGING LTD",
    location: "London, Greater London",
    type: "Part time",
    duration: "1 - 3 months",
    href: "https://www.internwise.co.uk/job/35321/social-media-and-content-intern-home-staging",
  },
  {
    title: "Real Estate Surveying Internship",
    company: "JBROWN GLOBAL LIMITED",
    location: "London, Central London",
    type: "Part-time/Full-time",
    duration: "7 - 12 months",
    href: "https://www.internwise.co.uk/job/35270/real-estate-surveying-internship",
  },
  {
    title: "Brand Design Internship (Part-Time)",
    company: "JBROWN GLOBAL LIMITED",
    location: "London, Central London",
    type: "Part time",
    duration: "1 - 3 months",
    href: "https://www.internwise.co.uk/job/35281/brand-design-internship-part-time",
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
  { label: "Education & Teaching", href: "/job-search?sector=education" },
  { label: "Marketing / PR", href: "/job-search?sector=marketing" },
  { label: "Sales Jobs", href: "/job-search?sector=sales" },
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
