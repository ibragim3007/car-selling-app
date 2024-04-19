import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import InfoItem from './InfoItem';

interface InfoListProps {
  infoList: string[];
}

const InfoList: React.FC<InfoListProps> = ({ infoList }) => {
  return (
    <Grid row style={{ flexWrap: 'wrap' }}>
      {infoList.map((info, index) => (
        <InfoItem key={info} infoString={info} isLastElement={index === infoList.length - 1} />
      ))}
    </Grid>
  );
};

export default InfoList;
