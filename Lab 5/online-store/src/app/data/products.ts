import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 128GB',
    description:
      'Flagship smartphone with a bright Super Retina display and a 48 MP camera. Great for photography, video, and everyday tasks.',
    price: 429990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113138460/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 256GB',
    description:
      'Powerful Android phone with Galaxy AI, vivid AMOLED display, and triple camera setup. Perfect for gaming and multitasking.',
    price: 449990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-8-gb-256-gb-chernyi-117420331/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 13 Pro 256GB',
    description:
      'Mid-range phone with a 200 MP camera, AMOLED display, and 5000 mAh battery. Excellent value for daily social media and entertainment.',
    price: 179990,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-12-gb-256-gb-chernyi-116764326/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Samsung Galaxy A55 256GB',
    description:
      'Stylish mid-range phone with Super AMOLED display, water resistance, and long battery life. A reliable everyday companion.',
    price: 219990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-8-gb-256-gb-chernyi-119856489/',
    likes: 0,
    categoryId: 1,
  },
  {
    id: 5,
    name: 'Huawei Nova 12i 128GB',
    description:
      'Sleek smartphone with a curved display and 108 MP camera. Lightweight design with fast charging for an active lifestyle.',
    price: 109990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/huawei-nova-12i-8-gb-128-gb-chernyi-120822325/',
    likes: 0,
    categoryId: 1,
  },

  {
    id: 6,
    name: 'Apple MacBook Air 13 M2',
    description:
      'Ultralight laptop with Apple M2 chip delivering silent, fanless performance. Ideal for coding, design, and all-day productivity.',
    price: 599990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-8-gb-256-gb-2022-space-gray-105933751/',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 7,
    name: 'ASUS TUF Gaming A15',
    description:
      'Gaming laptop with RTX graphics and a 144 Hz display. Built tough for heavy workloads and modern AAA titles.',
    price: 519990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506nf-hn005-16-gb-512-gb-ssd-black-112120602/',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 8,
    name: 'Lenovo IdeaPad 3 15ITL6',
    description:
      'Affordable everyday laptop with Intel Core i5, 8 GB RAM, and a Full HD display. Great for studying, browsing, and office work.',
    price: 249990,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-8-gb-256-gb-ssd-108859365/',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 9,
    name: 'HP Pavilion 15-eg3000',
    description:
      'Versatile notebook with 12th Gen Intel processor and slim aluminum design. Handles everyday tasks with comfortable typing experience.',
    price: 349990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eg3000-8-gb-512-gb-ssd-serebristyi-115439262/',
    likes: 0,
    categoryId: 2,
  },
  {
    id: 10,
    name: 'Acer Aspire 5 A515-58M',
    description:
      'Well-balanced laptop with a bright IPS screen and 512 GB SSD. A solid choice for students and remote workers.',
    price: 289990,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/acer-aspire-5-a515-58m-8-gb-512-gb-ssd-silver-116205438/',
    likes: 0,
    categoryId: 2,
  },

  {
    id: 11,
    name: 'Apple AirPods Pro 2 (USB-C)',
    description:
      'Premium wireless earbuds with adaptive noise cancellation, spatial audio, and a MagSafe charging case. Seamless Apple ecosystem pairing.',
    price: 139990,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-magsafe-usb-c-white-113677582/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 12,
    name: 'Samsung Galaxy Buds2 Pro',
    description:
      'Compact earbuds with Hi-Fi 360 Audio, active noise cancellation, and IPX7 water resistance. Rich bass and crisp detail.',
    price: 79990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-graphite-106831255/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 13,
    name: 'JBL Tune 520BT',
    description:
      'Wireless on-ear headphones with JBL Pure Bass sound and up to 57 hours of battery life. Lightweight and foldable for travel.',
    price: 29990,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/jbl-tune-520bt-chernyi-115206348/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 14,
    name: 'Sony WH-1000XM5',
    description:
      'Industry-leading over-ear headphones with best-in-class noise cancellation, 30-hour battery, and premium comfort.',
    price: 189990,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105604655/',
    likes: 0,
    categoryId: 3,
  },
  {
    id: 15,
    name: 'Marshall Major IV',
    description:
      'Iconic wireless headphones with signature Marshall sound, 80+ hours playtime, and a classic vinyl-inspired design.',
    price: 49990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102646361/',
    likes: 0,
    categoryId: 3,
  },

  {
    id: 16,
    name: 'Apple iPad 10th Gen 64GB',
    description:
      'Colorful all-screen iPad with A14 Bionic chip, 10.9-inch Liquid Retina display, and USB-C. Great for study and creativity.',
    price: 299990,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-2022-64-gb-wi-fi-serebristyi-109254831/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 17,
    name: 'Samsung Galaxy Tab S9 FE 128GB',
    description:
      'Versatile Android tablet with S Pen included, vivid 10.9-inch display, and IP68 water resistance for work and entertainment.',
    price: 249990,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-6-gb-128-gb-seryi-116129448/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 18,
    name: 'Xiaomi Pad 6 128GB',
    description:
      'High-performance tablet with Snapdragon 870, 144 Hz display, and quad speakers. Exceptional value for media and gaming.',
    price: 179990,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-gb-128-gb-gravity-gray-112684502/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 19,
    name: 'Lenovo Tab M10 Plus 3rd Gen',
    description:
      'Family-friendly tablet with a 10.6-inch 2K display, dual speakers with Dolby Atmos, and a kid-safe mode.',
    price: 99990,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-3rd-gen-4-gb-128-gb-serebristyi-109687553/',
    likes: 0,
    categoryId: 4,
  },
  {
    id: 20,
    name: 'Huawei MatePad SE 64GB',
    description:
      'Affordable tablet with a 10.4-inch Full HD display, eye-comfort mode, and long-lasting battery for reading and browsing.',
    price: 89990,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1632882765546-1ee75f53becb?auto=format&fit=crop&w=800&q=80',
    link: 'https://kaspi.kz/shop/p/huawei-matepad-se-4-gb-64-gb-temno-sinii-108529461/',
    likes: 0,
    categoryId: 4,
  },
];
