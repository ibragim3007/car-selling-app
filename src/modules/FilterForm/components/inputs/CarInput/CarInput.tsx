import SelectButtonWrap from '@/components/Controllers/Input/Select/SelectButtonWrap';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ModalCheckboxList from '@/components/ModalCheckboxList/ModalCheckboxList';
import { carTypes } from '@/shared/constants/enums/Car';
import { IFilterCreate } from '@/shared/types/filters.types';
import Typography from '@/shared/ui/typography/Typography';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { FormProvider, useController, useFormContext } from 'react-hook-form';
import QuitResetHeader from '../../../../../components/Modal/components/QuitResetHeader';
import AddButton from '../../buttons/AddButton';
import WrapInputLabel from '../../wrapper/WrapInputLabel';
import WrapperBlock from '../../wrapper/WrapperBlock';
import AutoChoiceList from './AutoChoiceList';
import SelectedCars from './DisplaySelected/SelectedCars';
import { enumCompare } from '@/shared/helpers/enumCompare';

const CarInput = () => {
  const buttomSheetRef = useRef<BTMS>(null);
  const buttomSheetRefCarType = useRef<BTMS>(null);
  const formApi = useFormContext<IFilterCreate>();

  const { field } = useController({ control: formApi.control, name: 'carTypes' });

  const onPressAddAuto = () => {
    buttomSheetRef.current?.present();
  };

  const onPressChangeCarType = () => {
    buttomSheetRefCarType.current?.present();
  };

  const stringForLabel = field.value?.map(a => enumCompare(carTypes, a)).join(', ');

  return (
    <WrapperBlock>
      <WrapInputLabel title="Тип авто">
        <SelectButtonWrap
          value={stringForLabel || 'Неважно'}
          onPress={onPressChangeCarType}
          control={formApi.control}
          name=""
        />
        <ModalCheckboxList
          bottomSheetModal={{
            title: 'Тип автомобиля',
            children: null,
            snapPoints: ['60%'],
          }}
          formApi={formApi}
          ref={buttomSheetRefCarType}
          pageData={{
            showAllSelect: false,
            isShowSearch: false,
            search: { placeholder: 'Поиск...' },
            name: 'carTypes',
            items: carTypes || [],
          }}
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
