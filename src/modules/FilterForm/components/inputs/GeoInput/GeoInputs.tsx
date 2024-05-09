import ToggleButton from '@/components/Controllers/buttons/ToggleButton';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import AddButton from '../../buttons/AddButton';
import WrapperBlock from '../../wrapper/WrapperBlock';
import ChoiceRegionsList from './ChoiceRegionsList';
import { useController, useFormContext } from 'react-hook-form';
import { IFilterCreate } from '@/shared/types/filters.types';
interface GeoInputsProps {}

const GeoInputs = () => {
  const buttomSheetRef = useRef<BTMS>(null);

  const pressOpen = () => {
    buttomSheetRef.current?.present();
    // router.push(routes.pages.filter.modal.choiceRegion);
  };
  // const formContext = useFormContext<IFilterCreate>();
  // const {
  //   field: { value, onChange },
  // } = useController({ control, name: 'regions' });

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

      <BottomSheetModal ref={buttomSheetRef} title="asd" snapPoints={['90%']}>
        <ChoiceRegionsList />
      </BottomSheetModal>
      <AddButton onPress={pressOpen}>Добавить регион</AddButton>
    </WrapperBlock>
  );
};

export default GeoInputs;
