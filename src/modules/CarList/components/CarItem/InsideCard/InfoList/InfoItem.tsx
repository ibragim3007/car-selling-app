import Divider from '@/shared/ui/divider/Divider';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface InfoItemProps {
  infoString: string | number;
  isLastElement?: boolean;
}

const InfoItem: React.FC<InfoItemProps> = ({ infoString, isLastElement }) => {
  if (!infoString) return null;
  return (
    <Grid row align="center">
      <Typography color="secondary" variant="caption-1">
        {infoString}
      </Typography>
      {!isLastElement && <Divider vertical space={6} style={{ height: 13 }} />}
    </Grid>
  );
};

export default InfoItem;
