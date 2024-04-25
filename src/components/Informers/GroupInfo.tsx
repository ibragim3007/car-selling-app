import Grid from '@/shared/ui/layout/Grid';
import { TypographyWeight } from '@/shared/ui/styles/typography/typography';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface GroupInfoProps {
  leftInfo: string;
  rightInfo: string;
  weight?: TypographyWeight;
}

const GroupInfo = ({ leftInfo, rightInfo, weight }: GroupInfoProps) => {
  return (
    <Grid row gap={8}>
      <Typography variant="headline" weight={weight}>
        {leftInfo}
      </Typography>
      <Typography variant="headline" weight={weight} color="secondary">
        {rightInfo}
      </Typography>
    </Grid>
  );
};

export default GroupInfo;
