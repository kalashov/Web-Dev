import { EventItem } from '../models/event.model';

export const EVENTS: EventItem[] = [
  {
    id: 1,
    name: 'Neon Nights Festival',
    description:
      'Ночной фестиваль с лайв‑сетом и световым шоу. Вход по электронному билету, места свободные.',
    price: 12000,
    rating: 4.6,
    image: 'https://picsum.photos/seed/neon1/800/500',
    images: [
      'https://picsum.photos/seed/neon1a/1200/800',
      'https://picsum.photos/seed/neon1b/1200/800',
      'https://picsum.photos/seed/neon1c/1200/800'
    ],
    link: 'https://example.com/events/neon-nights-festival',
    isFavorite: false
  },
  {
    id: 2,
    name: 'Standup: Open Mic',
    description:
      'Свежие шутки и новые имена на сцене. Формат без цензуры, длительность около 90 минут.',
    price: 6500,
    rating: 4.1,
    image: 'https://picsum.photos/seed/standup2/800/500',
    images: [
      'https://picsum.photos/seed/standup2a/1200/800',
      'https://picsum.photos/seed/standup2b/1200/800',
      'https://picsum.photos/seed/standup2c/1200/800'
    ],
    link: 'https://example.com/events/standup-open-mic',
    isFavorite: false
  },
  {
    id: 3,
    name: 'Symphony at Sunset',
    description:
      'Симфонический концерт под открытым небом. Программа: классика и саундтреки, уютная атмосфера.',
    price: 18000,
    rating: 4.9,
    image: 'https://picsum.photos/seed/symph3/800/500',
    images: [
      'https://picsum.photos/seed/symph3a/1200/800',
      'https://picsum.photos/seed/symph3b/1200/800',
      'https://picsum.photos/seed/symph3c/1200/800'
    ],
    link: 'https://example.com/events/symphony-at-sunset',
    isFavorite: false
  },
  {
    id: 4,
    name: 'Street Food Week',
    description:
      'Фестиваль уличной еды с маркетом и DJ‑сетами. Десятки точек, сезонные меню и дегустации.',
    price: 4000,
    rating: 3.8,
    image: 'https://picsum.photos/seed/food4/800/500',
    images: [
      'https://picsum.photos/seed/food4a/1200/800',
      'https://picsum.photos/seed/food4b/1200/800',
      'https://picsum.photos/seed/food4c/1200/800'
    ],
    link: 'https://example.com/events/street-food-week',
    isFavorite: false
  },
  {
    id: 5,
    name: 'City Marathon 10K',
    description:
      'Забег по центру города на 10 км. Стартовый пакет, медаль финишёра и пункты воды по маршруту.',
    price: 9000,
    rating: 4.3,
    image: 'https://picsum.photos/seed/run5/800/500',
    images: [
      'https://picsum.photos/seed/run5a/1200/800',
      'https://picsum.photos/seed/run5b/1200/800',
      'https://picsum.photos/seed/run5c/1200/800'
    ],
    link: 'https://example.com/events/city-marathon-10k',
    isFavorite: false
  },
  {
    id: 6,
    name: 'Indie Rock Live',
    description:
      'Концерт инди‑рок группы с разогревом от местных артистов. Свет, звук и танцпол рядом со сценой.',
    price: 14500,
    rating: 4.0,
    image: 'https://picsum.photos/seed/rock6/800/500',
    images: [
      'https://picsum.photos/seed/rock6a/1200/800',
      'https://picsum.photos/seed/rock6b/1200/800',
      'https://picsum.photos/seed/rock6c/1200/800'
    ],
    link: 'https://example.com/events/indie-rock-live',
    isFavorite: false
  },
  {
    id: 7,
    name: 'Art Expo: Modern Shapes',
    description:
      'Выставка современных художников и инсталляций. Включён аудиогид и зона для фото.',
    price: 7000,
    rating: 4.4,
    image: 'https://picsum.photos/seed/art7/800/500',
    images: [
      'https://picsum.photos/seed/art7a/1200/800',
      'https://picsum.photos/seed/art7b/1200/800',
      'https://picsum.photos/seed/art7c/1200/800'
    ],
    link: 'https://example.com/events/art-expo-modern-shapes',
    isFavorite: false
  },
  {
    id: 8,
    name: 'Workshop: Coffee Basics',
    description:
      'Практический воркшоп по кофе: помол, экстракция, каппинг. Каждый участник сделает два напитка.',
    price: 11000,
    rating: 4.7,
    image: 'https://picsum.photos/seed/coffee8/800/500',
    images: [
      'https://picsum.photos/seed/coffee8a/1200/800',
      'https://picsum.photos/seed/coffee8b/1200/800',
      'https://picsum.photos/seed/coffee8c/1200/800'
    ],
    link: 'https://example.com/events/workshop-coffee-basics',
    isFavorite: false
  },
  {
    id: 9,
    name: 'Kids Science Show',
    description:
      'Интерактивное научное шоу для детей и родителей. Эксперименты на сцене и мини‑лаборатория после.',
    price: 5000,
    rating: 3.9,
    image: 'https://picsum.photos/seed/science9/800/500',
    images: [
      'https://picsum.photos/seed/science9a/1200/800',
      'https://picsum.photos/seed/science9b/1200/800',
      'https://picsum.photos/seed/science9c/1200/800'
    ],
    link: 'https://example.com/events/kids-science-show',
    isFavorite: false
  },
  {
    id: 10,
    name: 'Cinema Night: Classics',
    description:
      'Показ классического кино в зале с мягкими креслами. Перед сеансом — короткое вступление киноведа.',
    price: 8000,
    rating: 4.2,
    image: 'https://picsum.photos/seed/cinema10/800/500',
    images: [
      'https://picsum.photos/seed/cinema10a/1200/800',
      'https://picsum.photos/seed/cinema10b/1200/800',
      'https://picsum.photos/seed/cinema10c/1200/800'
    ],
    link: 'https://example.com/events/cinema-night-classics',
    isFavorite: false
  }
];

