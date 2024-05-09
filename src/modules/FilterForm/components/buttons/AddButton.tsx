import Button, { ButtonProps } from '@/shared/ui/buttons/Button';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface AddButtonProps extends ButtonProps {}

const AddButton = ({ ...props }: AddButtonProps) => {
  return (
    <Button {...props} variant="text" style={{ paddingHorizontal: 0, alignSelf: 'flex-start' }}>
      <AntDesign name="plus" size={18} />

      {props.children}
    </Button>
  );
};

export default AddButton;
