import { motion } from 'framer-motion';

// Custom SVG Icons
function SmartphoneIcon() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path opacity="0.2" d="M65.1547 11.8454C65.7671 11.233 65.7704 10.2356 65.1177 9.66629C63.2412 8.02968 61.1086 6.70629 58.8018 5.75077C56.0113 4.59491 53.0205 4 50.0001 4C46.9797 4 43.9889 4.59491 41.1984 5.75077C38.8915 6.70629 36.759 8.02968 34.8825 9.6663C34.2297 10.2356 34.2331 11.233 34.8455 11.8454C35.4579 12.4578 36.4471 12.4525 37.1059 11.8903C38.6869 10.5411 40.4724 9.44627 42.3986 8.64841C44.8086 7.65017 47.3916 7.13638 50.0001 7.13638C52.6086 7.13638 55.1916 7.65017 57.6016 8.64841C59.5278 9.44627 61.3133 10.5411 62.8943 11.8903C63.5531 12.4525 64.5422 12.4578 65.1547 11.8454Z" fill="white"/>
      <path d="M55.6984 20.0783C56.4016 19.5877 56.5824 18.6073 55.9738 18.0033C55.3804 17.4143 54.7025 16.9128 53.9601 16.5164C52.7593 15.8754 51.4239 15.5276 50.0629 15.5016C48.702 15.4756 47.3543 15.772 46.1299 16.3667C45.3728 16.7344 44.6762 17.2096 44.0607 17.7755C43.4295 18.3558 43.5727 19.3424 44.2566 19.8595C44.9406 20.3766 45.9054 20.218 46.592 19.7045C46.8713 19.4957 47.1706 19.3131 47.4864 19.1597C48.27 18.7791 49.1326 18.5894 50.0036 18.606C50.8746 18.6227 51.7293 18.8452 52.4977 19.2555C52.8074 19.4208 53.0996 19.6148 53.3706 19.8341C54.0371 20.3735 54.9952 20.5689 55.6984 20.0783Z" fill="white"/>
      <path opacity="0.6" d="M60.1778 15.3846C60.7319 14.8306 60.7357 13.9266 60.1342 13.4244C58.9081 12.4008 57.5319 11.567 56.0512 10.9537C54.1327 10.159 52.0765 9.75 50 9.75C47.9235 9.75 45.8673 10.159 43.9488 10.9537C42.4681 11.567 41.0919 12.4008 39.8658 13.4244C39.2643 13.9266 39.2681 14.8306 39.8221 15.3847C40.3762 15.9387 41.2703 15.9318 41.8815 15.4414C42.8372 14.6749 43.8985 14.046 45.0348 13.5753C46.6089 12.9233 48.2961 12.5877 50 12.5877C51.7039 12.5877 53.3911 12.9233 54.9652 13.5753C56.1015 14.046 57.1628 14.6749 58.1185 15.4414C58.7297 15.9318 59.6238 15.9387 60.1778 15.3846Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M59.4548 37.777C58.8999 39.129 58.3448 40.4815 58.3448 41.9764C58.4318 44.6108 59.2058 47.115 59.9798 49.6189C60.8011 52.2759 61.6223 54.9325 61.6223 57.744C61.6367 63.3302 59.8686 69.0169 58.043 74.359C57.7738 75.1452 57.4997 75.9316 57.2252 76.719C55.6096 81.3534 53.9824 86.0212 53.2992 90.8877C53.2344 91.3245 53.1931 91.7647 53.1518 92.2049C53.0851 92.9146 53.0184 93.6244 52.8536 94.3198C52.5869 95.563 51.0744 96 49.9642 96C48.8152 96 47.5034 95.5225 47.1467 94.3198C46.9083 93.6054 46.86 92.8575 46.8117 92.1102C46.7852 91.7007 46.7588 91.2913 46.7011 90.8877C45.9974 85.8751 44.3098 81.0619 42.6372 76.2913C42.4095 75.6417 42.182 74.993 41.9573 74.3446C40.1461 69.0169 38.3636 63.3302 38.378 57.744C38.3933 54.9323 39.2108 52.2744 40.0286 49.6156C40.7984 47.113 41.5685 44.6095 41.6698 41.9764C41.7138 40.4696 41.1397 39.1078 40.5648 37.7442C40.0324 36.4812 39.4993 35.2167 39.4561 33.8341C39.3698 31.6082 39.873 28.5638 41.5261 26.6682C42.1442 25.9646 43.0355 25.5625 43.9698 25.5625H56.0305C56.9648 25.5625 57.8561 25.9646 58.4742 26.6682C60.1273 28.5638 60.6305 31.6082 60.5586 33.8341C60.5011 35.2275 59.978 36.5021 59.4548 37.777ZM54.6243 75.4464C54.8593 74.7724 55.0941 74.0989 55.3261 73.4255V73.4112C57.0655 68.2989 58.7617 62.885 58.7473 57.744C58.7473 54.9227 57.9258 52.2521 57.1034 49.5785C56.3459 47.1157 55.5876 44.6504 55.4698 42.0625C55.4139 40.4324 56.0031 39.0023 56.5885 37.5812C56.8568 36.93 57.1243 36.2806 57.3287 35.6147H42.6657C42.8702 36.2941 43.1438 36.9574 43.4184 37.6233C43.9998 39.0332 44.586 40.4544 44.5305 42.0625C44.4423 44.704 43.6658 47.2254 42.8908 49.7421C42.0799 52.3753 41.2705 55.0034 41.253 57.7584C41.2386 62.8994 42.9348 68.3132 44.6742 73.4255C44.8951 74.0626 45.1184 74.6999 45.342 75.3379C47.0772 80.2897 48.8259 85.2802 49.5617 90.4856C49.6026 90.823 49.62 91.17 49.6374 91.5184C49.6644 92.0568 49.6915 92.5986 49.8061 93.1136C49.9067 93.1279 50.0361 93.1279 50.1511 93.1136C50.2392 92.6149 50.286 92.1085 50.3328 91.6024C50.3673 91.2289 50.4019 90.8556 50.453 90.4856C51.1836 85.3164 52.9097 80.3652 54.6243 75.4464ZM42.3377 32.7427H57.6601C57.5828 31.2576 57.2818 29.6736 56.3036 28.5638C56.2461 28.4777 56.1311 28.4346 56.0305 28.4346H43.9698C43.8692 28.4346 43.7686 28.4777 43.6967 28.5638C42.947 29.4214 42.4313 31.0309 42.3377 32.7427Z" fill="white"/>
    </svg>
  );
}

function MagnifyingGlassIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
      <path fill="#fff" d="M6.385 15.616h11.23V8.385H6.386zm2.23-1.885l1.799-2.402l1.163 1.555l1.587-2.115l2.22 2.962zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"/>
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-full h-full">
      <path fill="#fff" d="M11.5 13.5h1v-6h-1zm3-1.5h1V8.5h-1zm-6-.5h1v-3h-1zM7 21v-3.762q-1.425-1.3-2.212-2.922T4 10.986q0-3.327 2.333-5.657T12 3q2.702 0 4.884 1.645t2.83 4.25l1.036 4.103q.1.38-.142.692q-.242.31-.646.31H18v3.385q0 .666-.475 1.14t-1.14.475H14v2h-1v-3h3.385q.269 0 .442-.173t.173-.442V13h2.7l-.95-3.875q-.575-2.294-2.47-3.71Q14.388 4 12 4Q9.1 4 7.05 6.03Q5 8.062 5 10.97q0 1.494.613 2.84q.612 1.346 1.737 2.392L8 16.8V21zm5.35-8.5"/>
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

          {/* Video Container */}
          <div className="relative" data-testid="container-equipment-video">
            <motion.div 
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              {/* Video Embed */}
              <div className="aspect-video w-full relative bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                <iframe 
                  title="Vídeo de Apresentação do Butterfly" 
                  className="w-full h-full absolute inset-0"
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
                  src="https://player.cloudinary.com/embed/?cloud_name=dgu5xgx7q&public_id=video_propaganda_butterfly_jkbbeb&profile=cld-default"
                  data-testid="iframe-equipment-video"
                  loading="lazy"
                />
              </div>

              {/* Video Caption */}
              <div className="px-6 py-4 bg-gradient-to-r from-black/40 via-black/30 to-black/40 backdrop-blur-sm border-t border-white/5">
                <p className="text-sm text-white/70 text-center font-body font-light">
                  Veja o Butterfly IQ em ação: portabilidade e qualidade clínica ao seu alcance
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12" data-testid="container-equipment-features">
            
            {/* Feature 1: Portátil */}
            <motion.div 
              className="card-glass p-6"
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
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 p-3 sm:p-3.5"
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
                <div className="text-white w-full h-full">
                  <SmartphoneIcon />
                </div>
              </motion.div>
              <h3 className="text-lg text-white mb-2 font-body font-light" data-testid="text-feature-portable-title">
                Ultra Portátil
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-body font-light" data-testid="text-feature-portable-description">
                Conecta diretamente ao smartphone ou tablet, permitindo mobilidade total durante as práticas.
              </p>
            </motion.div>

            {/* Feature 2: Qualidade */}
            <motion.div 
              className="card-glass p-6"
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
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 p-3 sm:p-3.5"
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
                <div className="text-white w-full h-full">
                  <MagnifyingGlassIcon />
                </div>
              </motion.div>
              <h3 className="text-lg text-white mb-2 font-body font-light" data-testid="text-feature-quality-title">
                Alta Resolução
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-body font-light" data-testid="text-feature-quality-description">
                Imagens de qualidade clínica com tecnologia de última geração para diagnósticos precisos.
              </p>
            </motion.div>

            {/* Feature 3: Fácil Uso */}
            <motion.div 
              className="card-glass p-6"
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
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 p-3 sm:p-3.5"
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
                <div className="text-white w-full h-full">
                  <ChecklistIcon />
                </div>
              </motion.div>
              <h3 className="text-lg text-white mb-2 font-body font-light" data-testid="text-feature-easy-title">
                Intuitivo
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-body font-light" data-testid="text-feature-easy-description">
                Interface amigável que facilita o aprendizado e permite foco total na técnica de exame.
              </p>
            </motion.div>

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
