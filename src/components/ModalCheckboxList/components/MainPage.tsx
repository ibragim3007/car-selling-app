import List, { ListProps } from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';

import SearchInput from '@/components/ModalCheckboxList/components/SearchInput';
import { useModalcheckbox } from '@/shared/hooks/helpers/useModalcheckbox';
import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';
import { TextFieldProps } from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import React from 'react';
import AcceptButton from './AcceptButton';

export interface MainPagePropsGlobal extends Omit<MainPageProps, 'checkModalboxUse'> {}

export interface MainPageProps {
  search: TextFieldProps;
  items: BaseTypeDictionary[];
  name: keyof IFilterCreate;
  listProps?: Partial<ListProps>;
  checkModalboxUse: ReturnType<typeof useModalcheckbox>;
}

const MainPage = ({ name, items, search, listProps, checkModalboxUse }: MainPageProps) => {
  const {
    selectedValues,
    searchText,
    isEverythingSelected,
    setSearchText,
    onChange,
    onToggleSelection,
    keyExtractor,
    filterItems,
    acceptChanges,
  } = checkModalboxUse;

  return (
    <Grid flex={1}>
      <SearchInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
        endIcon={<AntDesign name="search1" size={22} />}
        {...search}
      />
      <LabelCheckbox title="Выбрать все" checked={isEverythingSelected} onChange={onToggleSelection} />
      <List
        {...listProps}
        estimatedItemSize={43}
        data={filterItems()}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <RowList onChange={onChange} selectedValues={selectedValues} title={item.name} value={item.id} />
        )}
      />
      <AcceptButton onPress={acceptChanges} />
    </Grid>
  );
};

export default MainPage;
