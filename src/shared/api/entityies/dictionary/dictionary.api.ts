import { rootApi } from '../../root/api';

import apiConfig from '@/shared/config/apiConfig';
import { IDictionaryRoot, IRegionsDict } from '@/shared/types/dictionary.types';

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
  }),
});

export const { useDictionaryQuery, useRegionsQuery } = filterApi;
