import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import SettingIcon from '@/icons/linear/setting-4.svg';
const MyCollectionSettings = () => {
  return (
    <Card borderRadius={0} style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
      <Grid row justfity="space-between" align="center">
        <Grid row gap={10}>
          <Typography variant="title-3" weight="bold">
            Мои подборки
          </Typography>
          <Typography variant="title-3" weight="bold" color="disabled">
            16
          </Typography>
        </Grid>
        <SettingIcon />
      </Grid>
    </Card>
  );
};

export default MyCollectionSettings;
