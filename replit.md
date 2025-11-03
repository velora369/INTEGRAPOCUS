# Integra POCUS Landing Page

## Overview
This project is a single-page marketing website for Integra POCUS, a hands-on medical ultrasound (Point-of-Care Ultrasound) training course. Built with React and TypeScript, it features a modern, minimalist, and futuristic design. The landing page showcases course details, faculty, pricing, and contact information for an immersion event scheduled for November 29, 2025. The business vision is to effectively market this specialized medical training, reaching a professional audience and facilitating registrations.

## User Preferences
Preferred communication style: Simple, everyday language.

## Recent Changes
- **November 3, 2025**:
  - **Mascot Update**:
    - Replaced mascot image to sem-fundo-pngggggg-mucrinha-hero.png (PNG version from WordPress CDN)
    - Maintained simple, clean animation: subtle scale on hover (1.05x) with smooth transition
    - Entrance animation: fade-in from right with scale effect
  - **Hero Section Button Animation Enhancements**:
    - Enhanced "Garantir minha vaga" button with more lively hover animation:
      - Added scale transform (1.05) combined with vertical lift (-3px) for dynamic effect
      - Implemented shimmer sweep effect using ::before pseudo-element with gradient animation
      - Enhanced glow with dual shadow layers (box-shadow with blur and outer glow)
      - Improved brightness filter from 1.08 to 1.12 for stronger visual feedback
      - Added elastic cubic-bezier easing (0.34, 1.56, 0.64, 1) for playful bounce effect
    - Improved "Falar no WhatsApp" button (outline style):
      - Enhanced base state with subtle background tint (rgba(255, 255, 255, 0.03)) always visible
      - Increased border thickness from 1px to 1.5px for better definition
      - Added subtle box-shadow for depth perception even in resting state
      - Implemented vertical lift animation (-2px) on hover with enhanced border glow
      - Maintains outline aesthetic throughout all states as requested
    - Added accessibility support with prefers-reduced-motion overrides for both buttons
    - All animations tested and architect-reviewed for performance and UX quality
  - **Typography System Overhaul for Improved Readability**:
    - Added NeueMontreal-Medium (font-weight 500) to typography system
    - Replaced all body text and subheadlines from NeueMontreal-Light to NeueMontreal-Medium for significantly better legibility
    - Updated default body font-weight from 300 to 500 across entire site
    - Maintained headline typography (Bodoni Moda) for brand consistency
    - All component text (cards, descriptions, labels, buttons) now use medium weight for easier reading
    - Improvement particularly important for sales conversion as users can now easily read course information
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
  - Footer newsletter button styling:
    - Removed rounded-full class from newsletter submit button (airplane icon)
    - Button now displays with standard rounded corners instead of circular shape
  - **Hero Section Layout Redesign**:
    - Downloaded mascot image from WordPress CDN and saved to attached_assets/mascote-integra-pocus.webp
    - Implemented two-column grid layout (lg:grid-cols-2) for desktop view
    - Restructured content hierarchy:
      - H1: "Integra POCUS" remains as main headline
      - Combined "Imersão Hands-on em POCUS" with full description into single paragraph with highlighted span
    - Added mascot to right column with animations (Framer Motion):
      - Visible on all screen sizes for consistency
      - Mobile: mascot appears below text content (stacked layout)
      - Desktop (lg+): mascot appears alongside text in right column
      - Implemented hover animations and entrance effects
    - Increased visual presence with larger padding (lg:py-40) and container width (max-w-7xl)
    - Ensured full responsive behavior across all breakpoints
    - Architect review confirmed: layout, responsiveness, hierarchy, and performance all meet requirements
  - **Hero Section Sub-headline Unification**:
    - Removed separate gradient-highlighted span for "Imersão Hands-on em POCUS"
    - Unified sub-headline into single continuous paragraph: "Imersão Hands-on em POCUS. Formação 100% presencial para integrar imagem e clínica no dia a dia: teoria objetiva em sala, estações práticas supervisionadas e checklists de decisão."
    - Simplified visual hierarchy by removing gradient effect and block display
    - Maintains consistent typography (font-body font-medium) throughout entire paragraph
    - Architect review confirmed: no layout, responsiveness, or accessibility issues
  - **Hero Headline Visual Impact Enhancement**:
    - Dramatically increased headline size from text-5xl md:text-6xl lg:text-7xl to text-6xl md:text-7xl lg:text-8xl xl:text-9xl for maximum visual impact
    - Created new vibrant gradient (.text-gradient-heading-impact) with saturated colors: #5BA3FF → #8B7DFF → #C08BFF → #E9A8FF
    - Added multi-layered glow effects with drop-shadow filters (30px and 60px blur radius) for dramatic depth
    - Implemented backdrop glow effect using ::before pseudo-element (40px blur radial gradient)
    - Moved shimmer bar from inline div to ::after pseudo-element for semantic HTML correctness
    - Enhanced entrance animation: increased duration from 0.9s to 1.2s, added blur-to-crisp effect (blur(10px) → blur(0px)), increased y-offset from 40 to 60
    - All visual effects implemented with CSS pseudo-elements to maintain accessible, semantic h1 structure (heading contains only text)
    - Added prefers-reduced-motion support for shimmer animation to respect user accessibility preferences
    - Responsive scaling maintains visual hierarchy across all breakpoints (mobile to 4K)
    - Architect review confirmed: HTML semantically correct, all effects functional, fully responsive, accessibility preserved

## System Architecture

### Frontend
The frontend is built with **React 18** and **TypeScript**, using **Vite** for tooling. **Wouter** handles client-side routing. The UI is constructed using **Radix UI** primitives and **shadcn/ui** components, styled with **Tailwind CSS** using custom design tokens and `class-variance-authority` for variant management. The design emphasizes a dark theme with blue/violet accents, gradient backgrounds with grain texture overlays, and a dual-font typography system using Bodoni Moda for headlines and NeueMontreal-Medium (previously Light) for body text and subheadlines. It features a modular component architecture (Header, Hero, Audience, Outcomes, Professors, Pricing, FAQ, Contact, Footer) and is fully responsive with a mobile-first approach. JSON-LD schema markup is included for SEO.

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
- **Custom Fonts**: NeueMontreal-Bold, NeueMontreal-Medium, and NeueMontreal-Light (OTF format) from `attached_assets/`.
- **Professor Images**: Hosted on WordPress CDN (`yungwizzeprod2.wordpress.com`).
- **Mascot Image**: mascote-integra-pocus.webp downloaded from WordPress CDN and stored in `attached_assets/` for Hero section.

### Deployment Configuration
- Designed for **Replit deployment**, with production builds outputting to the `dist/` directory.

### Communication Channels
- **WhatsApp**: For contact form submissions (+5593991674540).
- **Instagram**: Social links (@integra.pocus).
- **Email**: Contact capability.