import Grid, { GridProps } from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import ArrowRightGreen from '@/icons/linear/arrow-right-green.svg';
import PressableIcon from '@/shared/ui/buttons/PressableButton';

interface GoInButtonProps extends GridProps {
  title: string;
  value: string | number;
  fn?: () => void;
}

const GoInButton = ({ title, value, fn, ...props }: GoInButtonProps) => {
  return (
    <Grid {...props} row justfity="space-between" align="center">
      <Grid gap={4}>
        <Typography variant="footnote" color="secondary">
          {title}
        </Typography>
        <Typography variant="subhead">{value}</Typography>
      </Grid>
      {fn && <PressableIcon onPress={fn} size={18} Icon={ArrowRightGreen} />}
    </Grid>
  );
};

export default GoInButton;
