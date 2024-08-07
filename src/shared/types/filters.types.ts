export type TRange = [number, number];

export interface IFilterCreate {
  idCities?: number[];
  devicetoken?: string;
  name?: string;
  years?: TRange;
  prices?: TRange;
  mileages?: TRange;
  horsepower?: number[];
  marks?: number[];
  models?: number[];
  states?: number[];
  transmissions?: number[];
  wheels?: number[];
  regions?: number[];
  sites?: number[];
  secondhand?: number;
  notifications?: boolean;
  enabled?: boolean;
  ices?: number[];
  gears?: number[];
  owners?: number;
  bodies?: number[];
  avgCostDeviation?: number;
  iceValues?: number[];
  cities?: string;
  ownerType?: number;
  priceTypes?: number[];
  carState?: number;
  carTypes?: number[];
  avgPriceDelta?: number[];
  ownersCount?: number[];
  FilterVersion?: string;
  credateTimeStamp?: number;
  credateString?: string;
  pricechanges?: number[];
  minPricechange?: number;
  idCity?: number;
  cityName?: string;
  distance?: number;
}

export interface IEditFilter extends IFilterCreate {}

export interface IFilter {
  id: number;
  cityList: any[];
  name: string;
  horsepower?: number[];
  marks?: number[];
  models?: number[];
  years?: TRange;
  prices?: TRange;
  mileages?: TRange;
  transmissions?: number[];
  wheels?: number[];
  regions?: number[];
  sites?: number[];
  secondhand: number;
  notifications: boolean;
  enabled: boolean;
  ices?: number[];
  gears?: number[];
  iceValues?: number[];
  ownerType: number;
  carState: number;
  ownersCount: number[];
  FilterVersion: string;
  credateTimeStamp: number;
  credateString: string;
  pricechanges: number[];
  minPricechange: number;
  idCity: number;
  cityName: string;
  distance: number;
  carTypes?: number[];
}
