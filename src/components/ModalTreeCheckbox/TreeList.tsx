import List, { ListProps } from '@/components/Informers/tables/List';

import ArrowDown from '@/icons/linear/arrow-down.svg';
import { useTreeModalCheckbox } from '@/shared/hooks/helpers/useTreeModalCheckbox';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { IFilterCreate } from '@/shared/types/filters.types';
import { ISourceGroup } from '@/shared/types/source.types';
import LabelCheck from '@/shared/ui/inputs/LabelCheck';
import { TextFieldProps } from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
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
  const { keyExtractor } = checkModalboxUse;

  const { colors } = useTheme();

  return (
    <Grid flex={1}>
      {/* <Grid padding={12}>
        {isShowSearch && (
          <SearchInput
            value={searchText}
            onChangeText={text => setSearchText(text)}
            endIcon={<AntDesign name="search1" size={22} />}
            {...search}
          />
        )}
      </Grid> */}
      {/* {showAllSelect && (
        <TitleCheckbox
          paddingHorizontal={18}
          paddingVertical={14}
          style={{ borderBottomColor: colors.divider, borderBottomWidth: 1 }}
          title="Выбрать все"
          checked={isEverythingSelected}
          onChange={onToggleSelection}
        />
      )} */}
      <Grid>
        <LabelCheck
          onPressCheck={() => console.log('check')}
          onPressLabel={() => console.log('label')}
          rightSide={<ArrowDown />}
          label="Другое"
        />
      </Grid>
      <List<ISourceGroup>
        {...listProps}
        estimatedItemSize={43}
        data={items}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <TreeListItem item={item} />}
      />
      {/* <AcceptButton onPress={acceptChanges} /> */}
    </Grid>
  );
};

export default TreeList;
