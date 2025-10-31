import { Instagram, Mail, User, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Since there's no backend, we'll just show the WhatsApp option
    const message = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5593991674540?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contato"
      className="relative py-20 md:py-32 bg-gradient-indigo-night with-grain"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="contact-heading" className="text-white mb-6 font-heading">
            Fale Conosco
          </h2>
          <p className="text-lg text-white/80">
            Tire suas dúvidas ou garanta sua vaga entrando em contato.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* WhatsApp Contacts */}
          <div className="space-y-6">
            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <SiWhatsapp className="w-6 h-6 text-[#25D366]" />
                <h3 className="text-xl font-heading text-white">Support WhatsApp</h3>
              </div>
              
              <div className="space-y-3">
                <a
                  href="https://wa.me/5593991674540?text=Olá! Gostaria de saber mais sobre a Imersão Integra POCUS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-white/5 border border-white/10 hover-elevate active-elevate-2 text-center"
                  data-testid="link-whatsapp-support-1"
                >
                  <p className="text-white/80 text-base">(93) 99167-4540</p>
                </a>

                <a
                  href="https://wa.me/5593981160181?text=Olá! Gostaria de saber mais sobre a Imersão Integra POCUS."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-white/5 border border-white/10 hover-elevate active-elevate-2 text-center"
                  data-testid="link-whatsapp-support-2"
                >
                  <p className="text-white/80 text-base">+55 (93) 98116-0181</p>
                </a>
              </div>
            </div>

            <div className="card-glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="w-6 h-6 text-white/70" />
                <h3 className="text-xl font-heading text-white">Instagram</h3>
              </div>
              
              <a
                href="https://www.instagram.com/integra.pocus"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg bg-white/5 border border-white/10 hover-elevate active-elevate-2"
                data-testid="link-instagram"
              >
                <p className="text-white font-medium">@integra.pocus</p>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-glass p-6">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-white/70" />
              <h3 className="text-xl font-heading text-white">Envie uma Mensagem</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                  Nome
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3331C5]/50 focus:border-transparent"
                    placeholder="Seu nome completo"
                    required
                    data-testid="input-name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                  E-mail
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3331C5]/50 focus:border-transparent"
                    placeholder="seu@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#3331C5]/50 focus:border-transparent resize-none"
                  placeholder="Como podemos ajudar?"
                  required
                  data-testid="input-message"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
                data-testid="button-submit-contact"
              >
                <Send className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
