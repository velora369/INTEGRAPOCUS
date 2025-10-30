export function LogosGrid() {
  // Placeholder logos - replace with actual partner/sponsor logos
  const logos = [
    { name: 'Parceiro 1', src: '' },
    { name: 'Parceiro 2', src: '' },
    { name: 'Parceiro 3', src: '' },
    { name: 'Parceiro 4', src: '' },
    { name: 'Parceiro 5', src: '' },
    { name: 'Parceiro 6', src: '' },
  ];

  // Only render if logos are provided
  if (!logos.some(logo => logo.src)) {
    return null;
  }

  return (
    <section
      className="relative py-16 bg-gradient-indigo-night with-grain"
      role="region"
      aria-label="Parceiros"
    >
      <div className="container-custom">
        <h3 className="text-center text-white/60 text-sm uppercase tracking-wide mb-8">
          Apoio e Parceiros
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 md:h-20"
              data-testid={`logo-${index}`}
            >
              {logo.src && (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100"
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
