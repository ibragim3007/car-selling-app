import ErrorCard from '@/components/Informers/ErrorCard';
import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useModelsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { IModel } from '@/shared/types/dictionary.types';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import React, { useCallback } from 'react';
import SearchInput from '../../../buttons/SearchInput';
import Button from '@/shared/ui/buttons/Button';

interface ModelsListProps {
  markaId: number;
}

const ModelsList = ({ markaId }: ModelsListProps) => {
  const keyExtractor = useCallback((item: IModel, i: number) => `${i}-${item.id}`, []);
  const { data: models, isLoading, error, isError } = useModelsQuery(markaId);

  if (isLoading) return <LoadingData />;

  if (error || !models || isError) return <ErrorCard text={JSON.stringify(error)} />;

  return (
    <Grid flex={1}>
      <Grid paddingHorizontal={12}>
        <SearchInput placeholder={'Введите...'} />
      </Grid>
      <List<IModel>
        data={models}
        renderItem={({ item }) => <RowList title={item.name} value={item.id} />}
        keyExtractor={keyExtractor}
      />
      <Grid paddingHorizontal={8} flex={0.2} justfity="center">
        <Button style={{ marginBottom: 20 }} color="black">
          Применить
        </Button>
      </Grid>
    </Grid>
  );
};

export default ModelsList;
