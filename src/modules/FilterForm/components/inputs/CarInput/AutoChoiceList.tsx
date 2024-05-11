import ErrorCard from '@/components/Informers/ErrorCard';
import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useDictionaryQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { Mark } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import React, { useCallback, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import SearchInput from '../../buttons/SearchInput';
import Button from '@/shared/ui/buttons/Button';
import RowItem from './RowItem/RowItem';

const AutoChoiceList = () => {
  const { control } = useFormContext<IFilterCreate>();
  const keyExtractor = useCallback((item: Mark, i: number) => `${i}-${item.id}`, []);

  const { data: dict, isLoading } = useDictionaryQuery();
  const {
    field: { value },
  } = useController({ control, name: 'models' });

  const [search, setSearch] = useState('');

  const searchMarks = () => {
    const filteredMarks = dict?.marks.filter(region => region.name.toLowerCase().includes(search.toLowerCase()));

    return { filteredMarks };
  };

  const { filteredMarks } = searchMarks();

  return (
    <Grid flex={1} space="md">
      <Grid paddingHorizontal={12}>
        <SearchInput placeholder="Введите..." onChangeText={text => setSearch(text)} />
      </Grid>
      {isLoading ? (
        <LoadingData />
      ) : (
        <Grid flex={1}>
          {!dict && <ErrorCard />}

          <List<Mark>
            data={filteredMarks}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => <RowItem<Mark> title={item.name} value={item.id} />}
          />
        </Grid>
      )}
      <Grid paddingHorizontal={8} flex={0.2} justfity="center">
        <Button style={{ marginBottom: 20 }} color="black">
          Применить
        </Button>
      </Grid>
    </Grid>
  );
};

export default AutoChoiceList;
