import { Check, Sparkles } from 'lucide-react';

const CHECKOUT_URL = 'https://app.mirracheckout.com/c/integrapocus2026';

export function Pricing() {
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
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-blue-400/20" />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 transition-all duration-300 shadow-lg group-hover:border-blue-400/30 group-hover:shadow-blue-400/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl border bg-blue-400/10 border-blue-400/20">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 uppercase tracking-wide font-body font-medium">
                      Valores
                    </p>
                    <div className="h-0.5 w-12 rounded-full mt-1 bg-gradient-to-r from-blue-400 to-transparent" />
                  </div>
                </div>

                <div className="mb-6 space-y-6">
                  <div>
                    <p className="text-sm text-slate-600 mb-2 font-body font-medium">À vista no PIX</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-5xl md:text-6xl font-medium text-slate-900 font-body font-medium">R$ 2.759</span>
                    </div>
                    <p className="text-sm text-slate-600 font-body font-medium">Pagamento único</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  <div>
                    <p className="text-sm text-slate-600 mb-2 font-body font-medium">Cartão de crédito</p>
                    <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                      <span className="text-3xl font-medium text-slate-600 font-body font-medium">12x de</span>
                      <span className="text-5xl md:text-6xl font-medium text-slate-900 font-medium">R$ 295,75</span>
                    </div>
                    <p className="text-sm text-slate-500 font-body font-medium mt-1">
                      Sem juros.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />

                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-body font-medium">
                    <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    Checkout seguro — você escolhe PIX ou cartão na finalização
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-700 font-body font-medium">
                    <div className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                    Um único link para garantir sua vaga
                  </li>
                </ul>
              </div>
            </div>

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

                <div className="flex justify-center mb-6">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-white font-body font-semibold text-base sm:text-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center whitespace-nowrap"
                    data-testid="button-pricing-main-cta"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Quero garantir minha vaga</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/50 to-blue-400/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </a>
                </div>

                <p className="text-center text-xs text-slate-500 font-body font-medium">
                  * Política de cancelamento e reembolso disponível mediante solicitação.
                  <br />
                  Entre em contato para mais informações sobre condições e prazos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
