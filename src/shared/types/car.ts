import { IErrorMessage } from './errors.types';

export interface ICar {
  id: number;
  title: string;
  credate: string;
  timestamp: number;
  price: number;
  delta: number;
  avgPrice: number;
  city: string;
  deviation: number;
  volume: number;
  year: number;
  mileage: number;
  body: string;
  transmission: number;
  picture: string;
  additionalAccess: number;
  color: number;
  drive: number;
  driveString: string;
  ownerCount: number;
  isFakePhone: boolean;
  vin: string;
  grz: string;
  horsepower: number;
  site: number;
  phone: string;
  remont: number;
  url: string;
  wheel: number;
  engine: string;
  favorites: boolean;
  opened: boolean;
  saled: boolean;
  getphone: number;
  index: string;
  isowner: number;
  check: number;
  sellertype: number;
}

export interface ICarBig extends ICar {
  description: string;
  power: number;
  seen: number;
  year: number;
  photos: string[];
  mark: string;
  model: string;
  generation: string;
  state: number;
  carsCount: number;
  adsDates: any[];
  phonesCount: number;
  reportUrl: string;
  ownerType: number;
  priceType: number;
  videoUrl: string;
}

export interface IErrorCars {
  errors: IErrorMessage[];
  results: ICar[];
}

export interface ICarParams {
  filters: string;
  lastId: number;
  fromid: number;
  toid: number;
  av100Marka: number;
}
