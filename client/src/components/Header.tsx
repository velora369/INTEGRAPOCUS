import { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Professores', id: 'professores' },
    { label: 'Para quem é', id: 'para-quem' },
    { label: 'O que você desenvolve', id: 'outcomes' },
    { label: 'Formato e Data', id: 'formato' },
    { label: 'Preço', id: 'preco' },
    { label: 'FAQ', id: 'faq' },
  ];

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/5511999999999',
      color: 'from-green-500 to-emerald-600',
      description: 'Tire suas dúvidas'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/integrapocus',
      color: 'from-purple-500 to-pink-600',
      description: 'Acompanhe nosso conteúdo'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'header-glass' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Navegação principal"
        >
          <div className="flex items-center">
            <h2 className="text-xl md:text-2xl font-heading text-white">
              Integra <span className="text-gradient-primary">POCUS</span>
            </h2>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="relative p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                aria-label="Menu"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-l border-white/10 backdrop-blur-xl"
            >
              <SheetHeader className="border-b border-white/10 pb-4">
                <SheetTitle className="text-2xl font-heading text-white text-left">
                  Integra <span className="text-gradient-primary">POCUS</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 space-y-6">
                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 font-medium"
                      data-testid={`nav-link-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Social Links Cards */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 px-4">
                    Conecte-se conosco
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r hover:shadow-lg hover:shadow-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02]"
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`
                        }}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} shadow-lg`}>
                          <social.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white group-hover:text-white/90 transition-colors">
                            {social.name}
                          </p>
                          <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
                            {social.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button
                    onClick={() => scrollToSection('preco')}
                    className="w-full btn-primary justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all"
                    data-testid="button-header-cta"
                  >
                    Inscrever-se Agora
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
