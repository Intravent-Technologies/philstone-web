export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  image: string;
  services: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'banking-digital-transformation',
    title: 'Digital Transformation Journey for a Leading Nigerian Bank',
    client: 'Major Nigerian Financial Institution',
    industry: 'Banking & Finance',
    challenge: 'The bank faced significant challenges with manual loan processing that took 14+ days, high error rates in documentation, and poor customer satisfaction scores. Their legacy systems were preventing scalability and creating operational bottlenecks.',
    solution: 'Philstone Consulting implemented a comprehensive digital transformation program including process mapping, Lean Six Sigma methodology, and AI-powered automation. We redesigned the loan processing workflow, implemented robotic process automation (RPA), and deployed machine learning models for credit scoring.',
    results: 'The transformation delivered remarkable improvements across all key metrics, positioning the bank as a digital leader in the industry.',
    metrics: [
      { label: 'Processing Time', value: '14 days → 3 days' },
      { label: 'Error Rate', value: '15% → 2%' },
      { label: 'Customer Satisfaction', value: '+45%' },
      { label: 'Cost Savings', value: '$2.4M annually' },
    ],
    testimonial: {
      quote: 'Philstone Consulting transformed our operations completely. The ROI exceeded our expectations within the first year.',
      author: 'Chief Operations Officer',
      role: 'Major Nigerian Bank',
    },
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    services: ['AI Transformation', 'Process Improvement', 'Training'],
  },
  {
    slug: 'healthcare-pmo-setup',
    title: 'PMO Setup and Project Management Excellence for Healthcare Network',
    client: 'West African Healthcare Network',
    industry: 'Healthcare',
    challenge: 'The healthcare network struggled with inconsistent project delivery, budget overruns on 60% of initiatives, and lack of standardized governance across 15 facilities. Project managers worked in silos with no unified methodology.',
    solution: 'We established a Project Management Office with standardized frameworks, trained 40+ project managers on PMP methodologies, and implemented a project portfolio management system. The program included change management support and executive alignment workshops.',
    results: 'The PMO implementation created a culture of structured project delivery with measurable improvements across all facilities.',
    metrics: [
      { label: 'On-Time Delivery', value: '40% → 85%' },
      { label: 'Budget Adherence', value: '40% → 92%' },
      { label: 'PMs Certified', value: '40+' },
      { label: 'ROI', value: '340% in Year 1' },
    ],
    testimonial: {
      quote: 'The structured approach to project management has revolutionized how we deliver healthcare infrastructure projects.',
      author: 'Director of Strategic Projects',
      role: 'Healthcare Network',
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    services: ['PMO Setup', 'Project Management', 'Training'],
  },
  {
    slug: 'telecom-agile-transformation',
    title: 'Agile Transformation for Telecommunications Company',
    client: 'Regional Telecommunications Provider',
    industry: 'Telecommunications',
    challenge: 'The telecom company needed to accelerate product launches to compete with nimble fintech entrants. Their traditional waterfall approach resulted in 8-12 month development cycles, missing market windows and losing competitive advantage.',
    solution: 'Philstone Consulting led a comprehensive Agile transformation including SAFe implementation at scale, Scrum Master certification for 25 team leads, and hybrid project management frameworks for network infrastructure projects.',
    results: 'The Agile transformation enabled rapid, iterative delivery while maintaining the stability required for critical network infrastructure.',
    metrics: [
      { label: 'Time-to-Market', value: '12 months → 6 weeks' },
      { label: 'Teams Transformed', value: '30+' },
      { label: 'Product Releases', value: '4x annually' },
      { label: 'Team Productivity', value: '+60%' },
    ],
    testimonial: {
      quote: 'We went from annual release cycles to bi-weekly deployments. Our customers are thrilled with the new features.',
      author: 'VP of Product Development',
      role: 'Telecommunications Provider',
    },
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    services: ['Agile Transformation', 'Scrum Training', 'Hybrid PM'],
  },
  {
    slug: 'government-pmp-training',
    title: 'National PMO Capacity Building for Government Ministry',
    client: 'Federal Ministry of Finance',
    industry: 'Government',
    challenge: 'The ministry struggled with infrastructure project delays, with many projects exceeding timelines by 200% and budgets by 150%.缺乏标准的项目管理方法导致资源浪费和公众问责问题。',
    solution: 'We developed a comprehensive capacity building program including PMP certification for 100+ civil servants, development of ministry-specific project management guidelines, and establishment of a Project Portfolio Management system.',
    results: 'The program transformed the ministry\'s project delivery capability and became a model for other government agencies.',
    metrics: [
      { label: 'Professionals Certified', value: '100+' },
      { label: 'On-Time Completion', value: '35% → 78%' },
      { label: 'Budget Variance', value: '150% → 108%' },
      { label: 'Training Hours', value: '5,000+' },
    ],
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    services: ['Project Management', 'Training & Certification', 'PMO Setup'],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.slice(0, 3);
}
