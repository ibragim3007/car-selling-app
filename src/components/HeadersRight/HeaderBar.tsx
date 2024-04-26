import Phone from '@/icons/linear/call.svg';
import Search from '@/icons/linear/search-normal.svg';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import HeaderRightWrapper from '../Wrappers/HeaderRightWrapper';

const HeaderBar = () => {
  return (
    <HeaderRightWrapper>
      <Grid row gap={20}>
        <Phone width={20} height={20} style={{ padding: 12 }} />
        <Search width={20} height={20} style={{ padding: 12 }} />
      </Grid>
    </HeaderRightWrapper>
  );
};

export default HeaderBar;
