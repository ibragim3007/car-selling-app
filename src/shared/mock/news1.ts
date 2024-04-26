import { INews } from '../types/news';

const mockNewsObjects: INews[] = [];

// Мокнутые объекты INews

// Функция для генерации случайного числа в диапазоне
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Фиктивные ссылки на изображения
const imageUrls = [
  'https://via.placeholder.com/400',
  'https://via.placeholder.com/500',
  'https://via.placeholder.com/600',
  'https://via.placeholder.com/700',
  'https://via.placeholder.com/800',
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
