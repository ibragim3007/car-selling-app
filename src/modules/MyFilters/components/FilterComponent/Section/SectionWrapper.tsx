import Divider from '@/shared/ui/divider/Divider';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React, { PropsWithChildren } from 'react';

interface SectionWrapperProps extends PropsWithChildren {
  title: string;
}

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <>
      <Grid space="sm">
        <Typography variant="footnote" color="secondary">
          {title}
        </Typography>
        <Grid space={'sm'} row wrap>
          {children}
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default SectionWrapper;
