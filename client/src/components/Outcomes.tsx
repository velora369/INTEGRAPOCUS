import { BookOpen, Activity, Eye, ArrowRight, Syringe } from 'lucide-react';

export function Outcomes() {
  const outcomes = [
    {
      icon: BookOpen,
      title: 'Fundamentos aplicados de POCUS',
      description: 'Princípios físicos do ultrassom, ajustes de equipamento, otimização de imagem e artefatos — tudo com foco prático para uso imediato.'
    },
    {
      icon: Activity,
      title: 'Aplicações clínicas por sistemas',
      description: 'Avaliação cardíaca, pulmonar, abdominal, vascular e renal. Protocolos rápidos (FAST, BLUE, RUSH) para cenários de emergência e beira-leito.'
    },
    {
      icon: Eye,
      title: 'Interpretação que importa',
      description: 'Reconhecer achados normais vs. patológicos, identificar sinais de alarme e integrar a imagem ao contexto clínico do paciente.'
    },
    {
      icon: ArrowRight,
      title: 'Da imagem à conduta',
      description: 'Como o POCUS muda decisões: indicação de volume, suporte ventilatório, diagnóstico de choque, avaliação de resposta terapêutica e muito mais.'
    },
    {
      icon: Syringe,
      title: 'Noções de procedimentos guiados',
      description: 'Punção venosa central, toracocentese, paracentese e outras intervenções guiadas por ultrassom com mais segurança e taxa de sucesso.'
    }
  ];

  return (
    <section
      id="outcomes"
      className="relative py-20 md:py-32 bg-gradient-lavender with-grain"
      role="region"
      aria-labelledby="outcomes-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="outcomes-heading" className="text-gradient-heading mb-6 font-heading">
            O que você vai desenvolver?
          </h2>
          <p className="text-lg text-white/80">
            Habilidades práticas e teóricas para aplicar o ultrassom point-of-care 
            com confiança em qualquer cenário clínico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            return (
              <div
                key={index}
                className="card-glass p-6 group hover-elevate active-elevate-2"
                data-testid={`card-outcome-${index}`}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C6DFF]/20 to-[#3DA3FF]/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-heading text-white mb-3">
                  {outcome.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
