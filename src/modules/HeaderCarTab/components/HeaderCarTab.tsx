import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

import Star from '@/icons/linear/star.svg';
import More from '@/icons/linear/more.svg';

const HeaderCarTab = () => {
  return (
    <Grid gap={20} row>
      <Star />
      <More />
    </Grid>
  );
};

export default HeaderCarTab;
