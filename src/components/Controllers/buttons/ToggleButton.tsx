import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Card from '@/shared/ui/card/Card';
import Divider from '@/shared/ui/divider/Divider';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Pressable } from 'react-native';

export interface IItem {
  value: string;
  title: string;
}
interface ToggleButtonProps {
  items: IItem[];
  value: IItem;
  onChange: (item: IItem) => void;
}

const ToggleButton = ({ items, onChange, value }: ToggleButtonProps) => {
  const { colors } = useTheme();
  const onPress = (value: IItem) => {
    onChange(value);
  };
  const isShowDivider = (index: number) => index !== items.length - 1;
  return (
    <Grid
      color={colors.background.neutral}
      style={{ borderRadius: colors.styles.borderRadius, overflow: 'hidden' }}
      row
      padding={2}
    >
      {items.map((item, index) => (
        <Grid flex={1} row key={index} align="center">
          <Pressable
            style={{
              flex: 1,
              height: '100%',
              borderRightColor: colors.divider,
            }}
            key={index}
            onPress={() => onPress(item)}
          >
            <Card
              color={value.value === item.value ? 'primary' : 'transparent'}
              // paddingHorizontal={7}
              paddingVertical={6}
              style={{
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: { height: 2, width: 0 },
                transform: [{ scale: 1.015 }],
              }}
            >
              <Typography lineBreakMode="clip" numberOfLines={1} textAlign="center" variant="footnote">
                {item.title}
              </Typography>
            </Card>
          </Pressable>
          {isShowDivider(index) && (
            <Divider style={{ position: 'absolute', right: -normalizedSize(9), zIndex: -1, height: '60%' }} vertical />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default ToggleButton;
