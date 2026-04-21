import Link from 'next/link';
import { ArrowRight, Check, Layers, Users, Clock, Recycle, Target, Award, RefreshCw } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import styles from '../consulting/page.module.css';

const services = [
  { icon: Layers, title: 'Agile Transformation', description: 'Guide your organization through cultural, structural, and process changes.' },
  { icon: Users, title: 'Scrum Coaching', description: 'Form effective teams and build habits of high-performing Agile teams.' },
  { icon: Target, title: 'Hybrid PM', description: 'Combine predictability of waterfall with flexibility of Agile.' },
  { icon: RefreshCw, title: 'Sprint Support', description: 'Embedded coaching for real-time mentoring and impediment removal.' },
];

const offerings = [
  { title: 'Agile Transformation Advisory', items: ['Cultural transformation roadmap', 'Framework selection (SAFe, LeSS, Spotify)', 'Agile maturity assessment', 'Leadership alignment workshops', 'Metrics and measurement'] },
  { title: 'Scrum Team Setup & Coaching', items: ['Team formation and role definition', 'Ceremony facilitation', 'Backlog management training', 'Velocity tracking', 'Retrospective coaching'] },
  { title: 'Agile PMO Design', items: ['PMO to APO transformation', 'Governance that enables, not inhibits', 'Portfolio visibility tools', 'Multi-team coordination', 'Scaling frameworks'] },
  { title: 'Hybrid Project Management', items: ['Water-Scrum-fall approaches', 'Stage-gate with Agile iterations', 'Governance for hybrid programs', 'Documentation balance', 'Risk-adaptive planning'] },
];

const certifications = [
  'Certified ScrumMaster (CSM) - Scrum Alliance',
  'Professional Scrum Master (PSM I & II) - Scrum.org',
  'PMI Agile Certified Practitioner (PMI-ACP)',
  'SAFe Agilist (SA) - Scaled Agile',
];

export const metadata = {
  title: 'Agile & Scrum | Philstone Consulting',
  description: 'Adaptive, outcome-focused delivery frameworks for faster results and greater flexibility.',
};

export default function AgileScrumPage() {
  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
        title="Agile & Scrum"
        subtitle="Organisations across every sector are adopting Agile and Scrum frameworks to deliver faster, respond to change, and maximise value delivery. We help you move from traditional approaches to adaptive, outcome-focused ways of working."
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>Agile & Scrum</span>
        </nav>
        <span className={styles.heroTag}>Pillar 4</span>
      </Hero>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Services</span>
              <h2>Our Agile <span className="gradient-text">Services</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.benefitsGrid}>
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <service.icon size={28} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.offeringsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Details</span>
              <h2>Service <span className="gradient-text">Offerings</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.offeringsGrid}>
            {offerings.map((offering, index) => (
              <AnimatedSection key={offering.title} delay={index * 100}>
                <div className={styles.offeringCard}>
                  <h3>{offering.title}</h3>
                  <ul className={styles.offeringList}>
                    {offering.items.map((item) => (
                      <li key={item}>
                        <Check size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Certifications</span>
              <h2>Agile <span className="gradient-text">Credentials</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.benefitsGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '900px', margin: '0 auto' }}>
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert} delay={index * 100}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <Check size={28} />
                  </div>
                  <p style={{ fontSize: '1rem', fontWeight: 500 }}>{cert}</p>
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
              <h2>Ready to Go Agile?</h2>
              <p>Let&apos;s assess your readiness and create a transformation roadmap.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryCta}>
                  Start Transformation <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className={styles.secondaryCta}>
                  View Case Studies
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
