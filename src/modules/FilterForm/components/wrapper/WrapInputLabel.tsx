import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React, { PropsWithChildren } from 'react';

interface WrapInputLabelProps extends PropsWithChildren {
  title: string;
}

const WrapInputLabel = ({ title, children }: WrapInputLabelProps) => {
  return (
    <Grid space="md">
      <Typography weight="medium">{title}</Typography>
      {children}
    </Grid>
  );
};

export default WrapInputLabel;
