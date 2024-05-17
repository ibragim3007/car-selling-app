import List, { ListProps } from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';

import SearchInput from '@/components/ModalCheckboxList/components/SearchInput';
import { useModalcheckbox } from '@/shared/hooks/helpers/useModalcheckbox';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import { TextFieldProps } from '@/shared/ui/inputs/TextField';
import TitleCheckbox from '@/shared/ui/inputs/TitleCheckbox';
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
  showAllSelect?: boolean;
  checkModalboxUse: ReturnType<typeof useModalcheckbox>;
}

const MainPage = ({ name, items, search, listProps, checkModalboxUse, showAllSelect }: MainPageProps) => {
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

  const { colors } = useTheme();

  return (
    <Grid flex={1}>
      <Grid padding={12}>
        <SearchInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          endIcon={<AntDesign name="search1" size={22} />}
          {...search}
        />
      </Grid>
      {showAllSelect && (
        <TitleCheckbox
          paddingHorizontal={18}
          paddingVertical={14}
          style={{ borderBottomColor: colors.divider, borderBottomWidth: 1 }}
          title="Выбрать все"
          checked={isEverythingSelected}
          onChange={onToggleSelection}
        />
      )}
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
