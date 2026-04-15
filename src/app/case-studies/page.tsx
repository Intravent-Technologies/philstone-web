'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useCaseStudies } from '@/hooks/useContent';
import styles from './page.module.css';

export default function CaseStudiesPage() {
  const { caseStudies, loading } = useCaseStudies();

  if (loading) {
    return (
      <>
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className="container">
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Case Studies</span>
            </nav>
            <span className={styles.heroTag}>Our Work</span>
            <h1>Case Studies</h1>
            <p>Loading...</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className="container">
          <AnimatedSection>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Case Studies</span>
            </nav>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <span className={styles.heroTag}>Our Work</span>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1>Case Studies</h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p>Explore how we&apos;ve helped organisations across industries achieve measurable, sustainable transformation through our consulting, training, and AI services.</p>
          </AnimatedSection>
        </div>
      </section>

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
