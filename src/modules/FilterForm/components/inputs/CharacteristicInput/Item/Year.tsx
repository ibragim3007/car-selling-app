import SelectRangeMain from '@/components/Controllers/Input/Select/SelectRangeMain';
import GoInButton from '@/components/Controllers/buttons/GoInButton';
import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import { MANUFACTURE_YEAR_MOCK } from '@/shared/constants/enums/RangeValues';
import { IFilterCreate, TRange } from '@/shared/types/filters.types';
import React, { useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import { inputPlaceholderText } from '@/shared/helpers/formatRangeString';
import Button from '@/shared/ui/buttons/Button';
const Year = () => {
  const buttomSheetRef = useRef<BSM>(null);
  const { control, setValue } = useFormContext<IFilterCreate>();
  const {
    field: { value: years },
  } = useController({ control, name: 'years' });

  const present = () => {
    buttomSheetRef.current?.present();
  };

  const accept = (value: TRange) => {
    buttomSheetRef.current?.dismiss();
    setValue('years', value);
  };

  const reset = () => {
    setValue('years', [0, 0]);
  };

  const isShowValues = years && years[1] && years[0];

  return (
    <>
      <GoInButton
        title="Год выпуска"
        value={isShowValues ? inputPlaceholderText(years[0], years[1]) : ''}
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
        <SelectRangeMain values={years!} dataMock={MANUFACTURE_YEAR_MOCK} onPress={accept} />
      </BottomSheetModal>
    </>
  );
};

export default Year;
