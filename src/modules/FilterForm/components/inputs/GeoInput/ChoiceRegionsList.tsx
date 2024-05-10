import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useRegion } from '@/shared/api/entityies/filters/useRegions';
import { compare } from '@/shared/helpers/compare';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { IRegion } from '@/shared/types/dictionary.types';
import Button from '@/shared/ui/buttons/Button';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';
import TextField from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

// Надо будет рефакторить
const ChoiceRegionsList = () => {
  const {
    loading,
    regions,
    isEverythingSelected,
    filteredRegionsText,
    filteredList,
    search,
    keyExtractor,
    setSearch,
    onToggleSelection,
  } = useRegion();

  const { colors } = useTheme();

  return (
    <Grid flex={1}>
      <Grid space="sm">
        <Grid paddingHorizontal={12}>
          <TextField
            placeholder="Поиск"
            value={search}
            onChangeText={v => setSearch(v)}
            endIcon={<AntDesign name="search1" size={22} />}
          />
        </Grid>

        <LabelCheckbox
          onChange={onToggleSelection}
          title="Выбрать все"
          checked={isEverythingSelected}
          style={{ borderBottomWidth: 1, borderColor: colors.divider }}
        />
      </Grid>
      <List<IRegion>
        data={filteredList || regions?.regions}
        keyExtractor={keyExtractor}
        ListFooterComponent={() => loading && <LoadingData />}
        renderItem={({ item }) => (
          <RowList<IRegion> value={item.regionid} title={compare(filteredRegionsText!, item.regionid)} />
        )}
        estimatedItemSize={43}
      />

      <Grid paddingHorizontal={8} flex={0.2} justfity="center">
        <Button style={{ marginBottom: 20 }} color="black">
          Применить
        </Button>
      </Grid>
    </Grid>
  );
};

export default ChoiceRegionsList;
