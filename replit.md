# Integra POCUS Landing Page

## Overview
This project is a single-page marketing website for Integra POCUS, a hands-on medical ultrasound (Point-of-Care Ultrasound) training course. Built with React and TypeScript, it features a modern, minimalist, and futuristic design. The landing page showcases course details, faculty, pricing, and contact information for an immersion event scheduled for November 29, 2025. The business vision is to effectively market this specialized medical training, reaching a professional audience and facilitating registrations.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes
- **November 3, 2025**: Increased font sizes across key sections for improved readability, including:
  - "O que você vai desenvolver?" (Outcomes)
  - "Conheça o Equipamento Usado nas Aulas" (EquipmentShowcase)
  - "Equipe e alunos" (Audience)
  - "Formato e Data" (FormatDate)
  - "Investimento" (Pricing)
  - "Perguntas Frequentes" (FAQ)
  - "Avisos e Atualizações" (Notices)
  - "Fale Conosco" (Contact)
  - All heading, subheading, and body text sizes were proportionally increased while maintaining visual hierarchy

## System Architecture

### Frontend
The frontend is built with **React 18** and **TypeScript**, using **Vite** for tooling. **Wouter** handles client-side routing. The UI is constructed using **Radix UI** primitives and **shadcn/ui** components, styled with **Tailwind CSS** using custom design tokens and `class-variance-authority` for variant management. The design emphasizes a dark theme with blue/violet accents, gradient backgrounds with grain texture overlays, and a dual-font typography system using NeueMontreal-Bold for titles and NeueMontreal-Light for body text. It features a modular component architecture (Header, Hero, Audience, Outcomes, Professors, Pricing, FAQ, Contact, Footer) and is fully responsive with a mobile-first approach. JSON-LD schema markup is included for SEO.

### Backend
A minimal **Express.js** server is used primarily for serving static files in production. While **Drizzle ORM** is configured for PostgreSQL with a basic users table and Zod for schema validation, these are currently unused for this static landing page but prepared for future expansion. In-memory storage is implemented as a placeholder.

### Key Architectural Decisions
- **Client-Side Rendering**: Single-page application approach, as no server-side rendering is required.
- **Minimal Backend**: Express server primarily serves static files; database setup is for future scalability.
- **Design Constraints**: Avoidance of specific brand imagery (Butterfly), focus on a minimalist, tech-forward aesthetic with dark backgrounds and glowing effects. Accessibility compliance (ARIA, AA contrast) is prioritized.
- **Scalability**: Modular components and an abstract storage interface allow for easy expansion and migration.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Primitives for accessible components (accordion, dialog, dropdown, etc.).
- **shadcn/ui**: Component library.
- **Lucide React**: Iconography.
- **Embla Carousel**: For potential image carousels.
- **React Hook Form**: Form handling.
- **React Day Picker**: Calendar components.

### Development Tools
- **Replit-specific plugins**.
- **TypeScript**: For type checking.
- **PostCSS with Autoprefixer**: For CSS processing.

### External Assets
- **Custom Fonts**: NeueMontreal-Bold and NeueMontreal-Light (OTF format) from `attached_assets/`.
- **Professor Images**: Hosted on WordPress CDN (`yungwizzeprod2.wordpress.com`).

### Deployment Configuration
- Designed for **Replit deployment**, with production builds outputting to the `dist/` directory.

### Communication Channels
- **WhatsApp**: For contact form submissions (+5593991674540).
- **Instagram**: Social links (@integra.pocus).
- **Email**: Contact capability.