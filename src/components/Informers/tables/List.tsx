import { BaseTypeDictionary } from '@/shared/types/dictionary.types';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import React from 'react';

export interface ListProps<TItem = BaseTypeDictionary> extends FlashListProps<TItem> {}

const List = <TItem,>({ ...props }: ListProps<TItem>) => {
  return <FlashList {...props} estimatedItemSize={43} />;
};

export default List;
