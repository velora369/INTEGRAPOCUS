export function Professors() {
  const professors = [
    {
      name: 'Dr. Emanuel Esposito',
      credentials: [
        'Nefrologista com mais de 24 anos de experiência',
        'Responsável técnico em nefrologia e transplante em hospital terciário',
        'Professor da UEPA',
        'Membro do comitê de POCUS da Sociedade Brasileira de Nefrologia',
        'Mestrando pela UFOPA',
        'Utiliza POCUS diariamente na prática clínica'
      ],
      images: [
        'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/dr-emanuel1.jpg',
        'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/dr-emanuel2.jpg'
      ]
    },
    {
      name: 'Dr. Luan Moraes',
      credentials: [
        'Médico formado pela UEPA',
        'Coordenador de Clínica Médica do HRBA',
        'Plantonista de emergência do HRBA',
        'Atuação em Trauma e Estabilização de Pacientes Adultos (HMS)',
        'Experiência em pesquisa e ensino de POCUS'
      ],
      images: [
        'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/drluan1.jpg',
        'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/drluan2.jpg'
      ]
    }
  ];

  return (
    <section
      id="professores"
      className="relative py-20 md:py-32 bg-gradient-indigo-night with-grain overflow-hidden"
      role="region"
      aria-labelledby="professors-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="professors-heading" className="text-gradient-heading mb-6 font-heading">
            Professores
          </h2>
          <p className="text-lg text-white/80">
            Aprenda com especialistas que utilizam POCUS diariamente em sua prática clínica.
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {professors.map((professor, index) => (
            <div
              key={index}
              className="relative group"
              data-testid={`card-professor-${index}`}
            >
              <div className="relative card-glass overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative grid md:grid-cols-[1fr,1.2fr] gap-8 p-6 md:p-10">
                  {/* Images Grid with Futuristic Styling */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {professor.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm group/img"
                      >
                        <div className="absolute inset-0 border border-blue-400/20 rounded-xl group-hover/img:border-blue-400/40 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-400/0 via-blue-400/0 to-purple-400/0 group-hover/img:from-blue-400/20 group-hover/img:via-purple-400/20 group-hover/img:to-blue-400/20 rounded-xl blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                        
                        <img
                          src={image}
                          alt={`${professor.name} - ${imgIndex + 1}`}
                          className="relative w-full h-full object-cover object-top transform group-hover/img:scale-105 transition-transform duration-500"
                          loading="lazy"
                          data-testid={`img-professor-${index}-${imgIndex}`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Credentials with Enhanced Styling */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-heading text-white mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                        {professor.name}
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full" />
                    </div>
                    
                    <ul className="space-y-4">
                      {professor.credentials.map((credential, credIndex) => (
                        <li
                          key={credIndex}
                          className="flex items-start gap-3 text-white/80 group/item"
                        >
                          <div className="relative mt-2 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 group-hover/item:bg-blue-400 transition-colors" />
                            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-blue-400/40 blur-sm group-hover/item:blur group-hover/item:bg-blue-400/60 transition-all" />
                          </div>
                          <span className="text-sm md:text-base leading-relaxed group-hover/item:text-white/90 transition-colors">
                            {credential}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
