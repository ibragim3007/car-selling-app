import GroupInfo from '@/components/Informers/GroupInfo';
import SettingIcon from '@/icons/linear/setting-4.svg';
import TouchAnimation from '@/shared/ui/animations/TouchAnimation';
import Button from '@/shared/ui/buttons/Button';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
const MyCollectionSettings = () => {
  const [isShowCollections, setIsShowCollections] = useState(false);

  const pressSettingOpen = () => {
    setIsShowCollections(!isShowCollections);
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
        position: 'absolute',
      }}
    >
      <TouchAnimation>
        <Pressable onPress={pressSettingOpen}>
          <Grid row justfity="space-between" align="center">
            <GroupInfo leftInfo={'Мои подборки'} rightInfo={'16'} weight="bold" />
            <SettingIcon />
          </Grid>
        </Pressable>
      </TouchAnimation>
      {isShowCollections && (
        <Animated.View entering={FadeInUp}>
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
        </Animated.View>
      )}
    </Card>
  );
};

export default MyCollectionSettings;
