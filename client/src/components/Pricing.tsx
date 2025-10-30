import { Check, CreditCard, Smartphone, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Pricing() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('preco');
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setShowFloatingCTA(!isVisible && window.scrollY > 800);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const features = [
    'Imersão 100% presencial',
    'Teoria + prática hands-on',
    'Material didático completo',
    'Certificado de participação',
    'Estações práticas supervisionadas',
    'Networking com especialistas'
  ];

  return (
    <>
      <section
        id="preco"
        className="relative py-20 md:py-32 bg-gradient-to-b from-black via-[#0a0d1f] to-black with-grain overflow-hidden"
        role="region"
        aria-labelledby="pricing-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03),transparent_50%)]" />
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 id="pricing-heading" className="text-white mb-6 font-heading">
              Investimento
            </h2>
            <p className="text-lg text-white/80">
              Garanta sua vaga nesta experiência transformadora de aprendizado.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* À Vista Card */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#25D366]/40 via-emerald-400/20 to-[#25D366]/40 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-[#25D366]/30 rounded-2xl p-8 transition-all duration-300">
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/30">
                    <Sparkles className="w-3 h-3 text-[#25D366]" />
                    <span className="text-xs font-semibold text-[#25D366]">Melhor oferta</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
                      <Smartphone className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-wide">
                        À vista no Pix
                      </p>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-[#25D366] to-transparent rounded-full mt-1" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl md:text-6xl font-extralight text-white font-heading">R$ 2.497</span>
                    </div>
                    <p className="text-sm text-white/60">Pagamento único</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                      Economia imediata
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                      Confirmação instantânea
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cartão de Crédito Card */}
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-blue-400/30 rounded-2xl p-8 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-blue-400/10 border border-blue-400/20">
                      <CreditCard className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-wide">
                        Cartão de Crédito
                      </p>
                      <div className="h-0.5 w-12 bg-gradient-to-r from-blue-400 to-transparent rounded-full mt-1" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-extralight text-white/60 font-heading">12x de</span>
                      <span className="text-5xl md:text-6xl font-extralight text-white font-heading">R$ 267</span>
                    </div>
                    <p className="text-sm text-white/60">sem juros (total R$ 3.208,80)</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Parcele sem juros
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1 h-1 rounded-full bg-blue-400" />
                      Maior flexibilidade
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features Included */}
            <div className="card-glass p-8 md:p-10">
              <h3 className="text-xl font-heading text-white mb-6 text-center">
                O que está incluído
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button
                  onClick={() => scrollToSection('contato')}
                  className="btn-primary text-lg px-8"
                  data-testid="button-pricing-main-cta"
                >
                  Garantir minha vaga
                </button>
                <a
                  href="https://wa.me/5593991674540?text=Olá! Gostaria de garantir minha vaga na Imersão Integra POCUS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg px-8"
                  data-testid="button-pricing-whatsapp"
                >
                  Falar no WhatsApp
                </a>
              </div>

              {/* Policy Note */}
              <p className="text-center text-xs text-white/50">
                * Política de cancelamento e reembolso disponível mediante solicitação.
                <br />
                Entre em contato para mais informações sobre condições e prazos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Mobile CTA */}
      {showFloatingCTA && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden"
          data-testid="floating-cta"
        >
          <button
            onClick={() => scrollToSection('preco')}
            className="btn-primary w-full"
          >
            Garantir minha vaga
          </button>
        </div>
      )}
    </>
  );
}
