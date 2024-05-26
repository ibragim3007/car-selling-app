import { useCarsQuery, useLazyCarsQuery } from '@/shared/api/entityies/car/api.car';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { ICar } from '@/shared/types';
import { isCars, isErrorCars } from '@/shared/utils/isErrorCars';
import { useEffect, useState } from 'react';

export const useCarsList = (params: { isPolling?: boolean }) => {
  const { isPolling } = params;

  const [getCars, { isLoading: isLoadingNextPage, isFetching: isFetchingNextPage }] = useLazyCarsQuery();
  const {
    data: cars,
    isFetching,
    isLoading,
    refetch,
  } = useCarsQuery({}, { pollingInterval: isPolling ? 4000 : 0, skipPollingIfUnfocused: true });

  useEffect(() => {
    if (cars && !isLoading && !isFetching) {
      udpdateCarState(cars, { rewrite: true });
    }
  }, [cars, isLoading, isFetching]);

  const [carsForDisplay, setCarsForDisplay] = useState<ICar[]>([]);

  const nextPage = async () => {
    if (carsForDisplay && carsForDisplay[carsForDisplay.length - 1]) {
      try {
        const result = await getCars({ lastId: carsForDisplay[carsForDisplay.length - 1].id }).unwrap();

        udpdateCarState(result);
      } catch (e) {
        Inform.log(e);
      }
    }
  };

  const udpdateCarState = (value: unknown, options?: { rewrite?: boolean }) => {
    if (options?.rewrite) {
      if (isErrorCars(value)) {
        setCarsForDisplay(value.results);
        return;
      }
      if (isCars(value)) setCarsForDisplay(value);
      return;
    }

    if (isErrorCars(value)) {
      setCarsForDisplay([...carsForDisplay, ...value.results]);
      return;
    }
    if (isCars(value)) setCarsForDisplay([...carsForDisplay, ...value]);
  };

  return {
    carsForDisplay,
    cars,
    isFetching,
    isLoading: isLoadingNextPage || isLoading || isFetchingNextPage,
    getCars,
    nextPage,
    refetch,
  };
};
