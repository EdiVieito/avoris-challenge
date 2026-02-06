export interface PriceBreakdownLine {
  label: string;
  value: number;
}

export interface Item {
  id: string;

  // Card UI
  title: string;        
  location: string;    
  daysText: string;  
  description: string;
  img: string;
  alt: string;

  // Labels
  badges: string[]; 

  // Precio (para UI y para filtrar)
  priceValue: number;   
  priceText: string; 

  // Para filtro
  tags: string[];      

  // Modal
  breakdown: {
    lines: PriceBreakdownLine[];
    total: number;
  };
}

export const ITEMS: Item[] = [
  {
    id: 'item-1',
    title: 'Ruta en quad por el desierto',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Aventura en quad por el desierto',
    img: 'https://picsum.photos/seed/avoris-1/264/188',
    alt: 'Ruta en quad',
    badges: ['Aventura'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'quads'],
    breakdown: {
      lines: [
        { label: 'Base', value: 1124 },
        { label: 'Impuestos', value: 150 }
      ],
      total: 1274
    }
  },
  {
    id: 'item-2',
    title: 'Surf en la costa atlántica',
    location: 'Agadir, Marruecos',
    daysText: '7 días',
    description: 'Experiencia de surf y relax',
    img: 'https://picsum.photos/seed/avoris-2/264/188',
    alt: 'Surf en la costa',
    badges: ['Explora'],
    priceValue: 189,
    priceText: '189,00 €',
    tags: ['explora', 'surf'],
    breakdown: {
      lines: [
        { label: 'Base', value: 980 },
        { label: 'Impuestos', value: 120 }
      ],
      total: 1100
    }
  },
  {
    id: 'item-3',
    title: 'Rafting en ríos de montaña',
    location: 'Atlas, Marruecos',
    daysText: '10 días',
    description: 'Rafting y naturaleza',
    img: 'https://picsum.photos/seed/avoris-3/264/188',
    alt: 'Rafting en montaña',
    badges: ['Aventura'],
    priceValue: 320,
    priceText: '320,00 €',
    tags: ['aventura', 'rafting'],
    breakdown: {
      lines: [
        { label: 'Base', value: 1300 },
        { label: 'Impuestos', value: 200 }
      ],
      total: 1500
    }
  },
  {
    id: 'item-4',
    title: 'Parapente sobre la costa',
    location: 'Essaouira, Marruecos',
    daysText: '5 días',
    description: 'Vuelos y actividades costeras',
    img: 'https://picsum.photos/seed/avoris-4/264/188',
    alt: 'Parapente en la costa',
    badges: ['Aventura'],
    priceValue: 279,
    priceText: '279,00 €',
    tags: ['aventura', 'parapente'],
    breakdown: {
      lines: [
        { label: 'Base', value: 1150 },
        { label: 'Impuestos', value: 160 }
      ],
      total: 1310
    }
  },
  {
    id: 'item-5',
    title: 'Escapada cultural urbana',
    location: 'Marrakech, Marruecos',
    daysText: '4 días',
    description: 'Cultura, mercados y gastronomía',
    img: 'https://picsum.photos/seed/avoris-5/264/188',
    alt: 'Ciudad y mercado',
    badges: ['Explora'],
    priceValue: 129,
    priceText: '129,00 €',
    tags: ['explora'],
    breakdown: {
      lines: [
        { label: 'Base', value: 650 },
        { label: 'Impuestos', value: 90 }
      ],
      total: 740
    }
  },
  {
    id: 'item-6',
    title: 'Pack multi-aventura',
    location: 'Ouarzazate, Marruecos',
    daysText: '8 días',
    description: 'Quads, rutas y experiencias combinadas',
    img: 'https://picsum.photos/seed/avoris-6/264/188',
    alt: 'Multiaventura en desierto',
    badges: ['Aventura', 'Top'],
    priceValue: 399,
    priceText: '399,00 €',
    tags: ['aventura', 'quads'],
    breakdown: {
      lines: [
        { label: 'Base', value: 1500 },
        { label: 'Impuestos', value: 220 }
      ],
      total: 1720
    }
  }
];