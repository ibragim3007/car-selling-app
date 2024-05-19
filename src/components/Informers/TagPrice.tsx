import { ARROWS } from '@/shared/constants/strings/Icons';
import { formatCurrency } from '@/shared/helpers/priceFormat';

import Tag, { TagProps } from '@/shared/ui/tags/Tag';
import React from 'react';

interface TagPriceProps extends TagProps {
  amount: number;
  isRised?: boolean;
}

const TagPrice = ({ amount, isRised, ...props }: TagPriceProps) => {
  return (
    <Tag color={amount > 0 ? 'red' : 'green'} {...props}>
      {isRised !== undefined ? (isRised ? ARROWS.arrowUp : ARROWS.arrowDown) : null} {formatCurrency(amount)}
    </Tag>
  );
};

export default TagPrice;
