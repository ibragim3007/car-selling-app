import { useAppSelector } from '../storeHooks';

export const useTheme = () => {
  const { colors, currentTheme } = useAppSelector(state => state.themeReducer);

  return { colors, currentTheme };
};
