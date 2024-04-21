import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import { TypographyProps } from '@/shared/ui/styles/typography/typography';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface HighlightTextProps extends TypographyProps {
  isRed?: boolean;
}

const HighlightText: React.FC<HighlightTextProps> = ({ isRed, ...props }) => {
  const { colors } = useTheme();
  const colorText = isRed ? colors.accent.negative : colors.accent.primary;

  return <Typography weight="medium" variant="caption-1" {...props} style={[{ color: colorText }]} />;
};

export default HighlightText;
