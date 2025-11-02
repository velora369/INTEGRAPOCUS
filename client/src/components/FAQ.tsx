import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter experiência prévia com ultrassom?",
      answer:
        "Não! O curso é desenhado tanto para iniciantes quanto para quem já tem alguma familiaridade com o método. Começamos desde os fundamentos até aplicações avançadas.",
    },
    {
      question: "Terei acesso aos equipamentos durante a prática?",
      answer:
        "Sim! As estações práticas contam com equipamentos profissionais e grupos pequenos para garantir que todos tenham amplo acesso hands-on supervisionado.",
    },
    {
      question: "Posso parcelar o pagamento?",
      answer:
        "Sim, oferecemos parcelamento em até 12x no cartão de crédito, além da opção de pagamento à vista no Pix com valor promocional.",
    },
    {
      question: "Receberei material didático?",
      answer:
        "Sim, todo o material teórico e protocolos práticos utilizados durante a imersão serão disponibilizados aos participantes.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 bg-gradient-lavender with-grain"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl lg:text-5xl text-gradient-heading mb-6 font-title font-bold">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-white/80 font-body font-light">
            Tire suas dúvidas sobre a imersão.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-glass"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover-elevate active-elevate-2"
                aria-expanded={openIndex === index}
                data-testid={`button-faq-${index}`}
              >
                <h3 className="text-lg text-white pr-4 font-body font-light">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-white/60 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-white/70 leading-relaxed font-body font-bold">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
