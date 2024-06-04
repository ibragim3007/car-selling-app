import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import DisplayGeography from '@/components/DisplaySurfaces/DisplayGeography';
import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { useCitiesQuery } from '@/shared/api/entityies/dictionary/dictionary.api';
import { useRegion } from '@/shared/hooks/entityies/filter/useRegions';
import { IFilterCreate } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import AddButton from '../../buttons/AddButton';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import DisplayGeo from '@/components/DisplaySurfaces/DisplayGeo';

type geoType = 'regions' | 'city';
type itemType = { title: string; value: geoType };
const itemsGeoForPick: itemType[] = [
  { title: 'По городам', value: 'city' },
  { title: 'По регионам', value: 'regions' },
];

export const GeoInputs = () => {
  const buttomSheetRef = useRef<BTMS>(null);
  const buttomSheetRefCities = useRef<BTMS>(null);
  const [currentTypeGeo, setCurrentTypeGeo] = useState<geoType>('regions');
  const regionUse = useRegion();
  const { data: dataCities } = useCitiesQuery();

  const control = useFormContext<IFilterCreate>();

  const pressOpen2 = () => buttomSheetRef.current?.present();
  const pressOpenCitiesSheet = () => buttomSheetRefCities?.current?.present();
  const regions = control.getValues('regions');
  const idCities = useWatch({ control: control.control, name: 'idCities' });

  const onChangeCheckBox = (value: number) => {
    const newValue = [...(regions || [])];

    control.setValue(
      'regions',
      newValue?.filter(v => v !== value),
      { shouldDirty: true, shouldTouch: true, shouldValidate: true },
    );
  };

  const onRemoveCity = (value: number) => {
    const newValue = [...(idCities || [])];

    control.setValue(
      'idCities',
      newValue.filter(v => v !== value),
      { shouldDirty: true },
    );
  };

  const onChangeTypeOfGeo = (item: itemType) => {
    setCurrentTypeGeo(item.value);
  };

  return (
    <WrapperBlock>
      <WrapInputLabel title="География">
        <ToggleButton
          items={itemsGeoForPick}
          Item={(item, index) => (
            <ToggleButtonItem
              onPress={onChangeTypeOfGeo}
              key={item.value}
              currentValue={currentTypeGeo}
              title={item.title}
              value={item.value}
              length={itemsGeoForPick.length}
              index={index}
              item={item}
            />
          )}
        />
      </WrapInputLabel>

      {(() => {
        if (currentTypeGeo === 'regions') {
          return (
            <Grid>
              <ModalCheckboxList
                ref={buttomSheetRef}
                formApi={control}
                bottomSheetModal={{
                  title: 'Регион',
                  children: null,
                }}
                pageData={{
                  showAllSelect: true,
                  search: { placeholder: 'Поиск...' },
                  name: 'regions',
                  items: regionUse.filteredRegions || [],
                }}
              />

              <DisplayGeography onDeleteButton={onChangeCheckBox} regions={regions || []} />
              <AddButton onPress={pressOpen2}>Добавить регион</AddButton>
            </Grid>
          );
        }

        if (currentTypeGeo === 'city' && dataCities?.cities) {
          return (
            <Grid>
              <ModalCheckboxList
                formApi={control}
                ref={buttomSheetRefCities}
                bottomSheetModal={{
                  title: 'Выбор города',
                  children: null,
                }}
                pageData={{
                  showAllSelect: true,
                  search: { placeholder: 'Поиск...' },
                  name: 'idCities',
                  items: dataCities.cities || [],
                }}
              />
              <DisplayGeo onDeleteButton={onRemoveCity} values={idCities || []} dict={dataCities.cities} />
              <AddButton onPress={pressOpenCitiesSheet}>Добавить город</AddButton>
            </Grid>
          );
        }
      })()}
    </WrapperBlock>
  );
};
