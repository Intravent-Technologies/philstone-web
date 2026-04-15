# Philstone Consult Ltd - Website Specification

## 1. Concept & Vision

A premium, AI-forward website for Philstone Consult Ltd - a consulting firm specializing in Project Management, AI Transformation, Agile Delivery, and Process Optimization. The site conveys cutting-edge innovation, corporate authority, and premium quality. The feel is futuristic, sophisticated, and trustworthy - positioning Philstone as leaders in the AI-powered consulting space.

## 2. Design Language

### Aesthetic Direction
Premium AI-tech aesthetic with glassmorphism, subtle gradients, and futuristic elements. Clean layouts with dynamic visual interest, featuring AI-themed abstract visuals, sophisticated animations, and a premium dark mode feel with strategic light sections.

### Color Palette
- **Primary:** `#0f172a` (Dark Navy)
- **Secondary:** `#1e3a5f` (Deep Blue)
- **Tertiary:** `#1e40af` (Royal Blue)
- **Accent:** `#38bdf8` (Sky Blue)
- **Accent Secondary:** `#0ea5e9` (Light Blue)
- **Accent Gradient:** Linear from `#38bdf8` to `#0ea5e9`
- **Background Light:** `#f8fafc`
- **Background Dark:** `#0f172a`
- **Text Primary:** `#ffffff` (on dark), `#0f172a` (on light)
- **Text Secondary:** `#94a3b8`
- **Glass:** `rgba(255, 255, 255, 0.05)` with blur
- **Border Glow:** `rgba(56, 189, 248, 0.3)`

### Typography
- **Headings:** Space Grotesk (600, 700) - futuristic, tech-forward
- **Body:** Inter (400, 500, 600)
- **Fallback:** system-ui, sans-serif
- **Hero sizes:** 72px desktop, fluid scaling

### Spatial System
- Section padding: 120px vertical (desktop), 64px (mobile)
- Container max-width: 1280px
- Grid gap: 40px
- Component spacing: 32px

### Motion Philosophy
- **Fade-up on scroll:** opacity 0→1, translateY 40px→0, 800ms cubic-bezier(0.16, 1, 0.3, 1)
- **Stagger:** 100ms delay between elements
- **Button hover:** scale 1.05, glow effect, 200ms
- **Card hover:** translateY -8px, shadow increase, 300ms
- **Gradient animations:** subtle background position shift
- **Floating elements:** subtle up/down float animation
- **Particle/grid background:** animated grid pattern in hero

### Visual Assets
- **Logo:** https://philstoneconsulting.com/wp-content/uploads/2025/07/Philstone-Consulting-logo-1-1024x277.jpg
- **Icons:** Lucide React + custom SVG for AI elements
- **Backgrounds:** Animated gradient meshes, grid patterns, subtle particle effects
- **Images:** Abstract AI/tech imagery, professional consulting scenes

## 3. Layout & Structure

### Pages
1. **Home** - Hero, Services Overview (4 Pillars), Stats, Why Choose Us, Testimonials, CTA
2. **Services** - Detailed service offerings with CTD Framework
   - Consulting & Advisory
   - Training & Certification
   - AI Transformation
   - Agile & Scrum
3. **About** - Company story, vision, mission, values, presence
4. **Contact** - Contact form, office locations, contact info
5. **Blog** - Article listing with categories, featured posts, newsletter signup
6. **Case Studies** - Success stories with metrics, testimonials, industry filters
7. **Admin Panel** - Protected dashboard for managing content

### Navigation
- Fixed glassmorphism header with subtle border
- Logo left, nav links center, CTA button right
- Mobile: hamburger menu with slide-in drawer
- Links: Home, Services, Blog, About, Contact
- Subtle scroll-aware styling

### Footer
- Dark background with gradient accents
- Logo, tagline, quick links, contact info, social links
- Copyright notice

## 4. Features & Interactions

### Home Page
- **Hero Section:** Full-width gradient background with animated grid, headline with gradient text, subheadline, dual CTAs
- **Services Pillars:** 4-column grid showcasing core services with icon + title + description
- **Stats Section:** Large animated numbers with labels, horizontal layout
- **Why Choose Us:** Feature cards with hover effects
- **CTA Banner:** Gradient background with compelling copy

### Services Page
- **Hero:** Page title with breadcrumb, gradient background
- **Pillar Cards:** Detailed cards for Consulting, Training, AI Transformation, Agile & Scrum
- **Process:** C.T.D. Framework visualization
- **Features List:** Expandable service details

### About Page
- **Hero:** Page title with tagline
- **Vision/Mission:** Large typography with gradient accents
- **Values:** Icon cards with descriptions
- **Presence:** Location badges

### Contact Page
- **Hero:** Page title
- **Contact Form:** Glassmorphism card with modern inputs
- **Contact Info:** Side panel with phone, email, locations
- **Map placeholder:** Styled div with locations

### Blog Page
- **Hero:** Page title with breadcrumb
- **Featured Posts:** 2-column grid with large cards
- **All Posts:** Article list with sidebar (categories, newsletter, CTA)
- **Article Detail:** Full content with sidebar (author, related, share buttons)

### Case Studies Page
- **Hero:** Page title
- **Studies Grid:** 2-column grid with challenge preview and metrics
- **Case Study Detail:** Challenge, Solution, Results, Metrics Banner, Testimonial, CTA

### Admin Panel
- **Login Page:** Email/password form with demo credentials
- **Dashboard:** Sidebar navigation with tabs
- **Blog Management:** CRUD operations for posts
- **Case Studies Management:** CRUD operations for studies
- **Inquiries Management:** View/reply/delete contact submissions

### Global
- Smooth scroll with offset for fixed header
- Intersection Observer for scroll animations
- Responsive breakpoints: 640px, 768px, 1024px, 1280px
- Mobile-first approach

## 5. Component Inventory

### Button
- **Primary:** Yellow gradient background, dark text, glow on hover
- **Secondary:** Transparent with yellow border, yellow text
- **Ghost:** Transparent, subtle hover background
- **States:** Default, hover (glow + scale), disabled (opacity 0.5), loading (spinner)

### Card (Glass)
- Glass background with blur, subtle border
- Icon or image header
- Title, description
- Hover: lift + glow effect

### Input
- Dark background with subtle border
- Focus: yellow border glow
- Label above, error below
- States: default, focus, error, disabled

### Section Header
- Overline text (uppercase, yellow)
- Main heading (large, gradient optional)
- Subheading (muted)

### Navigation Link
- Subtle hover underline animation
- Active state indicator

## 6. Technical Approach

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules + CSS Variables
- **Icons:** Lucide React + custom SVG
- **Fonts:** Google Fonts (Space Grotesk, Inter)
- **Animations:** CSS animations + Intersection Observer API

### Architecture
```
/app
  /layout.tsx     # Root layout with fonts, metadata
  /page.tsx       # Home page
  /services/page.tsx
  /about/page.tsx
  /contact/page.tsx
/components
  /Header.tsx
  /Footer.tsx
  /AnimatedSection.tsx  # Scroll animation wrapper
/styles
  /globals.css    # CSS variables, resets, animations
  /*.module.css   # Component styles
```

### SEO
- Metadata with title, description for each page
- Semantic HTML throughout
- Open Graph tags
- Structured data ready

## 7. Content

### Company Info
- **Name:** Philstone Consulting
- **Tagline:** "Initiate. Effect. Sustain Change."
- **Headline:** Empowering Organisations to Thrive in a Complex World
- **Email:** info@philstoneconsulting.com
- **Phones:** +234 806 015 7984, +234 912 758 5625, +44 778 047 1287
- **Locations:** Lagos, Nigeria | Abuja, Nigeria | United Kingdom

### Services (4 Pillars)
1. **Consulting & Advisory** - Project Management, Change Management, Risk & Resilience, Org Development
2. **Training & Certification** - PMP, CAPM, PRINCE2, Lean Six Sigma, Agile/Scrum
3. **AI Transformation** - AI Strategy, Process Optimization, Intelligent Automation, Data Analytics
4. **Agile & Scrum** - Agile Transformation, Scrum Setup, Hybrid PM, Sprint Support

### Stats
- 2000+ Professionals Trained
- 30+ Organizations Served
- 4 Continents (Africa, Europe, Middle East)

### Core Values
- Excellence
- Professionalism
- Innovation
- Learning
- Sustainability
