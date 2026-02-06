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
    id: 'marruecos-1',
    title: 'Descubre Bangkok con Iberojet',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Descubre Bangkok con Iberojet',
    img: 'https://picsum.photos/seed/avoris-6/264/188',
    alt: 'Paisaje desértico con camellos',
    badges: ['quads'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'explora'],
    breakdown: {
      lines: [
        { label: 'Precio antes de impuestos', value: 1124.0 },
        { label: 'Impuestos', value: 4.43 },
        { label: 'Lorem ipsum', value: 150.42 }
      ],
      total: 2455.0
    }
  },
  {
    id: 'marruecos-2',
    title: 'Descubre Bangkok con Iberojet',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Descubre Bangkok con Iberojet',
    img: 'https://picsum.photos/seed/avoris-1/264/188',
    alt: 'Paisaje desértico con camellos',
    badges: ['quads'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'explora'],
    breakdown: {
      lines: [
        { label: 'Precio antes de impuestos', value: 1124.0 },
        { label: 'Impuestos', value: 4.43 },
        { label: 'Lorem ipsum', value: 150.42 }
      ],
      total: 2455.0
    }
  },
  {
    id: 'marruecos-3',
    title: 'Descubre Bangkok con Iberojet',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Descubre Bangkok con Iberojet',
    img: 'https://picsum.photos/seed/avoris-3/264/188',
    alt: 'Paisaje desértico con camellos',
    badges: ['quads'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'explora'],
    breakdown: {
      lines: [
        { label: 'Precio antes de impuestos', value: 1124.0 },
        { label: 'Impuestos', value: 4.43 },
        { label: 'Lorem ipsum', value: 150.42 }
      ],
      total: 2455.0
    }
  },
  {
    id: 'marruecos-4',
    title: 'Descubre Bangkok con Iberojet',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Descubre Bangkok con Iberojet',
    img: 'https://picsum.photos/seed/avoris-2/264/188',
    alt: 'Paisaje desértico con camellos',
    badges: ['quads'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'explora'],
    breakdown: {
      lines: [
        { label: 'Precio antes de impuestos', value: 1124.0 },
        { label: 'Impuestos', value: 4.43 },
        { label: 'Lorem ipsum', value: 150.42 }
      ],
      total: 2455.0
    }
  },
  {
    id: 'marruecos-5',
    title: 'Descubre Bangkok con Iberojet',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Descubre Bangkok con Iberojet',
    img: 'https://picsum.photos/seed/avoris-4/264/188',
    alt: 'Paisaje desértico con camellos',
    badges: ['quads'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'explora'],
    breakdown: {
      lines: [
        { label: 'Precio antes de impuestos', value: 1124.0 },
        { label: 'Impuestos', value: 4.43 },
        { label: 'Lorem ipsum', value: 150.42 }
      ],
      total: 2455.0
    }
  },
  {
    id: 'marruecos-6',
    title: 'Descubre Bangkok con Iberojet',
    location: 'Marruecos, África',
    daysText: '9 días',
    description: 'Descubre Bangkok con Iberojet',
    img: 'https://picsum.photos/seed/avoris-5/264/188',
    alt: 'Paisaje desértico con camellos',
    badges: ['quads'],
    priceValue: 248,
    priceText: '248,00 €',
    tags: ['aventura', 'explora'],
    breakdown: {
      lines: [
        { label: 'Precio antes de impuestos', value: 1124.0 },
        { label: 'Impuestos', value: 4.43 },
        { label: 'Lorem ipsum', value: 150.42 }
      ],
      total: 2455.0
    }
  }
  
  
];

  