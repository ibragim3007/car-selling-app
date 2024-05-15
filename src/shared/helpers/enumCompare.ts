import { IEnum } from '../constants/enums/Car';

export const enumCompare = (enumV: IEnum[], id: number | null) => {
  return enumV.find(en => en.id === id)?.text;
};
