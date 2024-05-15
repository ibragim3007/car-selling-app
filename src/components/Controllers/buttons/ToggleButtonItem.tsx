import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Card from '@/shared/ui/card/Card';
import Divider from '@/shared/ui/divider/Divider';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Pressable } from 'react-native';

type TypeValue = string | number | null | undefined;

export interface ToggleButtonItemProps<TItem> {
  value: TypeValue;
  title?: string | number;
  item: TItem;
  currentValue?: TypeValue;
  onPress: (value: TItem) => void;
  index?: number;
  length?: number;
}

const ToggleButtonItem = <TItem,>({
  value,
  title,
  currentValue,
  index,
  item,
  length = 0,
  onPress,
}: ToggleButtonItemProps<TItem>) => {
  const { colors } = useTheme();
  const isShowDivider = index !== length - 1;
  return (
    <Grid flex={1} row align="center">
      <Pressable
        style={{
          flex: 1,
          height: '100%',
          borderRightColor: colors.divider,
        }}
        onPress={() => onPress(item)}
      >
        <Card
          color={currentValue === value ? 'primary' : 'transparent'}
          paddingHorizontal={8}
          paddingVertical={6}
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowOffset: { height: 3, width: 0 },
            transform: [{ scale: 1.015 }],
          }}
        >
          <Typography lineBreakMode="clip" numberOfLines={1} textAlign="center" variant="footnote">
            {title}
          </Typography>
        </Card>
      </Pressable>
      {isShowDivider && (
        <Divider style={{ position: 'absolute', right: -normalizedSize(9), zIndex: -1, height: '60%' }} vertical />
      )}
    </Grid>
  );
};

export default ToggleButtonItem;
