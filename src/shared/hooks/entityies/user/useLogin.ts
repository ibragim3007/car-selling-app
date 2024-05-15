import { useLoginMutation } from '@/shared/api/entityies/auth/api.auth';
import { routes } from '@/shared/config/routes';
import { Inform } from '@/shared/services/logger.service/loger.service';
import { setToken } from '@/shared/store/appReducer/actions/auth/setToken';
import { ILogin } from '@/shared/types';
import { router } from 'expo-router';
import { useAppDispatch } from '../../storeHooks';

export const useLogin = () => {
  const [login, { data, isError, isLoading, error }] = useLoginMutation({ fixedCacheKey: 'login-data' });
  const dispatch = useAppDispatch();
  const pressLoginButton = async (data: ILogin) => {
    try {
      const result = await login(data).unwrap();
      if (result) {
        await dispatch(setToken(result.token));
        router.push(routes.tabs.collections);
      }
    } catch (e) {
      Inform.error(e);
    }
  };

  return { data, isError, isLoading, pressLoginButton, error };
};
