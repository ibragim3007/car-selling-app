import { rootApi } from '../../root/api';

import apiConfig from '@/shared/config/apiConfig';
import { IDictionaryRoot, IMarkaModel, IModel, IRegionsDict } from '@/shared/types/dictionary.types';

export const filterApi = rootApi.injectEndpoints({
  endpoints: build => ({
    dictionary: build.query<IDictionaryRoot, void>({
      query: () => {
        return {
          url: apiConfig.dictionary.dictionary.url,
          method: apiConfig.dictionary.dictionary.method,
        };
      },
    }),
    regions: build.query<IRegionsDict, void>({
      query: () => {
        return {
          url: apiConfig.dictionary.regions.url,
          method: apiConfig.dictionary.regions.method,
        };
      },
    }),
    markaModel: build.query<IMarkaModel[], void>({
      query: () => {
        return {
          url: apiConfig.dictionary.markaModel.url,
          method: apiConfig.dictionary.markaModel.method,
        };
      },
    }),
    models: build.query<IModel[], number>({
      query: (mark: number) => {
        return {
          url: apiConfig.dictionary.models.url,
          method: apiConfig.dictionary.markaModel.method,
          params: { mark },
        };
      },
    }),
  }),
});

export const { useDictionaryQuery, useRegionsQuery, useMarkaModelQuery, useModelsQuery } = filterApi;
