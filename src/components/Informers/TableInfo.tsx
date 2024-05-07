import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { RowInfoProps } from './RowInfo';
import Divider from '@/shared/ui/divider/Divider';

interface TableInfoProps extends RowInfoProps {}

const TableInfo = ({ title, value, isEven = true, transparent, valueProps, children }: TableInfoProps) => {
  if (!value) return null;
  return (
    <>
      <Grid align="center" row>
        <Grid flex={1}>
          <Typography variant="footnote" color="secondary">
            {title}
          </Typography>
        </Grid>
        <Grid flex={1}>
          {children ? (
            children
          ) : (
            <Typography weight="medium" variant="footnote" {...valueProps}>
              {value ? value : '---'}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default TableInfo;
