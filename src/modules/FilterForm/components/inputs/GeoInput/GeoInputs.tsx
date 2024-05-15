import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import ToggleButtonItem from '@/components/Controllers/buttons/ToggleButtonItem';
import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { useRegion } from '@/shared/hooks/entityies/filter/useRegions';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import AddButton from '../../buttons/AddButton';
import WrapperBlock from '../../wrapper/WrapperBlock';
import RegionsDisplay from './DisplaySelected/RegionsDisplay';

export const GeoInputs = () => {
  const buttomSheetRef = useRef<BTMS>(null);

  const pressOpen2 = () => {
    buttomSheetRef.current?.present();
  };
  const control = useFormContext();

  const regionUse = useRegion();

  return (
    <WrapperBlock title="География">
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
      <RegionsDisplay />

      <AddButton onPress={pressOpen2}>Добавить регион</AddButton>
    </WrapperBlock>
  );
};
