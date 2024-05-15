import ELD from '@/components/Handlers/ELD/ELD';
import ErrorCard from '@/components/Informers/ErrorCard';
import List from '@/components/Informers/tables/List';
import { useDictionaryQuery, useMarkaModelQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { Mark } from '@/shared/types/dictionary.types';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useState } from 'react';
import AcceptButton from '../../../../../components/ModalCheckboxList/components/AcceptButton';
import SearchInput from '../../../../../components/ModalCheckboxList/components/SearchInput';
import RowItem from './RowItem/RowItem';

const AutoChoiceList = () => {
  const keyExtractor = useCallback((item: Mark, i: number) => `${i}-${item.id}`, []);

  const { data: dict, isLoading, isError, error } = useDictionaryQuery();
  const { data: markaModel, isLoading: isLoadingMarkaModel, error: errorMarkaModel } = useMarkaModelQuery();

  const [search, setSearch] = useState('');

  const searchMarks = () => {
    const filteredMarks = dict?.marks.filter(region => region.name.toLowerCase().includes(search.toLowerCase()));

    return { filteredMarks };
  };

  const { filteredMarks } = searchMarks();

  const { dismiss } = useBottomSheetModal();
  const onPressAccept = () => {
    dismiss();
  };

  return (
    <ELD
      data={dict || markaModel}
      isLoading={isLoading || isLoadingMarkaModel}
      error={error || errorMarkaModel}
      isError={isError}
    >
      <Grid flex={1} space="md">
        <Grid paddingTop={12} paddingHorizontal={12}>
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
              renderItem={({ item }) => <RowItem title={item.name} value={item.id} />}
            />
          </Grid>
        )}
        <AcceptButton onPress={onPressAccept} />
      </Grid>
    </ELD>
  );
};

export default AutoChoiceList;
