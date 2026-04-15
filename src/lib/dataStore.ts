import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'src', 'lib', 'data.json');

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
}

export interface Review {
  id: string;
  quote: string;
  rating: number;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string }[];
  image: string;
  services: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
  replies?: string[];
}

interface DataStore {
  partners: Partner[];
  reviews: Review[];
  blogPosts: BlogPost[];
  caseStudies: CaseStudy[];
  inquiries: Inquiry[];
}

const defaultData: DataStore = {
  partners: [
    { id: '1', name: 'International Mega Standard', logo: 'https://via.placeholder.com/180x80/1a365d/ffffff?text=IMS', website: '#' },
    { id: '2', name: 'Q Power X2 Module', logo: 'https://via.placeholder.com/180x80/3182ce/ffffff?text=Q-POWER', website: '#' },
    { id: '3', name: 'Access Bank', logo: 'https://via.placeholder.com/180x80/ed8936/ffffff?text=ACCESS', website: '#' },
    { id: '4', name: 'KPMG', logo: 'https://via.placeholder.com/180x80/1a365d/ffffff?text=KPMG', website: '#' },
    { id: '5', name: 'PWC', logo: 'https://via.placeholder.com/180x80/3182ce/ffffff?text=PwC', website: '#' },
    { id: '6', name: 'Shell Nigeria', logo: 'https://via.placeholder.com/180x80/ed8936/ffffff?text=SHELL', website: '#' },
  ],
  reviews: [
    { id: '1', quote: 'Philstone Consulting transformed our project management capabilities. Their team\'s expertise in PMP training and Agile implementation helped us achieve results we never thought possible.', rating: 5, date: '2026-03-15' },
    { id: '2', quote: 'The AI transformation program delivered exceptional results. Our process efficiency improved by 60% within the first quarter.', rating: 5, date: '2026-02-28' },
    { id: '3', quote: 'Outstanding training programs. Our team is now certified and confident in applying Lean Six Sigma methodologies.', rating: 5, date: '2026-02-10' },
    { id: '4', quote: 'Working with Philstone was a game-changer for our organisation. Their consulting expertise helped us navigate complex challenges.', rating: 5, date: '2026-01-25' },
  ],
  blogPosts: [
    { id: '1', slug: 'pmp-certification-2026', title: 'Why PMP Certification Still Matters in 2026', excerpt: 'Discover why the PMP certification remains the most valued credential globally.', content: 'Full article content goes here...', category: 'Project Management', author: 'Philstone Team', date: '2026-01-15', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', featured: true },
    { id: '2', slug: 'ai-project-management', title: 'How AI Is Changing Project Management Forever', excerpt: 'Explore how artificial intelligence is transforming project management.', content: 'Full article content goes here...', category: 'AI & Digital', author: 'Philstone Team', date: '2026-01-20', readTime: '10 min read', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', featured: true },
    { id: '3', slug: 'lean-six-sigma-africa', title: 'Lean Six Sigma in Africa', excerpt: 'Driving efficiency in emerging markets.', content: 'Full article content goes here...', category: 'Process Improvement', author: 'Philstone Team', date: '2026-01-25', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', featured: false },
  ],
  caseStudies: [
    { id: '1', slug: 'banking-digital-transformation', title: 'Digital Transformation for Nigerian Bank', client: 'Major Nigerian Bank', industry: 'Banking & Finance', challenge: 'Manual loan processing took 14+ days with high error rates.', solution: 'Implemented digital transformation with AI-powered automation.', results: 'Processing time reduced to 3 days.', metrics: [{ label: 'Processing Time', value: '14 days → 3 days' }, { label: 'Error Rate', value: '15% → 2%' }], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', services: ['AI Transformation', 'Process Improvement'] },
    { id: '2', slug: 'healthcare-pmo-setup', title: 'PMO Setup for Healthcare Network', client: 'West African Healthcare', industry: 'Healthcare', challenge: 'Inconsistent project delivery with 60% budget overruns.', solution: 'Established PMO with standardized frameworks.', results: 'On-time delivery improved to 85%.', metrics: [{ label: 'On-Time Delivery', value: '40% → 85%' }, { label: 'PMs Certified', value: '40+' }], image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', services: ['PMO Setup', 'Training'] },
    { id: '3', slug: 'telecom-agile-transformation', title: 'Agile Transformation for Telecom', client: 'Regional Telecom Provider', industry: 'Telecommunications', challenge: '8-12 month development cycles.', solution: 'Comprehensive Agile transformation with SAFe.', results: 'Time-to-market reduced to 6 weeks.', metrics: [{ label: 'Time-to-Market', value: '12 months → 6 weeks' }, { label: 'Product Releases', value: '4x annually' }], image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80', services: ['Agile Transformation', 'Scrum Training'] },
  ],
  inquiries: [
    { id: '1', name: 'Adebayo Johnson', email: 'adebayo@company.com', phone: '+234 801 234 5678', organisation: 'TechCorp Nigeria', subject: 'consulting', message: 'We need help with PMO setup for our organization.', date: '2026-04-14', status: 'new', replies: [] },
    { id: '2', name: 'Chioma Okonkwo', email: 'chioma@enterprise.ng', phone: '+234 902 345 6789', organisation: 'Enterprise Solutions Ltd', subject: 'training', message: 'Interested in PMP training for our team of 15.', date: '2026-04-13', status: 'read', replies: [] },
    { id: '3', name: 'Emmanuel Nwosu', email: 'emmanuel@financegroup.com', phone: '+234 813 456 7890', organisation: 'Finance Group PLC', subject: 'ai', message: 'Looking to implement AI for our process automation.', date: '2026-04-12', status: 'replied', replies: ['Thank you for your interest.'] },
  ],
};

function readData(): DataStore {
  try {
    if (fs.existsSync(dataFile)) {
      const data = fs.readFileSync(dataFile, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading data file:', error);
  }
  return defaultData;
}

function writeData(data: DataStore): void {
  try {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing data file:', error);
  }
}

export function getData(): DataStore {
  return readData();
}

export function setData(newData: DataStore): void {
  writeData(newData);
}

// Partners
export function getPartners(): Partner[] {
  return readData().partners;
}

export function setPartners(partners: Partner[]): void {
  const data = readData();
  data.partners = partners;
  writeData(data);
}

// Reviews
export function getReviews(): Review[] {
  return readData().reviews;
}

export function setReviews(reviews: Review[]): void {
  const data = readData();
  data.reviews = reviews;
  writeData(data);
}

// Blog Posts
export function getBlogPosts(): BlogPost[] {
  return readData().blogPosts;
}

export function setBlogPosts(blogPosts: BlogPost[]): void {
  const data = readData();
  data.blogPosts = blogPosts;
  writeData(data);
}

// Case Studies
export function getCaseStudies(): CaseStudy[] {
  return readData().caseStudies;
}

export function setCaseStudies(caseStudies: CaseStudy[]): void {
  const data = readData();
  data.caseStudies = caseStudies;
  writeData(data);
}

// Inquiries
export function getInquiries(): Inquiry[] {
  return readData().inquiries;
}

export function setInquiries(inquiries: Inquiry[]): void {
  const data = readData();
  data.inquiries = inquiries;
  writeData(data);
}
