import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const pillContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[clamp(68vh,82vh,92vh)] flex items-center bg-gradient-hero-waves with-grain"
      role="region"
      aria-label="Hero principal"
    >
      <div className="container-custom py-20 md:py-28 lg:py-36 w-full">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* H1 - Main Brand */}
            <motion.h1 
              className="text-gradient-heading text-5xl md:text-6xl lg:text-7xl mb-4 font-title font-bold relative inline-block pb-2"
              data-testid="text-hero-title"
              variants={titleVariants}
            >
              Integra POCUS
              
              {/* Shimmer Bar */}
              <div 
                className="hero-shimmer-bar"
                aria-hidden="true"
              />
            </motion.h1>

            {/* Subheadline - Course Name */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-title font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-400 bg-clip-text text-transparent"
              data-testid="text-hero-subheadline"
              variants={itemVariants}
            >
              Imersão Hands-on em POCUS
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-[1.6rem] text-white/90 mb-8 max-w-prose leading-relaxed font-body font-light"
              data-testid="text-hero-subtitle"
              style={{ maxWidth: '70ch' }}
              variants={itemVariants}
            >
              Formação 100% presencial para integrar imagem e clínica no dia a dia: teoria objetiva em sala, estações práticas supervisionadas e checklists de decisão.
            </motion.p>

            {/* Pills - Proof Points */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-10" 
              data-testid="container-hero-pills"
              variants={pillContainerVariants}
            >
              {/* Pill 1: Presencial */}
              <motion.div className="pill-glass text-base md:text-lg" variants={pillVariants}>
                <svg 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <g fill="currentColor">
                    <path d="M3 3h18v4.385h-2V5H5v9h4.333v2H3z"/>
                    <path d="M12.684 10.287C13.558 11.212 14.303 12 16 12h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V22h-3v-8c-2.617 0-3.956-1.45-4.84-2.405a14 14 0 0 0-.367-.388l1.414-1.414q.249.25.477.494M19 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"/>
                  </g>
                </svg>
                <span className="font-body font-light">Presencial — teoria + hands-on</span>
              </motion.div>

              {/* Pill 2: Raciocínio clínico */}
              <motion.div className="pill-glass text-base md:text-lg" variants={pillVariants}>
                <svg 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <g fill="currentColor">
                    <path d="M9 9V7h2v2h2v2h-2v2H9v-2H7V9zm-2 7h10v-2H7zm10 3H7v-2h10z"/>
                    <path fillRule="evenodd" d="M14.778 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.152a2.99 2.99 0 0 1 2.813-2c1.296 0 2.399.834 2.813 2M6 6v14h12V6zm5.965-.751s-.747-.017-.747-.782c0 0 0-.73.747-.73c0 0 .747 0 .747.782c0 0-.017.73-.747.73" clipRule="evenodd"/>
                  </g>
                </svg>
                <span className="font-body font-light">Foco no raciocínio clínico</span>
              </motion.div>

              {/* Pill 3: Apenas 9 vagas */}
              <motion.div className="pill-glass text-base md:text-lg" variants={pillVariants}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                  aria-hidden="true"
                >
                  <path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                    <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
                  </path>
                </svg>
                <span className="font-body font-light">Apenas 9 vagas</span>
              </motion.div>
            </motion.div>

            {/* Glass Card - Event Info */}
            <motion.div 
              className="card-glass p-6 mb-10 max-w-2xl" 
              data-testid="card-hero-info"
              variants={cardVariants}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 48 48"
                    className="flex-shrink-0 mt-0.5 text-white/70"
                    aria-hidden="true"
                  >
                    <g fill="currentColor">
                      <path fillRule="evenodd" d="M12 21a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 0h2v2h-2zm8-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2v2h2v-2zm-18 8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4 0v2h-2v-2zm6-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm2 2h-2v2h2z" clipRule="evenodd"/>
                      <path d="M36 32.5a1 1 0 1 0-2 0v2.914l1.293 1.293a1 1 0 0 0 1.414-1.414L36 34.586z"/>
                      <path fillRule="evenodd" d="M12 7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h10V7a1 1 0 1 1 2 0v5a1 1 0 1 0 2 0V9h3a3 3 0 0 1 3 3v16.07A7.001 7.001 0 0 1 35 42a6.99 6.99 0 0 1-5.745-3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h3zm16 28a7 7 0 0 1 6-6.93V18H8v18a1 1 0 0 0 1 1h19.29a7 7 0 0 1-.29-2m12 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0" clipRule="evenodd"/>
                    </g>
                  </svg>
                  <div>
                    <p className="text-sm text-white/60 mb-1 font-body font-light">Data</p>
                    <p className="text-white font-body font-light" data-testid="text-event-date">29 de novembro de 2025</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24"
                    className="flex-shrink-0 mt-0.5 text-white/70"
                    aria-hidden="true"
                  >
                    <path fill="currentColor" d="M12 4c2.2 0 4 1.8 4 4c0 2.1-2.1 5.5-4 7.9c-1.9-2.5-4-5.8-4-7.9c0-2.2 1.8-4 4-4m0-2C8.7 2 6 4.7 6 8c0 4.5 6 11 6 11s6-6.6 6-11c0-3.3-2.7-6-6-6m0 4c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m8 13c0 2.2-3.6 4-8 4s-8-1.8-8-4c0-1.3 1.2-2.4 3.1-3.2l.6.9c-1 .5-1.7 1.1-1.7 1.8c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9c2 .8 3.2 1.9 3.2 3.2"/>
                  </svg>
                  <div>
                    <p className="text-sm text-white/60 mb-1 font-body font-light">Local</p>
                    <p className="text-white font-body font-light" data-testid="text-event-location">Santarém, Pará</p>
                  </div>
                </div>
              </div>

              {/* Link to pricing */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <a
                  href="#preco"
                  className="text-white/80 hover:text-white text-sm underline-offset-4 hover:underline transition-all inline-block font-body font-light"
                  data-testid="link-hero-pricing"
                >
                  Ver valores e formas de pagamento →
                </a>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4" 
              data-testid="container-hero-ctas"
              variants={itemVariants}
            >
              <button
                onClick={() => scrollToSection('preco')}
                className="btn-primary-hero text-lg px-8 font-body font-light"
                data-testid="button-hero-main-cta"
              >
                Garantir minha vaga
              </button>
              <a
                href="https://wa.me/5593991674540?text=Olá! Gostaria de saber mais sobre o Hands-on Integra POCUS."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 font-body font-light"
                data-testid="button-hero-whatsapp"
              >
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
