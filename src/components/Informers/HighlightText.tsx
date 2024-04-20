import { useTheme } from '@/shared/hooks/stable/useTheme';
import Typography from '@/shared/ui/typography/Typography';
import React, { PropsWithChildren } from 'react';

interface HighlightTextProps extends PropsWithChildren {
  isRed?: boolean;
}

const HighlightText: React.FC<HighlightTextProps> = ({ isRed, children }) => {
  const { colors } = useTheme();
  const colorText = isRed ? colors.accent.negative : colors.accent.primary;

  return (
    <Typography weight="medium" variant="caption-1" style={{ color: colorText }}>
      {children}
    </Typography>
  );
};

export default HighlightText;
