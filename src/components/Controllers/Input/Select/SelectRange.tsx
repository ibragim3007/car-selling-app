import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import AcceptButton from '@/components/ModalCheckboxList/components/AcceptButton';
import { IFilterCreate, TRange } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { InputProps } from '../Input';
import Range from '../Range/Range';
import SelectButtonWrap from './SelectButtonWrap';
import { formatNumber } from '@/shared/helpers/formatMileage';

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

  const [firstRange, setFirstRange] = useState(firstValue || 0);
  const updateFirstRange = (newValue: number) => setFirstRange(newValue || 0);

  const [secondRange, setSecondRange] = useState(secondValue || 0);
  const updateSecondRange = (newValue: number) => setSecondRange(newValue || 0);

  const [inputPlaceholder, setInputPlaceholder] = useState(
    inputPlaceholderText(firstRange, secondRange, subtitleInput),
  );

  const pressAccept = () => {
    if (firstRange !== undefined && secondRange !== undefined) {
      onChangeValues([firstRange, secondRange]);
      setInputPlaceholder(inputPlaceholderText(firstRange, secondRange, subtitleInput));
    }
    buttomSheetRef.current?.dismiss();
  };

  // const inputPlaceholder = inputPlaceholderText(firstRange, secondRange, subtitleInput);

  const filteredSecondRange = dataMock?.filter(a => a > Number(firstRange || 0)) || [];

  return (
    <>
      <SelectButtonWrap value={inputPlaceholder} name={name} onPress={onPresent} {...props} />
      <BottomSheetModal handleComponent={() => <QuitResetHeader title={title} />} ref={buttomSheetRef}>
        <Grid flex={1}>
          <Grid padding={16} row gap={1}>
            <Range label="От" onChange={updateFirstRange} currentValue={firstRange} data={dataMock} />
            <Range label="До" onChange={updateSecondRange} currentValue={secondRange} data={filteredSecondRange} />
          </Grid>

          <AcceptButton onPress={pressAccept} flex={1} />
        </Grid>
      </BottomSheetModal>
    </>
  );
};

function inputPlaceholderText(firstValue: number, secondValue: number, subtitleInput?: string) {
  if (firstValue === 0 || secondValue === 0) return 'Неважно';
  else if (firstValue !== 0 && secondValue !== 0)
    return `${formatNumber(firstValue)} – ${formatNumber(secondValue)} ${subtitleInput}`;
}

export default SelectRange;
