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
      className="relative py-20 md:py-32 bg-gradient-indigo-night with-grain"
      role="region"
      aria-labelledby="professors-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="professors-heading" className="text-white mb-6 font-heading">
            Professores
          </h2>
          <p className="text-lg text-white/80">
            Aprenda com especialistas que utilizam POCUS diariamente em sua prática clínica.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {professors.map((professor, index) => (
            <div
              key={index}
              className="card-glass overflow-hidden"
              data-testid={`card-professor-${index}`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                  {professor.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="aspect-square rounded-lg overflow-hidden bg-white/5"
                    >
                      <img
                        src={image}
                        alt={`${professor.name} - ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        data-testid={`img-professor-${index}-${imgIndex}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Credentials */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-6">
                    {professor.name}
                  </h3>
                  <ul className="space-y-3">
                    {professor.credentials.map((credential, credIndex) => (
                      <li
                        key={credIndex}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base leading-relaxed">
                          {credential}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
