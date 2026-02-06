export interface FilterItem {
    id: string;
    label: string;
    checked?: boolean;
  }
  
  export interface FilterSection {
    id: string;
    title: string;
    icon?: string; 
    type: 'checkbox' | 'price';
    items?: FilterItem[];
  }
  
  export const FILTER_SECTIONS: FilterSection[] = [
    {
      id: 'destinos',
      title: 'Destinos',
      type: 'checkbox',
      items: [
        { id: 'marruecos', label: 'Marruecos' },
        { id: 'africa', label: 'África' },
      ]
    },
    {
      id: 'aventura',
      title: 'Aventura',
      type: 'checkbox',
      items: [
        { id: 'quads', label: 'Quads' },
        { id: 'parapente', label: 'Parapente' },
        { id: 'rafting', label: 'Rafting' },
        { id: 'explora', label: 'Explora', checked: true },
        { id: 'buceo', label: 'Buceo' },
        { id: 'paracaidas', label: 'Paracaídas' },
        { id: 'snowboard', label: 'Snowboard' },
        { id: 'surf', label: 'Surf' },
        { id: 'tiburones', label: 'Tiburones' },
        { id: 'tirolina', label: 'Tirolina' }
      ],
    },
    {
        id: 'alojamiento',
        title: 'Alojamiento',
        type: 'checkbox',
        items: [
          { id: 'hotel', label: 'Hotel' },
          { id: 'casa', label: 'Casa' },
          { id: 'camping', label: 'Camping' },
        ],
      },
    {
      id: 'precio',
      title: 'Precio',
      type: 'price'
    }
  ];
  