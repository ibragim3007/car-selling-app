import GroupInfo from '@/components/Informers/GroupInfo';
import SettingIcon from '@/icons/linear/setting-4.svg';
import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
const MyCollectionSettings = () => {
  const [isShowCollections, setIsShowCollections] = useState(true);

  const pressSettingOpen = () => {
    router.navigate('mycollections/mycollections');
    // setIsShowCollections(!isShowCollections);
  };

  return (
    <Card
      borderRadius={0}
      style={{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 20,
        elevation: 20,
        width: '100%',
        gap: 16,
      }}
    >
      <Pressable onPress={pressSettingOpen}>
        <Grid row justfity="space-between" align="center">
          <GroupInfo leftInfo={'Мои подборки'} rightInfo={'16'} weight="bold" />
          <SettingIcon />
        </Grid>
      </Pressable>

      {isShowCollections && (
        <Grid row wrap gap={10}>
          <Button color="black" size="small">
            Все подборки
          </Button>
          <Button color="black" size="small" variant="outline">
            Все
          </Button>
          <Button color="black" size="small" variant="outline">
            Все подборки
          </Button>
          <Button color="black" size="small" variant="outline">
            Подборка
          </Button>
        </Grid>
      )}
    </Card>
  );
};

export default MyCollectionSettings;
