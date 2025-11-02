export function Outcomes() {
  const outcomes = [
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48">
          <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.481 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.215-1.988c.477-.052.638-.187.761-.342c.196-.247.342-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"/>
            <path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 0 0 2 0z"/>
            <path d="M19 23.064v1.807q.073-.03.149-.057c1.104-.415 2.723-.814 4.85-.814c2.129 0 3.748.4 4.852.814l.149.057v-1.807a8 8 0 0 0-.851-.378c-.896-.335-2.277-.686-4.15-.686c-1.871 0-3.252.35-4.148.686c-.362.136-.645.27-.851.378m11-.564l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 1 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58c1.104-.415 2.723-.814 4.85-.814c2.129 0 3.748.4 4.852.814c.551.206.973.416 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 0 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.002l-.001-.002H29.4s-.001-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.254.35-4.148.686a6 6 0 0 0-.84.372"/>
          </g>
        </svg>
      ),
      title: 'Fundamentos aplicados de POCUS',
      description: 'Princípios físicos do ultrassom, ajustes de equipamento, otimização de imagem e artefatos — tudo com foco prático para uso imediato.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 48 48">
          <path fill="currentColor" fillRule="evenodd" d="M24 13a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m13.92 2.44a2 2 0 0 1-1.36 2.48c-2.376.692-4.522 1.214-6.56 1.561V42a2 2 0 0 1-3.992.181l-1-11A2 2 0 0 1 25 31h-2a2 2 0 0 1-.008.181l-1 11A2 2 0 0 1 18 42V19.444c-2.033-.35-4.171-.861-6.535-1.517a2 2 0 1 1 1.07-3.854c4.608 1.278 8.07 1.912 11.474 1.927c3.396.015 6.85-.585 11.431-1.92a2 2 0 0 1 2.48 1.36" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Aplicações clínicas por sistemas',
      description: 'Avaliação cardíaca, pulmonar, abdominal, vascular e renal. Protocolos rápidos (FAST, BLUE, RUSH) para cenários de emergência e beira-leito.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6 8c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m3.14 11.75L8.85 19l.29-.75c.7-1.75 1.94-3.11 3.47-4.03c-.82-.14-1.69-.22-2.61-.22c-4.42 0-8 1.79-8 4v2h7.27c-.04-.09-.09-.17-.13-.25M17 18c-.56 0-1 .44-1 1s.44 1 1 1s1-.44 1-1s-.44-1-1-1m6 1c-.94 2.34-3.27 4-6 4s-5.06-1.66-6-4c.94-2.34 3.27-4 6-4s5.06 1.66 6 4m-3.5 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"/>
        </svg>
      ),
      title: 'Interpretação que importa',
      description: 'Reconhecer achados normais vs. patológicos, identificar sinais de alarme e integrar a imagem ao contexto clínico do paciente.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path fill="currentColor" d="M11 5H8l4-4l4 4h-3v4.43c-.75.46-1.42 1.03-2 1.69zm11 6l-4-4v3a6.747 6.747 0 0 0-7 6.17A3.006 3.006 0 0 0 9.17 20A3.006 3.006 0 0 0 13 21.83A3.01 3.01 0 0 0 14.83 18c-.3-.86-.98-1.53-1.83-1.83c.47-4 4.47-4.2 4.95-4.2v3zm-11.37.59A7.63 7.63 0 0 0 6 10V7l-4 4l4 4v-3c1.34.03 2.63.5 3.64 1.4c.25-.64.58-1.25.99-1.81"/>
        </svg>
      ),
      title: 'Da imagem à conduta',
      description: 'Como o POCUS muda decisões: indicação de volume, suporte ventilatório, diagnóstico de choque, avaliação de resposta terapêutica e muito mais.'
    },
    {
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6.707 3.707a1 1 0 0 0-1.414-1.414l-1 1l-1 1l-1 1a1 1 0 0 0 1.414 1.414L4 6.414L6.586 9l-2.293 2.293l1.414 1.414L7 11.414l7.086 7.086a2 2 0 0 0 2.828 0l.263-.263l2.293 2.293l1.06-1.06l-2.293-2.293l.263-.263a2 2 0 0 0 0-2.828l-.762-.763l-1.208 1.207a.75.75 0 1 1-1.06-1.06l1.207-1.208l-1.94-1.939l-1.207 1.207a.75.75 0 1 1-1.06-1.06l1.207-1.208L11.414 7l1.293-1.293l-1.414-1.414L9 6.586L6.414 4z"/>
        </svg>
      ),
      title: 'Noções de procedimentos guiados',
      description: 'Punção venosa central, toracocentese, paracentese e outras intervenções guiadas por ultrassom com mais segurança e taxa de sucesso.'
    }
  ];

  return (
    <section
      id="outcomes"
      className="relative py-20 md:py-32 bg-gradient-lavender with-grain"
      role="region"
      aria-labelledby="outcomes-heading"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="outcomes-heading" className="text-3xl md:text-4xl lg:text-5xl text-gradient-heading mb-6 font-title font-bold">
            O que você vai desenvolver?
          </h2>
          <p className="text-lg text-white/80 font-body font-light">
            Habilidades práticas e teóricas para aplicar o ultrassom point-of-care 
            com confiança em qualquer cenário clínico.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <div
                key={index}
                className="card-glass p-6 group hover-elevate active-elevate-2"
                data-testid={`card-outcome-${index}`}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#7C6DFF]/20 to-[#3DA3FF]/20 flex items-center justify-center p-3 sm:p-3.5">
                    <IconComponent />
                  </div>
                </div>
                <h3 className="text-xl text-white mb-3 font-body font-light">
                  {outcome.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-body font-light">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
