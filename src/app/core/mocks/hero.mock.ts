export interface HeroCTA {
    image: string;
    alt: string;
    title: string;
    subtitle: string;
    url: string;
  }

  export const HEROS: HeroCTA[] = [
    {
        image: 'https://picsum.photos/seed/avoris-hero-1/1920/400',
        alt: 'Descripción imagen',
        title: 'Ruta por Australia',
        subtitle: 'Si te va la aventura, no te lo puedes perder',
        url: '#',
    },
    {
        image: 'https://picsum.photos/seed/avoris-hero-2/1920/400',
        alt: 'Descripción imagen',
        title: 'Ruta por Asia',
        subtitle: 'Si te va la aventura, no te lo puedes perder',
        url: '#',
    },
    {
        image: 'https://picsum.photos/seed/avoris-hero-3/1920/400',
        alt: 'Descripción imagen',
        title: 'Ruta por América',
        subtitle: 'Si te va la aventura, no te lo puedes perder',
        url: '#',
    }
   
]