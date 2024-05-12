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
import ELD from '@/components/Handlers/ELD/ELD';
import AcceptButton from '../../buttons/AcceptButton';

const AutoChoiceList = () => {
  const { control } = useFormContext<IFilterCreate>();
  const keyExtractor = useCallback((item: Mark, i: number) => `${i}-${item.id}`, []);

  const { data: dict, isLoading, isError, error } = useDictionaryQuery();
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
    <ELD data={dict} isLoading={isLoading} error={error} isError={isError}>
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
        <AcceptButton />
      </Grid>
    </ELD>
  );
};

export default AutoChoiceList;
