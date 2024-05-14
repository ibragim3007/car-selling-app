import Button, { ButtonProps } from '@/shared/ui/buttons/Button';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

interface AcceptButtonProps extends ButtonProps {}

const AcceptButton = ({ ...props }: AcceptButtonProps) => {
  return (
    <Grid paddingHorizontal={8} flex={0.2} justfity="center">
      <Button {...props} style={{ marginBottom: 20 }} color="black">
        Применить
      </Button>
    </Grid>
  );
};

export default AcceptButton;
