export interface INews {
  id: number;
  date: Date;
  title: string;
  descr: string;
  image: string;
  fullimg: string;
}

export interface INewsShort {
  date: Date;
  datetimestamp: number;
  page: number;
  take: number;
  items: INews[];
}
