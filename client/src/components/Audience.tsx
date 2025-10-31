import { GraduationCap, Stethoscope, Users2, Hospital, Briefcase } from 'lucide-react';

export function Audience() {
  const audiences = [
    {
      icon: GraduationCap,
      title: 'Estudantes',
      description: 'Acadêmicos dos anos finais que buscam diferencial na formação e domínio de uma ferramenta diagnóstica moderna.'
    },
    {
      icon: Stethoscope,
      title: 'Recém-formados e Residentes',
      description: 'Médicos em início de carreira que desejam incorporar o POCUS em sua prática clínica diária com segurança.'
    },
    {
      icon: Users2,
      title: 'Generalistas',
      description: 'Clínicos gerais e médicos de família que querem diagnosticar com mais agilidade no consultório ou ambulatório.'
    },
    {
      icon: Hospital,
      title: 'Emergencistas',
      description: 'Profissionais de pronto atendimento e UTI que necessitam de decisões rápidas e precisas à beira-leito.'
    },
    {
      icon: Briefcase,
      title: 'Especialistas',
      description: 'Médicos de diversas especialidades que buscam integrar o ultrassom como extensão do exame físico em sua área.'
    }
  ];

  return (
    <section
      id="para-quem"
      className="relative py-20 md:py-32 bg-gradient-lavender with-grain"
      role="region"
      aria-labelledby="audience-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="audience-heading" className="text-gradient-heading mb-6 font-title">
            Para quem é esta imersão?
          </h2>
          <p className="text-lg text-white/80">
            Estudantes dos anos finais, médicos recém-formados, residentes, generalistas e especialistas 
            que querem diagnosticar mais rápido e conduzir com mais segurança no PA, enfermaria, ambulatório ou UTI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="card-glass p-6 hover-elevate active-elevate-2"
                data-testid={`card-audience-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-secondary font-light text-white mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
