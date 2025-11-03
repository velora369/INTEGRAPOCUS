import { motion } from 'framer-motion';

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className={className}>
    <g fill="currentColor">
      <path fillRule="evenodd" d="M12 21a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm8-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm-18 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2z" clipRule="evenodd"/>
      <path d="M36 32.5a1 1 0 1 0-2 0v2.914l1.293 1.293a1 1 0 0 0 1.414-1.414L36 34.586z"/>
      <path fillRule="evenodd" d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h10V7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.99 6.99 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7 7 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7 7 0 0 1-.29-2m12 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0" clipRule="evenodd"/>
    </g>
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" fillRule="evenodd" d="M13.45 20.281c2.672-3.119 6.05-7.063 6.05-10.61C19.5 5.435 16.142 2 12 2S4.5 5.435 4.5 9.671c0 3.547 3.378 7.491 6.05 10.61c.52.608 1.014 1.183 1.45 1.719c.436-.536.93-1.111 1.45-1.719M12 12a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5" clipRule="evenodd"/>
  </svg>
);

const WarningIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className={className}>
    <path fill="currentColor" fillRule="evenodd" d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.403 42H7.599a1 1 0 0 1-.9-1.437zM22 20a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zm1.967 14a1.966 1.966 0 0 0 0 3.933h.067a1.966 1.966 0 1 0 0-3.933z" clipRule="evenodd"/>
  </svg>
);

export function Notices() {
  const notices = [
    {
      icon: CalendarIcon,
      title: 'Atualização de Agenda',
      description: 'A programação detalhada do curso será divulgada em breve. Fique atento às atualizações.',
      date: 'Atualizado recentemente'
    },
    {
      icon: LocationIcon,
      title: 'Local Confirmado',
      description: 'O endereço fica na clínica Integrativa Med Odonto, Rua Rosa Vermelha, número 763, Aeroporto Velho. Entre Av Sergio Henn e Tv. Dália.',
      date: 'Confirmado'
    },
    {
      icon: WarningIcon,
      title: 'Vagas Limitadas',
      description: 'Para garantir a qualidade do hands-on, o número de participantes é restrito a 9 alunos. Garanta sua vaga o quanto antes.',
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
          <h2 id="notices-heading" className="text-4xl md:text-5xl lg:text-6xl text-gradient-heading mb-6 font-title font-bold">
            Avisos e Atualizações
          </h2>
          <p className="text-xl text-white/80 font-body font-medium">
            Fique por dentro das últimas novidades sobre a imersão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {notices.map((notice, index) => {
            const Icon = notice.icon;
            return (
              <motion.div
                key={index}
                className="card-glass p-6"
                data-testid={`card-notice-${index}`}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                variants={{
                  rest: { 
                    y: 0, 
                    scale: 1,
                    boxShadow: "0 4px 20px rgba(124, 109, 255, 0.1)"
                  },
                  hover: { 
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 12px 40px rgba(124, 109, 255, 0.25), 0 0 30px rgba(61, 163, 255, 0.15)",
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  },
                  tap: { 
                    scale: 0.98,
                    transition: { 
                      duration: 0.1,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0"
                    variants={{
                      rest: { scale: 1, rotate: 0 },
                      hover: { 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { 
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <p className="text-xs text-white/50 uppercase tracking-wide font-body font-medium">
                    {notice.date}
                  </p>
                </div>
                <h3 className="text-2xl text-white mb-3 font-body font-medium">
                  {notice.title}
                </h3>
                <p className="text-base text-white/70 leading-relaxed font-body font-medium">
                  {notice.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
