import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { fontWeight } from '../styles/typography/typography';

export interface InputProps extends TextInputProps {}

const Input = ({ ...props }: InputProps) => {
  const { colors } = useTheme();

  const styles: InputProps['style'] = StyleSheet.flatten([
    {
      padding: normalizedSize(16),
      borderWidth: 1,
      borderColor: colors.divider,
      borderRadius: colors.styles.borderRadius,
      fontSize: 15,
      fontFamily: fontWeight.regular,
    },
    props.style,
  ]);

  return <TextInput {...props} style={styles} />;
};

export default Input;
