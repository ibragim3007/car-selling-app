import React from 'react';
import Input, { InputProps } from '../Input';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import ArrowDown from '@/icons/linear/arrow-down.svg';

interface SelectProps extends InputProps {}

const Select = ({ ...props }: SelectProps) => {
  return (
    <Input
      {...props}
      readOnly
      // value={field.value?.map(v => enumCompare(carTypes, v)).join(', ')}
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
  );
};

export default Select;
