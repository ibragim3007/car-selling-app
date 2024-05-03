import ArrowRight from '@/icons/linear/arrow-right.svg';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Card from '../card/Card';
import Grid from '../layout/Grid';
import Typography from '../typography/Typography';

interface RowButtonProps extends TouchableOpacityProps {
  Icon?: React.FC<SvgProps>;
  title: string;
}

const iconSize = normalizedSize(20);

const RowButton = ({ Icon, title, ...props }: RowButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <Card p={0} borderRadius={0}>
        <Grid row align="center" justfity="space-between" padding={18}>
          <Grid space="md" row align="center">
            {Icon && <Icon height={iconSize} width={iconSize} />}
            <Typography weight="medium" variant="subhead">
              {title}
            </Typography>
          </Grid>
          {props.onPress && <ArrowRight width={iconSize} height={iconSize} />}
        </Grid>
      </Card>
    </TouchableOpacity>
  );
};

export default RowButton;
