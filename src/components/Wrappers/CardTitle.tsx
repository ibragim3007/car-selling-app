import Card, { CardProps } from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import { TypographyProps } from '@/shared/ui/styles/typography/typography';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { Pressable } from 'react-native';

export interface CardTitleProps extends CardProps {
  title: string;
  isNoPadding?: boolean;
  rightHeader?: React.ReactNode;
  titleProps?: TypographyProps;
  transparent?: boolean;
  onPressHeader?: () => void;
}

const CardTitle = ({
  title,
  isNoPadding,
  rightHeader,
  titleProps,
  transparent,
  onPressHeader,
  ...props
}: CardTitleProps) => {
  return (
    <Card
      borderRadius={16}
      p={isNoPadding ? 0 : 16}
      style={transparent && { backgroundColor: 'transparent' }}
      {...props}
    >
      <Grid gap={isNoPadding ? 0 : 12}>
        <Pressable onPress={onPressHeader}>
          <Grid row justfity="space-between" align="center">
            <Typography
              variant="headline"
              weight="bold"
              style={{
                flex: 0.95,
                paddingHorizontal: isNoPadding ? 16 : 0,
                paddingVertical: isNoPadding ? 12 : 0,
              }}
              {...titleProps}
            >
              {title}
            </Typography>

            {rightHeader}
          </Grid>
        </Pressable>
        {props.children}
      </Grid>
    </Card>
  );
};

export default CardTitle;
