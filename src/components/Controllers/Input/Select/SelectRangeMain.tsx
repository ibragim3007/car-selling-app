import AcceptButton from '@/components/ModalCheckboxList/components/AcceptButton';
import { TRange } from '@/shared/types/filters.types';
import Grid from '@/shared/ui/layout/Grid';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import Range from '../Range/Range';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';

interface SelectRangeMainProps {
  values: TRange;
  dataMock: number[];
  onPress: (value: TRange) => void;
  subtitleInput?: string;
}

const SelectRangeMain = ({ values, dataMock, onPress }: SelectRangeMainProps) => {
  const [firstValue, secondValue] = values || [0, 0];

  const [firstRange, setFirstRange] = useState(firstValue || 0);
  const updateFirstRange = (newValue: number) => setFirstRange(newValue || 0);

  const [secondRange, setSecondRange] = useState(secondValue || 0);
  const updateSecondRange = (newValue: number) => setSecondRange(newValue || 0);

  const { dismiss } = useBottomSheetModal();
  const pressAccept = () => {
    if (firstRange !== undefined && secondRange !== undefined) {
      onPress([firstRange, secondRange]);
    }
    dismiss();
  };

  const resetFunction = () => {
    setFirstRange(firstValue);
    setSecondRange(secondValue);
  };

  const filteredSecondRange = dataMock?.filter(a => a > Number(firstRange || 0)) || [];

  return (
    <Grid flex={1}>
      <QuitResetHeader title={'title'} reset={resetFunction} />
      <Grid padding={16} row gap={1}>
        <Range label="От" onChange={updateFirstRange} currentValue={firstRange} data={dataMock} />
        <Range label="До" onChange={updateSecondRange} currentValue={secondRange} data={filteredSecondRange} />
      </Grid>

      <AcceptButton onPress={pressAccept} flex={1} />
    </Grid>
  );
};

export default SelectRangeMain;
