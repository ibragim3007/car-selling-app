import { ICar } from '../types';

// Массив для хранения созданных объектов
const carObjects: ICar[] = [];

// Массив ссылок на реальные изображения автомобилей
const carImages: string[] = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W4rxJETzDgRjMBVC_Hr9konxkhMncGk6oqP9wTfFSQ&s',
  'https://avatars.dzeninfra.ru/get-zen_doc/9703229/pub_64787ba1a8deff0f31c35126_6478805396633a4a7210e42e/scale_1200',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsd1Vn_yusl_QFHyGEbvMwEWZ5zP1HjR1gerkQx2A-Q&s',
  'https://cdnn21.img.ria.ru/images/152659/35/1526593587_0:116:1599:1024_600x0_80_0_0_9fecb3c36f20acef097b94db60a43057.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxerdx2n1zT5wkzl-vHS31vuYRKZx0eaCbmWfEkkhYA&s',
  // Добавьте здесь другие ссылки на изображения по желанию
];

// Примеры заголовков для автомобилей
const carTitles: string[] = [
  'Austin Healey',
  'BMW',
  'Car',
  'Aston Martin',
  'Auto',
  // Добавьте здесь другие заголовки по желанию
];

// Примеры списка информации об автомобилях
const carInfoLists: string[][] = [
  ['Year: 2022', 'Engine: 2.0L Turbo', 'Horsepower: 250'],
  ['Year: 2023', 'Engine: 3.0L Turbo', 'Horsepower: 320'],
  ['Year: 2022', 'Engine: 2.0L Turbo', 'Horsepower: 275'],
  ['Year: 2023', 'Engine: 2.5L Hybrid', 'Horsepower: 208'],
  ['Year: 2022', 'Engine: 1.5L Turbo', 'Horsepower: 174'],
  // Добавьте здесь другие списки информации по желанию
];

const carCosts: number[] = [
  25000, 35000, 40000, 45000, 30000,
  // Добавьте здесь другие стоимости по желанию
];

const carDates: Date[] = [
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  new Date(),
  // Добавьте здесь другие даты производства по желанию
];

// Примеры городов, где доступны автомобили
const carCities: string[] = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  // Добавьте здесь другие города по желанию
];

// Создание 10 случайных объектов и добавление их в массив
for (let i = 0; i < 10; i++) {
  const randomIndex = Math.floor(Math.random() * carImages.length);
  const newObj: ICar = {
    image: carImages[randomIndex],
    infoList: carInfoLists[randomIndex],
    title: carTitles[randomIndex],
    cost: carCosts[randomIndex],
    date: carDates[randomIndex],
    city: carCities[randomIndex],
  };
  carObjects.push(newObj);
}

export default carObjects;
