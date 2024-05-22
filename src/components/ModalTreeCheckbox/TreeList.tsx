import List, { ListProps } from '@/components/Informers/tables/List';

import { useTreeModalCheckbox } from '@/shared/hooks/helpers/useTreeModalCheckbox';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { IFilterCreate } from '@/shared/types/filters.types';
import { ISourceGroup } from '@/shared/types/source.types';
import { TextFieldProps } from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import React from 'react';
import SearchInput from '../ModalCheckboxList/components/SearchInput';
import TreeListItem from './TreeListItem';

export interface TreeListPropsGlobal extends Omit<TreeListProps, 'checkModalboxUse'> {}

export interface TreeListProps {
  search?: TextFieldProps;
  items: ISourceGroup[];
  name: keyof IFilterCreate;
  listProps?: Partial<ListProps<ISourceGroup>>;
  showAllSelect?: boolean;
  isShowSearch?: boolean;
  checkModalboxUse: ReturnType<typeof useTreeModalCheckbox>;
}

const TreeList = ({
  name,
  items,
  isShowSearch = true,
  search,
  listProps,
  checkModalboxUse,
  showAllSelect,
}: TreeListProps) => {
  const {
    keyExtractor,
    searchText,
    selectedValues,
    selectedParents,
    filterBySearch,
    onParentPress,
    toggleSelectedValue,
    setSearchText,
  } = checkModalboxUse;

  const { colors } = useTheme();

  return (
    <Grid flex={1}>
      <Grid padding={12}>
        {isShowSearch && (
          <SearchInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            endIcon={<AntDesign name="search1" size={22} />}
            {...search}
          />
        )}
      </Grid>

      <List<ISourceGroup>
        {...listProps}
        estimatedItemSize={43}
        data={filterBySearch()}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <TreeListItem
            selectedParents={selectedParents.map(s => s.Id)}
            onPressChildren={value => toggleSelectedValue(value.Id)}
            onPressCheck={value => onParentPress(value.Id)}
            selectedValues={selectedValues}
            item={item}
          />
        )}
      />
      {/* <AcceptButton onPress={acceptChanges} /> */}
    </Grid>
  );
};

export default TreeList;
