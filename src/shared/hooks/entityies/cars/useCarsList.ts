import { useLazyCarsQuery } from '@/shared/api/entityies/car/api.car';
import { SECONDS_FOR_POOLING } from '@/shared/config/config';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { ICar } from '@/shared/types';
import { isCars, isErrorCars } from '@/shared/utils/isErrorCars';
import { useCallback, useEffect, useRef, useState } from 'react';

export const useCarsList = () => {
  const [getCars, { data: cars, isFetching, isLoading }] = useLazyCarsQuery();
  const [carsForDisplay, setCarsForDisplay] = useState<ICar[]>([]);
  const [pollingIntervalId, setPollingIntervalId] = useState<number | null>(null);
  const isPolling = useRef(false);

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

  const refetch = useCallback(async () => {
    const res = (await getCars().unwrap()) as unknown;

    udpdateCarState(res, { rewrite: true });
  }, []);

  useEffect(() => {
    void (async () => {
      await refetch();
    })();
  }, [getCars, refetch]);

  const startPolling = () => {
    if (!pollingIntervalId) {
      const id = window.setInterval(() => {
        void refetch();
      }, SECONDS_FOR_POOLING);
      setPollingIntervalId(id);
    }
  };

  const stopPolling = () => {
    if (pollingIntervalId) {
      window.clearInterval(pollingIntervalId);
      setPollingIntervalId(null);
    }
  };

  useEffect(() => {
    return () => stopPolling();
  }, []);

  return { carsForDisplay, cars, isFetching, isLoading, getCars, nextPage, refetch, startPolling, stopPolling };
};
