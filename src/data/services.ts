export interface Service {
  id: string
  title: string
  duration: string
  price: string
  description: string
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 'two-d',
    title: '2D',
    duration: '2 ч',
    price: '2 200 ₽',
    description: 'Популярный объем для заметного, но мягкого взгляда.',
    popular: true,
  },
  {
    id: 'classic',
    title: 'Классическое наращивание',
    duration: '1 ч 40 мин',
    price: '1 700 ₽',
    description: 'Естественный эффект для аккуратного ежедневного образа.',
  },
  {
    id: 'one-five-d',
    title: '1.5D',
    duration: '1 ч 50 мин',
    price: '1 900 ₽',
    description: 'Чуть больше выразительности без перегруза.',
  },
  {
    id: 'three-d',
    title: '3D',
    duration: '2 ч 20 мин',
    price: '2 600 ₽',
    description: 'Более яркий результат для любительниц выразительного объема.',
  },
  {
    id: 'wet-effect',
    title: 'Мокрый эффект',
    duration: '2 ч',
    price: '2 400 ₽',
    description: 'Трендовый эффект с легкой графичностью.',
  },
  {
    id: 'correction',
    title: 'Коррекция до 3 недель',
    duration: '1 ч 20 мин',
    price: 'от 1 300 ₽',
    description: 'Подходит для работ, сделанных у Алины.',
  },
  {
    id: 'removal',
    title: 'Снятие без последующего наращивания',
    duration: '25 мин',
    price: '400 ₽',
    description: 'Аккуратное снятие без повреждения натуральных ресниц.',
  },
]
