import EyeIcon from '@/icons/linear/eye.svg';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { Control, Controller, UseControllerProps } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import PressableIcon from '../../../shared/ui/buttons/PressableButton';
import Grid from '../../../shared/ui/layout/Grid';
import { TypographyProps, fontWeight } from '../../../shared/ui/styles/typography/typography';
import Typography from '../../../shared/ui/typography/Typography';
export interface InputProps extends TextInputProps {
  label?: string;
  labelProps?: TypographyProps;
  rightSide?: React.ReactNode;
  control: Control<any, any>;
  showError?: boolean;
  name: string;
  rules?: UseControllerProps['rules'];
}

const Input = ({
  label,
  name,
  rules,
  labelProps,
  control,
  showError = true,
  secureTextEntry,
  rightSide,

  ...props
}: InputProps) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  const [isFocus, setIsFocus] = useState(false);
  const pressShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const styles: InputProps['style'] = StyleSheet.flatten([
    secureTextEntry && { flex: 1 },
    {
      color: colors.text.primary,
      width: '100%',
      fontSize: normalizedSize(15),
      padding: normalizedSize(16),
      fontFamily: fontWeight.regular,
    },
    props.style,
  ]);

  return (
    <Grid space="sm">
      {label && (
        <Grid row justfity="space-between">
          <Typography variant="subhead" {...labelProps}>
            {label}
          </Typography>
          {rightSide && rightSide}
        </Grid>
      )}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onBlur, onChange, ref }, fieldState: { error } }) => (
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
                ref={ref}
                value={value}
                textContentType={props.textContentType || 'oneTimeCode'}
                onBlur={() => {
                  setIsFocus(false);
                  return onBlur;
                }}
                placeholderTextColor={colors.text.secondary}
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
            {error && showError && (
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
