import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Подвеска бижутерный сплав, бирюза',
    description:
      'Подвеска с декоративным камнем бирюзового цвета на шнурке. Легкое украшение на каждый день в минималистичном стиле.',
    price: 10000,
    rating: 4.0,
    image: '/images/pendant.png',
    images: [
      '/images/pendant.png',
      '/images/pendant.png',
      '/images/pendant.png'
    ],
    link: 'https://kaspi.kz/shop/p/30289122-955907626-dlina-19-sm-natural-nyi-kamen-birjuza-119212106/'
  },
  {
    id: 2,
    name: 'Apple iPhone 15 128GB',
    description:
      'A modern flagship smartphone with a bright display and strong camera setup. Great for photography, everyday tasks, and long-term use.',
    price: 429990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113138460/'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 256GB',
    description:
      'A powerful Android phone with smooth performance and vivid colors. Suitable for gaming, multitasking, and mobile photography.',
    price: 449990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-gb-256-gb-chernyi-117420331/'
  },
  {
    id: 4,
    name: 'Xiaomi Redmi Note 13 Pro 256GB',
    description:
      'Balanced smartphone with strong battery life and a high-resolution camera. A solid option for daily social media and entertainment.',
    price: 179990,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583573636246-18cb2246697f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-12-gb-256-gb-chernyi-116764326/'
  },
  {
    id: 5,
    name: 'Apple AirPods Pro 2',
    description:
      'Wireless earbuds with clear sound and active noise cancellation. Comfortable fit and seamless pairing with Apple devices.',
    price: 139990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-magsafe-usb-c-white-113677582/'
  },
  {
    id: 6,
    name: 'Apple MacBook Air 13 M2',
    description:
      'Light and portable laptop with efficient performance for study and work. Ideal for coding, browsing, and creative tasks on the go.',
    price: 599990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-gb-256-gb-2022-space-gray-105933751/'
  },
  {
    id: 7,
    name: 'ASUS TUF Gaming A15',
    description:
      'A gaming laptop with powerful graphics and high refresh display. Handles modern games and heavy workloads confidently.',
    price: 519990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506nf-hn005-16-gb-512-gb-ssd-black-112120602/'
  },
  {
    id: 8,
    name: 'LG 55" 4K Smart TV',
    description:
      'Large 4K television with smart apps and rich picture quality. A great centerpiece for movies, streaming, and gaming at home.',
    price: 329990,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/lg-55ur78009ll-139-sm-chernyi-111640224/'
  },
  {
    id: 9,
    name: 'Sony PlayStation 5 Slim',
    description:
      'Next-generation game console with fast loading and stunning graphics. Perfect for immersive gaming and entertainment.',
    price: 299990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1-tb-belyi-116731172/'
  },
  {
    id: 10,
    name: 'Samsung Galaxy Watch6',
    description:
      'Smartwatch with health tracking, notifications, and sporty design. Useful for monitoring activity and daily routines.',
    price: 129990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-44-mm-black-111694597/'
  }
];
