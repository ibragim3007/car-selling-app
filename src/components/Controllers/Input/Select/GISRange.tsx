import React, { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import { IFilterCreate, TRange } from '@/shared/types/filters.types';
import { inputPlaceholderText } from '@/shared/helpers/formatRangeString';
import GoInButton from '../../buttons/GoInButton';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import SelectRangeMain from './SelectRangeMain';
import Button from '@/shared/ui/buttons/Button';

interface GISRangeProps {
  title: string;
  dataMock: number[];
  name: keyof IFilterCreate;
}

const GISRange = ({ title, dataMock, name }: GISRangeProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value },
  } = useController({ control, name });

  const valueToNumber = value as TRange;

  const present = () => {
    buttomSheetRef.current?.present();
  };

  const accept = (value: TRange) => {
    buttomSheetRef.current?.dismiss();
    setValue(name, value);
  };

  const reset = () => {
    setValue(name, [0, 0]);
  };

  const isShowValues = valueToNumber && valueToNumber[1] && valueToNumber[0];

  return (
    <>
      <GoInButton
        title={title}
        value={isShowValues ? inputPlaceholderText(valueToNumber[0], valueToNumber[1]) : ''}
        isDivider
        onPress={present}
        renderButton={() => {
          if (isShowValues)
            return (
              <Button onPress={reset} size="small" variant="text">
                Сбросить
              </Button>
            );
        }}
      />
      <BottomSheetModal handleComponent={() => null} ref={buttomSheetRef}>
        <SelectRangeMain values={valueToNumber} dataMock={dataMock} onPress={accept} />
      </BottomSheetModal>
    </>
  );
};

export default GISRange;
