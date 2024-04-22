import MyFilters from '@/modules/MyFilters';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const MyFiltersPage = () => {
  return (
    <PageBackground paddingHorizontal={8}>
      <Grid paddingHorizontal={16} paddingVertical={16}>
        <Typography variant="footnote">Выберите подборки, которые будут отображаться в вашей ленте</Typography>
      </Grid>
      <MyFilters />
    </PageBackground>
  );
};

export default MyFiltersPage;
