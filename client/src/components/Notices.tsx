import { Bell, Calendar, MapPin } from 'lucide-react';

export function Notices() {
  const notices = [
    {
      icon: Calendar,
      title: 'Atualização de Agenda',
      description: 'A programação detalhada do curso será divulgada em breve. Fique atento às atualizações.',
      date: 'Atualizado recentemente'
    },
    {
      icon: MapPin,
      title: 'Local em Definição',
      description: 'O local exato da imersão será confirmado nas próximas semanas. Todos os inscritos serão notificados.',
      date: 'Em breve'
    },
    {
      icon: Bell,
      title: 'Vagas Limitadas',
      description: 'Para garantir a qualidade do hands-on, o número de participantes é restrito. Garanta sua vaga o quanto antes.',
      date: 'Importante'
    }
  ];

  return (
    <section
      id="avisos"
      className="relative py-20 md:py-32 bg-gradient-indigo-night with-grain"
      role="region"
      aria-labelledby="notices-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="notices-heading" className="text-gradient-heading mb-6 font-title">
            Avisos e Atualizações
          </h2>
          <p className="text-lg text-white/80">
            Fique por dentro das últimas novidades sobre a imersão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {notices.map((notice, index) => {
            const Icon = notice.icon;
            return (
              <div
                key={index}
                className="card-glass p-6"
                data-testid={`card-notice-${index}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">
                    {notice.date}
                  </p>
                </div>
                <h3 className="text-xl font-secondary font-light text-white mb-3">
                  {notice.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {notice.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
