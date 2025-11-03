import { Check, CreditCard, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

type PaymentType = 'cartao' | 'pix';

const PixIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 256 256" 
    className={className}
    fill="currentColor"
  >
    <g>
      <path d="M63.467,64h-3.627l42.88,-42.88c13.973,-13.92 36.587,-13.92 50.56,0l42.88,42.88h-3.627c-8.533,0 -16.587,3.307 -22.613,9.387l-36.267,36.107c-3.147,3.147 -8.16,3.147 -11.307,0l-36.267,-36.107c-6.027,-6.08 -14.08,-9.387 -22.613,-9.387z"></path>
      <path d="M192.533,192h3.627l-42.88,42.88c-13.973,13.92 -36.587,13.92 -50.56,0l-42.88,-42.88h3.627c8.533,0 16.587,-3.307 22.613,-9.387l36.267,-36.107c3.147,-3.147 8.16,-3.147 11.307,0l36.267,36.107c6.027,6.08 14.08,9.387 22.613,9.387z"></path>
      <path d="M234.88,153.28l-28.053,28.053h-14.293c-5.707,0 -11.04,-2.24 -15.093,-6.24l-36.267,-36.16c-7.253,-7.253 -19.093,-7.253 -26.347,0l-36.267,36.16c-4.053,4 -9.387,6.24 -15.093,6.24h-14.293l-28.053,-28.053c-13.92,-13.973 -13.92,-36.587 0,-50.56l28.053,-28.053h14.293c5.707,0 11.04,2.24 15.093,6.24l36.267,36.16c3.627,3.627 8.427,5.44 13.173,5.44c4.747,0 9.547,-1.813 13.173,-5.44l36.267,-36.16c4.053,-4 9.387,-6.24 15.093,-6.24h14.293l28.053,28.053c13.92,13.973 13.92,36.587 0,50.56z"></path>
    </g>
  </svg>
);

export function Pricing() {
  const [selectedPayment, setSelectedPayment] = useState<PaymentType>('cartao');

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
        className="relative py-20 md:py-32 bg-white overflow-hidden"
        role="region"
        aria-labelledby="pricing-heading"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,109,255,0.03),transparent_50%)]" />
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 id="pricing-heading" className="text-4xl md:text-5xl lg:text-6xl mb-4 font-title font-bold bg-gradient-to-r from-[#7C6DFF] via-[#3DA3FF] to-[#7C6DFF] bg-clip-text text-transparent">
              Investimento
            </h2>
            <p className="text-xl text-slate-700 mb-8 font-body font-medium">
              Garanta sua vaga nesta experiência transformadora de aprendizado.
            </p>

            {/* Payment Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 p-1">
                <button
                  onClick={() => setSelectedPayment('cartao')}
                  className={`relative px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
                    selectedPayment === 'cartao'
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {selectedPayment === 'cartao' && (
                    <div className="absolute inset-0 rounded-full bg-white border border-slate-300 shadow-sm" />
                  )}
                  <span className="relative z-10 flex items-center gap-2 font-body font-medium">
                    <CreditCard className="w-4 h-4" />
                    Cartão
                  </span>
                </button>
                <button
                  onClick={() => setSelectedPayment('pix')}
                  className={`relative px-6 py-2.5 rounded-full text-sm transition-all duration-300 ${
                    selectedPayment === 'pix'
                      ? 'text-slate-900'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {selectedPayment === 'pix' && (
                    <div className="absolute inset-0 rounded-full bg-white border border-slate-300 shadow-sm" />
                  )}
                  <span className="relative z-10 flex items-center gap-2 font-body font-medium">
                    <PixIcon className="w-4 h-4" />
                    PIX
                  </span>
                  <div className="absolute -top-2 -right-4 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#65D071] text-[#0B4020] text-xs whitespace-nowrap font-body font-semibold">
                    Economize 22%
                  </div>
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
              <div className={`relative bg-white border rounded-2xl p-8 md:p-10 transition-all duration-300 shadow-lg ${
                selectedPayment === 'pix'
                  ? 'border-slate-200 group-hover:border-[#25D366]/30 group-hover:shadow-[#25D366]/10'
                  : 'border-slate-200 group-hover:border-blue-400/30 group-hover:shadow-blue-400/10'
              }`}>
                {selectedPayment === 'pix' && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-[#65D071]">
                    <Sparkles className="w-3 h-3 text-[#0B4020]" />
                    <span className="text-xs text-[#0B4020] font-body font-semibold">Melhor oferta</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl border ${
                    selectedPayment === 'pix'
                      ? 'bg-[#25D366]/10 border-[#25D366]/20'
                      : 'bg-blue-400/10 border-blue-400/20'
                  }`}>
                    {selectedPayment === 'pix' ? (
                      <PixIcon className="w-6 h-6 text-[#25D366]" />
                    ) : (
                      <CreditCard className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 uppercase tracking-wide font-body font-medium">
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
                        <span className="text-5xl md:text-6xl font-medium text-slate-900 font-body font-medium">R$ 2.497</span>
                      </div>
                      <p className="text-sm text-slate-600 font-body font-medium">Pagamento único</p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-medium text-slate-600 font-body font-medium">12x de</span>
                        <span className="text-5xl md:text-6xl font-medium text-slate-900 font-medium">R$ 267,41</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
                
                <ul className="space-y-3 mb-6">
                  {selectedPayment === 'pix' ? (
                    <>
                      <li className="flex items-center gap-2 text-sm text-slate-700 font-body font-medium">
                        <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                        Economia imediata
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-700 font-body font-medium">
                        <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                        Confirmação instantânea
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center gap-2 text-sm text-slate-700 font-body font-medium">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                        Parcele em 12 vezes
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-700 font-body font-medium">
                        <div className="w-1 h-1 rounded-full bg-blue-400" />
                        Maior flexibilidade
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            {/* Features Included */}
            <div className="relative group/card">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-blue-500/20 opacity-0 group-hover/card:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="relative bg-white border border-slate-200 rounded-3xl shadow-lg p-8 md:p-10 mt-6">
                <h3 className="text-2xl md:text-3xl mb-8 text-center bg-gradient-to-r from-[#7C6DFF] via-[#3DA3FF] to-[#7C6DFF] bg-clip-text text-transparent font-body font-medium">
                  O que está incluído
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#25D366]/30 blur-md rounded-full group-hover/item:blur-lg transition-all" />
                        <Check className="relative w-5 h-5 text-[#25D366] flex-shrink-0" />
                      </div>
                      <span className="text-slate-700 text-base md:text-lg group-hover/item:text-slate-900 transition-colors font-body font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex justify-center mb-6">
                  {selectedPayment === 'pix' ? (
                    <a
                      href="https://seguro.checkoutintegrapocus.com.br/checkout-white-7117/?add-to-cart=7117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-white font-body font-semibold text-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                      data-testid="button-pricing-main-cta"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Garantir minha vaga no PIX</span>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="relative z-10 group-hover:translate-x-1 transition-transform"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-blue-400/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </a>
                  ) : (
                    <a
                      href="https://seguro.checkoutintegrapocus.com.br/checkout-white-7117/?add-to-cart=7117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-white font-body font-semibold text-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                      data-testid="button-pricing-main-cta"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Garantir minha vaga no cartão</span>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="relative z-10 group-hover:translate-x-1 transition-transform"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-blue-400/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </a>
                  )}
                </div>

                {/* Policy Note */}
                <p className="text-center text-xs text-slate-500 font-body font-medium">
                  * Política de cancelamento e reembolso disponível mediante solicitação.
                  <br />
                  Entre em contato para mais informações sobre condições e prazos.
                  {selectedPayment === 'cartao' && (
                    <>
                      {' '}O valor parcelado possui acréscimo.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
