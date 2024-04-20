import { themes } from '@/shared/constants/theme/theme';
import { AppDispatch, RootState } from '../../store';
import { themeAction } from '../themeSlice';

export const switchTheme = () => (dispatch: AppDispatch, getState: () => RootState) => {
  try {
    const {
      themeReducer: { currentTheme },
    } = getState();

    if (currentTheme === 'dark') {
      dispatch(themeAction.setCurrentColors(themes.find(theme => theme.themeName === 'light') || themes[0]));
      dispatch(themeAction.setCurrentTheme('light'));
    } else if (currentTheme === 'light') {
      dispatch(themeAction.setCurrentColors(themes.find(theme => theme.themeName === 'dark') || themes[0]));
      dispatch(themeAction.setCurrentTheme('dark'));
    }
  } catch (e) {
    console.log(e);
  }
};
