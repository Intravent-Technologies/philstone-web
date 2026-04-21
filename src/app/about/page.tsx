import Link from 'next/link';
import { Sparkles, Target, Heart, Lightbulb, BookOpen, RefreshCw, ArrowRight, MapPin, Globe } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import Counter from '@/components/Counter';
import styles from './page.module.css';

const values = [
  { icon: Target, title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we deliver — from the quality of our training content to the rigour of our consulting engagements.' },
  { icon: Heart, title: 'Professionalism', description: 'We bring discipline, integrity, and accountability to every client relationship. Trust is earned through consistent, principled action.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously seek better ways to solve problems — blending proven methodologies with emerging technologies and creative thinking.' },
  { icon: BookOpen, title: 'Learning', description: 'We are committed to continuous professional development, both for our clients and ourselves. Knowledge shared is value multiplied.' },
  { icon: RefreshCw, title: 'Sustainability', description: 'We design solutions that endure. Our goal is not short-term fixes but long-term organisational health and competitiveness.' },
];

const stats = [
  { value: 2000, suffix: '+', label: 'Professionals Trained' },
  { value: 30, suffix: '+', label: 'Organizations Served' },
  { value: 4, suffix: '', label: 'Continents' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
];

export const metadata = {
  title: 'About Us | Philstone Consulting',
  description: 'Learn about Philstone Consulting - our vision, mission, values, and commitment to helping organisations initiate, effect, and sustain change.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
        title="Get to Know Who We Are"
        subtitle="And What Makes Us Different"
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About</span>
        </nav>
        <span className={styles.heroTag}>Initiate. Effect. Sustain Change.</span>
      </Hero>

      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <AnimatedSection className={styles.storyContent}>
              <span className={styles.label}>Our Story</span>
              <h2>A Strategy-Led, Capability-Driven Firm</h2>
              <p>
                Philstone Consulting is a strategy-led, capability-driven firm specialising in project management, process improvement, Agile delivery, AI transformation, consulting, and professional training. We exist to help organisations navigate complexity, build resilient teams, and achieve lasting performance improvement.
              </p>
              <p>
                Founded on the belief that excellence is built through people, process, and practice, we combine globally recognised methodologies with deep local insight to deliver solutions that are both rigorous and relevant.
              </p>
              <p>
                Our work spans the public and private sectors across Africa, Europe, and the Middle East — from government agencies modernising their operations to multinationals strengthening their project delivery capabilities.
              </p>
            </AnimatedSection>
            <AnimatedSection className={styles.storyImage}>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" 
                alt="Team collaboration"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={`section ${styles.visionSection}`}>
        <div className="container">
          <div className={styles.visionGrid}>
            <AnimatedSection className={styles.visionCard}>
              <span className={styles.visionLabel}>Our Vision</span>
              <h3>To be a leading World-Class team and reference point committed to initiating, effecting and sustaining change in individuals and organizations globally.</h3>
            </AnimatedSection>
            <AnimatedSection className={styles.visionCard}>
              <span className={styles.visionLabel}>Our Mission</span>
              <h3>To constantly create, simplify, impart and implement workable and innovative solutions in solving problems.</h3>
            </AnimatedSection>
          </div>
          <AnimatedSection className={styles.philosophy}>
            <p>Driven by Excellence. Grounded in Practice. Built for Impact.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Our Values</span>
              <h2>The Foundation of <span className="gradient-text">How We Work</span></h2>
              <p>Our values are the foundation of how we work, who we hire, and the outcomes we deliver.</p>
            </div>
          </AnimatedSection>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <value.icon size={28} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>
                    <Counter end={stat.value} suffix={stat.suffix} duration={2500} />
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.presenceSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Global Reach</span>
              <h2>Our <span className="gradient-text">Presence</span></h2>
              <p>Serving clients across Africa, Europe, and the Middle East</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className={styles.locationsGrid}>
              <div className={styles.locationCard}>
                <MapPin size={24} />
                <h3>Lagos, Nigeria</h3>
                <p>West Africa Hub</p>
              </div>
              <div className={styles.locationCard}>
                <MapPin size={24} />
                <h3>Abuja, Nigeria</h3>
                <p>Federal Capital Territory</p>
              </div>
              <div className={styles.locationCard}>
                <Globe size={24} />
                <h3>United Kingdom</h3>
                <p>European Operations</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className="container">
          <AnimatedSection>
            <div className={styles.ctaContent}>
              <h2>Partner With Us</h2>
              <p>Ready to build inner resilience in your organisation? Let&apos;s start a conversation.</p>
              <Link href="/contact" className={styles.ctaButton}>
                Get in Touch <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
