import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import DisplayGeography from '@/components/DisplaySurfaces/DisplayGeography';
import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { useRegion } from '@/shared/hooks/entityies/filter/useRegions';
import { IFilterCreate } from '@/shared/types/filters.types';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import AddButton from '../../buttons/AddButton';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';

export const GeoInputs = () => {
  const buttomSheetRef = useRef<BTMS>(null);

  const pressOpen2 = () => {
    buttomSheetRef.current?.present();
  };
  const control = useFormContext<IFilterCreate>();

  const regions = control.getValues('regions');

  const regionUse = useRegion();

  const onChangeCheckBox = (value: number) => {
    const newValue = [...(regions || [])];

    control.setValue(
      'regions',
      newValue?.filter(v => v !== value),
      { shouldDirty: true, shouldTouch: true, shouldValidate: true },
    );
  };

  return (
    <WrapperBlock>
      <WrapInputLabel title="География">
        <ToggleButton
          items={[
            { title: 'По городам', value: 'city' },
            { title: 'По регионам', value: 'regions' },
          ]}
          Item={(item, index) => (
            <ToggleButtonItem
              onPress={item => console.log(item)}
              key={item.value}
              currentValue={'regions'}
              title={item.title}
              value={item.value}
              length={2}
              index={index}
              item={item}
            />
          )}
        />
      </WrapInputLabel>

      <ModalCheckboxList
        bottomSheetModal={{
          title: 'Регион',
          children: null,
        }}
        formApi={control}
        ref={buttomSheetRef}
        pageData={{
          showAllSelect: true,
          search: { placeholder: 'Поиск...' },
          name: 'regions',
          items: regionUse.filteredRegions || [],
        }}
      />

      <DisplayGeography onDeleteButton={onChangeCheckBox} regions={regions || []} />

      <AddButton onPress={pressOpen2}>Добавить регион</AddButton>
    </WrapperBlock>
  );
};
