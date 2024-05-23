import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import { Entypo, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { ColorValue, Pressable, StyleSheet } from 'react-native';

export interface CheckboxCustom {
  value?: boolean;
  disabled?: boolean;
  color?: ColorValue;
  onValueChange?: (value: boolean) => void;
  type?: 'check' | 'partial';
}

const Checkbox = ({ value = false, type, disabled, color, onValueChange }: CheckboxCustom) => {
  const { colors } = useTheme();
  const accentColor = color || colors.accent.primary;
  const styles = StyleSheet.create({
    checkbox: {
      borderRadius: 4,
      borderWidth: 2,
      borderColor: value ? accentColor : colors.text.secondary,
      backgroundColor: value ? accentColor : 'transparent',
      width: normalizedSize(20),
      height: normalizedSize(20),
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
  });

  const isCheck = type === 'check';
  const isPartial = type === 'partial';

  return (
    <Pressable disabled={disabled} onPress={() => onValueChange && onValueChange(!value)} style={styles.checkbox}>
      {value && !isPartial && <Fontisto name="check" size={9} color="#fff" />}
      {isPartial && value && <Entypo name="minus" size={17} color="#fff" />}
    </Pressable>
  );
};

export default Checkbox;
