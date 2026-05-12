import lashesCloseup from '../assets/images/works/lashes-closeup-01.png'

export interface GalleryItem {
  id: number
  title: string
  description: string
  badge: string
  image: string
  position: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Классический эффект',
    description: 'Аккуратная длина и мягкая линия роста для повседневного образа.',
    badge: 'Classic',
    image: lashesCloseup,
    position: 'center',
  },
  {
    id: 2,
    title: 'Мягкий 2D',
    description: 'Больше выразительности, но без визуальной тяжести на глазах.',
    badge: '2D',
    image: lashesCloseup,
    position: '45% 35%',
  },
  {
    id: 3,
    title: 'Мокрый эффект',
    description: 'Легкая графичность и собранные лучики для современного акцента.',
    badge: 'Wet',
    image: lashesCloseup,
    position: '60% 50%',
  },
  {
    id: 4,
    title: 'Естественный изгиб',
    description: 'Деликатный изгиб, который открывает взгляд и остается спокойным.',
    badge: 'Natural',
    image: lashesCloseup,
    position: '35% 55%',
  },
]
