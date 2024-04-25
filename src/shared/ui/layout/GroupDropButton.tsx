import React, { PropsWithChildren } from 'react';
import Card, { CardProps } from '../card/Card';
import Grid from './Grid';

interface GroupDropButtonProps extends PropsWithChildren, CardProps {}

const GroupDropButton = ({ children, ...props }: GroupDropButtonProps) => {
  return (
    <Card borderRadius={16} color="secondary" p={0} style={{ overflow: 'hidden' }} {...props}>
      <Grid gap={1}>{children}</Grid>
    </Card>
  );
};

export default GroupDropButton;
