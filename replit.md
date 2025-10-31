# Integra POCUS Landing Page

## Overview

This is a landing page for Integra POCUS, a hands-on medical ultrasound (Point-of-Care Ultrasound) training course. The application is a single-page marketing website built with React and TypeScript, featuring a modern, minimalist design with futuristic aesthetics. The page showcases course details, professors, pricing, and contact information for a medical training immersion event scheduled for November 29, 2025.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type safety
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing
- **TanStack Query** for data fetching and state management (though currently no API calls are implemented)

**UI Component System**
- **Radix UI** primitives for accessible, unstyled components
- **shadcn/ui** component library following the "New York" style variant
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** for component variant management

**Design System Implementation**
- Custom CSS variables defined in `client/src/index.css` for brand colors, surfaces, and effects
- Gradient backgrounds with grain texture overlays for visual depth
- **Dual-font typography system**: NeueMontreal-Bold (700) for h2 section titles, NeueMontreal-Light (300) for all secondary text
- Responsive design with mobile-first approach
- Dark theme with blue/violet accent colors (#3331C5 primary)

**Page Structure**
- Single-page application with smooth scrolling between sections
- Modular component architecture: Header, Hero, Audience, Outcomes, FormatDate, Professors, Pricing, Notices, FAQ, Contact, Footer
- Grain texture generation via canvas API for background effects
- JSON-LD schema markup for SEO optimization

### Backend Architecture

**Server Setup**
- **Express.js** server for production builds
- Development mode uses Vite's middleware for HMR (Hot Module Replacement)
- API routes prefixed with `/api` (currently minimal implementation)
- Static file serving in production from `dist/public`

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for user data
- Interface-based design (`IStorage`) allowing easy migration to database
- Currently includes basic user CRUD operations (unused in the landing page)

**Database Schema**
- Drizzle ORM configured for PostgreSQL
- Basic users table defined with username/password fields
- Schema validation with Zod
- Database migrations configured but not actively used for this static landing page

### External Dependencies

**Third-Party UI Libraries**
- Radix UI component primitives (accordion, dialog, dropdown, popover, etc.)
- Lucide React for iconography
- Embla Carousel for potential image carousels
- React Hook Form with resolvers for form handling
- React Day Picker for calendar components

**Development Tools**
- Replit-specific plugins for development environment
- TypeScript for type checking
- PostCSS with Autoprefixer for CSS processing

**External Assets**
- **Custom fonts**: NeueMontreal-Bold (OTF, weight 700) and NeueMontreal-Light (OTF, weight 300) from `attached_assets/`
- Professor images hosted on WordPress CDN (`yungwizzeprod2.wordpress.com`)
- Vite configured to allow external image domains

**Deployment Configuration**
- Designed for Replit deployment
- Production build outputs to `dist/` directory
- Environment-aware configuration (development vs production modes)

**Communication Channels**
- WhatsApp integration for contact form (phone: +5593991674540)
- Instagram social links (@integra.pocus)
- Email contact capability

### Key Architectural Decisions

**Client-Side Rendering**
- Single-page application approach for simplicity
- No server-side rendering required for this marketing page
- All content is static and bundled at build time

**Minimal Backend**
- Express server primarily serves static files in production
- Database schema exists but is not utilized (prepared for future expansion)
- No authentication or dynamic data currently needed

**Design Constraints**
- Explicitly avoid Butterfly brand imagery (competing product)
- Minimalist, tech-forward aesthetic with dark backgrounds and glowing effects
- Accessibility compliance with ARIA landmarks and semantic HTML
- AA contrast ratio compliance for text readability

**Scalability Considerations**
- Modular component structure allows easy addition of new sections
- Storage interface abstraction allows migration from in-memory to PostgreSQL without code changes
- Form submissions currently route to WhatsApp but could be extended to save to database

## Recent Changes

### Typography System Implementation (October 31, 2025)
**Complete dual-font typography system now production-ready:**

1. **Font Files Added**
   - `attached_assets/NeueMontreal-Bold_1761939090629.otf` (weight 700)
   - `attached_assets/NeueMontreal-Light_1761939885448.otf` (weight 300)

2. **CSS Configuration** (`client/src/index.css`)
   - @font-face declarations for both NeueMontreal weights with explicit font-weight values
   - CSS variable `--font-body` correctly points to 'NeueMontreal' family
   - Tailwind font utilities: `font-title` (NeueMontreal-Bold) and `font-body` (NeueMontreal-Light)

3. **Component Updates**
   - All h2 section titles use `font-title font-bold` class
   - All secondary text (paragraphs, buttons, links, inputs, badges, navigation) use `font-body font-light` class
   - Removed all conflicting font-weight classes (`font-medium`, `font-semibold`, `font-heading`)
   - Updated shadcn button component to use `font-body font-light` by default
   - Applied consistently across: Hero, Professors, Audience, Outcomes, EquipmentShowcase, Pricing, FAQ, Contact, FormatDate, Notices, Header, Footer

4. **Quality Assurance**
   - Architect-approved as production-ready
   - Zero font-weight conflicts remaining
   - Gradient effects on section titles preserved
   - Typography renders correctly across all components

**Performance Note**: Fonts are currently in OTF format. Future optimization: convert to woff2 format for improved web performance.

### Fixed Header Navigation (October 31, 2025)
**Header component updated to remain visible throughout entire page navigation:**

1. **Background Visibility Enhancement**
   - Changed header background from fully transparent (`bg-transparent`) to semi-transparent with blur (`bg-black/40 backdrop-blur-md border-b border-white/5`)
   - Header now always visible regardless of scroll position
   - When scrolled past 20px, applies `header-glass` class with darker background for increased contrast

2. **Technical Implementation**
   - Header maintains `fixed top-0 left-0 right-0 z-50` positioning
   - Smooth transition between initial state and scrolled state (`transition-all duration-300`)
   - Mobile hamburger menu and navigation remain accessible throughout entire page

3. **User Experience**
   - Logo and menu button consistently visible during scroll
   - Improved navigation accessibility for users
   - Maintains visual hierarchy with appropriate z-index (z-50)