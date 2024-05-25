import ELD from '@/components/Handlers/ELD/ELD';
import GroupInfo from '@/components/Informers/GroupInfo';
import CloseIcon from '@/icons/linear/close-square.svg';
import SettingIcon from '@/icons/linear/setting-4.svg';
import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import Button from '@/shared/ui/buttons/Button';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { router } from 'expo-router';
import React from 'react';
import Animated, { FadeInUp, FadeOutUp, LinearTransition, SlideInUp, SlideOutUp } from 'react-native-reanimated';

interface MyCollectionSettings2Props {
  isShowStickey: boolean;
  toggleShowCollection: () => void;
  isShowCollections: boolean;
}

const MyCollectionSettings2 = ({
  isShowCollections,
  isShowStickey,
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

  return (
    <>
      {isShowStickey && (
        <Animated.View style={{ zIndex: 20, elevation: 20, width: '100%' }} exiting={FadeOutUp} entering={FadeInUp}>
          <Card
            paddingHorizontal={16}
            // paddingVertical={0}
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
              // position: 'absolute',
            }}
          >
            <ELD data={filters} isLoading={isLoading || isFetching} isError={isError}>
              <Grid space="md">
                {isShowCollections && (
                  <Animated.View
                    exiting={SlideOutUp.springify().mass(1).damping(10)}
                    entering={SlideInUp.springify().mass(0.3)}
                  >
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

                <Animated.View layout={LinearTransition}>
                  <Grid justfity="space-between" align="center" row>
                    <GroupInfo leftInfo={'Мои подборки'} rightInfo={filters?.length || 0} weight="bold" />
                    {isShowCollections ? (
                      <Button onPress={changePress} color="green" variant="text" size="small">
                        Изменить
                      </Button>
                    ) : (
                      <PressableIcon onPress={pressSettingOpen} Icon={SettingIcon} />
                    )}
                  </Grid>
                </Animated.View>

                {isShowCollections && (
                  <Grid row wrap gap={10}>
                    {filters?.map(filter => (
                      <Button
                        key={filter.id}
                        variant={filter.enabled ? 'default' : 'outline'}
                        color="black"
                        size="small"
                      >
                        {filter.name}
                      </Button>
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
