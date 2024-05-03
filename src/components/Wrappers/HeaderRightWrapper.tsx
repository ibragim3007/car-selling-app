import Grid from '@/shared/ui/layout/Grid';
import { normalizedSize } from '@/shared/utils/size';
import React, { PropsWithChildren } from 'react';

interface HeaderRightWrapperProps extends PropsWithChildren {}

const HeaderRightWrapper = ({ children }: HeaderRightWrapperProps) => {
  return <Grid style={{ marginRight: normalizedSize(16) }}>{children}</Grid>;
};

export default HeaderRightWrapper;
