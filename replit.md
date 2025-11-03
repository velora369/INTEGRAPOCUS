# Integra POCUS Landing Page

## Overview
This project is a single-page marketing website for Integra POCUS, a hands-on medical ultrasound (Point-of-Care Ultrasound) training course. Built with React and TypeScript, it features a modern, minimalist, and futuristic design. The landing page showcases course details, faculty, pricing, and contact information for an immersion event scheduled for November 29, 2025. The business vision is to effectively market this specialized medical training, reaching a professional audience and facilitating registrations.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes
- **November 3, 2025**: 
  - Increased font sizes across key sections for improved readability, including:
    - "O que você vai desenvolver?" (Outcomes)
    - "Conheça o Equipamento Usado nas Aulas" (EquipmentShowcase)
    - "Equipe e alunos" (Audience)
    - "Formato e Data" (FormatDate)
    - "Investimento" (Pricing)
    - "Perguntas Frequentes" (FAQ)
    - "Avisos e Atualizações" (Notices)
    - "Fale Conosco" (Contact)
    - All heading, subheading, and body text sizes were proportionally increased while maintaining visual hierarchy
  - Updated FAQ section:
    - Corrected first question answer to say "aplicações mais avançadas" (added "mais")
    - Added new question about certificate of completion with professional, detailed answer
  - Improved pricing badge visibility:
    - Changed "Economize 22%" badge font from light to semibold for better readability
    - Updated badge background color to #65D071 with dark green text (#0B4020) for better visibility
    - Changed "Melhor oferta" badge to solid #65D071 background with dark green text (#0B4020) in semibold font
    - Ensured WCAG AA accessibility compliance with 6.8:1 contrast ratio on both badges
  - Corrected credit card installment value from R$ 267,80 to R$ 267,41
  - Standardized Footer typography to match site-wide patterns:
    - Updated all headings from font-heading to font-title
    - Added font-body font-light to all body text for consistency with NeueMontreal typography
  - Footer improvements:
    - Removed event date "29 de novembro de 2025" from contact information section
    - Fixed newsletter email input airplane icon alignment using `transform -translate-y-1/2` for perfect vertical centering
  - Pricing component checkout integration:
    - Updated both "Garantir minha vaga no PIX" and "Garantir minha vaga no cartão" buttons to redirect to checkout URL
    - Both buttons now open https://seguro.checkoutintegrapocus.com.br/checkout-white-7117/?add-to-cart=7117 in new tab
    - Changed cartão button from internal scroll link to external checkout link for unified conversion funnel
  - Hero section typography enhancement:
    - Increased "Integra POCUS" title size from default to text-5xl md:text-7xl lg:text-8xl
    - Created stronger visual hierarchy with main brand title significantly larger than subtitle
    - Maintains responsive scaling across all breakpoints for optimal readability
  - Updated "Vagas Limitadas" notice card:
    - Changed description to specify "restrito a 9 alunos" for clarity on participant limit
  - Hero section responsiveness fixes:
    - Reduced "Integra POCUS" title from text-8xl to text-7xl on large screens for better proportions
    - Removed overflow-hidden from section to prevent clipping of descender letters (like "g")
    - Increased vertical padding to py-20 md:py-28 lg:py-36 for better spacing
    - Added pb-2 to h1 element to ensure descenders display properly
    - Fixed issue where "g" in "Integra" was being cut off at bottom
  - FAQ section responsiveness fixes:
    - Added pt-2 pb-2 to FAQ heading container for vertical breathing room
    - Increased h2 padding from pb-2 to pb-3 for better descender accommodation
    - Increased h2 margin-bottom from mb-6 to mb-8 for improved vertical spacing
    - Fixed issue where "g" in "Perguntas Frequentes" was being clipped

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