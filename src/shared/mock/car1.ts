import { ICar } from '../types';

// Массив для хранения созданных объектов
const carObjects: ICar[] = [];

// Массив ссылок на реальные изображения автомобилей
export const carImages: string[] = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W4rxJETzDgRjMBVC_Hr9konxkhMncGk6oqP9wTfFSQ&s',
  'https://avatars.dzeninfra.ru/get-zen_doc/9703229/pub_64787ba1a8deff0f31c35126_6478805396633a4a7210e42e/scale_1200',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsd1Vn_yusl_QFHyGEbvMwEWZ5zP1HjR1gerkQx2A-Q&s',
  'https://cdnn21.img.ria.ru/images/152659/35/1526593587_0:116:1599:1024_600x0_80_0_0_9fecb3c36f20acef097b94db60a43057.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxerdx2n1zT5wkzl-vHS31vuYRKZx0eaCbmWfEkkhYA&s',
  'https://hips.hearstapps.com/hmg-prod/images/honda-prelude-concept-front-three-quarters-653927960f1f4.jpg?crop=1.00xw:0.920xh;0,0.0801xh&resize=980:*',
  'https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/08/31/11/5565052/cb408c9a3850ffade17fdd8c137f0f865374ddf8.jpg',
  // Добавьте здесь другие ссылки на изображения по желанию
];

// Примеры заголовков для автомобилей
const carTitles: string[] = [
  'Аустин Хейли',
  'БМВ',
  'Машина',
  'Астон Мартин',
  'Авто',
  'Макларен',
  'Лексус',
  // Добавьте здесь другие заголовки по желанию
];

// Примеры списка информации об автомобилях
const carInfoLists: string[][] = [
  ['Двигатель: 2.0L Турбо', 'Лошадиных сил: 250'],
  ['Год: 2023', 'Двигатель: 3.0L Турбо', 'Лошадиных сил: 320'],
  ['Год: 2022', 'Двигатель: 2.0L Турбо'],
  ['Год: 2023', 'Двигатель: 2.5L Гибрид', 'Лошадиных сил: 208'],
  ['Год: 2013', 'Лошадиных сил: 108'],
  ['Год: 2022', 'Двигатель: 1.5L Турбо', 'Лошадиных сил: 174'],
  ['Год: 2008', 'Двигатель: 3.5L Гибрид'],
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
  new Date(),
  new Date(),
  new Date(),
  // Добавьте здесь другие даты производства по желанию
];

// Примеры городов, где доступны автомобили
const carCities: string[] = [
  'Ростов-на-Дону',
  'Москва',
  'Краснодар',
  'Урал',
  'Новосибирск',
  // Добавьте здесь другие города по желанию
];

// Создание 10 случайных объектов и добавление их в массив
for (let i = 0; i < 1000; i++) {
  const randomIndex = Math.floor(Math.random() * carImages.length);
  const newObj: ICar = {
    id: i.toString(),
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
