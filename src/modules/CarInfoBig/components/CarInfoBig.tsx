import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Advantages from './Advantages/Advantages';
import Characteristics from './Characteristics/Characteristics';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import SellerComment from './SellerComment/SellerComment';

const CarInfoBig = () => {
  // const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  return (
    <Grid>
      {/* <DynamicHeader scrollOffsetY={scrollOffsetY} /> */}

      <Grid gap={8}>
        <HeaderInfo />
        <Grid gap={16} style={{ paddingHorizontal: 8, marginBottom: 20 }}>
          <GeneralInfo />
          <Characteristics />
          <SellerComment />
          <Advantages />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarInfoBig;
