import CarInfoBig from '@/modules/CarInfoBig';
import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

const CarPage = () => {
  return (
    <PageBackground>
      <CarInfoBig />
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cupiditate voluptatum veritatis sint?
        Accusantium, quia minus velit suscipit architecto pariatur.
      </Typography>
    </PageBackground>
  );
};

export default CarPage;
