import Input from '@/components/Controllers/Input/Input';
import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useDictionaryQuery, useRegionsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import { IRegion } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import Button from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import { AntDesign } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { useController, useFormContext } from 'react-hook-form';

const ChoiceRegionsList = () => {
  const { data: regions } = useRegionsQuery();
  const { data: dict } = useDictionaryQuery();
  const keyExtractor = useCallback((item: IRegion, i: number) => `${i}-${item.regionid}`, []);

  const { setValue, control } = useFormContext<IFilterCreate>();
  const {
    field: { value, onChange },
  } = useController({ control, name: 'regions' });

  return (
    <>
      <Input
        keyboardAppearance="dark"
        placeholder="Поиск"
        control={control}
        name={'name'}
        endIcon={<AntDesign color="red" />}
      />
      <RowList title="Выбрать все" />

      <List<IRegion>
        data={regions?.regions}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <RowList title={compare(dict!.regions, item.regionid)} />}
        estimatedItemSize={43}
      />

      <Grid flex={0.2} justfity="center">
        <Button style={{ marginBottom: 20 }} color="black">
          Применить
        </Button>
      </Grid>
    </>
  );
};

export default ChoiceRegionsList;
