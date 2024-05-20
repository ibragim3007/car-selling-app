export interface ISourceGroups {
  sourceGroups: ISourceGroup[];
}

export interface ISourceGroup {
  Sources: ISource[];
  Id: number;
  Name: string;
}

export interface ISource {
  Id: number;
  Name: string;
}
