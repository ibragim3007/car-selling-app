import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React from 'react';
import { Switch, SwitchProps } from 'react-native';
import LoadingData from '../loading/LoadingData';

export interface SwitchCustomProps extends SwitchProps {
  loading?: boolean;
}

const SwitchCustom = ({ loading, ...props }: SwitchCustomProps) => {
  const { colors } = useTheme();

  if (loading) return <LoadingData />;

  return (
    <Switch
      {...props}
      thumbColor={colors.background.primary}
      trackColor={{
        true: colors.text.primary,
        false: colors.text.secondary,
      }}
      value={props.value}
    />
  );
};

export default SwitchCustom;
