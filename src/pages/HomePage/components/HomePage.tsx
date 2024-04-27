import HomeHeaderInfo from '@/modules/HomeHeaderHelp';
import NewsSlider from '@/modules/NewsSlider';

import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';

import React from 'react';

const HomePage = () => {
  return (
    <ScrollViewPage color="primary">
      <Grid space="md" paddingTop={8}>
        <Grid flex={1} paddingHorizontal={8}>
          <HomeHeaderInfo />
        </Grid>
        <Grid flex={1}>
          <NewsSlider />
        </Grid>
      </Grid>
    </ScrollViewPage>
  );
};

export default HomePage;
