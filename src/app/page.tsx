'use client';

import Link from 'next/link';
import { ArrowRight, Target, BookOpen, Cpu, Layers, CheckCircle, Award, Globe, Users, Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { usePartners, useReviews } from '@/hooks/useContent';
import styles from './page.module.css';

const stats = [
  { value: '2000+', label: 'Professionals Trained', icon: Users },
  { value: '30+', label: 'Organizations Served', icon: Award },
  { value: '4', label: 'Continents', icon: Globe },
];

const pillars = [
  {
    icon: Target,
    title: 'Consulting & Advisory',
    slug: 'consulting',
    description: 'Strategic guidance for project management, change, risk, and organizational excellence.',
    features: ['PMO Setup & Governance', 'Change Management', 'Risk & Resilience', 'Strategy & Ops'],
  },
  {
    icon: BookOpen,
    title: 'Training & Certification',
    slug: 'training',
    description: 'Globally accredited programmes for PMP, PRINCE2, Lean Six Sigma, and professional development.',
    features: ['PMP & CAPM', 'PRINCE2', 'Lean Six Sigma', 'Professional Skills'],
  },
  {
    icon: Cpu,
    title: 'AI Transformation',
    slug: 'ai-transformation',
    description: 'Harness AI, automation, and digital tools to fundamentally transform how you work and compete.',
    features: ['AI Strategy & Readiness', 'Process Automation', 'Data Analytics', 'Digital Workflows'],
  },
  {
    icon: Layers,
    title: 'Agile & Scrum',
    slug: 'agile-scrum',
    description: 'Adaptive, outcome-focused delivery frameworks for faster results and greater flexibility.',
    features: ['Agile Transformation', 'Scrum Setup & Coaching', 'Hybrid PM', 'Sprint Support'],
  },
];

const differentiators = [
  { title: 'Globally Certified Experts', description: 'PMI, APMG, ASQ, Scrum Alliance credentials bringing international best practice.' },
  { title: 'Proven Track Record', description: 'Measurable results across government, oil & gas, banking, healthcare, and non-profits.' },
  { title: 'Tailored, Not Templated', description: 'Every solution co-created to match your context, culture, and objectives.' },
  { title: 'Future-Ready Approach', description: 'AI, Agile, and digital capabilities integrated with proven methodologies.' },
];

export default function HomePage() {
  const { partners } = usePartners();
  const { reviews } = useReviews();
  
  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} />
        <div className={styles.heroGradientBottom} />
        <div className={`container ${styles.heroContent}`}>
          <AnimatedSection>
            <span className={styles.heroTag}>Initiate. Effect. Sustain Change.</span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className={styles.heroTitle}>
              Empowering Organisations to<br />
              <span className="gradient-text">Thrive in a Complex World</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className={styles.heroSubtitle}>
              We partner with businesses and institutions across Africa, Europe, and the Middle East 
              to build capability, drive operational excellence, and deliver sustainable transformation 
              through world-class project management, process improvement, Agile delivery, and AI-powered innovation.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className={styles.heroCtas}>
              <Link href="/services" className={styles.primaryCta}>
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                Book a Consultation
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className={styles.heroFloatingCards}>
          <div className={styles.floatingCard} style={{ '--delay': '0s' } as React.CSSProperties}>
            <Cpu size={24} />
            <span>AI-Powered</span>
          </div>
          <div className={styles.floatingCard} style={{ '--delay': '1s' } as React.CSSProperties}>
            <Layers size={24} />
            <span>Agile First</span>
          </div>
          <div className={styles.floatingCard} style={{ '--delay': '2s' } as React.CSSProperties}>
            <Award size={24} />
            <span>Certified Experts</span>
          </div>
        </div>
      </section>

      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className={styles.statCard}>
                  <stat.icon className={styles.statIcon} size={32} />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.pillarsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>What We Do</span>
              <h2>Four Integrated Pillars for <span className="gradient-text">Complete Transformation</span></h2>
              <p>Philstone Consulting delivers end-to-end solutions designed to help you compete, grow, and lead.</p>
            </div>
          </AnimatedSection>
          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 100}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>
                    <pillar.icon size={28} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul className={styles.pillarFeatures}>
                    {pillar.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${pillar.slug}`} className={styles.pillarLink}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.differentiatorsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Why Philstone</span>
              <h2>What Sets Us <span className="gradient-text">Apart</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.differentiatorsGrid}>
            {differentiators.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 100}>
                <div className={styles.differentiatorCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.partnersSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Trusted By</span>
              <h2>Our <span className="gradient-text">Partners</span></h2>
              <p>We&apos;re proud to work with leading organisations across industries.</p>
            </div>
          </AnimatedSection>
          <div className={styles.partnersGrid}>
            {partners.map((partner, index) => (
              <AnimatedSection key={partner.id} delay={index * 50}>
                <div className={styles.partnerCard}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Testimonials</span>
              <h2>What Our <span className="gradient-text">Clients Say</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.reviewsGrid}>
            {reviews.map((review, index) => (
              <AnimatedSection key={review.id} delay={index * 100}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewQuote}>
                    <Quote size={24} className={styles.quoteIcon} />
                    <p>{review.quote}</p>
                  </div>
                  <div className={styles.reviewRating}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f6ad55" color="#f6ad55" />
                    ))}
                  </div>
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
              <span className={styles.sectionLabel}>Let&apos;s Connect</span>
              <h2>Ready to Transform Your Organisation?</h2>
              <p>Partner with Philstone to unlock your potential and build lasting competitive advantage.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Start the Conversation <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
