import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import QuitResetHeader from '@/components/Modal/components/QuitResetHeader';
import AcceptButton from '@/components/ModalCheckboxList/components/AcceptButton';
import { MILEAGE_MOCK } from '@/shared/constants/enums/RangeValues';
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
}

const SelectRange = ({ title, name, values, subtitleInput, onChangeValues, ...props }: SelectRangeProps) => {
  const buttomSheetRef = useRef<BSM>(null);

  const onPresent = () => {
    buttomSheetRef.current?.present();
  };

  const [firstRange, setFirstRange] = useState((values || [])[0]);
  const updateFirstRange = (newValue: number) => setFirstRange(newValue);

  const [secondRange, setSecondRange] = useState((values || [])[1]);
  const updateSecondRange = (newValue: number) => setSecondRange(newValue);

  const pressAccept = () => {
    if (firstRange && secondRange) onChangeValues([firstRange, secondRange]);
    buttomSheetRef.current?.dismiss();
  };

  return (
    <>
      <SelectButtonWrap
        value={`${formatNumber(firstRange || 0)} - ${formatNumber(secondRange || 0)} ${
          subtitleInput ? subtitleInput : ''
        }`}
        name={name}
        onPress={onPresent}
        {...props}
      />
      <BottomSheetModal handleComponent={() => <QuitResetHeader title={title} />} ref={buttomSheetRef}>
        <Grid flex={1}>
          <Grid padding={16} row>
            <Range label="От" onChange={updateFirstRange} currentValue={firstRange} data={MILEAGE_MOCK} />
            <Range
              label="До"
              onChange={updateSecondRange}
              currentValue={secondRange}
              data={MILEAGE_MOCK.filter(a => a > Number(firstRange))}
            />
          </Grid>

          <AcceptButton onPress={pressAccept} flex={1} />
        </Grid>
      </BottomSheetModal>
    </>
  );
};

export default SelectRange;
