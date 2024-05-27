import ELD from '@/components/Handlers/ELD/ELD';
import GroupInfo from '@/components/Informers/GroupInfo';
import CloseIcon from '@/icons/linear/close-square.svg';
import SettingIcon from '@/icons/linear/setting-4.svg';
import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import constants from '@/shared/constants/constants';
import { CustomAnimations } from '@/shared/ui/animations/AnimationConstants';
import LayoutAnimation from '@/shared/ui/animations/LayoutAnimation';
import Button from '@/shared/ui/buttons/Button';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { router } from 'expo-router';
import React from 'react';
import Animated, { SharedValue, SlideInUp, SlideOutUp, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export interface MyCollectionSettings2Props {
  isShowStickey: boolean;
  toggleShowCollection: () => void;
  isShowCollections: boolean;
  scrollY: SharedValue<number>;
}

const MyCollectionSettings2 = ({
  isShowCollections,
  isShowStickey,
  scrollY,
  toggleShowCollection,
}: MyCollectionSettings2Props) => {
  const { data: filters, isLoading, isFetching, isError } = useFiltersQuery();

  const pressSettingOpen = () => {
    toggleShowCollection();
  };

  const changePress = () => {
    toggleShowCollection();
    router.navigate('/filters');
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(scrollY.value < 25 ? -100 : 0, { duration: 100 }),
      transform: [
        {
          translateY: withTiming(scrollY.value > 25 ? -100 : 0, { duration: 250 }),
        },
      ],
    };
  });

  return (
    <>
      {isShowStickey && (
        <Animated.View
          style={[{ position: 'absolute', zIndex: 20, elevation: 20, width: '100%' }, headerAnimatedStyle]}
        >
          <Card
            paddingHorizontal={16}
            borderRadius={0}
            style={{
              overflow: 'hidden',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              zIndex: 20,
              elevation: 20,
              width: '100%',
              gap: 16,
              height: 'auto',
            }}
          >
            <ELD data={filters} isLoading={isLoading || isFetching} isError={isError}>
              <Grid space="md">
                {isShowCollections && (
                  <Animated.View exiting={SlideOutUp} entering={SlideInUp.duration(constants.layoutAnimationSpeed)}>
                    <Grid row justfity="space-between">
                      <Grid flex={0.9} row wrap gap={10}>
                        <Button variant={'outline'} color="black" size="small">
                          Все объявления
                        </Button>
                        <Button variant={'outline'} color="black" size="small">
                          Избранное
                        </Button>
                        <Button variant={'outline'} color="black" size="small">
                          История кликов
                        </Button>
                      </Grid>
                      <Grid flex={0}>
                        <PressableIcon onPress={pressSettingOpen} Icon={CloseIcon} />
                      </Grid>
                    </Grid>
                  </Animated.View>
                )}

                <LayoutAnimation>
                  <Grid justfity="space-between" align="center" row>
                    <LayoutAnimation>
                      <GroupInfo leftInfo={'Мои подборки'} rightInfo={filters?.length || 0} weight="bold" />
                    </LayoutAnimation>
                    <LayoutAnimation>
                      {isShowCollections ? (
                        <Button onPress={changePress} color="green" variant="text" size="small">
                          Изменить
                        </Button>
                      ) : (
                        <PressableIcon onPress={pressSettingOpen} Icon={SettingIcon} />
                      )}
                    </LayoutAnimation>
                  </Grid>
                </LayoutAnimation>

                {isShowCollections && (
                  <Grid row wrap gap={10}>
                    {filters?.map((filter, index) => (
                      <Animated.View entering={CustomAnimations.showItem(index)} key={filter.id}>
                        <Button
                          key={filter.id}
                          variant={filter.enabled ? 'default' : 'outline'}
                          color="black"
                          size="small"
                        >
                          {filter.name}
                        </Button>
                      </Animated.View>
                    ))}
                  </Grid>
                )}
              </Grid>
            </ELD>
          </Card>
        </Animated.View>
      )}
    </>
  );
};

export default MyCollectionSettings2;
