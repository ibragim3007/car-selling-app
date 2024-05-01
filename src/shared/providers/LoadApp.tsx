import { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '../hooks/storeHooks';
import { loadTheme } from '../store/themeReducer/actions/loadTheme';

interface LoadAppProps extends PropsWithChildren {}

const LoadApp = ({ children }: LoadAppProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(loadTheme());
  }, [dispatch]);
  return children;
};

export default LoadApp;
