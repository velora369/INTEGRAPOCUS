import { useEffect, useState } from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export function PartnersCarousel() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  const partners: Partner[] = [
    {
      id: 'partner-1',
      name: 'Butterfly',
      description: 'Butterfly Network',
      logo: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/logo-butterfly-sem-fundo.webp',
    },
    {
      id: 'partner-2',
      name: 'SBN',
      description: 'Sociedade Brasileira de Nefrologia',
      logo: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/sbn_logo_transparente.webp',
    },
    {
      id: 'partner-3',
      name: 'Mercado Pago',
      description: 'Mercado Pago',
      logo: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/mercado-pago-logo.webp',
    },
    {
      id: 'partner-4',
      name: 'CRM e CFM',
      description: 'Conselho Regional e Federal de Medicina',
      logo: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/crm.webp',
    },
  ];

  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section 
      className="relative py-16 md:py-20 bg-gradient-hero-waves with-grain"
      role="region"
      aria-label="Parceiros e Apoiadores"
      data-testid="section-partners-carousel"
    >
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gradient-heading mb-6 font-title font-bold">
            Parceiros e Apoiadores
          </h2>
        </div>
      </div>

      <div className="relative overflow-hidden -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            plugins={
              prefersReducedMotion
                ? []
                : [
                    AutoScroll({ 
                      playOnInit: true,
                      speed: 0.9375,
                      stopOnInteraction: false,
                      stopOnMouseEnter: false,
                      stopOnFocusIn: false,
                    })
                  ]
            }
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {duplicatedPartners.map((partner, index) => (
                <CarouselItem
                  key={`${partner.id}-${index}`}
                  className="flex basis-[280px] md:basis-[320px] justify-center pl-0 flex-shrink-0"
                  data-testid={`carousel-item-${partner.id}-${index}`}
                >
                  <div className="flex shrink-0 items-center justify-center py-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center h-20 md:h-24 mb-3">
                        <div 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 border border-white/30 flex items-center justify-center p-3 md:p-4 shadow-lg"
                          aria-hidden="true"
                        >
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-white/90 mb-1">
                        {partner.name}
                      </p>
                      <p className="text-xs text-white/50 max-w-[140px]">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
