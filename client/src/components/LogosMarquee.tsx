export function LogosMarquee() {
  // Placeholder logos - replace with actual partner/sponsor logos
  const logos = [
    { name: 'Instituição 1', src: '' },
    { name: 'Instituição 2', src: '' },
    { name: 'Instituição 3', src: '' },
    { name: 'Instituição 4', src: '' },
    { name: 'Instituição 5', src: '' },
    { name: 'Instituição 6', src: '' },
  ];

  // Only render if logos are provided
  if (!logos.some(logo => logo.src)) {
    return null;
  }

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section
      className="relative py-12 bg-black/50 overflow-hidden"
      role="region"
      aria-label="Instituições Participantes"
    >
      <div className="mb-6">
        <p className="text-center text-white/60 text-sm uppercase tracking-wide">
          Instituições Participantes
        </p>
      </div>

      <div className="relative">
        <div className="flex marquee-animate" style={{ width: 'max-content' }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 h-16 md:h-20 w-32 md:w-40 flex-shrink-0"
              data-testid={`marquee-logo-${index}`}
            >
              {logo.src && (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain opacity-50"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
