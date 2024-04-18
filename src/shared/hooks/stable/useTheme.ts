import { useAppSelector } from '../storeHooks';

export const useTheme = () => {
  const { colors } = useAppSelector(state => state.themeReducer);

  return { colors };
};
