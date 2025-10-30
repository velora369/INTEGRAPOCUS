import { Instagram, Mail } from 'lucide-react';

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

  const navigation = [
    { label: 'Início', id: 'inicio' },
    { label: 'Professores', id: 'professores' },
    { label: 'Para quem é', id: 'para-quem' },
    { label: 'O que você desenvolve', id: 'outcomes' },
    { label: 'Formato e Data', id: 'formato' },
    { label: 'Preço', id: 'preco' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <footer
      className="relative bg-gradient-footer with-grain-light border-t border-white/5"
      role="contentinfo"
    >
      <div className="container-custom py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading text-white mb-4">
              Integra <span className="text-gradient-primary">POCUS</span>
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Ultrassom à beira-leito, do conceito à prática. Imersão presencial 
              com teoria e hands-on para decisões mais rápidas e seguras.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/integra.pocus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="Instagram"
                data-testid="link-footer-instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/5593991674540"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="WhatsApp"
                data-testid="link-footer-whatsapp"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-heading text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/60 hover:text-white"
                    data-testid={`link-footer-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="https://wa.me/5593991674540"
                  className="hover:text-white"
                  data-testid="link-footer-phone-maria"
                >
                  Maria: (93) 99167-4540
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5593981160181"
                  className="hover:text-white"
                  data-testid="link-footer-phone-vanessa"
                >
                  Vanessa: (93) 98116-0181
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/integra.pocus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @integra.pocus
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              &copy; {currentYear} Integra POCUS. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Imersão presencial em ultrassom point-of-care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
