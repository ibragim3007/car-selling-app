import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, PressableProps, StyleSheet, Text, TextProps } from 'react-native';
import { fontWeight } from '../styles/typography/typography';
import { normalizedSize } from '@/shared/utils/size';

type TColorsButton = 'green' | 'black' | 'red';
type TSizeButton = 'large' | 'small';
type TVariantButton = 'default' | 'outline' | 'ghost' | 'text';

export interface ButtonProps extends PressableProps {
  variant?: TVariantButton;
  children?: React.ReactNode;
  color?: TColorsButton;
  size?: TSizeButton;
  textStyle?: TextProps['style'];
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = 'large',
  color = 'green',
  variant = 'default',
  textStyle,
  loading,
  fullWidth,
  leftIcon,
  ...props
}: ButtonProps) => {
  const { colors } = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  const variantStyles = useMemo(
    () => ({
      default: {
        green: {
          backgroundColor: props.disabled
            ? colors.accent.disabled
            : isPressed
            ? colors.accent.primary_dark
            : colors.accent.primary,
        },
        black: {
          backgroundColor: props.disabled ? colors.accent.disabled : isPressed ? '#4D4D53' : colors.text.primary,
        },
        red: {
          backgroundColor: colors.accent.red,
        },
      },
      outline: {
        green: { backgroundColor: colors.accent.primary_pale_transparent },
        black: { backgroundColor: colors.background.neutral },
        red: {
          backgroundColor: colors.accent.red,
        },
      },
      ghost: {
        green: { backgroundColor: isPressed ? colors.background.success : 'transparent' },
        black: { backgroundColor: isPressed ? colors.background.neutral : 'transparent' },
        red: {
          backgroundColor: colors.accent.red,
        },
      },
      text: {
        green: { backgroundColor: 'transparent' },
        black: { backgroundColor: 'transparent' },
        red: {
          backgroundColor: colors.accent.red,
        },
      },
    }),
    [colors, isPressed, props.disabled],
  );
  const textVariants = useMemo(
    () => ({
      default: {
        green: { color: colors.text.white },
        black: { color: colors.text.white },
        red: { color: colors.text.white },
      },
      outline: {
        green: { color: colors.accent.primary },
        black: { color: colors.text.primary },
        red: { color: colors.text.primary },
      },
      ghost: {
        green: { color: colors.accent.primary },
        black: { color: colors.text.primary },
        red: { color: colors.text.primary },
      },
      text: {
        green: { color: colors.accent.primary },
        black: { color: colors.text.primary },
        red: { color: colors.text.primary },
      },
    }),
    [colors],
  );
  const textVariant = textVariants[variant][color];
  const currentVariant = variantStyles[variant][color];

  const styleButton: PressableProps['style'] = {
    paddingVertical: size === 'large' ? normalizedSize(13) : normalizedSize(8),
    paddingHorizontal: size === 'large' ? normalizedSize(13) : normalizedSize(12),
    borderRadius: colors.styles.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: normalizedSize(12),
  };

  const styleText: TextProps['style'] = {
    color: colors.text.white,
    fontFamily: fontWeight.medium,
    textAlign: 'center',
    fontSize: normalizedSize(size === 'large' ? 16 : 13),
  };

  const onTouchStart = () => {
    setIsPressed(true);
  };
  const onTouchEnd = () => {
    setIsPressed(false);
  };

  const buttonS: ButtonProps['style'] = StyleSheet.flatten([
    fullWidth !== undefined && { width: '100%' },
    styleButton,
    currentVariant,
    props.style,
  ]);
  const textS = StyleSheet.flatten([styleText, textVariant, textStyle]);

  return (
    <Pressable {...props} style={buttonS} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {leftIcon && leftIcon}
      {loading ? (
        <ActivityIndicator size={'small'} color={styleText.color} />
      ) : (
        <Text {...styleText} style={textS} numberOfLines={1}>
          {props.children}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
