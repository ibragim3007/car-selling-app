import Tag, { TagProps } from '@/shared/ui/tags/Tag';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { normalizedSize } from '@/shared/utils/size';

interface TagPriceProps extends TagProps {
  amount: number;
  arrow?: 'arrow-up' | 'arrow-down';
}

const TagPrice = ({ amount, arrow = 'arrow-up', ...props }: TagPriceProps) => {
  return (
    <Tag {...props}>
      <FontAwesome6 name={arrow} size={normalizedSize(13)} color="black" />
      {amount}
    </Tag>
  );
};

export default TagPrice;
