import { SUPPORT_MAIL } from '@/shared/config/config';
import { TypographyProps } from '@/shared/ui/styles/typography/typography';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Linking } from 'react-native';

interface ToMailProps extends TypographyProps {}

const ToMail = ({ ...props }: ToMailProps) => {
  const clickMail = async () => {
    await Linking.openURL(`mailto:${SUPPORT_MAIL}`);
  };

  return (
    <Typography onPress={clickMail} variant="caption-1" weight="medium" color="success" {...props}>
      {SUPPORT_MAIL}
    </Typography>
  );
};

export default ToMail;
