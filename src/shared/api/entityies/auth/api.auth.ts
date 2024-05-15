import { ILogin, IUser, IUserLogin } from '@/shared/types';
import { rootApi } from '../../root/api';

import apiConfig from '@/shared/config/apiConfig';

export const authApi = rootApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<IUserLogin, ILogin>({
      query: (data: ILogin) => {
        return {
          url: apiConfig.user.login.url,
          method: apiConfig.user.login.method,
          body: data,
        };
      },
    }),
    user: build.query<IUser, void>({
      query: () => {
        return {
          url: apiConfig.user.user.url,
          method: apiConfig.user.user.method,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useUserQuery } = authApi;
