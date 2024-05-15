import PageBackground from '@/shared/ui/layout/PageBackground';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import StackButton from '../components/StackButton';

const ChoiceRegion = () => {
  return (
    <PageBackground>
      <StackButton />
      {/* <Input control={control} name="name" /> */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit a obcaecati autem cumque assumenda voluptatibus
        eos nemo tempore id velit?
      </Typography>
    </PageBackground>
  );
};

export default ChoiceRegion;
