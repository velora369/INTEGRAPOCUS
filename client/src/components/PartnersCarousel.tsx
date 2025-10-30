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
      description: 'Sociedade Brasileira de Neurocirurgia',
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
      name: 'CRM',
      description: 'Conselho Regional de Medicina',
      logo: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/crm.webp',
    },
  ];

  return (
    <section 
      className="relative py-16 md:py-20 bg-black/30 border-y border-white/5"
      role="region"
      aria-label="Parceiros e Apoiadores"
      data-testid="section-partners-carousel"
    >
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-heading text-white/90 mb-2">
            Parceiros e Apoiadores
          </h2>
          <p className="text-sm text-white/60">
            Instituições que confiam e apoiam o desenvolvimento da medicina point-of-care
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="relative mx-auto flex items-center justify-center">
          <Carousel
            opts={{ loop: true }}
            plugins={
              prefersReducedMotion
                ? []
                : [
                    AutoScroll({ 
                      playOnInit: true,
                      speed: 1,
                      stopOnInteraction: true,
                      stopOnMouseEnter: true,
                    })
                  ]
            }
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {partners.map((partner) => (
                <CarouselItem
                  key={partner.id}
                  className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  data-testid={`carousel-item-${partner.id}`}
                >
                  <div className="mx-6 md:mx-10 flex shrink-0 items-center justify-center py-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center h-20 md:h-24 mb-3">
                        <div 
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/10 to-violet-500/10 border border-white/10 flex items-center justify-center backdrop-blur-sm p-3 md:p-4"
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
          
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-10" aria-hidden="true" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black/80 via-black/40 to-transparent pointer-events-none z-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
