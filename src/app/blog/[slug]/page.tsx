import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import AnimatedSection from '@/components/AnimatedSection';
import styles from './page.module.css';

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Philstone Consulting',
    };
  }

  return {
    title: `${post.title} | Philstone Consulting Blog`,
    description: post.excerpt,
  };
}

function formatContent(content: string): string {
  const lines = content.trim().split('\n');
  let inList = false;
  let inTable = false;
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim() === '') continue;

    if (line.startsWith('## ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      if (inTable) { result.push('</tbody></table>'); inTable = false; }
      result.push(`<h2>${line.slice(3)}</h2>`);
    } else if (line.startsWith('### ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      if (inTable) { result.push('</tbody></table>'); inTable = false; }
      result.push(`<h3>${line.slice(4)}</h3>`);
    } else if (line.startsWith('#### ')) {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<h4>${line.slice(5)}</h4>`);
    } else if (line.startsWith('- ')) {
      if (!inList) { result.push('<ul>'); inList = true; }
      result.push(`<li>${line.slice(2)}</li>`);
    } else if (line.match(/^\d+\. /)) {
      if (!inList) { result.push('<ul>'); inList = true; }
      result.push(`<li>${line.replace(/^\d+\. /, '')}</li>`);
    } else if (line.match(/\|.*\|/) && line.includes('---')) {
      continue;
    } else if (line.match(/^\|.*\|$/)) {
      if (inList) { result.push('</ul>'); inList = false; }
      if (!inTable) { result.push('<table><tbody>'); inTable = true; }
      const cells = line.slice(1, -1).split('|').map(cell => cell.trim());
      result.push(`<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`);
    } else {
      if (inList) { result.push('</ul>'); inList = false; }
      if (inTable) { result.push('</tbody></table>'); inTable = false; }
      result.push(`<p>${line}</p>`);
    }
  }

  if (inList) result.push('</ul>');
  if (inTable) result.push('</tbody></table>');

  return result.join('\n');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const processedContent = formatContent(post.content);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className="container">
          <AnimatedSection>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <span className={styles.category}>{post.category}</span>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h1>{post.title}</h1>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className={styles.meta}>
              <span className={styles.author}>By {post.author}</span>
              <span><Calendar size={16} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span><Clock size={16} /> {post.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layout}>
            <article className={styles.article}>
              <div className={styles.featuredImage}>
                <img src={post.image} alt={post.title} />
              </div>
              <div 
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
              <div className={styles.shareSection}>
                <span>Share this article:</span>
                <div className={styles.shareButtons}>
                  <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://philstoneconsulting.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                    <TwitterIcon />
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://philstoneconsulting.com/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                    <LinkedinIcon />
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://philstoneconsulting.com/blog/${post.slug}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                    <FacebookIcon />
                  </a>
                </div>
              </div>
            </article>

            <aside className={styles.sidebar}>
              <AnimatedSection>
                <div className={styles.sidebarCard}>
                  <h3>About the Author</h3>
                  <p>Written by the Philstone Consulting team of certified project management and AI transformation experts.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className={styles.sidebarCard}>
                  <h3>Need Help?</h3>
                  <p>Interested in implementing these strategies in your organization?</p>
                  <Link href="/contact" className={styles.sidebarCta}>
                    Contact Us <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                  </Link>
                </div>
              </AnimatedSection>

              {relatedPosts.length > 0 && (
                <AnimatedSection delay={200}>
                  <div className={styles.sidebarCard}>
                    <h3>Related Articles</h3>
                    <div className={styles.relatedPosts}>
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className={styles.relatedPost}>
                          <img src={relatedPost.image} alt={relatedPost.title} />
                          <div>
                            <span>{relatedPost.category}</span>
                            <h4>{relatedPost.title}</h4>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={300}>
                <div className={styles.sidebarCard}>
                  <h3>Explore Training</h3>
                  <p>Ready to earn your certification? View our training programs.</p>
                  <Link href="/services" className={styles.sidebarCta}>
                    View Programs <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
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
