'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogOut, FileText, Briefcase, Mail, Plus, Edit2, Trash2, Eye, Send, X, CheckCircle, Users, Star } from 'lucide-react';
import { 
  usePartners, useReviews, useBlogPosts, useCaseStudies, useInquiries,
  savePartner, deletePartner as apiDeletePartner,
  saveReview, deleteReview as apiDeleteReview,
  saveBlogPost, deleteBlogPost as apiDeleteBlogPost,
  saveCaseStudy, deleteCaseStudy as apiDeleteCaseStudy,
  saveInquiry, deleteInquiry as apiDeleteInquiry,
  Partner, Review, BlogPost, CaseStudy, Inquiry
} from '@/hooks/useContent';
import styles from './page.module.css';

type Tab = 'blog' | 'case-studies' | 'inquiries' | 'partners' | 'reviews';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('blog');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'blog' | 'case-study' | 'partner' | 'review' | null>(null);
  const [editingItem, setEditingItem] = useState<BlogPost | CaseStudy | Partner | Review | null>(null);
  const [replyingTo, setReplyingTo] = useState<Inquiry | null>(null);
  const [replyMessage, setReplyMessage] = useState('');

  const { partners, refreshPartners } = usePartners();
  const { reviews, refreshReviews } = useReviews();
  const { blogPosts, refreshBlogPosts } = useBlogPosts();
  const { caseStudies, refreshCaseStudies } = useCaseStudies();
  const { inquiries, refreshInquiries } = useInquiries();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (isLoggedIn !== 'true') {
      router.push('/admin');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    router.push('/admin');
  };

  const openAddModal = (type: 'blog' | 'case-study' | 'partner' | 'review') => {
    setModalType(type);
    setEditingItem(null);
    setShowModal(true);
  };

  const openEditModal = (type: 'blog' | 'case-study' | 'partner' | 'review', item: BlogPost | CaseStudy | Partner | Review) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setModalType(null);
  };

  const generateSlug = (title: string): string => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleSaveBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    
    const post = {
      ...(editingItem as BlogPost),
      id: editingItem ? (editingItem as BlogPost).id : undefined,
      title,
      slug: editingItem ? (editingItem as BlogPost).slug : generateSlug(title),
      excerpt: formData.get('excerpt') as string,
      content: formData.get('content') as string,
      category: formData.get('category') as string,
      author: formData.get('author') as string || 'Philstone Team',
      readTime: formData.get('readTime') as string || '5 min read',
      image: formData.get('image') as string || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      featured: formData.get('featured') === 'on',
    };

    await saveBlogPost(post);
    await refreshBlogPosts();
    closeModal();
  };

  const handleSaveCaseStudy = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const metricsStr = formData.get('metrics') as string;
    const metrics = metricsStr.split(',').map(m => {
      const [label, value] = m.split(':').map(s => s.trim());
      return { label: label || '', value: value || '' };
    }).filter(m => m.label && m.value);

    const study = {
      ...(editingItem as CaseStudy),
      id: editingItem ? (editingItem as CaseStudy).id : undefined,
      title,
      slug: editingItem ? (editingItem as CaseStudy).slug : generateSlug(title),
      client: formData.get('client') as string,
      industry: formData.get('industry') as string,
      challenge: formData.get('challenge') as string,
      solution: formData.get('solution') as string,
      results: formData.get('results') as string,
      metrics,
      image: formData.get('image') as string || 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      services: (formData.get('services') as string || '').split(',').map(s => s.trim()).filter(Boolean),
    };

    await saveCaseStudy(study);
    await refreshCaseStudies();
    closeModal();
  };

  const handleSavePartner = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const partner = {
      ...(editingItem as Partner),
      id: editingItem ? (editingItem as Partner).id : undefined,
      name: formData.get('name') as string,
      logo: formData.get('logo') as string,
      website: formData.get('website') as string || '#',
    };

    await savePartner(partner);
    await refreshPartners();
    closeModal();
  };

  const handleSaveReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const review = {
      ...(editingItem as Review),
      id: editingItem ? (editingItem as Review).id : undefined,
      quote: formData.get('quote') as string,
      rating: parseInt(formData.get('rating') as string) || 5,
    };

    await saveReview(review);
    await refreshReviews();
    closeModal();
  };

  const deleteBlogPost = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      await apiDeleteBlogPost(id);
      await refreshBlogPosts();
    }
  };

  const deleteCaseStudy = async (id: string) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      await apiDeleteCaseStudy(id);
      await refreshCaseStudies();
    }
  };

  const deletePartner = async (id: string) => {
    if (confirm('Are you sure you want to delete this partner?')) {
      await apiDeletePartner(id);
      await refreshPartners();
    }
  };

  const deleteReview = async (id: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      await apiDeleteReview(id);
      await refreshReviews();
    }
  };

  const openReplyModal = (inquiry: Inquiry) => {
    setReplyingTo(inquiry);
    setReplyMessage('');
  };

  const closeReplyModal = () => {
    setReplyingTo(null);
    setReplyMessage('');
  };

  const sendReply = async () => {
    if (!replyingTo || !replyMessage.trim()) return;
    
    const updatedInquiry = {
      ...replyingTo,
      status: 'replied' as const,
      replies: [...(replyingTo.replies || []), replyMessage],
    };
    
    await saveInquiry(updatedInquiry);
    await refreshInquiries();
    closeReplyModal();
  };

  const deleteInquiry = async (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      await apiDeleteInquiry(id);
      await refreshInquiries();
    }
  };

  const getSubjectLabel = (subject: string) => {
    const labels: Record<string, string> = {
      consulting: 'Consulting',
      training: 'Training',
      ai: 'AI Transformation',
      agile: 'Agile & Scrum',
      partnership: 'Partnership',
      general: 'General Enquiry'
    };
    return labels[subject] || subject;
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('Project')) return styles.tag;
    if (category.includes('AI')) return styles.tagBlue;
    if (category.includes('Process')) return styles.tagOrange;
    if (category.includes('Agile')) return styles.tagGreen;
    return styles.tag;
  };

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Admin Panel</h2>
          <p>Philstone Consulting</p>
        </div>
        
        <nav className={styles.nav}>
          <button className={`${styles.navItem} ${activeTab === 'blog' ? styles.active : ''}`} onClick={() => setActiveTab('blog')}>
            <FileText size={20} />
            Blog Posts
            <span className={styles.count}>{blogPosts.length}</span>
          </button>
          <button className={`${styles.navItem} ${activeTab === 'case-studies' ? styles.active : ''}`} onClick={() => setActiveTab('case-studies')}>
            <Briefcase size={20} />
            Case Studies
            <span className={styles.count}>{caseStudies.length}</span>
          </button>
          <button className={`${styles.navItem} ${activeTab === 'partners' ? styles.active : ''}`} onClick={() => setActiveTab('partners')}>
            <Users size={20} />
            Partners
            <span className={styles.count}>{partners.length}</span>
          </button>
          <button className={`${styles.navItem} ${activeTab === 'reviews' ? styles.active : ''}`} onClick={() => setActiveTab('reviews')}>
            <Star size={20} />
            Reviews
            <span className={styles.count}>{reviews.length}</span>
          </button>
          <button className={`${styles.navItem} ${activeTab === 'inquiries' ? styles.active : ''}`} onClick={() => setActiveTab('inquiries')}>
            <Mail size={20} />
            Inquiries
            {inquiries.filter(i => i.status === 'new').length > 0 && (
              <span className={styles.badge}>{inquiries.filter(i => i.status === 'new').length}</span>
            )}
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
          <Link href="/" target="_blank" className={styles.viewSiteBtn}>
            <Eye size={18} />
            View Website
          </Link>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <main className={styles.main}>
        {activeTab === 'blog' && (
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>Blog Posts</h1>
              <button className={styles.addBtn} onClick={() => openAddModal('blog')}>
                <Plus size={18} /> Add New Post
              </button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogPosts.map((post) => (
                    <tr key={post.id}>
                      <td className={styles.titleCell}>{post.title}</td>
                      <td><span className={getCategoryColor(post.category)}>{post.category}</span></td>
                      <td>{post.date}</td>
                      <td>{post.featured ? <CheckCircle size={18} className={styles.checkIcon} /> : '-'}</td>
                      <td>
                        <div className={styles.actionGroup}>
                          <a href={`/blog/${post.slug}`} target="_blank" className={styles.actionBtn} title="View"><Eye size={16} /></a>
                          <button className={styles.actionBtn} onClick={() => openEditModal('blog', post)} title="Edit"><Edit2 size={16} /></button>
                          <button className={`${styles.actionBtn} ${styles.deleteAction}`} onClick={() => deleteBlogPost(post.id)} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'case-studies' && (
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>Case Studies</h1>
              <button className={styles.addBtn} onClick={() => openAddModal('case-study')}>
                <Plus size={18} /> Add New Case Study
              </button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Industry</th>
                    <th>Client</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudies.map((study) => (
                    <tr key={study.id}>
                      <td className={styles.titleCell}>{study.title}</td>
                      <td>{study.industry}</td>
                      <td>{study.client}</td>
                      <td>
                        <div className={styles.actionGroup}>
                          <a href={`/case-studies/${study.slug}`} target="_blank" className={styles.actionBtn} title="View"><Eye size={16} /></a>
                          <button className={styles.actionBtn} onClick={() => openEditModal('case-study', study)} title="Edit"><Edit2 size={16} /></button>
                          <button className={`${styles.actionBtn} ${styles.deleteAction}`} onClick={() => deleteCaseStudy(study.id)} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'partners' && (
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>Partners</h1>
              <button className={styles.addBtn} onClick={() => openAddModal('partner')}>
                <Plus size={18} /> Add New Partner
              </button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Website</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner) => (
                    <tr key={partner.id}>
                      <td><img src={partner.logo} alt={partner.name} className={styles.partnerLogo} /></td>
                      <td className={styles.titleCell}>{partner.name}</td>
                      <td><a href={partner.website} target="_blank" className={styles.link}>{partner.website}</a></td>
                      <td>
                        <div className={styles.actionGroup}>
                          <button className={styles.actionBtn} onClick={() => openEditModal('partner', partner)} title="Edit"><Edit2 size={16} /></button>
                          <button className={`${styles.actionBtn} ${styles.deleteAction}`} onClick={() => deletePartner(partner.id)} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>Customer Reviews</h1>
              <button className={styles.addBtn} onClick={() => openAddModal('review')}>
                <Plus size={18} /> Add New Review
              </button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Quote</th>
                    <th>Rating</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review.id}>
                      <td className={styles.reviewCell}>{review.quote.substring(0, 100)}...</td>
                      <td>
                        <div className={styles.ratingStars}>
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="#f6ad55" color="#f6ad55" />
                          ))}
                        </div>
                      </td>
                      <td>{review.date}</td>
                      <td>
                        <div className={styles.actionGroup}>
                          <button className={styles.actionBtn} onClick={() => openEditModal('review', review)} title="Edit"><Edit2 size={16} /></button>
                          <button className={`${styles.actionBtn} ${styles.deleteAction}`} onClick={() => deleteReview(review.id)} title="Delete"><Trash2 size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'inquiries' && (
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>Contact Inquiries</h1>
              <span className={styles.count}>{inquiries.length} total</span>
            </div>
            <div className={styles.inquiriesList}>
              {inquiries.map((inquiry) => (
                <div key={inquiry.id} className={`${styles.inquiryCard} ${inquiry.status === 'new' ? styles.new : ''}`}>
                  <div className={styles.inquiryHeader}>
                    <div className={styles.inquiryInfo}>
                      <h3>{inquiry.name}</h3>
                      <p>{inquiry.organisation}</p>
                    </div>
                    <div className={styles.inquiryMeta}>
                      <span className={`${styles.statusBadge} ${styles[inquiry.status]}`}>{inquiry.status}</span>
                      <span className={styles.date}>{inquiry.date}</span>
                    </div>
                  </div>
                  <div className={styles.inquiryBody}>
                    <div className={styles.contactDetails}>
                      <p><strong>Email:</strong> <a href={`mailto:${inquiry.email}`}>{inquiry.email}</a></p>
                      <p><strong>Phone:</strong> <a href={`tel:${inquiry.phone}`}>{inquiry.phone}</a></p>
                      <p><strong>Subject:</strong> {getSubjectLabel(inquiry.subject)}</p>
                    </div>
                    <div className={styles.messageBox}>
                      <p className={styles.messageLabel}>Message:</p>
                      <p className={styles.message}>{inquiry.message}</p>
                    </div>
                    {inquiry.replies && inquiry.replies.length > 0 && (
                      <div className={styles.repliesSection}>
                        <p className={styles.messageLabel}>Your Replies:</p>
                        {inquiry.replies.map((reply, idx) => (
                          <div key={idx} className={styles.replyBubble}>
                            <Send size={14} />
                            <p>{reply}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={styles.inquiryActions}>
                    {inquiry.status !== 'replied' && (
                      <button className={styles.replyBtn} onClick={() => openReplyModal(inquiry)}>
                        <Mail size={16} /> Reply to {inquiry.name}
                      </button>
                    )}
                    <button className={styles.deleteBtn} onClick={() => deleteInquiry(inquiry.id)}>
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {showModal && modalType === 'blog' && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal}><X size={20} /></button>
            <h2>{editingItem ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
            <form onSubmit={handleSaveBlog} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Title *</label>
                <input type="text" name="title" defaultValue={editingItem ? (editingItem as BlogPost).title : ''} required placeholder="Enter post title" />
              </div>
              <div className={styles.formGroup}>
                <label>Excerpt *</label>
                <textarea name="excerpt" rows={2} defaultValue={editingItem ? (editingItem as BlogPost).excerpt : ''} required placeholder="Brief description" />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Category *</label>
                  <select name="category" defaultValue={editingItem ? (editingItem as BlogPost).category : 'Project Management'} required>
                    <option value="Project Management">Project Management</option>
                    <option value="Agile & Scrum">Agile & Scrum</option>
                    <option value="AI & Digital">AI & Digital</option>
                    <option value="Process Improvement">Process Improvement</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Author</label>
                  <input type="text" name="author" defaultValue={editingItem ? (editingItem as BlogPost).author : 'Philstone Team'} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Read Time</label>
                  <input type="text" name="readTime" defaultValue={editingItem ? (editingItem as BlogPost).readTime : '5 min read'} />
                </div>
                <div className={styles.formGroup}>
                  <label>Image URL</label>
                  <input type="url" name="image" defaultValue={editingItem ? (editingItem as BlogPost).image : ''} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Content *</label>
                <textarea name="content" rows={10} defaultValue={editingItem ? (editingItem as BlogPost).content : ''} required />
              </div>
              <div className={styles.checkboxGroup}>
                <input type="checkbox" name="featured" id="featured" defaultChecked={editingItem ? (editingItem as BlogPost).featured : false} />
                <label htmlFor="featured">Featured post</label>
              </div>
              <div className={styles.formActions}>
                <button type="button" className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                <button type="submit" className={styles.saveBtn}>{editingItem ? 'Update Post' : 'Create Post'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showModal && modalType === 'case-study' && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal}><X size={20} /></button>
            <h2>{editingItem ? 'Edit Case Study' : 'Add New Case Study'}</h2>
            <form onSubmit={handleSaveCaseStudy} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Title *</label>
                <input type="text" name="title" defaultValue={editingItem ? (editingItem as CaseStudy).title : ''} required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Client *</label>
                  <input type="text" name="client" defaultValue={editingItem ? (editingItem as CaseStudy).client : ''} required />
                </div>
                <div className={styles.formGroup}>
                  <label>Industry *</label>
                  <input type="text" name="industry" defaultValue={editingItem ? (editingItem as CaseStudy).industry : ''} required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Challenge *</label>
                <textarea name="challenge" rows={3} defaultValue={editingItem ? (editingItem as CaseStudy).challenge : ''} required />
              </div>
              <div className={styles.formGroup}>
                <label>Solution *</label>
                <textarea name="solution" rows={3} defaultValue={editingItem ? (editingItem as CaseStudy).solution : ''} required />
              </div>
              <div className={styles.formGroup}>
                <label>Results *</label>
                <textarea name="results" rows={2} defaultValue={editingItem ? (editingItem as CaseStudy).results : ''} required />
              </div>
              <div className={styles.formGroup}>
                <label>Metrics (comma-separated: Label: Value)</label>
                <input type="text" name="metrics" defaultValue={editingItem ? (editingItem as CaseStudy).metrics.map(m => `${m.label}: ${m.value}`).join(', ') : ''} />
              </div>
              <div className={styles.formGroup}>
                <label>Services (comma-separated)</label>
                <input type="text" name="services" defaultValue={editingItem ? (editingItem as CaseStudy).services.join(', ') : ''} />
              </div>
              <div className={styles.formGroup}>
                <label>Image URL</label>
                <input type="url" name="image" defaultValue={editingItem ? (editingItem as CaseStudy).image : ''} />
              </div>
              <div className={styles.formActions}>
                <button type="button" className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                <button type="submit" className={styles.saveBtn}>{editingItem ? 'Update Case Study' : 'Create Case Study'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showModal && modalType === 'partner' && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal}><X size={20} /></button>
            <h2>{editingItem ? 'Edit Partner' : 'Add New Partner'}</h2>
            <form onSubmit={handleSavePartner} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Partner Name *</label>
                <input type="text" name="name" defaultValue={editingItem ? (editingItem as Partner).name : ''} required placeholder="e.g., Access Bank" />
              </div>
              <div className={styles.formGroup}>
                <label>Logo URL *</label>
                <input type="url" name="logo" defaultValue={editingItem ? (editingItem as Partner).logo : ''} required placeholder="https://..." />
              </div>
              <div className={styles.formGroup}>
                <label>Website URL</label>
                <input type="url" name="website" defaultValue={editingItem ? (editingItem as Partner).website : '#'} placeholder="https://..." />
              </div>
              <div className={styles.formActions}>
                <button type="button" className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                <button type="submit" className={styles.saveBtn}>{editingItem ? 'Update Partner' : 'Add Partner'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showModal && modalType === 'review' && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal}><X size={20} /></button>
            <h2>{editingItem ? 'Edit Review' : 'Add New Review'}</h2>
            <form onSubmit={handleSaveReview} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Quote *</label>
                <textarea name="quote" rows={4} defaultValue={editingItem ? (editingItem as Review).quote : ''} required placeholder="Customer testimonial..." />
              </div>
              <div className={styles.formGroup}>
                <label>Rating (1-5)</label>
                <select name="rating" defaultValue={editingItem ? (editingItem as Review).rating : 5}>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>
              <div className={styles.formActions}>
                <button type="button" className={styles.cancelBtn} onClick={closeModal}>Cancel</button>
                <button type="submit" className={styles.saveBtn}>{editingItem ? 'Update Review' : 'Add Review'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {replyingTo && (
        <div className={styles.modal} onClick={closeReplyModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeReplyModal}><X size={20} /></button>
            <h2>Reply to {replyingTo.name}</h2>
            <div className={styles.replyHeader}>
              <p><strong>To:</strong> {replyingTo.email}</p>
              <p><strong>Subject:</strong> Re: {getSubjectLabel(replyingTo.subject)} Inquiry</p>
            </div>
            <div className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Your Message</label>
                <textarea rows={8} placeholder="Type your reply here..." value={replyMessage} onChange={(e) => setReplyMessage(e.target.value)} />
              </div>
              <div className={styles.formActions}>
                <button className={styles.cancelBtn} onClick={closeReplyModal}>Cancel</button>
                <button className={styles.sendReplyBtn} onClick={sendReply} disabled={!replyMessage.trim()}>
                  <Send size={16} /> Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
