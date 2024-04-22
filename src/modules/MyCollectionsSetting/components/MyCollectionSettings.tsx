import GroupInfo from '@/components/Informers/GroupInfo';
import SettingIcon from '@/icons/linear/setting-4.svg';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
const MyCollectionSettings = () => {
  return (
    <Card
      borderRadius={0}
      style={{
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
        position: 'absolute',
        zIndex: 20,
        elevation: 20,
        width: '100%',
      }}
    >
      <Grid row justfity="space-between" align="center">
        <GroupInfo leftInfo={'Мои подборки'} rightInfo={'16'} weight="bold" />
        <SettingIcon />
      </Grid>
    </Card>
  );
};

export default MyCollectionSettings;
