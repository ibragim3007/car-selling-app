import { FlashList, FlashListProps } from '@shopify/flash-list';
import React from 'react';

interface ListProps<TItem> extends FlashListProps<TItem> {}

const List = <TItem,>({ ...props }: ListProps<TItem>) => {
  return <FlashList {...props} estimatedItemSize={43} />;
};

export default List;
