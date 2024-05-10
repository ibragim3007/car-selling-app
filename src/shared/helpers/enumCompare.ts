import { IEnum } from '../constants/enums/Car';

export const enumCompare = (enumV: IEnum[], id: number) => {
  return enumV.find(en => en.id === id)?.text;
};
