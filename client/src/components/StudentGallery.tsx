import { motion } from 'framer-motion';
import img1 from '@assets/alunos/img-1.webp';
import img2 from '@assets/alunos/img-2.webp';
import img3 from '@assets/alunos/img-3.webp';
import img4 from '@assets/alunos/img-4.webp';
import img5 from '@assets/alunos/img-5.webp';
import img6 from '@assets/alunos/img-6.webp';
import { Users, Sparkles } from 'lucide-react';

const images = [
  {
    src: img1,
    alt: 'Dr Emanuel com alunos ministrando o uso do butterfly',
    title: 'Hands-on com Butterfly',
    description: 'Dr. Emanuel demonstrando técnicas práticas'
  },
  {
    src: img2,
    alt: 'Dr Emanuel ensinando',
    title: 'Ensino Personalizado',
    description: 'Acompanhamento individual de cada aluno'
  },
  {
    src: img3,
    alt: 'Turma',
    title: 'Nossa Primeira Turma',
    description: 'Turma 2025 em formação'
  },
  {
    src: img4,
    alt: 'Turma e equipe',
    title: 'Equipe Completa',
    description: 'Alunos e instrutores unidos no aprendizado'
  },
  {
    src: img5,
    alt: 'Dr Luan ministrando uma aula',
    title: 'Expertise em Ação',
    description: 'Dr. Luan conduzindo sessão prática'
  },
  {
    src: img6,
    alt: 'Aula do Dr Luan',
    title: 'Prática Supervisionada',
    description: 'Desenvolvimento de habilidades clínicas'
  }
];

export function StudentGallery() {
  return (
    <section 
      id="alunos" 
      className="py-20 px-6 relative overflow-hidden bg-white"
      data-testid="section-student-gallery"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-slate-700 font-body font-medium">
              Turma 2025
            </span>
          </div>

          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-gradient-heading mb-6"
            data-testid="text-gallery-title"
          >
            Equipe e alunos
          </h2>
          
          <p 
            className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-body font-medium mb-4"
            data-testid="text-gallery-subtitle"
          >
            Alunos e instrutores unidos no aprendizado
          </p>

          <p 
            className="text-base text-slate-600 font-body font-medium max-w-2xl mx-auto leading-relaxed"
            data-testid="text-gallery-description"
          >
            Veja como nossos alunos vivenciam na prática tudo que aprendem em teoria, 
            desenvolvendo habilidades clínicas essenciais em um ambiente de aprendizado colaborativo.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              data-testid={`card-student-${index}`}
            >
              {/* Card Container with Liquid Glass Effect */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-testid={`img-student-${index}`}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 
                    className="text-xl font-body font-medium text-white mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500"
                    data-testid={`text-student-title-${index}`}
                  >
                    {image.title}
                  </h3>
                  <p 
                    className="text-sm text-white/70 font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    data-testid={`text-student-description-${index}`}
                  >
                    {image.description}
                  </p>
                </div>

                {/* Top Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg" />
                </div>
              </div>

              {/* External Glow Effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-purple-50 border border-purple-100 shadow-lg">
            <p className="text-slate-700 font-body font-medium text-lg mb-4">
              Faça parte da próxima turma e viva essa experiência transformadora
            </p>
            <a 
              href="#preco" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-body font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              data-testid="button-join-next-class"
            >
              Inscreva-se Agora
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
