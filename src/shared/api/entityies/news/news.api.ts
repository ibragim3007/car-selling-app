import { rootApi } from '../../root/api';

import apiConfig from '@/shared/config/apiConfig';
import { INewsShort } from '@/shared/types/news';

export const newsApi = rootApi.injectEndpoints({
  endpoints: build => ({
    news: build.query<INewsShort, void>({
      query: () => {
        return {
          url: apiConfig.news.news.url,
          method: apiConfig.news.news.method,
        };
      },
    }),
  }),
});

export const { useNewsQuery } = newsApi;
