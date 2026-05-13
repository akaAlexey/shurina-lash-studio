import lashFlatlay from '../assets/images/tools/lash-flatlay.webp'
import toolsTray from '../assets/images/tools/tools-tray.webp'
import lashesNatural from '../assets/images/works/lashes-natural.webp'
import lashesProcess from '../assets/images/works/lashes-process.webp'
import lashesVolume from '../assets/images/works/lashes-volume.webp'

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
    title: 'Натуральный эффект',
    description: 'Лёгкое подчёркивание взгляда без ощущения перегруза.',
    badge: 'классика',
    image: lashesNatural,
    position: 'center',
  },
  {
    id: 2,
    title: 'Выразительный объём',
    description: 'Более заметный результат для тех, кто любит акцент на глазах.',
    badge: '2D / 3D',
    image: lashesVolume,
    position: 'center',
  },
  {
    id: 3,
    title: 'Процесс работы',
    description: 'Аккуратная постановка ресниц и спокойная работа без спешки.',
    badge: 'стерильность',
    image: lashesProcess,
    position: 'center',
  },
  {
    id: 4,
    title: 'Рабочие материалы',
    description: 'Минимальный набор мастера: пинцеты, палетки, ремувер и расходники.',
    badge: 'материалы',
    image: toolsTray,
    position: 'center',
  },
  {
    id: 5,
    title: 'Палетки и инструменты',
    description: 'Подбор изгиба, длины и толщины под форму глаз клиента.',
    badge: 'инструменты',
    image: lashFlatlay,
    position: 'center',
  },
]
