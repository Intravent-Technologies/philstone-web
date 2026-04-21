'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import { useCaseStudies } from '@/hooks/useContent';
import styles from './page.module.css';

export default function CaseStudiesPage() {
  const { caseStudies, loading } = useCaseStudies();

  if (loading) {
    return (
      <>
        <Hero
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          title="Case Studies"
          subtitle="Loading..."
        >
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Case Studies</span>
          </nav>
          <span className={styles.heroTag}>Our Work</span>
        </Hero>
      </>
    );
  }

  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
        title="Case Studies"
        subtitle="Explore how we've helped organizations across Africa, Europe, and the Middle East transform their operations and achieve measurable results."
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Case Studies</span>
        </nav>
        <span className={styles.heroTag}>Our Work</span>
      </Hero>

      <section className={`section ${styles.studiesSection}`}>
        <div className="container">
          <div className={styles.studiesGrid}>
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.slug} delay={index * 100}>
                <Link href={`/case-studies/${study.slug}`} className={styles.studyCard}>
                  <div className={styles.studyImage}>
                    <img src={study.image} alt={study.title} />
                    <span className={styles.industryBadge}>{study.industry}</span>
                  </div>
                  <div className={styles.studyContent}>
                    <h2>{study.title}</h2>
                    <p>{study.challenge.substring(0, 150)}...</p>
                    <div className={styles.metricsPreview}>
                      {study.metrics.slice(0, 2).map((metric) => (
                        <div key={metric.label} className={styles.metricPreview}>
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <span className={styles.readMore}>
                      Read Case Study <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
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
              <h2>Ready to Create Your Success Story?</h2>
              <p>Partner with Philstone to write your own transformation story.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Start Your Journey <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
