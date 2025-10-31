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
              className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-gradient-heading mb-6 whitespace-nowrap"
              data-testid="text-equipment-title"
            >
              Conheça o Equipamento Usado nas Aulas
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
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-blue-400"
                  aria-hidden="true"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
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
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-purple-400"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
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
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-green-400"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
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
