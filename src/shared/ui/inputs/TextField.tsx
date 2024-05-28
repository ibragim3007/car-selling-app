import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import PressableIcon from '../buttons/PressableButton';
import { fontWeight } from '../styles/typography/typography';
import EyeIcon from '@/icons/linear/eye.svg';
import { FieldError, RefCallBack } from 'react-hook-form';
import Grid from '../layout/Grid';
import Typography from '../typography/Typography';

export type Ref = TextInput;

export interface TextFieldProps extends TextInputProps {
  rightSide?: React.ReactNode;
  endIcon?: React.ReactNode;
  ref?: RefCallBack;
  showError?: boolean;
  error?: FieldError;
  isFocus?: boolean;
}

const TextField = React.forwardRef<Ref, TextFieldProps>(
  ({ secureTextEntry, endIcon, rightSide, showError, isFocus, error, ...props }: TextFieldProps, ref) => {
    const { colors, currentTheme } = useTheme();
    const [showPassword, setShowPassword] = useState(secureTextEntry);
    const pressShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const styles: TextFieldProps['style'] = StyleSheet.flatten([
      secureTextEntry || endIcon ? { flex: 1 } : undefined,
      {
        color: colors.text.primary,
        width: '100%',
        fontSize: normalizedSize(15),
        padding: normalizedSize(16),
        paddingRight: 0,
        fontFamily: fontWeight.regular,
      },
      props.style,
    ]);
    return (
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
            {...props}
            ref={ref}
            keyboardAppearance={currentTheme}
            textContentType={props.textContentType || 'oneTimeCode'}
            placeholderTextColor={colors.text.secondary}
            secureTextEntry={showPassword}
            style={styles}
          />
          <Grid style={{ padding: normalizedSize(12) }}>{endIcon && endIcon}</Grid>
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
    );
  },
);

export default TextField;
