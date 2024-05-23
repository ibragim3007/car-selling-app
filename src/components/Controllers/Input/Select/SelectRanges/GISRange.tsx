import React, { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import { IFilterCreate, TRange } from '@/shared/types/filters.types';
import { inputPlaceholderText } from '@/shared/helpers/formatRangeString';

import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import SelectRangeMain from './SelectRangeMain';
import Button from '@/shared/ui/buttons/Button';
import GoInButton from '@/components/Controllers/buttons/GoInButton';

interface GISRangeProps {
  title: string;
  bottomSheetTitle?: string;
  dataMock: number[];
  name: keyof IFilterCreate;
}

const GISRange = ({ title, dataMock, name, bottomSheetTitle }: GISRangeProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value },
  } = useController({ control, name });

  const valueToNumber = (value || []) as TRange;

  const present = () => {
    buttomSheetRef.current?.present();
  };

  const accept = (value: TRange) => {
    buttomSheetRef.current?.dismiss();
    setValue(name, value);
  };

  const reset = () => {
    setValue(name, [0, 0], { shouldDirty: true });
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
        <SelectRangeMain title={bottomSheetTitle} values={valueToNumber} dataMock={dataMock} onPress={accept} />
      </BottomSheetModal>
    </>
  );
};

export default GISRange;
