import CardTitle from '@/components/Wrappers/CardTitle';
import ArrowRight from '@/icons/linear/arrow-right.svg';
import mockNewsObjects from '@/shared/mock/news1';
import { INews } from '@/shared/types/news';
import IconWrap from '@/shared/ui/icons/IconWrap';
import Grid from '@/shared/ui/layout/Grid';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React from 'react';
import NewsItem from './newsItem/NewsItem';
import { normalizedSize } from '@/shared/utils/size';

export const NewsSlider = () => {
  const renderItem: ListRenderItem<INews> = ({ item }) => {
    return <NewsItem item={item} />;
  };

  return (
    <Grid space="sm" flex={1}>
      <CardTitle
        transparent
        titleProps={{ variant: 'title-3' }}
        title="Новости"
        rightHeader={<IconWrap Icon={ArrowRight} />}
      />

      <FlashList
        contentContainerStyle={{ paddingHorizontal: normalizedSize(8) }}
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={265}
        removeClippedSubviews
        horizontal
        data={mockNewsObjects}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Grid>
  );
};
