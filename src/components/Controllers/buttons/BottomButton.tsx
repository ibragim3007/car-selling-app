import Button, { ButtonProps } from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface BottomButtonProps extends ButtonProps {}

const BottomButton = ({ ...props }: BottomButtonProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Card paddingBottom={bottom || 10}>
      <Button {...props} />
    </Card>
  );
};

export default BottomButton;
