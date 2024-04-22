import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React, { useState } from 'react';
import { Switch } from 'react-native';

const SwitchCustom = () => {
  const [currentSwitch, setCurrentSwitch] = useState(false);
  const { colors } = useTheme();
  return (
    <Switch
      thumbColor={colors.background.primary}
      trackColor={{
        true: colors.text.primary,
        false: colors.text.secondary,
      }}
      onChange={() => setCurrentSwitch(!currentSwitch)}
      value={currentSwitch}
    />
  );
};

export default SwitchCustom;
