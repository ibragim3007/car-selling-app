import { IEnum } from '@/shared/constants/enums/Car';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import AntDesign from '@expo/vector-icons/build/AntDesign';
import React from 'react';
import { Pressable } from 'react-native';

interface SelectItemProps {
  item: IEnum;
  currentValue: number | null;
  onChange: (item: IEnum) => void;
}

const SelectItem = ({ item, currentValue, onChange }: SelectItemProps) => {
  const isSelected = item.id === currentValue;
  const { colors } = useTheme();
  const onPress = () => {
    onChange(item);
  };
  return (
    <Pressable onPress={onPress}>
      <Grid padding={16} row justfity="space-between">
        <Typography>{item.text}</Typography>
        {isSelected && <AntDesign color={colors.text.primary} name="check" size={normalizedSize(20)} />}
      </Grid>
    </Pressable>
  );
};

export default SelectItem;
