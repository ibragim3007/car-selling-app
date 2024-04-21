import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, PressableProps, StyleSheet, Text, TextProps } from 'react-native';
import { fontWeight } from '../styles/typography/typography';
import { normalizedSize } from '@/shared/utils/size';

type TColorsButton = 'green' | 'black';
type TSizeButton = 'large' | 'small';
type TVariantButton = 'default' | 'outline' | 'ghost' | 'text';

interface ButtonProps extends PressableProps {
  variant?: TVariantButton;
  children?: React.ReactNode;
  color?: TColorsButton;
  size?: TSizeButton;
  textStyle?: TextProps['style'];
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = 'large',
  color = 'green',
  variant = 'default',
  textStyle,
  loading,
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
      },
      outline: {
        green: { backgroundColor: colors.accent.primary_pale_transparent },
        black: { backgroundColor: colors.background.neutral },
      },
      ghost: {
        green: { backgroundColor: 'transparent' },
        black: { backgroundColor: isPressed ? colors.background.neutral : 'transparent' },
      },
      text: {
        green: { backgroundColor: 'transparent' },
        black: { backgroundColor: 'transparent' },
      },
    }),
    [colors, isPressed, props.disabled],
  );
  const textVariants = useMemo(
    () => ({
      default: {
        green: { color: colors.text.white },
        black: { color: colors.text.white },
      },
      outline: {
        green: { color: colors.accent.primary },
        black: { color: colors.text.primary },
      },
      ghost: {
        green: { color: colors.accent.primary },
        black: { color: colors.text.primary },
      },
      text: {
        green: { color: colors.accent.primary },
        black: { color: colors.text.primary },
      },
    }),
    [colors],
  );
  const textVariant = textVariants[variant][color];
  const currentVariant = variantStyles[variant][color];

  const styleButton: PressableProps['style'] = {
    paddingVertical: size === 'large' ? normalizedSize(13) : normalizedSize(8),
    borderRadius: colors.styles.borderRadius,
  };

  const styleText: TextProps['style'] = {
    color: colors.text.white,
    fontFamily: fontWeight.medium,
    textAlign: 'center',
    fontSize: normalizedSize(16),
  };

  const onTouchStart = () => {
    setIsPressed(true);
  };
  const onTouchEnd = () => {
    setIsPressed(false);
  };

  const buttonS = StyleSheet.flatten([styleButton, currentVariant, props.style]);
  const textS = StyleSheet.flatten([styleText, textVariant, textStyle]);

  return (
    <Pressable {...props} style={buttonS} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.text.primary} />
      ) : (
        <Text {...styleText} style={textS}>
          {props.children}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
