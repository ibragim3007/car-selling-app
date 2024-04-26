import { INews } from '@/shared/types/news';
import Card, { CardProps } from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Image, Pressable } from 'react-native';

interface NewsItemProps extends CardProps {
  item: INews;
}

const NewsItem = ({ item, ...props }: NewsItemProps) => {
  return (
    <Pressable>
      <Grid padding={0} style={{ height: normalizedSize(246) }}>
        <Card
          p={0}
          borderRadius={12}
          style={{
            width: normalizedSize(265),
            marginRight: 16,
            shadowColor: '#00000093',
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: {
              height: 10,
              width: 0,
            },
          }}
          {...props}
        >
          <Grid gap={12} padding={0}>
            <Image
              source={{ uri: item.coverImage }}
              alt={item.title}
              style={{
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                width: normalizedSize(265),
                height: normalizedSize(136),
              }}
            />
            <Grid paddingHorizontal={12} paddingBottom={12} space="sm">
              <Typography weight="bold" numberOfLines={1} lineBreakMode="tail" variant="footnote">
                {item.title}
              </Typography>
              <Typography variant="caption-1" numberOfLines={2} lineBreakMode="tail">
                {item.shortDescription}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Pressable>
  );
};

export default NewsItem;
