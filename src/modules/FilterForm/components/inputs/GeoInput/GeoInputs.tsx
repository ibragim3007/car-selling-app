import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useFormContext } from 'react-hook-form';
import QuitResetHeader from '../../HandleComponents/QuitResetHeader';
import AddButton from '../../buttons/AddButton';
import WrapperBlock from '../../wrapper/WrapperBlock';
import ChoiceRegionsList from './ChoiceRegionsList';
import RegionsDisplay from './DisplaySelected/RegionsDisplay';

const GeoInputs = () => {
  const buttomSheetRef = useRef<BTMS>(null);

  const pressOpen = () => {
    buttomSheetRef.current?.present();
  };
  const control = useFormContext();

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

      <BottomSheetModal
        handleComponent={() => <QuitResetHeader title="Регион" />}
        ref={buttomSheetRef}
        title="Регион"
        snapPoints={['90%']}
      >
        <FormProvider {...control}>
          <ChoiceRegionsList />
        </FormProvider>
      </BottomSheetModal>
      <RegionsDisplay />
      <AddButton onPress={pressOpen}>Добавить регион</AddButton>
    </WrapperBlock>
  );
};

export default GeoInputs;
