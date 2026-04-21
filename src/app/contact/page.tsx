'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import styles from './page.module.css';

const offices = [
  { location: 'Lagos, Nigeria', email: 'info@philstoneconsulting.com', phone: '+234 806 015 7984' },
  { location: 'Abuja, Nigeria', email: 'info@philstoneconsulting.com', phone: '+234 912 758 5625' },
  { location: 'United Kingdom', email: 'info@philstoneconsulting.com', phone: '+44 778 047 1287' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Hero
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
        title="Get in Touch"
        subtitle="Whether you're exploring consulting support, planning a training programme, pursuing Agile transformation, or ready to harness AI for your business, we'd love to hear from you."
      >
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </nav>
        <span className={styles.heroTag}>Let's Start a Conversation</span>
      </Hero>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <AnimatedSection className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              </div>
              
              {submitted ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    <CheckCircle size={40} />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. Our team will contact you shortly.</p>
                  <button 
                    className={styles.resetButton}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', organisation: '', subject: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="organisation">Organisation / Company</label>
                      <input
                        type="text"
                        id="organisation"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="consulting">Consulting</option>
                      <option value="training">Training</option>
                      <option value="agile">Agile & Scrum</option>
                      <option value="ai">AI Transformation</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className={styles.spinner} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Enquiry <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>

            <div className={styles.infoColumn}>
              <AnimatedSection delay={100}>
                <div className={styles.infoCard}>
                  <h3>Our Offices</h3>
                  <div className={styles.officesList}>
                    {offices.map((office) => (
                      <div key={office.location} className={styles.officeItem}>
                        <MapPin size={20} />
                        <div>
                          <h4>{office.location}</h4>
                          <a href={`mailto:${office.email}`}>{office.email}</a>
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`}>{office.phone}</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className={styles.hoursCard}>
                  <Clock size={20} />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 9am - 2pm</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className={styles.ctaCard}>
                  <h4>Book a Call</h4>
                  <p>Schedule a free 30-minute consultation with one of our experts.</p>
                  <a href="mailto:info@philstoneconsulting.com?subject=30-Minute Consultation Request" className={styles.ctaLink}>
                    Schedule a Call <Send size={16} />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
