import { PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from '../hooks/storeHooks';
import { loadApp } from '../store/appReducer/actions/loadApp';

interface LoadAppProps extends PropsWithChildren {}

const LoadApp = ({ children }: LoadAppProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void (async () => {
      await dispatch(loadApp());
    })();
  }, [dispatch]);
  return children;
};

export default LoadApp;
