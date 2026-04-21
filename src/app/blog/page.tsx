'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import { useBlogPosts } from '@/hooks/useContent';
import styles from './page.module.css';

export default function BlogPage() {
  const { blogPosts, loading } = useBlogPosts();
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const categories = [...new Set(blogPosts.map(post => post.category))];

  if (loading) {
    return (
      <>
        <Hero
          imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
          title="Philstone Blog"
          subtitle="Loading..."
        >
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Blog</span>
          </nav>
          <span className={styles.heroTag}>Insights & Thought Leadership</span>
        </Hero>
      </>
    );
  }

  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
        title="Philstone Blog"
        subtitle="Practical insights, expert perspectives, and actionable guidance on Project Management, AI Transformation, Agile, and Process Excellence."
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <span className={styles.heroTag}>Insights & Thought Leadership</span>
      </Hero>

      <section className={`section ${styles.blogSection}`}>
        <div className="container">
          <AnimatedSection>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Featured Articles</span>
            </div>
          </AnimatedSection>
          
          <div className={styles.featuredGrid}>
            {featuredPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 100}>
                <Link href={`/blog/${post.slug}`} className={styles.featuredCard}>
                  <div className={styles.featuredImage}>
                    <img src={post.image} alt={post.title} />
                    <span className={styles.categoryBadge}>{post.category}</span>
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.meta}>
                      <span><Calendar size={14} /> {post.date}</span>
                      <span><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className={styles.readMore}>
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.allPostsSection}`}>
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.postsColumn}>
              <AnimatedSection>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionLabel}>All Articles</span>
                </div>
              </AnimatedSection>

              <div className={styles.postsGrid}>
                {regularPosts.map((post, index) => (
                  <AnimatedSection key={post.slug} delay={index * 100}>
                    <Link href={`/blog/${post.slug}`} className={styles.postCard}>
                      <div className={styles.postImage}>
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className={styles.postContent}>
                        <span className={styles.postCategory}>{post.category}</span>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className={styles.postMeta}>
                          <span><Calendar size={14} /> {post.date}</span>
                          <span><Clock size={14} /> {post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <AnimatedSection>
                <div className={styles.sidebarCard}>
                  <h3>Categories</h3>
                  <ul className={styles.categoryList}>
                    {categories.map((category) => (
                      <li key={category}>
                        <Link href={`/blog?category=${encodeURIComponent(category)}`}>
                          {category}
                          <span className={styles.count}>
                            ({blogPosts.filter(p => p.category === category).length})
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className={styles.sidebarCard}>
                  <h3>Newsletter</h3>
                  <p>Get the latest insights delivered to your inbox.</p>
                  <form className={styles.newsletterForm}>
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className={styles.sidebarCard}>
                  <h3>Need Training?</h3>
                  <p>Explore our world-class certification programs.</p>
                  <Link href="/services" className={styles.sidebarCta}>
                    View Training Programs <ArrowRight size={16} />
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
