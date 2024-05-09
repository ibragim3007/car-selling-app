import React from 'react';

import { Checkbox as CheckboxExpo, CheckboxProps as CheckboxExpoProps } from 'expo-checkbox';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { StyleSheet } from 'react-native';
import { normalizedSize } from '@/shared/utils/size';

interface CheckboxProps extends CheckboxExpoProps {}

const Checkbox = ({ ...props }: CheckboxProps) => {
  const { colors } = useTheme();
  return (
    <CheckboxExpo
      {...props}
      color={props.value ? colors.accent.primary : colors.text.secondary}
      style={styles.checkbox}
    />
  );
};

const styles = StyleSheet.create({
  checkbox: {
    borderRadius: 4,
    width: normalizedSize(20),
    height: normalizedSize(20),
  },
});

export default Checkbox;
