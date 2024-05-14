import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { TextFieldProps } from '@/shared/ui/inputs/TextField';
import RowList from '../Informers/tables/RowList';
import { IFilterCreate } from '@/shared/types/filters.types';
import { ListProps } from '../Informers/tables/List';

export interface IPageData {
  search: TextFieldProps;
  items: BaseTypeDictionary[];
  rowItem: typeof RowList;
  name: keyof IFilterCreate;
  listProps?: Partial<ListProps>;
}
