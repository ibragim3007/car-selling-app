import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import ContentLoader from 'react-content-loader/native';
import Rect from './Over/Rect';
import { normalizedSize } from '@/shared/utils/size';

const CarListSkeleton = () => {
  const Item = () => (
    <Card>
      <ContentLoader
        speed={2}
        width={normalizedSize(476)}
        height={normalizedSize(124)}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x={2} y={1} rx={10} ry={10} width={104} height={120} />
        <Rect x={125} y={3} rx={3} ry={3} width={200} height={20} />
        <Rect x={125} y={30} rx={3} ry={3} width={155} height={10} />
        <Rect x={125} y={45} rx={3} ry={3} width={55} height={10} />
        <Rect x={125} y={81} rx={3} ry={3} width={150} height={20} />
        <Rect x={125} y={105} rx={3} ry={3} width={200} height={10} />
      </ContentLoader>
    </Card>
  );

  const arr = [1, 2, 3, 4];

  return (
    <Grid space="sm" flex={1}>
      {/* <FlashList estimatedItemSize={normalizedSize(145)} data={arr} renderItem={() => <Item />} /> */}
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Grid>
  );
};

export default CarListSkeleton;
