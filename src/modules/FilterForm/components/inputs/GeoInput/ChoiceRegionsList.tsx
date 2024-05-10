import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useDictionaryQuery, useRegionsQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { compare } from '@/shared/helpers/compare';
import { IRegion } from '@/shared/types/dictionary.types';
import { IFilterCreate } from '@/shared/types/filters.types';
import Button from '@/shared/ui/buttons/Button';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';
import TextField from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';

// Надо будет рефакторить
const ChoiceRegionsList = () => {
  const { data: regions } = useRegionsQuery();
  const { data: dict } = useDictionaryQuery();
  const keyExtractor = useCallback((item: IRegion, i: number) => `${i}-${item.regionid}`, []);

  const { control } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'regions' });

  const isEverythingSelected = field.value?.length === regions?.regions?.length;
  const onToggleSelection = () => {
    field.onChange(isEverythingSelected ? [] : regions?.regions.map(region => region.regionid));
  };

  const [search, setSearch] = useState('');
  const filterDict = () => {
    const filteredRegionsText = dict?.regions.filter(region =>
      region.name.toLowerCase().includes(search.toLowerCase()),
    );

    const filteredList = regions?.regions.filter(region => {
      return filteredRegionsText?.some(some => some.id === region.regionid);
    });

    return { filteredList, filteredRegionsText };
  };

  const { filteredList, filteredRegionsText } = filterDict();

  return (
    <>
      <TextField
        placeholder="Поиск"
        value={search}
        onChangeText={v => setSearch(v)}
        endIcon={<AntDesign color="red" />}
      />
      <LabelCheckbox onChange={onToggleSelection} title="Выбрать все" checked={isEverythingSelected} />

      <List<IRegion>
        data={filteredList || regions?.regions}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <RowList<IRegion> value={item.regionid} title={compare(filteredRegionsText!, item.regionid)} />
        )}
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
