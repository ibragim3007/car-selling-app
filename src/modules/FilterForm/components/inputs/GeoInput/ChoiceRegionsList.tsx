import List from '@/components/Informers/tables/List';
import RowList from '@/components/Informers/tables/RowList';
import { useRegion } from '@/shared/hooks/entityies/filter/useRegions';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { BaseTypeDictionary, orderIdType } from '@/shared/types/dictionary.types';
import LabelCheckbox from '@/shared/ui/inputs/LabelCheckbox';
import TextField from '@/shared/ui/inputs/TextField';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import AcceptButton from '../../../../../components/ModalCheckboxList/components/AcceptButton';
import ELD from '@/components/Handlers/ELD/ELD';

// Надо будет рефакторить

interface ChoiceRegionsListProps {
  regionUse: ReturnType<typeof useRegion>;
}

const ChoiceRegionsList = ({ regionUse }: ChoiceRegionsListProps) => {
  const {
    loading,
    filteredRegions,
    isEverythingSelected,
    search,
    currentPickedRegions,
    onChangeCurrentPicked,
    onAcceptChanges,
    keyExtractor,
    setSearch,
    onToggleSelection,
  } = regionUse;

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
      <ELD data={filteredRegions} isLoading={loading}>
        <List<BaseTypeDictionary & orderIdType>
          data={filteredRegions}
          keyExtractor={keyExtractor}
          ListFooterComponent={() => loading && <LoadingData />}
          renderItem={({ item }) => (
            <RowList
              onChange={onChangeCurrentPicked}
              selectedValues={currentPickedRegions}
              value={item.id}
              title={item.name}
            />
          )}
          estimatedItemSize={43}
        />

        <AcceptButton onPress={onAcceptChanges} />
      </ELD>
    </Grid>
  );
};

export default ChoiceRegionsList;
