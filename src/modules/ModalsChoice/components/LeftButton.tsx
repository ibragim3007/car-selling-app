import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';

export const LeftButton = () => {
  const { colors } = useTheme();
  return <AntDesign name="close" onPress={() => router.push('../')} size={24} color={colors.text.primary} />;
};
