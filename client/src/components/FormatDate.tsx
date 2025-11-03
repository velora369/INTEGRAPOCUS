import { MapPin } from 'lucide-react';

export function FormatDate() {
  return (
    <section
      id="formato"
      className="relative py-20 md:py-32 bg-white"
      role="region"
      aria-labelledby="format-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="format-heading" className="text-4xl md:text-5xl lg:text-6xl text-gradient-heading mb-6 font-title font-bold">
            Formato e Data
          </h2>
          <p className="text-xl text-slate-700 font-body font-light">
            Uma experiência imersiva que combina teoria aplicada com prática intensiva hands-on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Format Column */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 border border-purple-100 shadow-lg">
            <h3 className="text-3xl text-slate-800 font-body font-bold mb-6">Formato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-lg text-slate-800 mb-1 font-body font-light">Teoria presencial</p>
                  <p className="text-base text-slate-600 font-body font-light">
                    Conceitos fundamentais e aplicações clínicas apresentados de forma clara e objetiva.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-lg text-slate-800 mb-1 font-body font-light">Hands-on presencial</p>
                  <p className="text-base text-slate-600 font-body font-light">
                    Estações práticas com equipamentos profissionais e supervisão direta dos instrutores.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-lg text-slate-800 mb-1 font-body font-light">Integração imagem + clínica + decisão</p>
                  <p className="text-base text-slate-600 font-body font-light">
                    Aprenda a transformar achados ultrassonográficos em condutas que fazem diferença.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agenda Column */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 shadow-lg">
            <h3 className="text-3xl text-slate-800 font-body font-bold mb-6">Agenda</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-base text-slate-600 mb-1 font-body font-light">Data da Imersão</p>
                  <p className="text-slate-800 text-xl font-body font-light">29 de novembro de 2025</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-base text-slate-600 mb-1 font-body font-light">Carga Horária</p>
                  <p className="text-slate-800 text-lg font-body font-light">8 horas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div className="w-full">
                  <p className="text-base text-slate-600 mb-1 font-body font-light">Local</p>
                  <p className="text-slate-800 text-lg font-body font-light mb-3">Clínica Integrativa Med Odonto, Rua Rosa Vermelha, nº 763, Aeroporto Velho. Entre Av Sergio Henn e Tv. Dália</p>
                  <a
                    href="https://maps.app.goo.gl/F7NXF3mNzsWbx8qeA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors font-body font-light"
                    data-testid="link-map"
                  >
                    <MapPin className="w-4 h-4" />
                    Ver no Mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="p-6 flex items-center gap-4 rounded-2xl bg-orange-50 border border-orange-200 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
              <g fill="none" stroke="#f15151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <g>
                  <path strokeDasharray="4" strokeDashoffset="4" d="M12 3v2">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"/>
                  </path>
                  <path fill="#f15151" fillOpacity="0" strokeDasharray="28" strokeDashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8">
                    <animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"/>
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"/>
                  </path>
                  <animateTransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"/>
                </g>
                <path strokeDasharray="8" strokeDashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"/>
                  <animateTransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"/>
                </path>
                <path strokeDasharray="6" strokeDashoffset="6" d="M22 6v4">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="6;0"/>
                  <animate attributeName="stroke-width" begin="2.3s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"/>
                </path>
                <path strokeDasharray="2" strokeDashoffset="2" d="M22 14v0.01">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"/>
                  <animate attributeName="stroke-width" begin="2.6s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"/>
                </path>
              </g>
            </svg>
            <p className="text-slate-800 font-body font-light">
              Vagas limitadas! Garanta sua participação o quanto antes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
