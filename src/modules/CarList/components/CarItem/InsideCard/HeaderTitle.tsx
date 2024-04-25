import CheckIcon from '@/shared/ui/icons/CheckIcon';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface HeaderTitleProps {
  title: string;
  id: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, id }) => {
  return (
    <Grid row align="center" gap={5}>
      <CheckIcon />
      <Typography variant="headline" weight="bold">
        {title} {id}
      </Typography>
    </Grid>
  );
};

export default HeaderTitle;
