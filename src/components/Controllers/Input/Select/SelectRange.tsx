import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import AcceptButton from '@/components/ModalCheckboxList/components/AcceptButton';
import { formatNumber } from '@/shared/helpers/formatMileage';
import { IFilterCreate, TRange } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { InputProps } from '../Input';
import Range from '../Range/Range';
import SelectButtonWrap from './SelectButtonWrap';

interface SelectRangeProps extends InputProps {
  title: string;
  name: keyof IFilterCreate;
  onChangeValues: (value: TRange) => void;
  values?: TRange;
  subtitleInput?: string;
  dataMock?: number[];
}

const SelectRange = ({ title, name, values, subtitleInput, onChangeValues, dataMock, ...props }: SelectRangeProps) => {
  const buttomSheetRef = useRef<BSM>(null);
  const [firstValue, secondValue] = values || [0, 0];

  const onPresent = () => {
    buttomSheetRef.current?.present();
  };

  const [firstRange, setFirstRange] = useState(firstValue);
  const updateFirstRange = (newValue: number) => setFirstRange(newValue);

  const [secondRange, setSecondRange] = useState(secondValue);
  const updateSecondRange = (newValue: number) => setSecondRange(newValue);

  const pressAccept = () => {
    console.log('SET: ', firstRange, secondRange);
    if (firstRange !== undefined && secondRange !== undefined) onChangeValues([firstRange, secondRange]);
    buttomSheetRef.current?.dismiss();
  };

  console.log(firstRange, secondRange);

  const inputPlaceholder =
    !firstValue || !secondValue
      ? 'Неважно'
      : `${formatNumber(firstValue || 0)} - ${formatNumber(secondValue || 0)} ${subtitleInput ? subtitleInput : ''}`;
  return (
    <>
      <SelectButtonWrap value={inputPlaceholder} name={name} onPress={onPresent} {...props} />
      <BottomSheetModal handleComponent={() => <QuitResetHeader title={title} />} ref={buttomSheetRef}>
        <Grid flex={1}>
          <Grid padding={16} row gap={1}>
            <Range label="От" onChange={updateFirstRange} currentValue={firstRange} data={dataMock} />
            <Range
              label="До"
              onChange={updateSecondRange}
              currentValue={secondRange}
              data={dataMock?.filter(a => a > Number(firstRange || 0))}
            />
          </Grid>

          <AcceptButton onPress={pressAccept} flex={1} />
        </Grid>
      </BottomSheetModal>
    </>
  );
};

export default SelectRange;
