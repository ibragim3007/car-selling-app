import UnSubscripbeSuggestion from '@/components/UnSubscripbeSuggestion/UnSubscripbeSuggestion';
import CarList from '@/modules/CarList';
import MyCollectionSettings from '@/modules/MyCollectionsSetting';
import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useCarsList } from '@/shared/hooks/entityies/cars/useCarsList';
import Grid from '@/shared/ui/layout/Grid';
import PageBackground from '@/shared/ui/layout/PageBackground';
import LoadingData from '@/shared/ui/loading/LoadingData';
import Typography from '@/shared/ui/typography/Typography';
import { useIsFocused } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import Separator from './Separator';

const CollectionsPage = () => {
  const isFocused = useIsFocused();
  const { data } = useUserQuery();
  const [isPolling, setisPolling] = useState(true);
  const { carsForDisplay, nextPage, isLoading, isFetching, refetch } = useCarsList({
    isPolling: isPolling && isFocused,
  });

  const updatePoolingInfo = (value: boolean) => {
    setisPolling(value);
  };

  return (
    <PageBackground color="primary">
      <Stack.Screen
        options={{
          headerLeft: () => {
            if (isPolling)
              return (
                <Pressable onPress={() => setisPolling(!isPolling)}>
                  <Grid row paddingHorizontal={10} align="center">
                    <Typography color="secondary" variant="caption-2">
                      Новое...
                    </Typography>
                    <LoadingData />
                  </Grid>
                </Pressable>
              );
          },
        }}
      />
      <CarList
        data={carsForDisplay}
        topOffset={0}
        onRefresh={refetch}
        loading={isLoading || (isFetching && !isPolling)}
        onEndReached={nextPage}
        ItemSeparatorComponent={() => <Separator />}
        updatePoolingInfo={updatePoolingInfo}
        ListFooterComponent={() => (isLoading || isFetching) && <LoadingData />}
        headerComponent={
          <Grid>
            {!data && <UnSubscripbeSuggestion />}
            <MyCollectionSettings />
            <Separator />
          </Grid>
        }
      />
    </PageBackground>
  );
};

export default CollectionsPage;
