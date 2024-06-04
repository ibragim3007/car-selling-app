export type BaseTypeDictionary = {
  id: number;
  name: string;
};

export type orderIdType = {
  orderId: number;
};

export interface IDictionaryRoot {
  sites: Site[];
  regions: Region[];
  regioncodes: Regioncode[];
  marks: Mark[];
  transmissions: Transmission[];
  ices: Ice[];
  gears: Gear[];
  bodies: Body[];
  avgCostDeviations: AvgCostDeviation[];
}

export interface Site extends BaseTypeDictionary {}

export interface Region extends BaseTypeDictionary, orderIdType {}

export interface Regioncode extends BaseTypeDictionary, orderIdType {}

export interface Mark extends BaseTypeDictionary {}

export interface Transmission extends BaseTypeDictionary {}

export interface Ice extends BaseTypeDictionary {}

export interface Gear extends BaseTypeDictionary {}

export interface Body extends BaseTypeDictionary {}

export interface AvgCostDeviation extends BaseTypeDictionary, orderIdType {}

export interface IRegionsDict {
  requestdate: string;
  regions: IRegion[];
}

export interface IRegion {
  key: number;
  regionid: number;
}

export interface IMarkaModel {
  modelid: number;
  markaid: number;
  marka: string;
  model: string;
}

export interface IMarkToModel {
  name: string;
  id: number;
  model: IModel[];
}

export interface IModel {
  id: number;
  name: string;
}

export interface ICitiesModel extends BaseTypeDictionary {
  regionid: number;
  lat: number;
  lng: number;
}
