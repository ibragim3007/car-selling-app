import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { View } from 'react-native';
import Typography from '../typography/Typography';

interface BadgeProps {
  value: string | number;
}

const Badge = ({ value }: BadgeProps) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.text.primary,
        borderRadius: 56,
        paddingHorizontal: normalizedSize(4),
        paddingVertical: normalizedSize(2),
        alignSelf: 'center',
      }}
    >
      <Typography variant="caption-2" color="white">
        {value}
      </Typography>
    </View>
  );
};

export default Badge;
