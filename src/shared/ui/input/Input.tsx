import EyeIcon from '@/icons/linear/eye.svg';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { Control, Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import PressableIcon from '../buttons/PressableButton';
import Grid from '../layout/Grid';
import { TypographyProps, fontWeight } from '../styles/typography/typography';
import Typography from '../typography/Typography';
export interface InputProps extends TextInputProps {
  label?: string;
  labelProps?: TypographyProps;
  rightSide?: React.ReactNode;
  control: Control<FieldValues, any>;
  name: string;
  rules?: UseControllerProps['rules'];
}

const Input = ({ label, name, rules, labelProps, control, secureTextEntry, rightSide, ...props }: InputProps) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocus, setIsFocus] = useState(false);
  const pressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const styles: InputProps['style'] = StyleSheet.flatten([
    secureTextEntry && { flex: 1 },
    {
      width: '100%',
      fontSize: normalizedSize(15),
      padding: normalizedSize(16),
      fontFamily: fontWeight.regular,
    },
    props.style,
  ]);

  return (
    <Grid space="sm">
      <Grid row justfity="space-between">
        {label && (
          <Typography variant="subhead" {...labelProps}>
            {label}
          </Typography>
        )}
        {rightSide && rightSide}
      </Grid>

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <>
            <Grid
              align="center"
              style={{
                borderWidth: 1,
                borderColor: error ? colors.accent.red : isFocus ? colors.text.primary : colors.divider,
                borderRadius: colors.styles.borderRadius,
              }}
              row
            >
              <TextInput
                value={value}
                textContentType="oneTimeCode"
                onBlur={() => {
                  setIsFocus(false);
                  return onBlur;
                }}
                onChangeText={onChange}
                onFocus={() => setIsFocus(true)}
                secureTextEntry={showPassword}
                {...props}
                style={styles}
              />
              {secureTextEntry && (
                <PressableIcon onPress={pressShowPassword} Icon={EyeIcon} style={{ padding: normalizedSize(12) }} />
              )}
            </Grid>
            {error && (
              <Typography variant="caption-1" color="red">
                {error?.message || 'Ошибка'}
              </Typography>
            )}
          </>
        )}
      />
    </Grid>
  );
};

export default Input;
