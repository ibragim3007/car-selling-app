import CheckIcon from '@/shared/ui/icons/CheckIcon';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface HeaderTitleProps {
  title: string;
  id: number;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <Grid row align="center" gap={5}>
      <CheckIcon />
      <Typography style={{ flex: 1 }} lineBreakMode="clip" numberOfLines={1} variant="footnote" weight="bold">
        {title}
      </Typography>
    </Grid>
  );
};

export default HeaderTitle;
