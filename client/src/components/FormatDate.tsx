import { BookOpen, Users, Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

export function FormatDate() {
  return (
    <section
      id="formato"
      className="relative py-20 md:py-32 bg-gradient-indigo-night with-grain"
      role="region"
      aria-labelledby="format-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="format-heading" className="text-3xl md:text-4xl lg:text-5xl text-gradient-heading mb-6 font-title font-bold">
            Formato e Data
          </h2>
          <p className="text-lg text-white/80 font-body font-light">
            Uma experiência imersiva que combina teoria aplicada com prática intensiva hands-on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Format Column */}
          <div className="card-glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-white/80" />
              <h3 className="text-2xl text-white font-body font-light">Formato</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-white mb-1 font-body font-light">Teoria presencial</p>
                  <p className="text-sm text-white/70 font-body font-light">
                    Conceitos fundamentais e aplicações clínicas apresentados de forma clara e objetiva.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-white mb-1 font-body font-light">Hands-on presencial</p>
                  <p className="text-sm text-white/70 font-body font-light">
                    Estações práticas com equipamentos profissionais e supervisão direta dos instrutores.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-white mb-1 font-body font-light">Integração imagem + clínica + decisão</p>
                  <p className="text-sm text-white/70 font-body font-light">
                    Aprenda a transformar achados ultrassonográficos em condutas que fazem diferença.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agenda Column */}
          <div className="card-glass p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-white/80" />
              <h3 className="text-2xl text-white font-body font-light">Agenda</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/60 mb-1 font-body font-light">Data da Imersão</p>
                  <p className="text-white text-lg font-body font-light">29 de novembro de 2025</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/60 mb-1 font-body font-light">Carga Horária</p>
                  <p className="text-white font-body font-light">A definir</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-white/60 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/60 mb-1 font-body font-light">Local</p>
                  <p className="text-white font-body font-light">A definir</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="card-glass p-6 flex items-center gap-4 bg-[#FF9A3C]/10">
            <AlertCircle className="w-6 h-6 text-[#FF9A3C] flex-shrink-0" />
            <p className="text-white font-body font-light">
              Vagas limitadas! Garanta sua participação o quanto antes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
