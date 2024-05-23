import Button, { ButtonProps } from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AcceptButtonProps extends ButtonProps {
  flex?: number;
}

const AcceptButton = ({ flex, ...props }: AcceptButtonProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Grid paddingHorizontal={8} paddingBottom={bottom} flex={flex || 0.2} justfity="center">
      <Button {...props} style={{ marginBottom: 20 }} color="black">
        Применить
      </Button>
    </Grid>
  );
};

export default AcceptButton;
