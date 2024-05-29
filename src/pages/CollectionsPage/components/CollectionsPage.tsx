import CarListSkeleton from '@/components/Skeletons/components/CarListSkeleton';
import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useCarsList } from '@/shared/hooks/entityies/cars/useCarsList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut, useSharedValue } from 'react-native-reanimated';
import Separator from './Separator';
import ServiceRoute from './Service/ServiceRoute';
import { useFiltersQuery } from '@/shared/api/entityies/filters/filter.api';
import { useAppSelector } from '@/shared/hooks/storeHooks';
import { useIsFocused } from '@react-navigation/native';

const CollectionsPage = () => {
  const { data, isLoading: loadingUser } = useUserQuery();
  const [isPolling, setisPolling] = useState(true);
  const isFocused = useIsFocused();
  const { carsForDisplay, isLoadingCarsFirstTime, nextPage, isLoading, isFetching, refetch } = useCarsList({
    isPolling: isPolling && isFocused,
  });

  const updatePoolingInfo = (value: boolean) => setisPolling(value);

  const [isShowCollection, setIsShowCollection] = useState(false);
  const toggleShowCollection = () => setIsShowCollection(!isShowCollection);

  const scrollY = useSharedValue(0);
  const changeScrollY = (yPox: number) => (scrollY.value = yPox);

  const { data: filters, isLoading: isLoadingFilters } = useFiltersQuery();
  const showSuggestCreateFilter = useAppSelector(state => state.carsPageReducer.showSuggestCreateFilter);
  const isShowCardSuggestion = (!filters || filters.length === 0) && !isLoadingFilters && !showSuggestCreateFilter;

  return (
    <PageBackground color="secondary">
      <ServiceRoute
        myCollectionProps={{
          scrollY: scrollY,
          isShowStickey: isPolling,
          isShowCollections: isShowCollection,
          toggleShowCollection: toggleShowCollection,
        }}
        isShowCardSuggestion={isShowCardSuggestion}
      />

      {isLoadingCarsFirstTime ? (
        <Grid flex={1} style={{ marginTop: normalizedSize(80) }}>
          <CarListSkeleton />
        </Grid>
      ) : (
        <Grid flex={1}>
          <CarList
            topOffset={isShowCardSuggestion ? 192 : 80}
            scrollHandler={changeScrollY}
            data={carsForDisplay}
            onRefresh={refetch}
            refreshing={isFetching}
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
            >
              <Pressable onPress={toggleShowCollection} style={{ height: '100%' }} />
            </Animated.View>
          )}
        </Grid>
      )}
    </PageBackground>
  );
};

export default CollectionsPage;
