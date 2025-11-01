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

### Outcomes Section Icon Updates (November 1, 2025)
**All icons in the "O que você vai desenvolver?" section updated with new custom SVG designs:**

1. **Learning Outcome Icons**
   - "Fundamentos aplicados de POCUS": Updated to ultrasound transducer icon (medical imaging device)
   - "Aplicações clínicas por sistemas": Updated to human body silhouette icon (body systems)
   - "Interpretação que importa": Updated to eye with focus icon (vision/interpretation)
   - "Da imagem à conduta": Updated to circular arrows/flow icon (decision-making process)
   - "Noções de procedimentos guiados": Updated to syringe/needle icon (medical procedures)

2. **Technical Implementation**
   - Replaced Lucide React icons with custom inline SVG components
   - Each icon is now a functional component returning SVG markup
   - Icons use `fill="currentColor"` for proper color inheritance
   - Responsive sizing: Icons scale from 56x56px (mobile) to 64x64px (tablet+)
   - Maintained gradient background containers with purple-to-blue gradient
   - Added proper padding (`p-3 sm:p-3.5`) to ensure icons fit well within gradient containers

3. **Responsive Design**
   - Icon containers scale from `w-14 h-14` on mobile to `w-16 h-16` on larger screens
   - SVGs use `w-full h-full` classes to fill container responsively
   - ViewBox dimensions preserved for each icon's optimal aspect ratio
   - Glass-morphism card effects maintained with hover elevation states
   - Gradient backgrounds maintain visual consistency with site theme

4. **Quality Assurance**
   - All 5 learning outcome icons successfully updated and tested
   - Icons display correctly across all breakpoints
   - Color inheritance works properly with gradient backgrounds
   - Maintains consistent visual language with the rest of the site
   - Icons properly align within their rounded square containers

### Audience Section Icon Updates (November 1, 2025)
**All icons in the "Para quem é esta imersão?" section updated with new custom SVG designs:**

1. **Target Audience Icons**
   - "Estudantes": Updated to open book icon (educational/academic symbol)
   - "Recém-formados e Residentes": Updated to graduation cap with people icon (recent graduates)
   - "Generalistas": Updated to first aid kit with cross icon (general practice medicine)
   - "Emergencistas": Updated to ambulance with emergency lights icon (emergency medical services)
   - "Especialistas": Updated to medical professional with stethoscope icon (specialized practice)

2. **Technical Implementation**
   - Replaced Lucide React icons with custom inline SVG components
   - Each icon is now a functional component returning SVG markup
   - Icons use `fill="currentColor"` for proper color inheritance from parent
   - Responsive sizing: Icons are 48x56px (mobile) and 56x56px (tablet+)
   - Maintained circular background with `bg-white/10` glass effect
   - Added proper padding (`p-2.5 sm:p-3`) to ensure icons fit well within containers

3. **Responsive Design**
   - Icon containers scale from `w-12 h-12` on mobile to `w-14 h-14` on larger screens
   - SVGs use `w-full h-full` classes to fill container responsively
   - ViewBox dimensions preserved for each icon's optimal aspect ratio
   - Glass-morphism card effects maintained with hover states

4. **Quality Assurance**
   - All 5 audience category icons successfully updated and tested
   - Icons display correctly across all breakpoints
   - Color inheritance works properly with dark theme
   - Maintains consistent visual language with the rest of the site

### Hero Section Icon Updates (November 1, 2025)
**All icons in the Hero section updated with new SVG designs:**

1. **Pill Icons (Feature Highlights)**
   - "Presencial — teoria + hands-on": Updated to presentation/teaching icon (person with presentation screen)
   - "Foco no raciocínio clínico": Updated to clipboard with checklist icon (medical documentation)
   - "Vagas limitadas": Updated to circle with exclamation mark icon (alert/urgency indicator)

2. **Event Info Card Icons**
   - "Data" (Date): Updated to calendar with clock icon (comprehensive date/time visualization)
   - "Local" (Location): Updated to map pin icon (geographical location marker)

3. **Technical Implementation**
   - All icons converted from stroke-based to fill-based SVG designs
   - Icons use `fill="currentColor"` for proper color inheritance
   - Maintained proper sizing: 20x20 for pills, 24x24 for event info
   - ViewBox adjusted per icon to maintain proper aspect ratios
   - Icons remain accessible with `aria-hidden="true"` attributes

4. **Quality Assurance**
   - Icons display correctly across all screen sizes
   - Color inheritance works properly with the glass-morphism pill design
   - Visual consistency maintained with the dark theme
   - All icons tested and verified in production build

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
**Header component updated to remain visible throughout entire page navigation with proper sizing:**

1. **Background Visibility Enhancement**
   - Changed header background from fully transparent (`bg-transparent`) to semi-transparent with blur (`bg-black/40 backdrop-blur-md border-b border-white/5`)
   - Header now always visible regardless of scroll position
   - When scrolled past 20px, applies `header-glass` class with darker background for increased contrast

2. **Technical Implementation**
   - Header maintains `fixed top-0 left-0 right-0 z-[9999]` positioning with inline `position: fixed` for reliability
   - Navigation padding increased from `py-4` to `py-6` for better visual presence and touch target sizing
   - Main content offset adjusted to `pt-20` to prevent content from being hidden behind fixed header
   - Smooth transition between initial state and scrolled state (`transition-all duration-300`)
   - Mobile hamburger menu and navigation remain accessible throughout entire page

3. **Height Consistency**
   - Header maintains consistent height in both default and scrolled states
   - CSS `header-glass` utility only modifies background, backdrop-filter, and border properties
   - No padding or height changes occur during scroll transitions
   - Vertical padding (`py-6`) applies equally in all states

4. **User Experience**
   - Logo and menu button consistently visible during scroll with adequate sizing
   - Improved navigation accessibility for users
   - Better touch targets for mobile interaction
   - Content properly spaced to avoid overlap with fixed header
   - Maintains visual hierarchy with appropriate z-index (z-9999)

### Enhanced Section Title Typography (October 31, 2025)
**Section title sizing increased for improved readability and visual hierarchy:**

1. **Typography Updates**
   - All main section titles now use responsive sizing: `text-3xl md:text-4xl lg:text-5xl`
   - Titles properly scale across breakpoints: 30px (mobile) → 36px (tablet) → 48px (desktop)
   - Maintains existing gradient effects and NeueMontreal-Bold font

2. **Affected Sections**
   - Para quem é essa imersão (Audience)
   - Professores (Professors)
   - O que você vai desenvolver (Outcomes)
   - Formato e Data (FormatDate)
   - Investimento (Pricing)
   - Perguntas Frequentes (FAQ)
   - Avisos e Atualizações (Notices)
   - Fale Conosco (Contact)

3. **Visual Hierarchy**
   - Section titles (h2): `text-3xl md:text-4xl lg:text-5xl` - Primary emphasis
   - Sub-headlines (p): `text-lg` - Secondary emphasis
   - Clear size differentiation ensures proper content hierarchy
   - Improved scannability and content structure

4. **Quality Assurance**
   - Architect-approved for production
   - Consistent implementation across all sections
   - Responsive behavior verified across breakpoints
   - No conflicts with existing gradient or font styling