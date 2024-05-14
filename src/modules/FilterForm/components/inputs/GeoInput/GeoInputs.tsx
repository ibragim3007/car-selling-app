import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { useRegion } from '@/shared/hooks/entityies/filter/useRegions';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import QuitResetHeader from '../../HandleComponents/QuitResetHeader';
import AddButton from '../../buttons/AddButton';
import WrapperBlock from '../../wrapper/WrapperBlock';
import ChoiceRegionsList from './ChoiceRegionsList';
import RegionsDisplay from './DisplaySelected/RegionsDisplay';

export const GeoInputs = () => {
  const buttomSheetRef = useRef<BTMS>(null);
  const buttomSheetRef2 = useRef<BTMS>(null);

  const pressOpen = () => {
    buttomSheetRef.current?.present();
  };

  const pressOpen2 = () => {
    buttomSheetRef2.current?.present();
  };
  const control = useFormContext();

  const regionUse = useRegion();

  return (
    <WrapperBlock title="География">
      <ToggleButton
        onChange={item => console.log(item)}
        value={{ title: 'По городам', value: 'city' }}
        items={[
          { title: 'По городам', value: 'city' },
          { title: 'По регионам', value: 'regions' },
        ]}
      />

      {/* <BottomSheetModal
        onDismiss={regionUse.dismissSheet}
        handleComponent={() => <QuitResetHeader reset={regionUse.resetButton} title="Регион" />}
        ref={buttomSheetRef}
        title="Регион"
        snapPoints={['90%']}
      >
        <FormProvider {...control}>
          <ChoiceRegionsList regionUse={regionUse} />
        </FormProvider>
      </BottomSheetModal>
      
      <AddButton onPress={pressOpen}>Добавить регион</AddButton> */}

      <ModalCheckboxList
        bottomSheetModal={{
          title: 'Регион',
          children: null,
        }}
        formApi={control}
        ref={buttomSheetRef2}
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
