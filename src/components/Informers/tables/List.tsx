import { FlashList, FlashListProps } from '@shopify/flash-list';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export interface ListProps<TItem> extends FlashListProps<TItem> {}

const List = <TItem,>({ ...props }: ListProps<TItem>) => {
  return <FlashList {...props} estimatedItemSize={43} renderScrollComponent={ScrollView} />;
};

export default List;
