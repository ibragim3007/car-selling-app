import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const CheckIcon = () => {
  const { colors } = useTheme();
  return <AntDesign name="checkcircle" size={normalizedSize(20)} color={colors.accent.primary} />;
};

export default CheckIcon;
