import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import Card from '../card/Card';
import Grid from '../layout/Grid';
import { TColor } from '../styles/typography/typography';
import Typography from '../typography/Typography';

export interface DropButtonProps extends TouchableOpacityProps {
  title: string;
  color?: TColor;
  Icon: React.FC<SvgProps>;
}

const DropButton = ({ title, color, Icon, ...props }: DropButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <Card borderRadius={0} p={12}>
        <Grid row gap={8} align="center">
          <Icon />
          <Typography color={color} numberOfLines={1} ellipsizeMode="tail" variant="subhead">
            {title}
          </Typography>
        </Grid>
      </Card>
    </TouchableOpacity>
  );
};

export default DropButton;
