import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridOverlay} />
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img 
              src="https://philstoneconsulting.com/wp-content/uploads/2025/07/Philstone-Consulting-logo-1-1024x277.jpg" 
              alt="Philstone Consulting"
              className={styles.logo}
            />
            <p className={styles.tagline}>Initiate. Effect. Sustain Change.</p>
            <p className={styles.description}>
              Empowering organisations to thrive in a complex world through world-class project management, AI transformation, and operational excellence.
            </p>
            <div className={styles.social}>
              <a href="https://linkedin.com/company/philstoneconsulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://twitter.com/philstoneconsulting" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.services}>
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/services">Consulting & Advisory</Link></li>
              <li><Link href="/services">Training & Certification</Link></li>
              <li><Link href="/services">AI Transformation</Link></li>
              <li><Link href="/services">Agile & Scrum</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:info@philstoneconsulting.com">info@philstoneconsulting.com</a>
              </li>
              <li>
                <Phone size={16} />
                <div className={styles.phones}>
                  <a href="tel:+2348060157984">+234 806 015 7984</a>
                  <a href="tel:+2349127585625">+234 912 758 5625</a>
                  <a href="tel:+447780471287">+44 778 047 1287</a>
                </div>
              </li>
              <li>
                <MapPin size={16} />
                <span>Lagos | Abuja | United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Philstone Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
