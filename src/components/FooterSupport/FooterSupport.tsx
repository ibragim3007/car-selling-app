import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import PhoneNumber from '../Supported/PhoneNumber';
import ToMail from '../Supported/ToMail';

const FooterSupport = () => {
  return (
    <Grid space="sm">
      <Typography variant="subhead">Остались вопросы?</Typography>
      <Grid row space="lg">
        <PhoneNumber variant="subhead" />
        <ToMail variant="subhead" />
      </Grid>
    </Grid>
  );
};

export default FooterSupport;
