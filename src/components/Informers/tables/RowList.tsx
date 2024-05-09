import Grid, { GridProps } from '@/shared/ui/layout/Grid';
import React from 'react';

import Typography from '@/shared/ui/typography/Typography';
import Checkbox from '@/shared/ui/inputs/Checkbox';

interface RowListProps<TItem> extends GridProps {
  title?: string | number;
  value?: TItem;
}

const RowList = <TItem,>({ title, value, ...props }: RowListProps<TItem>) => {
  return (
    <Grid paddingVertical={14} {...props} row space="sm">
      <Checkbox value={true} />
      <Typography variant="subhead">{title ? title : '---(error)'}</Typography>
    </Grid>
  );
};

export default RowList;
