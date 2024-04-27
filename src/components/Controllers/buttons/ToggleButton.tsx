import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
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
  return (
    <Grid color={colors.background.neutral} style={{ borderRadius: colors.styles.borderRadius }} row padding={3}>
      {items.map((item, index) => (
        <Pressable style={{ flex: 1 }} key={index} onPress={() => onPress(item)}>
          <Card
            color={value.value === item.value ? 'primary' : 'transparent'}
            paddingHorizontal={8}
            paddingVertical={6}
            style={{ shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { height: 2, width: 0 } }}
          >
            <Typography textAlign="center" variant="footnote">
              {item.title}
            </Typography>
          </Card>
        </Pressable>
      ))}
    </Grid>
  );
};

export default ToggleButton;
