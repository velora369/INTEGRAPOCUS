import { Check, CreditCard, Smartphone } from 'lucide-react';
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
        className="relative py-20 md:py-32 bg-black with-grain"
        role="region"
        aria-labelledby="pricing-heading"
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 id="pricing-heading" className="text-white mb-6 font-heading">
              Investimento
            </h2>
            <p className="text-lg text-white/80">
              Garanta sua vaga nesta experiência transformadora de aprendizado.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-glass p-8 md:p-12">
              {/* Pricing Options */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Smartphone className="w-6 h-6 text-[#25D366]" />
                    <p className="text-sm text-white/60 uppercase tracking-wide">
                      À vista no Pix
                    </p>
                  </div>
                  <p className="text-4xl md:text-5xl font-heading text-white mb-2">
                    R$ 2.497
                  </p>
                  <p className="text-sm text-white/60">Pagamento único</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <CreditCard className="w-6 h-6 text-white/70" />
                    <p className="text-sm text-white/60 uppercase tracking-wide">
                      Cartão de Crédito
                    </p>
                  </div>
                  <p className="text-4xl md:text-5xl font-heading text-white mb-2">
                    12x
                  </p>
                  <p className="text-2xl text-white/80 mb-1">R$ 267,42</p>
                  <p className="text-sm text-white/60">sem juros</p>
                </div>
              </div>

              {/* Features Included */}
              <div className="mb-8">
                <h3 className="text-xl font-heading text-white mb-4 text-center">
                  O que está incluído
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <p className="text-center text-xs text-white/50 mt-6">
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
