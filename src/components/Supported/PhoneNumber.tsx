import { SUPPORT_NUMBER } from '@/shared/config/config';
import { formatPhoneNumber } from '@/shared/helpers/formatPhoneNumber';
import { TypographyProps } from '@/shared/ui/styles/typography/typography';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Linking } from 'react-native';

interface PhoneNumberProps extends TypographyProps {}

const PhoneNumber = ({ ...props }: PhoneNumberProps) => {
  const clickPhoneNumber = async () => {
    await Linking.openURL(`tel:${SUPPORT_NUMBER}`);
  };

  return (
    <Typography onPress={clickPhoneNumber} weight="medium" variant="caption-1" color="success" {...props}>
      {formatPhoneNumber(SUPPORT_NUMBER)}
    </Typography>
  );
};

export default PhoneNumber;
