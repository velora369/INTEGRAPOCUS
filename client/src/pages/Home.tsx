import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import { EquipmentShowcase } from '@/components/EquipmentShowcase';
import { Audience } from '@/components/Audience';
import { Outcomes } from '@/components/Outcomes';
import { FormatDate } from '@/components/FormatDate';
import { Professors } from '@/components/Professors';
import { Pricing } from '@/components/Pricing';
import { Notices } from '@/components/Notices';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { generateNoiseDataUrl } from '@/lib/noise';
import { createEventSchema } from '@/lib/schema';

export default function Home() {
  useEffect(() => {
    // Generate and set noise texture
    const noiseUrl = generateNoiseDataUrl();
    document.documentElement.style.setProperty('--noise-url', `url(${noiseUrl})`);

    // Add smooth scroll behavior
    document.documentElement.classList.add('smooth-scroll');

    // Add JSON-LD schema for SEO
    const schema = createEventSchema();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-gradient-indigo-night with-grain min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <PartnersCarousel />
        <Audience />
        <Professors />
        <Outcomes />
        <EquipmentShowcase />
        <FormatDate />
        <Pricing />
        <FAQ />
        <Notices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
