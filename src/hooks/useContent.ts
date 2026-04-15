'use client';

import { useState, useEffect, useCallback } from 'react';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
}

export interface Review {
  id: string;
  quote: string;
  rating: number;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string }[];
  image: string;
  services: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  organisation: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
  replies?: string[];
}

const defaultPartners: Partner[] = [
  { id: '1', name: 'International Mega Standard', logo: 'https://via.placeholder.com/180x80/1a365d/ffffff?text=IMS', website: '#' },
  { id: '2', name: 'Q Power X2 Module', logo: 'https://via.placeholder.com/180x80/3182ce/ffffff?text=Q-POWER', website: '#' },
  { id: '3', name: 'Access Bank', logo: 'https://via.placeholder.com/180x80/ed8936/ffffff?text=ACCESS', website: '#' },
  { id: '4', name: 'KPMG', logo: 'https://via.placeholder.com/180x80/1a365d/ffffff?text=KPMG', website: '#' },
  { id: '5', name: 'PWC', logo: 'https://via.placeholder.com/180x80/3182ce/ffffff?text=PwC', website: '#' },
  { id: '6', name: 'Shell Nigeria', logo: 'https://via.placeholder.com/180x80/ed8936/ffffff?text=SHELL', website: '#' },
];

const defaultReviews: Review[] = [
  { id: '1', quote: 'Philstone Consulting transformed our project management capabilities. Their team\'s expertise in PMP training and Agile implementation helped us achieve results we never thought possible.', rating: 5, date: '2026-03-15' },
  { id: '2', quote: 'The AI transformation program delivered exceptional results. Our process efficiency improved by 60% within the first quarter.', rating: 5, date: '2026-02-28' },
  { id: '3', quote: 'Outstanding training programs. Our team is now certified and confident in applying Lean Six Sigma methodologies.', rating: 5, date: '2026-02-10' },
  { id: '4', quote: 'Working with Philstone was a game-changer for our organisation. Their consulting expertise helped us navigate complex challenges.', rating: 5, date: '2026-01-25' },
];

export function usePartners() {
  const [partners, setPartners] = useState<Partner[]>(defaultPartners);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/partners')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPartners(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const refreshPartners = useCallback(async () => {
    try {
      const res = await fetch('/api/partners');
      const data = await res.json();
      if (Array.isArray(data)) {
        setPartners(data);
      }
    } catch (error) {
      console.error('Failed to refresh partners:', error);
    }
  }, []);

  return { partners, loading, refreshPartners };
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setReviews(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const refreshReviews = useCallback(async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      if (Array.isArray(data)) {
        setReviews(data);
      }
    } catch (error) {
      console.error('Failed to refresh reviews:', error);
    }
  }, []);

  return { reviews, loading, refreshReviews };
}

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setBlogPosts(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const refreshBlogPosts = useCallback(async () => {
    try {
      const res = await fetch('/api/blog-posts');
      const data = await res.json();
      if (Array.isArray(data)) {
        setBlogPosts(data);
      }
    } catch (error) {
      console.error('Failed to refresh blog posts:', error);
    }
  }, []);

  return { blogPosts, loading, refreshBlogPosts };
}

export function useCaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/case-studies')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCaseStudies(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const refreshCaseStudies = useCallback(async () => {
    try {
      const res = await fetch('/api/case-studies');
      const data = await res.json();
      if (Array.isArray(data)) {
        setCaseStudies(data);
      }
    } catch (error) {
      console.error('Failed to refresh case studies:', error);
    }
  }, []);

  return { caseStudies, loading, refreshCaseStudies };
}

export function useInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/inquiries')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setInquiries(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const refreshInquiries = useCallback(async () => {
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (Array.isArray(data)) {
        setInquiries(data);
      }
    } catch (error) {
      console.error('Failed to refresh inquiries:', error);
    }
  }, []);

  return { inquiries, loading, refreshInquiries };
}

// API helpers
export async function savePartner(partner: Partial<Partner> & { name: string; logo: string }): Promise<Partner[]> {
  const res = await fetch('/api/partners', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partner),
  });
  return (await res.json()).partners;
}

export async function deletePartner(id: string): Promise<Partner[]> {
  const res = await fetch(`/api/partners?id=${id}`, { method: 'DELETE' });
  return (await res.json()).partners;
}

export async function saveReview(review: Partial<Review> & { quote: string }): Promise<Review[]> {
  const res = await fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  });
  return (await res.json()).reviews;
}

export async function deleteReview(id: string): Promise<Review[]> {
  const res = await fetch(`/api/reviews?id=${id}`, { method: 'DELETE' });
  return (await res.json()).reviews;
}

export async function saveBlogPost(post: Partial<BlogPost> & { title: string }): Promise<BlogPost[]> {
  const res = await fetch('/api/blog-posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
  return (await res.json()).blogPosts;
}

export async function deleteBlogPost(id: string): Promise<BlogPost[]> {
  const res = await fetch(`/api/blog-posts?id=${id}`, { method: 'DELETE' });
  return (await res.json()).blogPosts;
}

export async function saveCaseStudy(study: Partial<CaseStudy> & { title: string }): Promise<CaseStudy[]> {
  const res = await fetch('/api/case-studies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(study),
  });
  return (await res.json()).caseStudies;
}

export async function deleteCaseStudy(id: string): Promise<CaseStudy[]> {
  const res = await fetch(`/api/case-studies?id=${id}`, { method: 'DELETE' });
  return (await res.json()).caseStudies;
}

export async function saveInquiry(inquiry: Partial<Inquiry>): Promise<Inquiry[]> {
  const res = await fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiry),
  });
  return (await res.json()).inquiries;
}

export async function deleteInquiry(id: string): Promise<Inquiry[]> {
  const res = await fetch(`/api/inquiries?id=${id}`, { method: 'DELETE' });
  return (await res.json()).inquiries;
}
