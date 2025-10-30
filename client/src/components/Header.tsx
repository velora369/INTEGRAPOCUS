import { useState, useEffect } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    { label: 'Avisos', id: 'avisos' },
    { label: 'Contato', id: 'contato' },
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

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-white/80 hover:text-white focus-visible:text-white"
                  data-testid={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection('preco')}
            className="btn-primary hidden md:inline-flex"
            data-testid="button-header-cta"
          >
            Inscrever-se
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden btn-secondary"
            onClick={() => scrollToSection('inicio')}
            aria-label="Menu"
            data-testid="button-mobile-menu"
          >
            Menu
          </button>
        </nav>
      </div>
    </header>
  );
}
