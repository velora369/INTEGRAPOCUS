// Custom SVG Icons
function SmartphoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 19H7V5h10z"/>
    </svg>
  );
}

function MagnifyingGlassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/>
      <path fill="currentColor" d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"/>
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
      <path fill="currentColor" fillRule="evenodd" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M10 17H5v-2h5zm0-4H5v-2h5zm0-4H5V7h5zm4.82 6L12 12.16l1.41-1.41l1.41 1.42L17.99 9l1.42 1.42z"/>
    </svg>
  );
}

export function EquipmentShowcase() {
  return (
    <section
      id="equipamento"
      className="relative py-20 md:py-28 lg:py-32 with-grain overflow-hidden bg-gradient-indigo-night"
      role="region"
      aria-label="Equipamento utilizado"
    >
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6" data-testid="badge-equipment-eyebrow">
              <div 
                className="px-4 py-2 rounded-full backdrop-blur-md border border-white/10 bg-white/5"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <span className="text-white/85 text-sm tracking-wide font-body font-light">
                  Tecnologia de ponta
                </span>
              </div>
            </div>

            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-gradient-heading mb-6"
              data-testid="text-equipment-title"
            >
              Conheça o Equipamento Usado <span className="whitespace-nowrap">nas Aulas</span>
            </h2>

            <p 
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-body font-light"
              data-testid="text-equipment-subtitle"
            >
              Utilizamos os aparelhos da <strong className="text-white font-body font-light">Butterfly</strong>, um ultrassom portátil revolucionário da Butterfly Network que conecta diretamente ao seu smartphone ou tablet, permitindo exames de alta qualidade em qualquer lugar.
            </p>
          </div>

          {/* 3D Model Container */}
          <div className="relative" data-testid="container-equipment-3d">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
              
              {/* 3D Embed */}
              <div className="aspect-[16/10] w-full">
                <iframe 
                  title="Butterfly IQ - Modelo 3D Interativo" 
                  className="w-full h-full"
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; fullscreen; xr-spatial-tracking" 
                  src="https://sketchfab.com/models/c8b00e87bc5f4b12a3e8f853f7f10ac9/embed?autostart=1&ui_theme=dark"
                  data-testid="iframe-equipment-3d"
                />
              </div>

              {/* Attribution Footer */}
              <div className="px-4 py-3 bg-black/30 backdrop-blur-sm border-t border-white/5">
                <p className="text-xs text-white/50 text-center font-body font-light">
                  <a 
                    href="https://sketchfab.com/3d-models/butterfly-iq-c8b00e87bc5f4b12a3e8f853f7f10ac9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-body font-light"
                    data-testid="link-equipment-sketchfab"
                  >
                    Butterfly IQ
                  </a>
                  {' '}por{' '}
                  <a 
                    href="https://sketchfab.com/dcwaltman" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 transition-colors font-body font-light"
                  >
                    Daniel Waltman
                  </a>
                  {' '}no Sketchfab
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12" data-testid="container-equipment-features">
            
            {/* Feature 1: Portátil */}
            <div className="card-glass p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 p-3 sm:p-3.5">
                <div className="text-white w-full h-full">
                  <SmartphoneIcon />
                </div>
              </div>
              <h3 className="text-lg text-white mb-2 font-body font-light" data-testid="text-feature-portable-title">
                Ultra Portátil
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-body font-light" data-testid="text-feature-portable-description">
                Conecta diretamente ao smartphone ou tablet, permitindo mobilidade total durante as práticas.
              </p>
            </div>

            {/* Feature 2: Qualidade */}
            <div className="card-glass p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 p-3 sm:p-3.5">
                <div className="text-white w-full h-full">
                  <MagnifyingGlassIcon />
                </div>
              </div>
              <h3 className="text-lg text-white mb-2 font-body font-light" data-testid="text-feature-quality-title">
                Alta Resolução
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-body font-light" data-testid="text-feature-quality-description">
                Imagens de qualidade clínica com tecnologia de última geração para diagnósticos precisos.
              </p>
            </div>

            {/* Feature 3: Fácil Uso */}
            <div className="card-glass p-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 p-3 sm:p-3.5">
                <div className="text-white w-full h-full">
                  <ChecklistIcon />
                </div>
              </div>
              <h3 className="text-lg text-white mb-2 font-body font-light" data-testid="text-feature-easy-title">
                Intuitivo
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-body font-light" data-testid="text-feature-easy-description">
                Interface amigável que facilita o aprendizado e permite foco total na técnica de exame.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-white/70 text-sm mb-4 font-body font-light" data-testid="text-equipment-footer">
              Durante o curso, você terá acesso hands-on a múltiplos aparelhos Butterfly
            </p>
            <a
              href="#preco"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-body font-light"
              data-testid="link-equipment-cta"
            >
              Garantir minha vaga
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
