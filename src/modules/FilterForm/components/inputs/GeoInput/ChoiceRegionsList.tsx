import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useDictionaryQuery, useRegionsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import { IRegion } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import Button from '@/shared/ui/buttons/Button';
import TextField from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import { AntDesign } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface ChoiceRegionsListProps {
  formContext: UseFormReturn<IFilterCreate, any, undefined>;
}

const ChoiceRegionsList = () => {
  const { data: regions } = useRegionsQuery();
  const { data: dict } = useDictionaryQuery();
  const keyExtractor = useCallback((item: IRegion, i: number) => `${i}-${item.regionid}`, []);

  return (
    <>
      <TextField placeholder="Поиск" endIcon={<AntDesign color="red" />} />
      <RowList title="Выбрать все" />

      {/* <List<IRegion>
        data={regions?.regions}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <RowList title={compare(dict!.regions, item.regionid)} />}
        estimatedItemSize={43}
      /> */}

      <Grid flex={0.2} justfity="center">
        <Button style={{ marginBottom: 20 }} color="black">
          Применить
        </Button>
      </Grid>
    </>
  );
};

export default ChoiceRegionsList;
