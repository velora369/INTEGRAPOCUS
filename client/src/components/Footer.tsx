import type { FormEvent } from 'react';
import { Instagram, Send, MessageCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function Footer() {
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

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const message = `Olá! Gostaria de receber atualizações sobre a Imersão Integra POCUS. Meu email: ${email}`;
    window.open(`https://wa.me/5593991674540?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-footer with-grain transition-colors duration-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Newsletter Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-heading font-bold tracking-tight text-white">
              Fique por dentro
            </h2>
            <p className="mb-6 text-white/70 text-sm leading-relaxed">
              Receba atualizações sobre a imersão, vagas e novidades exclusivas.
            </p>
            <form className="relative" onSubmit={handleNewsletterSubmit} data-testid="form-newsletter">
              <Input
                type="email"
                name="email"
                placeholder="Seu melhor email"
                className="pr-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-primary/50"
                required
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-white transition-transform hover:scale-105"
                data-testid="button-newsletter-submit"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Inscrever</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" aria-hidden="true" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-heading font-semibold text-white">
              Navegação
            </h3>
            <nav className="space-y-2 text-sm">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-inicio"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('para-quem')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-para-quem"
              >
                Para quem é
              </button>
              <button
                onClick={() => scrollToSection('outcomes')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-outcomes"
              >
                O que você desenvolve
              </button>
              <button
                onClick={() => scrollToSection('formato')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-formato"
              >
                Formato e Data
              </button>
              <button
                onClick={() => scrollToSection('professores')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-professores"
              >
                Professores
              </button>
              <button
                onClick={() => scrollToSection('preco')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-preco"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-faq"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block text-white/70 transition-colors hover:text-primary"
                data-testid="link-footer-contato"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-heading font-semibold text-white">
              Entre em contato
            </h3>
            <address className="space-y-2 text-sm not-italic text-white/70">
              <p className="font-medium text-white/90">Integra POCUS</p>
              <p>Santarém, Pará</p>
              <p>29 de novembro de 2025</p>
              <div className="pt-2 space-y-1">
                <p>
                  <a
                    href="https://wa.me/5593991674540"
                    className="hover:text-primary transition-colors"
                    data-testid="link-footer-phone-maria"
                  >
                    Maria: (93) 99167-4540
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/5593981160181"
                    className="hover:text-primary transition-colors"
                    data-testid="link-footer-phone-vanessa"
                  >
                    Vanessa: (93) 98116-0181
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Social Media */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-heading font-semibold text-white">
              Redes sociais
            </h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-primary/50 transition-all"
                      asChild
                    >
                      <a
                        href="https://www.instagram.com/integra.pocus"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="button-footer-instagram"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Siga no Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-primary/50 transition-all"
                      asChild
                    >
                      <a
                        href="https://wa.me/5593991674540?text=Olá! Gostaria de saber mais sobre a Imersão Integra POCUS."
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="button-footer-whatsapp"
                      >
                        <SiWhatsapp className="h-4 w-4" />
                        <span className="sr-only">WhatsApp</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Fale conosco no WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Imersão 100% presencial em ultrassom point-of-care. Teoria objetiva + estações práticas supervisionadas.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-white/60">
            © {currentYear} Integra POCUS. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a 
              href="#preco" 
              className="text-white/60 transition-colors hover:text-primary"
              data-testid="link-footer-pricing-policy"
            >
              Preços e Pagamento
            </a>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white/60 transition-colors hover:text-primary"
              data-testid="link-footer-faq-bottom"
            >
              Perguntas Frequentes
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white/60 transition-colors hover:text-primary"
              data-testid="link-footer-contact-bottom"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
