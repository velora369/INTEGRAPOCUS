import { Check, CreditCard, Smartphone, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

type PaymentType = 'cartao' | 'pix';

export function Pricing() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<PaymentType>('cartao');

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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="pricing-heading" className="text-white mb-4 font-heading">
              Investimento
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Garanta sua vaga nesta experiência transformadora de aprendizado.
            </p>

            {/* Payment Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-1">
                <button
                  onClick={() => setSelectedPayment('cartao')}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedPayment === 'cartao'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {selectedPayment === 'cartao' && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Cartão
                  </span>
                </button>
                <button
                  onClick={() => setSelectedPayment('pix')}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedPayment === 'pix'
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {selectedPayment === 'pix' && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/20" />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    PIX
                  </span>
                  {selectedPayment === 'pix' && (
                    <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#25D366] text-black text-xs font-semibold whitespace-nowrap">
                      Economize 22%
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Single Pricing Card */}
            <div className="relative group">
              <div className={`absolute -inset-[1px] rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                selectedPayment === 'pix'
                  ? 'bg-gradient-to-br from-[#25D366]/40 via-emerald-400/20 to-[#25D366]/40'
                  : 'bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-blue-400/20'
              }`} />
              <div className={`relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                selectedPayment === 'pix'
                  ? 'border-white/10 group-hover:border-[#25D366]/30'
                  : 'border-white/10 group-hover:border-blue-400/30'
              }`}>
                {selectedPayment === 'pix' && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/30">
                    <Sparkles className="w-3 h-3 text-[#25D366]" />
                    <span className="text-xs font-semibold text-[#25D366]">Melhor oferta</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl border ${
                    selectedPayment === 'pix'
                      ? 'bg-[#25D366]/10 border-[#25D366]/20'
                      : 'bg-blue-400/10 border-blue-400/20'
                  }`}>
                    {selectedPayment === 'pix' ? (
                      <Smartphone className="w-6 h-6 text-[#25D366]" />
                    ) : (
                      <CreditCard className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-white/60 uppercase tracking-wide">
                      {selectedPayment === 'pix' ? 'À vista no Pix' : 'Cartão de Crédito'}
                    </p>
                    <div className={`h-0.5 w-12 rounded-full mt-1 bg-gradient-to-r ${
                      selectedPayment === 'pix'
                        ? 'from-[#25D366] to-transparent'
                        : 'from-blue-400 to-transparent'
                    }`} />
                  </div>
                </div>

                <div className="mb-6">
                  {selectedPayment === 'pix' ? (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-5xl md:text-6xl font-extralight text-white font-heading">R$ 2.497</span>
                      </div>
                      <p className="text-sm text-white/60">Pagamento único</p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-extralight text-white/60 font-heading">12x de</span>
                        <span className="text-5xl md:text-6xl font-extralight text-white font-heading">R$ 267,80</span>
                      </div>
                      <p className="text-sm text-white/60">total R$ 3.208,80</p>
                    </>
                  )}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                
                <ul className="space-y-3 mb-6">
                  {selectedPayment === 'pix' ? (
                    <>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                        Economia imediata
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                        Confirmação instantânea
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                        Parcele em 12 vezes
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                        Maior flexibilidade
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Features Included */}
            <div className="card-glass p-8 md:p-10 mt-6">
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
