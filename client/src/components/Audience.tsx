import { motion } from 'framer-motion';

export function Audience() {
  const audiences = [
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48">
          <g fill="currentColor">
            <path d="M36.99 29.003c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zm-9.612-2.077c3.895-1.59 5.943-1.961 9.612-1.923l.02-2c-3.95-.041-6.26.386-10.388 2.071zm9.612-5.923c-3.67-.038-5.717.332-9.612 1.923l-.756-1.852c4.127-1.685 6.438-2.112 10.388-2.071zM34.5 16v-3h2v3zM31 14v3h2v-3zm-3.5 4v-3h2v3zM11.01 29.003c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zm9.612-2.077c-3.895-1.59-5.942-1.961-9.612-1.923l-.02-2c3.95-.041 6.26.386 10.388 2.071zm-9.612-5.923c3.67-.038 5.717.332 9.612 1.923l.756-1.852c-4.127-1.685-6.438-2.112-10.388-2.071zM13.5 16v-3h-2v3zm3.5-2v3h-2v-3zm3.5 4v-3h-2v3z"/>
            <path fillRule="evenodd" d="M42 10.984q.609.134 1.243.287a.99.99 0 0 1 .757.965v25.539c0 .633-.583 1.105-1.204.987c-6.213-1.185-10.4-1.268-16.122-.4a3 3 0 0 1-5.348 0c-5.721-.868-9.91-.785-16.122.4A1.01 1.01 0 0 1 4 37.775V12.237a.99.99 0 0 1 .757-.966q.634-.153 1.243-.287v-.46c0-.885.589-1.694 1.484-1.92c6.15-1.546 10.628.092 15.757 2.477q.375.077.759.16q.384-.083.76-.16c5.128-2.385 9.606-4.023 15.756-2.476A1.97 1.97 0 0 1 42 10.524zm-2 22.984V10.537c-5.658-1.415-9.683.135-15 2.64v23.242l.003.002l.002.001l.009.003h.003l.006-.002c4.909-2.222 9.191-3.483 14.923-2.437a.06.06 0 0 0 .047-.011zm-17.003 2.453l.003-.002V13.177c-5.317-2.504-9.342-4.055-15-2.64v23.431l.007.007a.06.06 0 0 0 .048.012c5.73-1.047 10.013.214 14.922 2.435l.008.003h.001z" clipRule="evenodd"/>
          </g>
        </svg>
      ),
      title: 'Estudantes',
      description: 'Acadêmicos dos anos finais que buscam aprendizado diferencial na formação e domínio de uma ferramenta diagnóstica moderna.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18 10.5V6l-2.11 1.06A4 4 0 0 1 12 12a4 4 0 0 1-3.89-4.94L5 5.5L12 2l7 3.5v5zM12 9l-2-1c0 1.1.9 2 2 2s2-.9 2-2zm2.75-3.58L12.16 4.1L9.47 5.47l2.6 1.32zM12 13c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-3 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"/>
        </svg>
      ),
      title: 'Recém-formados e Residentes',
      description: 'Médicos em início de carreira que desejam incorporar o POCUS em sua prática clínica diária com segurança.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path fill="currentColor" d="M10 3L8 5v2H5C3.85 7 3.12 8 3 9L2 19c-.12 1 .54 2 2 2h16c1.46 0 2.12-1 2-2L21 9c-.12-1-.94-2-2-2h-3V5l-2-2zm0 2h4v2h-4zm1 5h2v3h3v2h-3v3h-2v-3H8v-2h3z"/>
        </svg>
      ),
      title: 'Generalistas',
      description: 'Clínicos gerais e médicos de família que querem diagnosticar com mais agilidade no consultório ou ambulatório.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <g fill="currentColor">
            <path d="M18 3a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0zM7.5 12v-1.5H6v-2h1.5V7h2v1.5H11v2H9.5V12z"/>
            <path fillRule="evenodd" d="M8.95 19q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5H2V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4h1V8a1 1 0 1 1 2 0v1h.092a2 2 0 0 1 1.728.992l1.908 3.27A2 2 0 0 1 22 14.27V19h-2.05q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5zM4 17v-2h9v2zm9-4H4V6h9zm2 4v-2h5v2zm0-4h4.259l-1.167-2H15zm2.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-11 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clipRule="evenodd"/>
            <path d="m21.207 5.207l-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.061a1 1 0 1 1 1.415 1.414M22 9a1 1 0 1 0 0-2h-1.5a1 1 0 1 0 0 2z"/>
          </g>
        </svg>
      ),
      title: 'Emergencistas',
      description: 'Profissionais de pronto atendimento e UTI que necessitam de decisões rápidas e precisas à beira-leito e utilizam o POCUS para guiar procedimentos com segurança.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-3.38 1.922l.374-.549a7 7 0 0 0 2.895.627h.223a7 7 0 0 0 2.505-.464l.263.386c.122.18.245.53.327.973c.08.427.102.832.087 1.055a.8.8 0 0 0 .04.3h-.378a.76.76 0 0 0-.688.439l-.691 1.48a.76.76 0 0 0 .689 1.081H15.4v-1.5h1.25v1.5h1.084a.76.76 0 0 0 .689-1.081l-.69-1.48a.76.76 0 0 0-.69-.439h-.293a.8.8 0 0 0 .04-.2c.026-.378-.012-.912-.108-1.43c-.093-.502-.262-1.101-.562-1.542l-.049-.072a2 2 0 0 1 .152-.006A4.777 4.777 0 0 1 21 16.777V21H3v-4.223c0-2.52 1.95-4.584 4.424-4.764l-.044.065c-.591.869-.681 1.946-.608 2.81c.025.297.07.59.132.866a1.5 1.5 0 1 0 1.47-.302a5 5 0 0 1-.108-.69c-.06-.706.04-1.379.354-1.84"/>
        </svg>
      ),
      title: 'Especialistas',
      description: 'Médicos de diversas especialidades que buscam integrar o ultrassom como extensão do exame físico em sua área.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48">
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M24 6c-2.806 0-6.238 1.026-8.264 1.731c-.988.344-1.483 1.417-1.156 2.41l2.148 6.521a8 8 0 1 0 14.544 0l2.148-6.52c.327-.994-.168-2.067-1.156-2.41C30.237 7.025 26.806 6 24 6m-5.62 12.425c3.757-1.543 7.483-1.543 11.24 0q.09.037.186.056a6 6 0 1 1-11.613 0q.096-.019.187-.056M25 11h2v2h-2v2h-2v-2h-2v-2h2V9h2z"/>
            <path d="M22.85 32.193L16.88 28S6 31.393 6 35.467V42h36v-6.533C42 31.393 31.121 28 31.121 28l-5.972 4.193a2 2 0 0 1-2.298 0M32 32h2v2h2v2h-2v2h-2v-2h-2v-2h2z"/>
          </g>
        </svg>
      ),
      title: 'Hospitalistas',
      description: 'Médicos de enfermaria que querem usar o POCUS à beira-leito para reavaliação diária, estratificação de risco e procedimentos guiados com segurança.'
    }
  ];

  return (
    <section
      id="para-quem"
      className="relative py-20 md:py-32 bg-gradient-lavender with-grain"
      role="region"
      aria-labelledby="audience-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="audience-heading" className="text-4xl md:text-5xl lg:text-6xl text-gradient-heading mb-6 font-title font-bold">
            Para quem é esta imersão?
          </h2>
          <p className="text-xl text-white/80 font-body font-light">
            Estudantes dos anos finais, médicos recém-formados, residentes, generalistas e especialistas 
            que querem diagnosticar mais rápido e conduzir com mais segurança no PA, enfermaria, ambulatório ou UTI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <motion.div
                key={index}
                className="card-glass p-6"
                data-testid={`card-audience-${index}`}
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
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 flex items-center justify-center p-2.5 sm:p-3"
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
                    <IconComponent />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-white mb-2 font-body font-light">
                      {audience.title}
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed font-body font-light">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
