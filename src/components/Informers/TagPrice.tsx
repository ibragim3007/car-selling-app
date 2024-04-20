import { ARROWS } from '@/shared/constants/strings/Icons';
import { priceFormat } from '@/shared/helpers/priceFormat';

import Tag, { TagProps } from '@/shared/ui/tags/Tag';
import React from 'react';

interface TagPriceProps extends TagProps {
  amount: number;
  isRised: boolean;
}

const TagPrice = ({ amount, isRised, ...props }: TagPriceProps) => {
  return (
    <Tag color={isRised ? 'red' : 'green'} {...props}>
      {isRised ? ARROWS.arrowUp : ARROWS.arrowDown} {priceFormat(amount)}
    </Tag>
  );
};

export default TagPrice;
