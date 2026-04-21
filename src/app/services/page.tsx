import Link from 'next/link';
import { Target, BookOpen, Cpu, Layers, ArrowRight, Check, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import styles from './page.module.css';

const pillars = [
  {
    icon: Target,
    title: 'Consulting & Advisory',
    slug: 'consulting',
    tagline: 'Strategic guidance for measurable impact',
    description: 'Our consulting team combines globally certified expertise with deep sector knowledge to help you navigate complexity, reduce risk, and accelerate performance.',
    offerings: [
      'Project Management Consulting',
      'Change Management',
      'Risk & Resilience Advisory',
      'Organisational Development',
      'Strategy & Operational Excellence',
    ],
  },
  {
    icon: BookOpen,
    title: 'Training & Certification',
    slug: 'training',
    tagline: 'Build capability. Earn credentials.',
    description: 'We deliver globally accredited training programmes that build real-world capability. Our courses are led by experienced practitioners and designed for immediate workplace application.',
    offerings: [
      'PMP & CAPM (PMI)',
      'PRINCE2 Foundation & Practitioner',
      'Lean Six Sigma (Yellow, Green, Black Belt)',
      'Agile & Scrum Certifications',
      'Bespoke & In-House Training',
    ],
  },
  {
    icon: Cpu,
    title: 'AI Transformation',
    slug: 'ai-transformation',
    tagline: 'Flagship Service',
    description: 'We help organisations harness AI, automation, and digital tools to fundamentally transform how they work, compete, and deliver value.',
    offerings: [
      'AI Strategy & Readiness Assessment',
      'AI-Powered Process Optimisation',
      'Intelligent Automation & RPA',
      'Data Analytics & Decision Intelligence',
      'Digital Workflow Design',
    ],
  },
  {
    icon: Layers,
    title: 'Agile & Scrum',
    slug: 'agile-scrum',
    tagline: 'Adaptive delivery for faster results',
    description: 'Organisations across every sector are adopting Agile and Scrum frameworks to deliver faster, respond to change, and maximise value delivery.',
    offerings: [
      'Agile Transformation Advisory',
      'Scrum Team Setup & Coaching',
      'Agile PMO Design',
      'Hybrid Project Management',
      'Sprint-Based Delivery Support',
    ],
  },
];

const ctdFramework = [
  { letter: 'C', word: 'Consulting', description: 'Expert guidance and strategic advisory' },
  { letter: 'T', word: 'Training', description: 'Capability building and certification' },
  { letter: 'D', word: 'Digital', description: 'AI and technology transformation' },
];

export const metadata = {
  title: 'Services | Philstone Consulting',
  description: 'Explore our comprehensive consulting services including Project Management, AI Transformation, Agile Delivery, and Training & Certification.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
        title="What We Do"
        subtitle="Unlock sustainable growth through expert consulting, world-class training, Agile delivery, and intelligent AI-driven transformation."
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Services</span>
        </nav>
        <span className={styles.heroTag}>Smart Solutions That Drive Real Results</span>
      </Hero>

      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Our Services</span>
              <h2>The <span className="gradient-text">C.T.D. Framework</span></h2>
              <p>Our services are built around our C.T.D. Framework — Consulting, Training, and Digital Transformation — with Agile and AI capabilities woven into every pillar.</p>
            </div>
          </AnimatedSection>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 100}>
                <div className={styles.pillarCard}>
                  {pillar.tagline === 'Flagship Service' && (
                    <div className={styles.flagshipBadge}>
                      <Sparkles size={14} />
                      Flagship New Service
                    </div>
                  )}
                  <div className={styles.pillarIcon}>
                    <pillar.icon size={32} />
                  </div>
                  <span className={styles.pillarTagline}>{pillar.tagline}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul className={styles.offeringsList}>
                    {pillar.offerings.map((offering) => (
                      <li key={offering}>
                        <Check size={16} />
                        {offering}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${pillar.slug}`} className={styles.serviceCta}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.frameworkSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Our Approach</span>
              <h2>The <span className="gradient-text">C.T.D. Framework</span></h2>
              <p>A structured approach to transformation that delivers measurable, sustainable results.</p>
            </div>
          </AnimatedSection>
          <div className={styles.frameworkGrid}>
            {ctdFramework.map((item, index) => (
              <AnimatedSection key={item.word} delay={index * 150}>
                <div className={styles.frameworkCard}>
                  <span className={styles.frameworkLetter}>{item.letter}</span>
                  <h3>{item.word}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <AnimatedSection>
            <div className={styles.ctaContent}>
              <h2>Let&apos;s Get Started</h2>
              <p>Ready to transform your organisation? Contact us today to discuss how we can help you achieve your goals.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Book a Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
