/**
 * JSON-LD Schema helper for SEO
 */

export interface EventSchema {
  '@context': string;
  '@type': string;
  name: string;
  startDate: string;
  eventAttendanceMode: string;
  location: {
    '@type': string;
    name: string;
    address: string;
  };
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
  performer: Array<{
    '@type': string;
    name: string;
  }>;
  organizer: {
    '@type': string;
    name: string;
  };
  url: string;
}

export function createEventSchema(): EventSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Integra POCUS — Imersão Presencial',
    startDate: '2025-11-29',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'A definir',
      address: 'A definir'
    },
    offers: {
      '@type': 'Offer',
      price: '2497.00',
      priceCurrency: 'BRL'
    },
    performer: [
      {
        '@type': 'Person',
        name: 'Dr. Emanuel Esposito'
      },
      {
        '@type': 'Person',
        name: 'Dr. Luan Moraes'
      }
    ],
    organizer: {
      '@type': 'Organization',
      name: 'Integra POCUS'
    },
    url: typeof window !== 'undefined' ? window.location.href : ''
  };
}
