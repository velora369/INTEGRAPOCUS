import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter experiência prévia com ultrassom?",
      answer:
        "Não! O curso é desenhado tanto para iniciantes quanto para quem já tem alguma familiaridade com o método. Começamos desde os fundamentos até aplicações mais avançadas.",
    },
    {
      question: "Terei acesso aos equipamentos durante a prática?",
      answer:
        "Sim! As estações práticas contam com equipamentos profissionais e grupos pequenos para garantir que todos tenham amplo acesso hands-on supervisionado.",
    },
    {
      question: "O curso emite certificado de conclusão?",
      answer:
        "Sim! Todos os participantes que concluírem a imersão receberão certificado de conclusão, comprovando a carga horária e as competências desenvolvidas em POCUS. O certificado é emitido ao final do curso.",
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
        <div className="max-w-4xl mx-auto text-center mb-16 pt-2 pb-2">
          <h2 id="faq-heading" className="text-4xl md:text-5xl lg:text-6xl text-gradient-heading mb-8 font-title font-bold pb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-white/80 font-body font-light">
            Tire suas dúvidas sobre a imersão.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="card-glass overflow-hidden"
              data-testid={`faq-item-${index}`}
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
                  y: -4,
                  scale: 1.01,
                  boxShadow: "0 8px 30px rgba(124, 109, 255, 0.2), 0 0 20px rgba(61, 163, 255, 0.1)",
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                },
                tap: { 
                  scale: 0.99,
                  transition: { 
                    duration: 0.1,
                    ease: "easeOut"
                  }
                }
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
                aria-expanded={openIndex === index}
                data-testid={`button-faq-${index}`}
              >
                <h3 className="text-xl text-white pr-4 font-body font-light">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ChevronDown
                    className="w-6 h-6 text-white/60 flex-shrink-0"
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-base text-white/70 leading-relaxed font-body font-bold">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
