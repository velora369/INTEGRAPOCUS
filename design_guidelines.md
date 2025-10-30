# Integra POCUS Landing Page Design Guidelines

## Brand Identity & Differentiation
- **Marca**: Integra POCUS
- **Proibido**: Ícones/formatos que remetam à marca Butterfly (nada de asas)
- **Símbolo permitido**: "mucura" abstrata/geométrica (se necessário)
- **Estética**: Minimalista, tecnológica, futurista, limpa. Sem poluição visual

## Color System (CSS Variables)
```
--cor-primaria: #3331C5
--preto: #000000
--branco: #FFFFFF
--azul-500: #4A48E0
--violeta-500: #7C6DFF
--lilac-500: #C08BFF
--rosa-500: #E38DFE
--sky-400: #3DA3FF
--laranja-400: #FF9A3C
--surface: rgba(255,255,255,0.05)
--surface-strong: rgba(255,255,255,0.08)
--border: rgba(255,255,255,0.12)
--text: #FFFFFF
--grain-opacity: 0.06
```
- Dark background (#000) with blue glows
- AA contrast compliance mandatory

## Typography
**Headings (H1-H3)**: Didot LP Display (fallback: Didot, Bodoni Moda, Georgia, serif)
**Body/UI**: Neue Montreal (fallback: Inter, Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial)

**Responsive Sizes (clamp)**:
- H1: 36-56px
- H2: 28-36px  
- H3: 22-28px
- Body: 16-18px

## Layout System
- **Grid**: 12 columns (desktop), 8 columns (tablet), 4 columns (mobile)
- **Spacing**: 8-point scale → 4/8/12/16/24/32/48/64px
- **Line length**: ≤70 characters for readability

## Background Gradients & Texture

**Gradient Mappings**:
- **Body**: `.bg-gradient-indigo-night` + grain texture
- **Hero**: `.bg-gradient-hero-waves` + grain texture
- **Audience/Outcomes sections**: `.bg-gradient-lavender` with glass cards
- **Decorative dividers**: `.bg-gradient-sunset-soft` (no text overlay)
- **Pricing/Registration**: Simple dark background (no sunset)
- **Footer**: Black with subtle blue radial, grain ≤0.04

**Grain Texture**: 
- Canvas-generated 128×128px noise overlay
- Applied via `.with-grain` class
- Opacity: 6% (var(--grain-opacity))

## Glass Morphism Cards
```
background: rgba(255,255,255,0.04)
backdrop-filter: blur(8px)
border: 1px solid rgba(255,255,255,0.10)
border-radius: 18px
box-shadow: 0 10px 30px rgba(0,0,0,0.35)
```

## Buttons
**Primary**:
- Background: var(--cor-primaria)
- Color: #fff
- Padding: 14px 22px
- Border-radius: 14px
- Font-weight: 600
- Hover: brightness(1.06)
- Active: brightness(0.98)
- Focus: 2px outline rgba(51,49,197,0.65), offset 2px

**Secondary (Outline)**:
- Background: transparent
- Color: #fff
- Border: 1px solid var(--border)

**Buttons on Hero images**: Blur background, no custom hover/active states

## Component Structure & Content

### Header
- Sticky, semi-transparent with backdrop blur
- Navigation: Início, Professores, Para quem é, O que você desenvolve, Formato e Data, Preço, FAQ, Avisos, Contato
- CTA "Inscrever-se" scrolls to Pricing

### Hero (with .bg-gradient-hero-waves)
- **H1**: "Ultrassom à beira-leito, do conceito à prática."
- **Subtitle**: "Imersão 100% presencial com teoria em sala e estações de prática hands-on para decisões mais rápidas e seguras."
- **Bullets**: Presencial — teoria + hands-on • Foco no raciocínio clínico • Vagas limitadas
- **Glass card**: Data: 29 de novembro de 2025; Local: [placeholder]
- **CTAs**: "Garantir minha vaga" (scroll to Pricing), "Falar no WhatsApp" (wa.me link)

### Audience (with .bg-gradient-lavender)
- Target: Estudantes (anos finais), médicos recém-formados, residentes, generalistas e especialistas
- 3-5 glass cards explaining who benefits

### Outcomes (5 blocks)
1. Fundamentos aplicados de POCUS
2. Aplicações clínicas por sistemas
3. Interpretação que importa
4. Da imagem à conduta
5. Noções de procedimentos guiados

### Format & Date (2-column layout)
- **Column A**: Formato (teoria presencial, hands-on presencial, integração)
- **Column B**: Agenda (29/11/2025, carga horária, local)
- Warning: "Vagas limitadas"

### Professors (side-by-side profiles, stack on mobile)
**Dr. Emanuel Esposito**: Nefrologista, 24+ anos experiência, Professor UEPA, Membro comitê POCUS SBN
**Dr. Luan Moraes**: Médico UEPA, Coord. Clínica Médica HRBA, Emergência/Trauma
- Use Next.js Image with remote URLs from yungwizzeprod2.wordpress.com

### Pricing
- **Pix**: R$ 2.497,00
- **Cartão**: 12x de R$ 267,42
- CTAs: "Garantir minha vaga" + "Falar no WhatsApp"
- Floating CTA on mobile

### Logos (Grid + Marquee)
- Same height containers (clamp 40-70px)
- object-fit: contain
- White versions preferred
- Respect prefers-reduced-motion (pause animations)

### Contact
- **WhatsApp buttons**: Maria (93-99167-4540), Vanessa (93-98116-0181)
- **Instagram**: @integra.pocus
- Simple contact form (nome, e-mail, mensagem)

### Footer
- Logo tipográfica "Integra POCUS"
- Condensed navigation
- Black with subtle blue radial glow

## Accessibility
- Semantic landmarks (ARIA)
- Visible focus states
- Minimum 44×44px touch targets
- prefers-reduced-motion support
- Descriptive alt text for all images
- Lazy loading with proper width/height

## Images
- **Hero section**: No specific hero image requested - use gradient backgrounds
- **Professor profiles**: Remote images via Next.js Image (yungwizzeprod2.wordpress.com)
- **Logos**: Grid/marquee of partner/sponsor logos in white versions

## No Emojis
Prohibited throughout entire site - use clean typography and icons only.