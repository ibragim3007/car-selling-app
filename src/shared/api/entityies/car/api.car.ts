import { ICar, ICarBig } from '@/shared/types';
import { rootApi } from '../../root/api';

import apiConfig from '@/shared/config/apiConfig';

export const carApi = rootApi.injectEndpoints({
  endpoints: build => ({
    cars: build.query<ICar[], void>({
      query: () => {
        return {
          url: apiConfig.car.cars.url,
          method: apiConfig.car.cars.method,
        };
      },
    }),
    car: build.query<ICarBig, number>({
      query: (carId: number) => {
        return {
          url: `${apiConfig.car.car.url}/${carId}`,
          method: apiConfig.car.car.method,
        };
      },
    }),
  }),
});

export const { useCarsQuery, useCarQuery } = carApi;
