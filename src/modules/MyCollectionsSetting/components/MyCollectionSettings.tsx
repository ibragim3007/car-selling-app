import ELD from '@/components/Handlers/ELD/ELD';
import GroupInfo from '@/components/Informers/GroupInfo';
import Hint from '@/components/Wrappers/Hints/Hint';
import CloseIcon from '@/icons/linear/close-square.svg';
import SettingIcon from '@/icons/linear/setting-4.svg';
import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Button from '@/shared/ui/buttons/Button';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import Animated, { LinearTransition } from 'react-native-reanimated';

const MyCollectionSettings = () => {
  const [isShowCollections, setIsShowCollections] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const { data: filters, isLoading, isFetching, isError } = useFiltersQuery();
  const { colors } = useTheme();

  const pressSettingOpen = () => {
    if (isShowCollections) {
      setOpenSetting(false);
      setTimeout(() => {
        setIsShowCollections(false);
      }, 120);
    } else setIsShowCollections(!isShowCollections);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isShowCollections === true) {
        setOpenSetting(true);
      } else {
        setOpenSetting(false);
      }
    }, 120);
  }, [isShowCollections]);

  const changePress = () => {
    setIsShowCollections(false);
    router.navigate('/filters');
  };

  const defaultHeight = normalizedSize(75);

  return (
    <>
      {isShowCollections && <Grid height={defaultHeight} />}
      <Hint onClose={pressSettingOpen} isShow={isShowCollections}>
        <Grid
          style={{
            borderBottomLeftRadius: isShowCollections ? 20 : 0,
            borderBottomRightRadius: isShowCollections ? 20 : 0,
            height: defaultHeight,
          }}
          color={colors.background.secondary}
        >
          <Card
            paddingHorizontal={16}
            paddingVertical={16}
            borderRadius={0}
            style={{
              overflow: 'hidden',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              zIndex: 20,
              elevation: 20,
              width: '100%',
              height: openSetting ? 'auto' : defaultHeight,
              gap: 16,
            }}
          >
            <ELD data={filters} isLoading={isLoading || isFetching} isError={isError}>
              <Grid space="md">
                {isShowCollections && (
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
        </Grid>
      </Hint>
    </>
  );
};

export default MyCollectionSettings;
