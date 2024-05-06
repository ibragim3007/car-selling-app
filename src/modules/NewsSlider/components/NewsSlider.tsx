import CardTitle from '@/components/Wrappers/CardTitle';
import ArrowRight from '@/icons/linear/arrow-right.svg';
import { useNewsQuery } from '@/shared/api/entityies/news/news.api';
import { INews } from '@/shared/types/news';
import IconWrap from '@/shared/ui/icons/IconWrap';
import Grid from '@/shared/ui/layout/Grid';
import LoadingData from '@/shared/ui/loading/LoadingData';
import { normalizedSize } from '@/shared/utils/size';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React from 'react';
import NewsItem from './newsItem/NewsItem';

export const NewsSlider = () => {
  const { data, isLoading } = useNewsQuery();

  const renderItem: ListRenderItem<INews> = ({ item }) => {
    return <NewsItem item={item} />;
  };

  if (isLoading) return <LoadingData />;
  if (!data) return null;

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
        data={data.items}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />
    </Grid>
  );
};
