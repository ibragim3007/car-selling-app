import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
// export interface IItem {
//   value: string;
//   title: string;
// }
interface ToggleButtonProps<TItem> {
  items: TItem[];

  Item: (item: TItem, index: number) => React.ReactNode;
}

const ToggleButton = <TItem,>({ items, Item }: ToggleButtonProps<TItem>) => {
  const { colors } = useTheme();

  return (
    <Grid
      color={colors.background.neutral}
      style={{ borderRadius: colors.styles.borderRadius, overflow: 'hidden' }}
      row
      paddingVertical={2}
      paddingHorizontal={3}
    >
      {items.map((item, index) => Item(item, index))}
    </Grid>
  );
};

export default ToggleButton;
