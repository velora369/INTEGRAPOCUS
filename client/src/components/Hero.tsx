export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[clamp(68vh,82vh,92vh)] flex items-center bg-gradient-hero-waves with-grain overflow-hidden"
      role="region"
      aria-label="Hero principal"
    >
      <div className="container-custom py-16 md:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-[60fr_40fr] gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* LEFT COLUMN - Content */}
          <div className="relative z-10 order-2 lg:order-1">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center mb-6" data-testid="badge-hero-eyebrow">
              <div 
                className="px-4 py-2 rounded-full backdrop-blur-md border border-white/10 bg-white/5"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <span className="text-white/85 text-sm font-medium tracking-wide">
                  Imersão presencial — Santarém, PA — 29 NOV 2025
                </span>
              </div>
            </div>

            {/* H1 */}
            <h1 
              className="text-white mb-4 font-heading relative inline-block"
              data-testid="text-hero-title"
            >
              Integra POCUS — Imersão Hands-on em POCUS
              
              {/* Shimmer Bar */}
              <div 
                className="hero-shimmer-bar"
                aria-hidden="true"
              />
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-prose leading-relaxed"
              data-testid="text-hero-subtitle"
              style={{ maxWidth: '70ch' }}
            >
              Formação 100% presencial para integrar imagem e clínica no dia a dia: teoria objetiva em sala, estações práticas supervisionadas e checklists de decisão.
            </p>

            {/* Pills - Proof Points */}
            <div className="flex flex-wrap gap-3 mb-10" data-testid="container-hero-pills">
              {/* Pill 1: Presencial */}
              <div className="pill-glass">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <polyline points="9 14 11 16 15 12"/>
                </svg>
                <span>Presencial — teoria + hands-on</span>
              </div>

              {/* Pill 2: Raciocínio clínico */}
              <div className="pill-glass">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span>Foco no raciocínio clínico</span>
              </div>

              {/* Pill 3: Vagas limitadas */}
              <div className="pill-glass">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>Vagas limitadas</span>
              </div>
            </div>

            {/* Glass Card - Event Info */}
            <div className="card-glass p-6 mb-10 max-w-2xl" data-testid="card-hero-info">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 text-white/70"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Data</p>
                    <p className="text-white font-medium" data-testid="text-event-date">29 de novembro de 2025</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 text-white/70"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Local</p>
                    <p className="text-white font-medium" data-testid="text-event-location">Santarém, Pará</p>
                  </div>
                </div>
              </div>

              {/* Link to pricing */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <a
                  href="#preco"
                  className="text-white/80 hover:text-white text-sm font-medium underline-offset-4 hover:underline transition-all inline-block"
                  data-testid="link-hero-pricing"
                >
                  Ver valores e formas de pagamento →
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4" data-testid="container-hero-ctas">
              <button
                onClick={() => scrollToSection('preco')}
                className="btn-primary-hero text-lg px-8"
                data-testid="button-hero-main-cta"
              >
                Garantir minha vaga
              </button>
              <a
                href="https://wa.me/5593991674540?text=Olá! Gostaria de saber mais sobre a Imersão Integra POCUS."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8"
                data-testid="button-hero-whatsapp"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - 3D Model */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            <div className="w-full max-w-md mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                <div className="aspect-[4/3] w-full">
                  <iframe 
                    title="Butterfly IQ - Modelo 3D Interativo" 
                    className="w-full h-full"
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; fullscreen; xr-spatial-tracking" 
                    src="https://sketchfab.com/models/c8b00e87bc5f4b12a3e8f853f7f10ac9/embed?autostart=1&ui_theme=dark"
                  />
                </div>
                <div className="px-3 py-2 bg-black/30 backdrop-blur-sm border-t border-white/5">
                  <p className="text-xs text-white/50 text-center">
                    <a 
                      href="https://sketchfab.com/3d-models/butterfly-iq-c8b00e87bc5f4b12a3e8f853f7f10ac9" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Butterfly IQ
                    </a>
                    {' '}por{' '}
                    <a 
                      href="https://sketchfab.com/dcwaltman" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Daniel Waltman
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
