import Input from '@/components/Controllers/Input/Input';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ArrowDown from '@/icons/linear/arrow-down.svg';
import { carTypes } from '@/shared/constants/enums/Car';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { IFilterCreate } from '@/shared/types/filters.types';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useController, useFormContext } from 'react-hook-form';
import QuitResetHeader from '../../../../../components/Modal/components/QuitResetHeader';
import AddButton from '../../buttons/AddButton';
import WrapperBlock from '../../wrapper/WrapperBlock';
import AutoChoiceList from './AutoChoiceList';
import SelectedCars from './DisplaySelected/SelectedCars';
import Typography from '@/shared/ui/typography/Typography';
import Select from '@/components/Controllers/Input/Select/Select';
import WrapInputLabel from '../../wrapper/WrapInputLabel';

const CarInput = () => {
  const buttomSheetRef = useRef<BTMS>(null);
  const formApi = useFormContext<IFilterCreate>();

  const { field } = useController({ control: formApi.control, name: 'carTypes' });

  const onPressAddAuto = () => {
    buttomSheetRef.current?.present();
  };

  return (
    <WrapperBlock>
      <WrapInputLabel title="Тип авто">
        <Select
          control={formApi.control}
          value={field.value?.map(v => enumCompare(carTypes, v)).join(', ')}
          name={field.name}
          title={''}
          data={[]}
        />
        <BottomSheetModal
          snapPoints={['90%']}
          handleComponent={() => <QuitResetHeader title="Марка" reset={() => console.log('first')} />}
          ref={buttomSheetRef}
          title="Тип автомобиля"
        >
          <FormProvider {...formApi}>
            <AutoChoiceList />
          </FormProvider>
        </BottomSheetModal>
      </WrapInputLabel>
      <Typography>Марка и модель</Typography>
      <SelectedCars />
      <AddButton onPress={onPressAddAuto}>Добавить авто</AddButton>
    </WrapperBlock>
  );
};

export default CarInput;
