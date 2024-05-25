import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings2 from '@/modules/MyCollectionsSetting/components/MyCollectionSettings2';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useCarsList } from '@/shared/hooks/entityies/cars/useCarsList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import LoadingData from '@/shared/ui/loading/LoadingData';
import Typography from '@/shared/ui/typography/Typography';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated';
import Separator from './Separator';

const CollectionsPage = () => {
  const { data, isLoading: loadingUser } = useUserQuery();
  const [isPolling, setisPolling] = useState(true);
  const { carsForDisplay, nextPage, isLoading, isFetching, refetch } = useCarsList({
    isPolling,
  });

  const updatePoolingInfo = (value: boolean) => {
    setisPolling(value);
  };

  const [isShowCollection, setIsShowCollection] = useState(false);
  const toggleShowCollection = () => {
    setIsShowCollection(!isShowCollection);
  };

  return (
    <PageBackground color="secondary">
      <Stack.Screen
        options={{
          headerLeft: () => {
            if (isPolling)
              return (
                <Grid row paddingHorizontal={10} align="center">
                  <Typography color="secondary" variant="caption-2">
                    Новое...
                  </Typography>
                  <LoadingData />
                </Grid>
              );
          },
        }}
      />

      <MyCollectionSettings2
        isShowStickey={isPolling}
        isShowCollections={isShowCollection}
        toggleShowCollection={toggleShowCollection}
      />

      <Animated.View layout={LinearTransition} style={{ flex: 1 }}>
        <CarList
          data={carsForDisplay}
          // topOffset={80}
          onRefresh={refetch}
          loading={isLoading || (isFetching && !isPolling)}
          onEndReached={nextPage}
          ItemSeparatorComponent={() => <Separator />}
          updatePoolingInfo={updatePoolingInfo}
          ListFooterComponent={() => (isLoading || isFetching) && <LoadingData />}
          headerComponent={
            <Grid>
              {!data && !loadingUser && <UnSubscripbeSuggestion />}
              <Separator />
            </Grid>
          }
        />
        {isShowCollection && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0, 0, 0, 0.2)', marginTop: -20 }}
          />
        )}
      </Animated.View>
    </PageBackground>
  );
};

export default CollectionsPage;
