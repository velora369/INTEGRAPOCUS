import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from './ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fallbackTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const performScroll = useCallback(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        const offset = 70;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
      setTargetSection(null);
    }
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    if (fallbackTimeoutRef.current) {
      clearTimeout(fallbackTimeoutRef.current);
      fallbackTimeoutRef.current = null;
    }
  }, [targetSection]);

  useEffect(() => {
    if (!isOpen && targetSection) {
      let rafId: number | null = null;
      let attempts = 0;
      const maxAttempts = 60;
      
      const checkSheetClosed = () => {
        const sheetContent = document.querySelector('[role="dialog"]');
        const isRemoved = !sheetContent;
        
        attempts++;
        
        if (isRemoved || attempts >= maxAttempts) {
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
          performScroll();
        } else {
          rafId = requestAnimationFrame(checkSheetClosed);
        }
      };
      
      rafId = requestAnimationFrame(checkSheetClosed);
      
      fallbackTimeoutRef.current = setTimeout(() => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        performScroll();
      }, 1000);
      
      return () => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
        if (fallbackTimeoutRef.current) {
          clearTimeout(fallbackTimeoutRef.current);
          fallbackTimeoutRef.current = null;
        }
      };
    }
  }, [isOpen, targetSection, performScroll]);

  const scrollToSection = (id: string) => {
    setTargetSection(id);
    setIsOpen(false);
  };
  
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      if (fallbackTimeoutRef.current) {
        clearTimeout(fallbackTimeoutRef.current);
        fallbackTimeoutRef.current = null;
      }
      setTargetSection(null);
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
      icon: FaWhatsapp,
      url: 'https://wa.me/5511999999999',
      color: '#25D366',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/integrapocus/',
      color: '#E4405F',
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? 'header-glass' : 'bg-black/40 backdrop-blur-md border-b border-white/5'
      }`}
      role="banner"
      style={{ position: 'fixed' }}
    >
      <div className="container-custom">
        <nav
          className="flex items-center justify-between py-4"
          aria-label="Navegação principal"
        >
          <button 
            onClick={() => scrollToSection('inicio')}
            className="flex items-center cursor-pointer transition-transform hover:scale-105 active:scale-95"
            aria-label="Voltar ao início"
            data-testid="button-logo-header"
          >
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/icone_sem_fundo.webp" 
              alt="Integra POCUS"
              className="h-10 md:h-11 w-auto object-contain"
              data-testid="img-logo-header"
            />
          </button>

          <Sheet open={isOpen} onOpenChange={handleOpenChange}>
            <SheetTrigger asChild>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                aria-label="Menu"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-l border-white/10 backdrop-blur-xl flex flex-col p-0"
            >
              <SheetHeader className="border-b border-white/10 pb-3 px-6 pt-5 flex-shrink-0">
                <SheetTitle className="text-xl text-white text-left font-body font-light">
                  Integra <span className="text-gradient-primary">POCUS</span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menu de navegação do site
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 px-6 py-4">
                <div className="space-y-3">
                  {/* Navigation Links */}
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 font-body font-light text-[15px]"
                        data-testid={`nav-link-${item.id}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  {/* Social Links Icons */}
                  <div className="pt-3 border-t border-white/10">
                    <h3 className="text-xs text-white/60 uppercase tracking-wider mb-2 px-3 font-body font-light">
                      Conecte-se conosco
                    </h3>
                    <div className="flex items-center gap-3 px-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
                          aria-label={social.name}
                          title={social.name}
                        >
                          <social.icon 
                            className="w-6 h-6 transition-colors" 
                            style={{ color: social.color }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => scrollToSection('preco')}
                      className="w-full btn-primary justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all font-body font-light text-sm py-2.5"
                      data-testid="button-header-cta"
                    >
                      Inscrever-se Agora
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
