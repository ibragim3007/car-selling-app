import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import TextField from '@/shared/ui/inputs/TextField';
import React, { useState } from 'react';
import { Control, Controller, UseControllerProps } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import Grid from '../../../shared/ui/layout/Grid';
import { TypographyProps } from '../../../shared/ui/styles/typography/typography';
import Typography from '../../../shared/ui/typography/Typography';

export interface InputProps extends TextInputProps {
  label?: string;
  labelProps?: TypographyProps;
  rightSide?: React.ReactNode;
  endIcon?: React.ReactNode;
  control: Control<any, any>;
  showError?: boolean;
  name: string;
  rules?: UseControllerProps['rules'];
}

const Input = ({ label, name, rules, labelProps, control, showError = true, rightSide, ...props }: InputProps) => {
  const { colors, currentTheme } = useTheme();

  const [isFocus, setIsFocus] = useState(false);

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
          <TextField
            keyboardAppearance={currentTheme}
            ref={ref}
            isFocus={isFocus}
            value={value}
            error={error}
            textContentType={props.textContentType || 'oneTimeCode'}
            onBlur={() => {
              setIsFocus(false);
              return onBlur;
            }}
            placeholderTextColor={colors.text.secondary}
            onChangeText={onChange}
            onFocus={() => setIsFocus(true)}
            {...props}
          />
        )}
      />
    </Grid>
  );
};

export default Input;
