import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { caseStudies, getCaseStudyBySlug } from '@/data/case-studies';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    return { title: 'Case Study Not Found | Philstone Consulting' };
  }

  return {
    title: `${study.title} | Philstone Consulting`,
    description: study.challenge.substring(0, 160),
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter(s => s.slug !== study.slug && s.industry === study.industry)
    .slice(0, 2);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className="container">
          <AnimatedSection>
            <Link href="/case-studies" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Case Studies
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <span className={styles.industry}>{study.industry}</span>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1>{study.title}</h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <p className={styles.client}>{study.client}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.metricsBanner}>
            {study.metrics.map((metric) => (
              <div key={metric.label} className={styles.metric}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.layout}>
            <article className={styles.article}>
              <AnimatedSection>
                <div className={styles.section}>
                  <h2>The Challenge</h2>
                  <p>{study.challenge}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className={styles.section}>
                  <h2>Our Solution</h2>
                  <p>{study.solution}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className={styles.section}>
                  <h2>Results</h2>
                  <p>{study.results}</p>
                  <div className={styles.servicesUsed}>
                    <h4>Services Used:</h4>
                    <div className={styles.serviceTags}>
                      {study.services.map((service) => (
                        <span key={service} className={styles.serviceTag}>{service}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {study.testimonial && (
                <AnimatedSection delay={300}>
                  <div className={styles.testimonial}>
                    <Quote className={styles.quoteIcon} size={40} />
                    <blockquote>{study.testimonial.quote}</blockquote>
                    <cite>
                      <strong>{study.testimonial.author}</strong>
                      <span>{study.testimonial.role}</span>
                    </cite>
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={400}>
                <div className={styles.ctaBlock}>
                  <h3>Ready to achieve similar results?</h3>
                  <p>Partner with Philstone Consulting to transform your organization.</p>
                  <Link href="/contact" className={styles.ctaButton}>
                    Start Your Transformation <ArrowRight size={18} />
                  </Link>
                </div>
              </AnimatedSection>
            </article>

            <aside className={styles.sidebar}>
              <AnimatedSection>
                <div className={styles.sidebarCard}>
                  <h3>Key Metrics</h3>
                  <div className={styles.metricsList}>
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className={styles.metricItem}>
                        <span className={styles.metricItemValue}>{metric.value}</span>
                        <span className={styles.metricItemLabel}>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {relatedStudies.length > 0 && (
                <AnimatedSection delay={100}>
                  <div className={styles.sidebarCard}>
                    <h3>Related Case Studies</h3>
                    <div className={styles.relatedList}>
                      {relatedStudies.map((related) => (
                        <Link key={related.slug} href={`/case-studies/${related.slug}`} className={styles.relatedItem}>
                          <img src={related.image} alt={related.title} />
                          <div>
                            <span>{related.industry}</span>
                            <h4>{related.title}</h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={200}>
                <div className={styles.sidebarCard}>
                  <h3>Need Help?</h3>
                  <p>Contact us to discuss how we can help your organization.</p>
                  <Link href="/contact" className={styles.sidebarCta}>
                    Get in Touch <ArrowRight size={16} />
                  </Link>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
