import Link from 'next/link';
import { ArrowRight, Check, Target, TrendingUp, Users, Shield, Award, Clock } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const benefits = [
  { icon: Target, title: 'Strategic Alignment', description: 'Align your projects with business objectives for maximum impact and ROI.' },
  { icon: Shield, title: 'Risk Mitigation', description: 'Identify and address risks early to protect your investments and timelines.' },
  { icon: Clock, title: 'On-Time Delivery', description: 'Structured methodologies ensure projects are delivered as promised.' },
  { icon: Award, title: 'Quality Assurance', description: 'Built-in quality checkpoints throughout the project lifecycle.' },
];

const offerings = [
  { title: 'PMO Setup & Optimization', items: ['PMO design and implementation', 'Governance framework development', 'PMO maturity assessment', 'Tool selection and implementation', 'PMO staffing and capability building'] },
  { title: 'Project Delivery Support', items: ['End-to-end project management', 'Schedule and resource planning', 'Stakeholder management', 'Quality assurance and delivery', 'Project recovery and turnaround'] },
  { title: 'Change Management', items: ['Change impact assessment', 'Stakeholder engagement strategy', 'Communication planning', 'Training and adoption support', 'Resistance management'] },
  { title: 'Risk & Resilience Advisory', items: ['Enterprise risk frameworks', 'Risk identification and mitigation', 'Business continuity planning', 'Monte Carlo simulation', 'Strategic risk governance'] },
];

export const metadata = {
  title: 'Consulting & Advisory | Philstone Consulting',
  description: 'Expert consulting services in project management, change management, risk advisory, and organizational development.',
};

export default function ConsultingPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className="container">
          <AnimatedSection>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/services">Services</Link>
              <span>/</span>
              <span>Consulting & Advisory</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <span className={styles.heroTag}>Pillar 1</span>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1>Consulting & Advisory</h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p>Strategic guidance for measurable impact. Our consulting team combines globally certified expertise with deep sector knowledge to help you navigate complexity, reduce risk, and accelerate performance.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Why Choose Us</span>
              <h2>Benefits of Our <span className="gradient-text">Consulting Services</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 100}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <benefit.icon size={28} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
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
              <span className={styles.sectionLabel}>What We Offer</span>
              <h2>Our <span className="gradient-text">Service Areas</span></h2>
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

      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <AnimatedSection>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Organization?</h2>
              <p>Let&apos;s discuss how our consulting services can help you achieve your goals.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryCta}>
                  Schedule a Consultation <ArrowRight size={18} />
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
