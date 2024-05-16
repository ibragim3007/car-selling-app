import React from 'react';
import Input, { InputProps } from '../Input';
import { Pressable } from 'react-native';
import Grid from '@/shared/ui/layout/Grid';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import ArrowDown from '@/icons/linear/arrow-down.svg';

interface SelectButtonWrapProps extends InputProps {
  onPress: () => void;
}

const SelectButtonWrap = ({ onPress, ...props }: SelectButtonWrapProps) => {
  return (
    <Pressable onPress={onPress}>
      <Grid pointerEvents="none">
        <Input
          {...props}
          readOnly
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
      </Grid>
    </Pressable>
  );
};

export default SelectButtonWrap;
