import Grid from '@/shared/ui/layout/Grid';
import React from 'react';
import { ScrollView } from 'react-native';
import Characteristics from './Characteristics/Characteristics';
import HeaderInfo from './HeaderInfo/HeaderInfo';
import GeneralInfo from './GeneralInfo/GeneralInfo';

const CarInfoBig = () => {
  // const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <Grid>
      {/* <DynamicHeader scrollOffsetY={scrollOffsetY} /> */}
      <ScrollView>
        <Grid gap={8} style={{ marginBottom: 100 }}>
          <HeaderInfo />
          <Grid gap={16} style={{ paddingHorizontal: 8 }}>
            <GeneralInfo />
            <Characteristics />
          </Grid>
        </Grid>
      </ScrollView>
    </Grid>
  );
};

export default CarInfoBig;
