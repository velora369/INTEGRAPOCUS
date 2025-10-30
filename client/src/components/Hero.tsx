import { Calendar, MapPin, Users, Zap, Target } from 'lucide-react';

export function Hero() {
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

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-hero-waves with-grain overflow-hidden"
      role="region"
      aria-label="Hero"
    >
      <div className="container-custom py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-white mb-6 font-heading">
            Ultrassom à beira-leito, do conceito à prática.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Imersão 100% presencial com teoria em sala e estações de prática hands-on 
            para decisões mais rápidas e seguras.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span>Presencial — teoria + hands-on</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Target className="w-5 h-5" />
              <span>Foco no raciocínio clínico</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Zap className="w-5 h-5" />
              <span>Vagas limitadas</span>
            </div>
          </div>

          {/* Event Details Card */}
          <div className="card-glass max-w-2xl mx-auto p-6 md:p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Calendar className="w-6 h-6 text-white/70 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/60 mb-1">Data</p>
                  <p className="text-white font-medium">29 de novembro de 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-white/70 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-white/60 mb-1">Local</p>
                  <p className="text-white font-medium">A definir</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('preco')}
              className="btn-primary text-lg px-8"
              data-testid="button-hero-main-cta"
            >
              Garantir minha vaga
            </button>
            <a
              href="https://wa.me/5593991674540?text=Olá! Gostaria de saber mais sobre a Imersão Integra POCUS."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8"
              data-testid="button-hero-whatsapp"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
