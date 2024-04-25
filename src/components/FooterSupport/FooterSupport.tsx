import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import * as Linking from 'expo-linking';
import { formatPhoneNumber } from '@/shared/helpers/formatPhoneNumber';
import { SUPPORT_MAIL, SUPPORT_NUMBER } from '@/shared/config/config';

const FooterSupport = () => {
  const clickPhoneNumber = async () => {
    await Linking.openURL(`tel:${SUPPORT_NUMBER}`);
  };

  const clickMail = async () => {
    await Linking.openURL(`mailto:${SUPPORT_MAIL}`);
  };

  return (
    <Grid space="sm">
      <Typography variant="subhead">Остались вопросы?</Typography>
      <Grid row space="lg">
        <Typography onPress={clickPhoneNumber} variant="subhead" weight="medium" color="success">
          {formatPhoneNumber(SUPPORT_NUMBER)}
        </Typography>
        <Typography onPress={clickMail} variant="subhead" weight="medium" color="success">
          {SUPPORT_MAIL}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterSupport;
