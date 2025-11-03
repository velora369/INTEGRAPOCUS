## Overview
This project is a single-page marketing website for Integra POCUS, a hands-on medical ultrasound (Point-of-Care Ultrasound) training course. Built with React and TypeScript, it features a modern, minimalist, and futuristic design. The landing page showcases course details, faculty, pricing, and contact information for an immersion event scheduled for November 29, 2025. The business vision is to effectively market this specialized medical training, reaching a professional audience and facilitating registrations.

## Recent Changes
- **November 3, 2025**: Fixed mobile responsiveness issue in pricing section CTAs. Buttons now display text in a single line on mobile devices using `whitespace-nowrap` and optimized spacing/font sizes.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
The frontend is built with React 18 and TypeScript, using Vite for tooling. Wouter handles client-side routing. The UI is constructed using Radix UI primitives and shadcn/ui components, styled with Tailwind CSS using custom design tokens and `class-variance-authority`. The design emphasizes a dark theme with blue/violet accents, gradient backgrounds with grain texture overlays, and a dual-font typography system using Bodoni Moda for headlines and NeueMontreal-Medium for body text and subheadlines. It features a modular component architecture (Header, Hero, Audience, Outcomes, Professors, Pricing, FAQ, Contact, Footer) and is fully responsive with a mobile-first approach. JSON-LD schema markup is included for SEO.

### Backend
A minimal Express.js server is used primarily for serving static files in production. Drizzle ORM is configured for PostgreSQL with a basic users table and Zod for schema validation, though currently unused, it is prepared for future expansion. In-memory storage is implemented as a placeholder.

### Key Architectural Decisions
- **Client-Side Rendering**: Single-page application approach.
- **Minimal Backend**: Express server primarily serves static files; database setup is for future scalability.
- **Design Constraints**: Minimalist, tech-forward aesthetic with dark backgrounds and glowing effects, avoiding specific brand imagery. Accessibility compliance (ARIA, AA contrast) is prioritized.
- **Scalability**: Modular components and an abstract storage interface allow for easy expansion and migration.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Primitives for accessible components.
- **shadcn/ui**: Component library.
- **Lucide React**: Iconography.
- **Embla Carousel**: For carousels.
- **React Hook Form**: Form handling.
- **React Day Picker**: Calendar components.

### Development Tools
- **Replit-specific plugins**.
- **TypeScript**: For type checking.
- **PostCSS with Autoprefixer**: For CSS processing.

### External Assets
- **Custom Fonts**: NeueMontreal-Bold, NeueMontreal-Medium, and NeueMontreal-Light (OTF format).
- **Professor Images**: Hosted on WordPress CDN.
- **Mascot Image**: mascote-integra-pocus.webp.

### Deployment Configuration
- Designed for **Replit deployment**.

### Communication Channels
- **WhatsApp**: For contact form submissions.
- **Instagram**: Social links.
- **Email**: Contact capability.