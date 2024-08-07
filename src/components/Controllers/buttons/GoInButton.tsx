import ArrowRightGreen from '@/icons/linear/arrow-right-green.svg';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Divider from '@/shared/ui/divider/Divider';
import Grid, { GridProps } from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Pressable } from 'react-native';

interface GoInButtonProps extends GridProps {
  title: string;
  value?: string | number;
  isDivider?: boolean;
  name?: string;
  fn?: () => void;
  onPress?: () => void;
  renderButton?: () => React.ReactNode;
}

const GoInButton = ({ title, name, value, fn, onPress, renderButton, isDivider, ...props }: GoInButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Grid wrap {...props} row justfity="space-between" align="center">
        <Grid wrap row align="center">
          <Grid gap={4} flex={1}>
            <Typography numberOfLines={1} variant="footnote" color="secondary">
              {title}
            </Typography>

            <Typography numberOfLines={1} variant="subhead">
              {value}
            </Typography>
          </Grid>

          {props.children && props.children}
          {(fn || name || renderButton) &&
            (renderButton ? (
              <Grid flex={0.5}>{renderButton()}</Grid>
            ) : (
              <PressableIcon onPress={fn} size={18} Icon={ArrowRightGreen} />
            ))}
        </Grid>
        {isDivider && <Divider />}
      </Grid>
    </Pressable>
  );
};

export default GoInButton;
