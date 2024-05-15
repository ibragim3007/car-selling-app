import { useLazyCarsQuery } from '@/shared/api/entityies/car/api.car';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { ICar } from '@/shared/types';
import { isCars, isErrorCars } from '@/shared/utils/isErrorCars';
import { useCallback, useEffect, useState } from 'react';

export const useCarsList = () => {
  const [getCars, { data: cars, isFetching, isLoading }] = useLazyCarsQuery();
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

  const udpdateCarState = (value: unknown) => {
    if (isErrorCars(value)) {
      setCarsForDisplay([...carsForDisplay, ...value.results]);
      return;
    }
    if (isCars(value)) setCarsForDisplay([...carsForDisplay, ...value]);
  };

  const refetch = useCallback(async () => {
    const res = (await getCars().unwrap()) as unknown;

    udpdateCarState(res);
  }, []);

  useEffect(() => {
    void (async () => {
      await refetch();
    })();
  }, [getCars, refetch]);

  return { carsForDisplay, cars, isFetching, isLoading, getCars, nextPage, refetch };
};
