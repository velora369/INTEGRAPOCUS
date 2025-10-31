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
      className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[clamp(68vh,82vh,92vh)] flex items-center bg-gradient-hero-waves with-grain overflow-hidden"
      role="region"
      aria-label="Hero principal"
    >
      <div className="container-custom py-16 md:py-24 lg:py-32 w-full">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Eyebrow Badge */}
            <motion.div 
              className="inline-flex items-center mb-6" 
              data-testid="badge-hero-eyebrow"
              variants={itemVariants}
            >
              <div 
                className="px-4 py-2 rounded-full backdrop-blur-md border border-white/10 bg-white/5"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <span className="text-white/85 text-sm tracking-wide font-body font-light">
                  Imersão presencial — Santarém, PA — 29 NOV 2025
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1 
              className="text-gradient-heading mb-4 font-title font-bold relative inline-block"
              data-testid="text-hero-title"
              variants={titleVariants}
            >
              Integra POCUS — Imersão Hands-on em POCUS
              
              {/* Shimmer Bar */}
              <div 
                className="hero-shimmer-bar"
                aria-hidden="true"
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-8 max-w-prose leading-relaxed font-body font-light"
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
              <motion.div className="pill-glass" variants={pillVariants}>
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
                <span className="font-body font-light">Presencial — teoria + hands-on</span>
              </motion.div>

              {/* Pill 2: Raciocínio clínico */}
              <motion.div className="pill-glass" variants={pillVariants}>
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
                <span className="font-body font-light">Foco no raciocínio clínico</span>
              </motion.div>

              {/* Pill 3: Vagas limitadas */}
              <motion.div className="pill-glass" variants={pillVariants}>
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
                <span className="font-body font-light">Vagas limitadas</span>
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
                href="https://wa.me/5593991674540?text=Olá! Gostaria de saber mais sobre a Imersão Integra POCUS."
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
