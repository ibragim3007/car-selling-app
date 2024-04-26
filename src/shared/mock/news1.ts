import { INews } from '../types/news';

const mockNewsObjects: INews[] = [];

// Мокнутые объекты INews

// Функция для генерации случайного числа в диапазоне
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Фиктивные ссылки на изображения
const imageUrls = [
  'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
  'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
  'https://tinyjpg.com/images/social/website.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg',
  'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

// Генерация мокнутых объектов INews
for (let i = 0; i < 10; i++) {
  const randomIndex = getRandomNumber(0, imageUrls.length - 1);
  const newsObject = {
    id: `news_${i + 1}`,
    title: `News ${i + 1}`,
    shortDescription: `Short description for News ${i + 1}`,
    coverImage: imageUrls[randomIndex],
  };
  mockNewsObjects.push(newsObject);
}

export default mockNewsObjects;
