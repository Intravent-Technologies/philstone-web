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

export function usePartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/partners')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
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
export async function savePartner(partner: Partial<Partner> & { name: string; logo: string }): Promise<void> {
  await fetch('/api/partners', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(partner),
  });
}

export async function deletePartner(id: string): Promise<void> {
  await fetch(`/api/partners?id=${id}`, { method: 'DELETE' });
}

export async function saveReview(review: Partial<Review> & { quote: string }): Promise<void> {
  await fetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review),
  });
}

export async function deleteReview(id: string): Promise<void> {
  await fetch(`/api/reviews?id=${id}`, { method: 'DELETE' });
}

export async function saveBlogPost(post: Partial<BlogPost> & { title: string }): Promise<void> {
  await fetch('/api/blog-posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  });
}

export async function deleteBlogPost(id: string): Promise<void> {
  await fetch(`/api/blog-posts?id=${id}`, { method: 'DELETE' });
}

export async function saveCaseStudy(study: Partial<CaseStudy> & { title: string }): Promise<void> {
  await fetch('/api/case-studies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(study),
  });
}

export async function deleteCaseStudy(id: string): Promise<void> {
  await fetch(`/api/case-studies?id=${id}`, { method: 'DELETE' });
}

export async function saveInquiry(inquiry: Partial<Inquiry>): Promise<void> {
  await fetch('/api/inquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiry),
  });
}

export async function deleteInquiry(id: string): Promise<void> {
  await fetch(`/api/inquiries?id=${id}`, { method: 'DELETE' });
}
