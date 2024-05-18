import BottomSheetModal from '@/components/Modal/BottomSheetModal';
import { inputPlaceholderText } from '@/shared/helpers/formatRangeString';
import { IFilterCreate, TRange } from '@/shared/types/filters.types';
import { BottomSheetModal as BSM } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

import SelectRangeMain from './SelectRangeMain';
import SelectButtonWrap from '../SelectButtonWrap';
import { InputProps } from '../../Input';

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

  const [inputPlaceholder, setInputPlaceholder] = useState(
    inputPlaceholderText(firstValue || 0, secondValue || 0, subtitleInput),
  );

  const pressAccept = (value: TRange) => {
    onChangeValues([value[0], value[1]]);
    setInputPlaceholder(inputPlaceholderText(value[0], value[1], subtitleInput));

    buttomSheetRef.current?.dismiss();
  };

  return (
    <>
      <SelectButtonWrap value={inputPlaceholder} name={name} onPress={onPresent} {...props} />
      <BottomSheetModal handleComponent={() => null} ref={buttomSheetRef}>
        <SelectRangeMain title={title} onPress={pressAccept} dataMock={dataMock || []} values={values || [0, 0]} />
      </BottomSheetModal>
    </>
  );
};

export default SelectRange;
