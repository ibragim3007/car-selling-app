import Input from '@/components/Controllers/Input/Input';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import ArrowDown from '@/icons/linear/arrow-down.svg';
import { carTypes } from '@/shared/constants/enums/Car';
import { enumCompare } from '@/shared/helpers/enumCompare';
import { IFilterCreate } from '@/shared/types/filters.types';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import { BottomSheetModal as BTMS } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import QuitResetHeader from '../../HandleComponents/QuitResetHeader';
import AddButton from '../../buttons/AddButton';
import WrapperBlock from '../../wrapper/WrapperBlock';
import AutoChoiceList from './AutoChoiceList';

const CarInput = () => {
  const buttomSheetRef = useRef<BTMS>(null);
  const { control } = useFormContext<IFilterCreate>();
  const { field } = useController({ control, name: 'carTypes' });

  const onPressAddAuto = () => {
    buttomSheetRef.current?.present();
  };

  return (
    <WrapperBlock title="Тип авто">
      <Input
        readOnly
        control={control}
        value={field.value?.map(v => enumCompare(carTypes, v)).join(', ')}
        name={field.name}
        endIcon={
          <PressableIcon
            Icon={() =>
              ArrowDown({
                style: { transform: [{ rotate: '180deg' }] },
              })
            }
          />
        }
      />
      <BottomSheetModal
        snapPoints={['90%']}
        handleComponent={() => <QuitResetHeader title="Тип автомобиля" />}
        ref={buttomSheetRef}
        title="Тип автомобиля"
      >
        <AutoChoiceList />
      </BottomSheetModal>
      <AddButton onPress={onPressAddAuto}>Добавить авто</AddButton>
    </WrapperBlock>
  );
};

export default CarInput;
