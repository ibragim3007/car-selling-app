import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React from 'react';
import { Switch, SwitchProps } from 'react-native';

export interface SwitchCustomProps extends SwitchProps {}

const SwitchCustom = ({ ...props }: SwitchCustomProps) => {
  const { colors } = useTheme();
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
