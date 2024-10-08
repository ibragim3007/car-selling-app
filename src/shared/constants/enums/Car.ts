// TODO - Обновить значения

import { BaseTypeDictionary } from '@/shared/types/dictionary.types';

export interface IEnum {
  id: number | null;
  text?: string;
  name?: string;
}

export const colors = [
  { id: 0, text: 'не определен', value: '#99999' },
  { id: 1, text: 'Белый', value: '#FAFBFB' },
  { id: 2, text: 'Чёрный', value: '#040001' },
  { id: 3, text: 'Серый', value: '#97948F' },
  { id: 4, text: 'Серебристый', value: '#CACECB' },
  { id: 5, text: 'Розовый', value: '#FFC0CB' },
  { id: 6, text: 'Красный', value: '#EE1D19' },
  { id: 7, text: 'Бордовый', value: '#910900' },
  { id: 8, text: 'Желтый', value: '#FFD600' },
  { id: 9, text: 'Бежевый', value: '#C49648' },
  { id: 10, text: 'Оранжевый', value: '#ff7119' },
  { id: 11, text: 'Золотистый', value: '#DEA522' },
  { id: 12, text: 'Коричневый', value: '#4c1700' },
  { id: 13, text: 'Зелёный', value: '#007F00' },
  { id: 14, text: 'Голубой', value: '#22A0F8' },
  { id: 15, text: 'Синий', value: '#0000CC' },
  { id: 16, text: 'Фиолетовый', value: '#4A2197' },
  { id: 17, text: 'Пурпурный', value: '#771651' },
];

export const transmissions = [
  {
    id: 1,
    name: 'механика',
  },
  {
    id: 2,
    name: 'автомат',
  },
  {
    id: 3,
    name: 'робот',
  },
  {
    id: 4,
    name: 'вариатор',
  },
];

export const transmissionsAdditional = [
  {
    id: 1,
    text: 'механика',
  },
  {
    id: 2,
    text: 'автомат',
  },
  {
    id: 3,
    text: 'робот',
  },
  {
    id: 4,
    text: 'вариатор',
  },
  {
    id: 5,
    text: 'автомат', // Гидроавтомат
  },
];

export const gears = [
  {
    id: 1,
    name: 'передний',
  },
  {
    id: 2,
    name: 'задний',
  },
  {
    id: 3,
    name: 'полный',
  },
];

export const ices = [
  {
    id: 1,
    name: 'бензин',
  },
  {
    id: 2,
    name: 'дизель',
  },
  {
    id: 3,
    name: 'гибрид',
  },
  {
    id: 4,
    name: 'электро',
  },
  {
    id: 5,
    name: 'газ',
  },
];

export const carTypes = [
  {
    id: 1,
    name: 'легковой',
  },
  {
    id: 2,
    name: 'грузовой',
  },
  {
    id: 3,
    name: 'коммерческий',
  },
  {
    id: 4,
    name: 'спецтехника',
  },
  {
    id: 5,
    name: 'мототехника',
  },
];

export const carMiliages = [
  {
    id: 0,
    text: 'Любые',
  },
  {
    id: 1,
    text: 'Новые',
  },
  {
    id: 2,
    text: 'С пробегом',
  },
];

export const ownerTypes = [
  {
    id: 0,
    text: 'Любые',
  },
  {
    id: 1,
    text: 'Частники',
  },
  {
    id: 2,
    text: 'Дилеры',
  },
  {
    id: 3,
    text: 'Проф',
  },
];

export const priceTypes = [
  {
    id: 0,
    text: 'Без оценки',
  },
  {
    id: 1,
    text: 'Высокая',
  },
  {
    id: 2,
    text: 'Нормальная',
  },
  {
    id: 3,
    text: 'Хорошая',
  },
  {
    id: 4,
    text: 'Отличная',
  },
];

export const owners: BaseTypeDictionary[] = [
  {
    id: 0,
    name: 'Неважно',
  },
  {
    id: 1,
    name: '1 владелец',
  },
  {
    id: 2,
    name: 'До 2 владельцев',
  },
  {
    id: 3,
    name: 'До 3 владельцев',
  },
  {
    id: 4,
    name: 'До 4 владельцев',
  },
  {
    id: 5,
    name: 'До 5 владельцев',
  },
];

export const states = [
  {
    id: null,
    text: 'Любые',
  },
  {
    id: 0,
    text: 'Небитые',
  },
  {
    id: 1,
    text: 'Битые',
  },
];

export const wheels = [
  {
    id: 0,
    name: 'любой',
  },
  {
    id: 1,
    name: 'левый',
  },
  {
    id: 2,
    name: 'правый',
  },
];

export const bodies = [
  { id: '1', text: 'Седан' },
  { id: '2', text: 'Хэтчбек' },
  { id: '3', text: 'Универсал' },
  { id: '4', text: 'Лифтбек' },
  { id: '5', text: 'Фастбек' },
  { id: '6', text: 'Мотоцикл' },
  { id: '7', text: 'Внедорожник' },
  { id: '8', text: 'Купе' },
  { id: '9', text: 'Микроавтобус' },
  { id: '10', text: 'Скутер' },
  { id: '11', text: 'Снегоход' },
  { id: '12', text: 'Рефрижератор' },
  { id: '13', text: 'Лёгкий грузовик' },
  { id: '14', text: 'Минивэн' },
  { id: '15', text: 'Микровэн' },
  { id: '16', text: 'Компактвэн' },
  { id: '17', text: 'Автобус' },
  { id: '18', text: 'Кабриолет' },
  { id: '19', text: 'Автодом' },
  { id: '20', text: 'Изотермический' },
  { id: '21', text: 'Кроссовер' },
  { id: '22', text: 'Лимузин' },
  { id: '23', text: 'Шасси' },
  { id: '24', text: 'Пикап' },
  { id: '25', text: 'Эвакуатор' },
  { id: '26', text: 'Самосвал' },
  { id: '27', text: 'Тягач' },
  { id: '28', text: 'Бортовой грузовик' },
  { id: '29', text: 'Сельхозтехника' },
  { id: '30', text: 'Хардтоп' },
  { id: '31', text: 'Цельнометаллический' },
  { id: '32', text: 'Родстер' },
  { id: '33', text: 'Грузовик' },
  { id: '34', text: 'Квадроцикл' },
  { id: '35', text: 'Промтоварный фургон' },
  { id: '36', text: 'Фургон' },
  { id: '37', text: 'Тент' },
  { id: '38', text: 'Прицеп' },
  { id: '39', text: 'Автоцистерна' },
  { id: '40', text: 'Спецтехника' },
];
