import MyFilters from '@/modules/MyFilters';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const MyFiltersPage = () => {
  return (
    <ScrollViewPage>
      <Grid paddingHorizontal={16} paddingVertical={16}>
        <Typography variant="footnote">Выберите подборки, которые будут отображаться в вашей ленте</Typography>
      </Grid>
      <MyFilters />
    </ScrollViewPage>
  );
};

export default MyFiltersPage;
