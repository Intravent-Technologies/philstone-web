import Link from 'next/link';
import { ArrowRight, Check, Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import styles from '../consulting/page.module.css';

const certifications = [
  { name: 'PMP', provider: 'PMI', description: 'The gold standard in project management' },
  { name: 'CAPM', provider: 'PMI', description: 'Foundational certification for emerging professionals' },
  { name: 'PRINCE2', provider: 'APMG', description: 'Process-based project management methodology' },
  { name: 'Lean Six Sigma', provider: 'Various', description: 'Yellow, Green, and Black Belt programs' },
];

const programs = [
  { title: 'Project Management Certifications', items: ['PMP & CAPM Preparation', 'PRINCE2 Foundation & Practitioner', 'PMBOK Guide Training', 'CAPM Exam Prep', 'Project Scheduler Certification'] },
  { title: 'Agile & Scrum Certifications', items: ['Certified ScrumMaster (CSM)', 'Professional Scrum Master (PSM I & II)', 'PMI-ACP Preparation', 'SAFe Agilist Certification', 'Scrum Developer Certification'] },
  { title: 'Process Improvement', items: ['Lean Six Sigma Yellow/Green/Black Belt', 'Kaizen Management Professional', 'Continuous Improvement Training', 'DMAIC Methodology', 'Statistical Process Control'] },
  { title: 'Quality & Risk', items: ['ISO 9001 Lead Auditor', 'Quality Management Systems', 'Risk Management Professional', 'HSE Certification Programs', 'Business Continuity Management'] },
];

export const metadata = {
  title: 'Training & Certification | Philstone Consulting',
  description: 'World-class training programs for PMP, PRINCE2, Lean Six Sigma, Agile, and professional development.',
};

export default function TrainingPage() {
  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
        title="Training & Certification"
        subtitle="Build capability. Earn credentials. Drive performance. We deliver globally accredited training programmes led by experienced practitioners and designed for immediate workplace application."
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span>Training & Certification</span>
        </nav>
        <span className={styles.heroTag}>Pillar 2</span>
      </Hero>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Certifications</span>
              <h2>Industry-Recognised <span className="gradient-text">Credentials</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.benefitsGrid}>
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 100}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>
                    <Award size={28} />
                  </div>
                  <h3>{cert.name}</h3>
                  <p className={styles.certProvider}>{cert.provider}</p>
                  <p>{cert.description}</p>
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
              <span className={styles.sectionLabel}>Programs</span>
              <h2>Our Training <span className="gradient-text">Programs</span></h2>
            </div>
          </AnimatedSection>
          <div className={styles.offeringsGrid}>
            {programs.map((program, index) => (
              <AnimatedSection key={program.title} delay={index * 100}>
                <div className={styles.offeringCard}>
                  <h3>{program.title}</h3>
                  <ul className={styles.offeringList}>
                    {program.items.map((item) => (
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
              <h2>Start Your Certification Journey</h2>
              <p>Contact us to learn about upcoming training schedules and group discounts.</p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className={styles.primaryCta}>
                  Enquire Now <ArrowRight size={18} />
                </Link>
                <Link href="/case-studies" className={styles.secondaryCta}>
                  View Success Stories
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
