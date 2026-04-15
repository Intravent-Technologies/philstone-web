import Link from 'next/link';
import { ArrowRight, Check, Cpu, Brain, BarChart3, Bot, Database } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '../consulting/page.module.css';

const services = [
  { icon: Brain, title: 'AI Strategy & Readiness', description: 'Evaluate your AI maturity, identify use cases, and develop adoption roadmaps.' },
  { icon: Cpu, title: 'Process Automation', description: 'Deploy AI agents and RPA to reduce manual effort and accelerate throughput.' },
  { icon: BarChart3, title: 'Data Analytics', description: 'Build data-driven cultures with dashboards and KPI frameworks.' },
  { icon: Bot, title: 'Intelligent Automation', description: 'Smart workflow tools that learn and improve over time.' },
];

const offerings = [
  { title: 'AI Strategy & Assessment', items: ['AI Maturity Assessment', 'Use Case Identification', 'Technology Roadmap Development', 'Investment Justification', 'Implementation Planning'] },
  { title: 'AI-Powered Process Optimization', items: ['Process Mining & Analysis', 'Predictive Analytics', 'Workflow Optimization', 'Root Cause Analysis', 'Performance Monitoring'] },
  { title: 'Intelligent Automation', items: ['RPA Development & Deployment', 'AI Agent Implementation', 'Chatbot & Virtual Assistant', 'Document Processing', 'Integration Services'] },
  { title: 'Data & Analytics', items: ['Data Strategy Development', 'Analytics Platform Setup', 'Dashboard & Visualization', 'KPI Framework Design', 'Data Governance'] },
];

export const metadata = {
  title: 'AI Transformation | Philstone Consulting',
  description: 'Harness AI, automation, and digital tools to fundamentally transform how your organization works and competes.',
};

export default function AITransformationPage() {
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
              <span>AI Transformation</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <span className={styles.heroTag}>Flagship Service</span>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1>AI Transformation</h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p>We help organisations harness AI, automation, and digital tools to fundamentally transform how they work, compete, and deliver value. Stay ahead in the age of intelligent automation.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Capabilities</span>
              <h2>AI-Powered <span className="gradient-text">Capabilities</span></h2>
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
              <span className={styles.sectionLabel}>Services</span>
              <h2>Our AI <span className="gradient-text">Offerings</span></h2>
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
              <h2>Ready to Embrace AI?</h2>
              <p>Let&apos;s assess your AI readiness and develop a roadmap for transformation.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryCta}>
                  Start AI Assessment <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className={styles.secondaryCta}>
                  See AI Success Stories
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
