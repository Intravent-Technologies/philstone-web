-- Run this in Supabase SQL Editor to create all tables

-- Partners table
CREATE TABLE IF NOT EXISTS partners (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  logo TEXT NOT NULL,
  website TEXT DEFAULT '#',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  date TEXT DEFAULT CURRENT_DATE::text,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog Posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT DEFAULT 'Project Management',
  author TEXT DEFAULT 'Philstone Team',
  read_time TEXT DEFAULT '5 min read',
  image TEXT DEFAULT 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Case Studies table
CREATE TABLE IF NOT EXISTS case_studies (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  industry TEXT NOT NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  metrics JSONB DEFAULT '[]'::jsonb,
  image TEXT DEFAULT 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
  services TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT DEFAULT '',
  organisation TEXT DEFAULT '',
  subject TEXT DEFAULT 'general',
  message TEXT NOT NULL,
  date TEXT DEFAULT CURRENT_DATE::text,
  status TEXT DEFAULT 'new',
  replies TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default data for partners
INSERT INTO partners (id, name, logo, website) VALUES
  ('1', 'International Mega Standard', 'https://via.placeholder.com/180x80/1a365d/ffffff?text=IMS', '#'),
  ('2', 'Q Power X2 Module', 'https://via.placeholder.com/180x80/3182ce/ffffff?text=Q-POWER', '#'),
  ('3', 'Access Bank', 'https://via.placeholder.com/180x80/ed8936/ffffff?text=ACCESS', '#'),
  ('4', 'KPMG', 'https://via.placeholder.com/180x80/1a365d/ffffff?text=KPMG', '#'),
  ('5', 'PWC', 'https://via.placeholder.com/180x80/3182ce/ffffff?text=PwC', '#'),
  ('6', 'Shell Nigeria', 'https://via.placeholder.com/180x80/ed8936/ffffff?text=SHELL', '#')
ON CONFLICT DO NOTHING;

-- Insert default data for reviews
INSERT INTO reviews (id, quote, rating, date) VALUES
  ('1', 'Philstone Consulting transformed our project management capabilities. Their team''s expertise in PMP training and Agile implementation helped us achieve results we never thought possible.', 5, '2026-03-15'),
  ('2', 'The AI transformation program delivered exceptional results. Our process efficiency improved by 60% within the first quarter.', 5, '2026-02-28'),
  ('3', 'Outstanding training programs. Our team is now certified and confident in applying Lean Six Sigma methodologies.', 5, '2026-02-10'),
  ('4', 'Working with Philstone was a game-changer for our organisation. Their consulting expertise helped us navigate complex challenges.', 5, '2026-01-25')
ON CONFLICT DO NOTHING;

-- Insert default data for blog posts
INSERT INTO blog_posts (id, slug, title, excerpt, content, category, author, read_time, image, featured) VALUES
  ('1', 'pmp-certification-2026', 'Why PMP Certification Still Matters in 2026', 'Discover why the PMP certification remains the most valued credential globally.', 'Full article content goes here...', 'Project Management', 'Philstone Team', '8 min read', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', TRUE),
  ('2', 'ai-project-management', 'How AI Is Changing Project Management Forever', 'Explore how artificial intelligence is transforming project management.', 'Full article content goes here...', 'AI & Digital', 'Philstone Team', '10 min read', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', TRUE),
  ('3', 'lean-six-sigma-africa', 'Lean Six Sigma in Africa', 'Driving efficiency in emerging markets.', 'Full article content goes here...', 'Process Improvement', 'Philstone Team', '7 min read', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', FALSE)
ON CONFLICT DO NOTHING;

-- Insert default data for case studies
INSERT INTO case_studies (id, slug, title, client, industry, challenge, solution, results, metrics, services) VALUES
  ('1', 'banking-digital-transformation', 'Digital Transformation for Nigerian Bank', 'Major Nigerian Bank', 'Banking & Finance', 'Manual loan processing took 14+ days with high error rates.', 'Implemented digital transformation with AI-powered automation.', 'Processing time reduced to 3 days.', '[{"label": "Processing Time", "value": "14 days → 3 days"}, {"label": "Error Rate", "value": "15% → 2%"}]'::jsonb, ARRAY['AI Transformation', 'Process Improvement']),
  ('2', 'healthcare-pmo-setup', 'PMO Setup for Healthcare Network', 'West African Healthcare', 'Healthcare', 'Inconsistent project delivery with 60% budget overruns.', 'Established PMO with standardized frameworks.', 'On-time delivery improved to 85%.', '[{"label": "On-Time Delivery", "value": "40% → 85%"}, {"label": "PMs Certified", "value": "40+"}]'::jsonb, ARRAY['PMO Setup', 'Training']),
  ('3', 'telecom-agile-transformation', 'Agile Transformation for Telecom', 'Regional Telecom Provider', 'Telecommunications', '8-12 month development cycles.', 'Comprehensive Agile transformation with SAFe.', 'Time-to-market reduced to 6 weeks.', '[{"label": "Time-to-Market", "value": "12 months → 6 weeks"}, {"label": "Product Releases", "value": "4x annually"}]'::jsonb, ARRAY['Agile Transformation', 'Scrum Training'])
ON CONFLICT DO NOTHING;

-- Insert default data for inquiries
INSERT INTO inquiries (id, name, email, phone, organisation, subject, message, date, status, replies) VALUES
  ('1', 'Adebayo Johnson', 'adebayo@company.com', '+234 801 234 5678', 'TechCorp Nigeria', 'consulting', 'We need help with PMO setup for our organization.', '2026-04-14', 'new', ARRAY[]::text[]),
  ('2', 'Chioma Okonkwo', 'chioma@enterprise.ng', '+234 902 345 6789', 'Enterprise Solutions Ltd', 'training', 'Interested in PMP training for our team of 15.', '2026-04-13', 'read', ARRAY[]::text[]),
  ('3', 'Emmanuel Nwosu', 'emmanuel@financegroup.com', '+234 813 456 7890', 'Finance Group PLC', 'ai', 'Looking to implement AI for our process automation.', '2026-04-12', 'replied', ARRAY['Thank you for your interest.'])
ON CONFLICT DO NOTHING;

-- Enable Row Level Security (optional - for security)
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Make tables public readable/writable
CREATE POLICY "Allow all reads" ON partners FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON partners FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates" ON partners FOR UPDATE USING (true);
CREATE POLICY "Allow all deletes" ON partners FOR DELETE USING (true);

CREATE POLICY "Allow all reads" ON reviews FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates" ON reviews FOR UPDATE USING (true);
CREATE POLICY "Allow all deletes" ON reviews FOR DELETE USING (true);

CREATE POLICY "Allow all reads" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON blog_posts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates" ON blog_posts FOR UPDATE USING (true);
CREATE POLICY "Allow all deletes" ON blog_posts FOR DELETE USING (true);

CREATE POLICY "Allow all reads" ON case_studies FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON case_studies FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates" ON case_studies FOR UPDATE USING (true);
CREATE POLICY "Allow all deletes" ON case_studies FOR DELETE USING (true);

CREATE POLICY "Allow all reads" ON inquiries FOR SELECT USING (true);
CREATE POLICY "Allow all inserts" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates" ON inquiries FOR UPDATE USING (true);
CREATE POLICY "Allow all deletes" ON inquiries FOR DELETE USING (true);
