import MyCollectionSettings2, {
  MyCollectionSettings2Props,
} from '@/modules/MyCollectionsSetting/components/MyCollectionSettings2';
import SuggestCreateFilter from '@/modules/SuggestCreateFilter';
import Grid from '@/shared/ui/layout/Grid';
import React from 'react';

interface ServiceRouteProps {
  myCollectionProps: MyCollectionSettings2Props;
  isShowCardSuggestion: boolean;
}
const ServiceRoute = ({ myCollectionProps, isShowCardSuggestion }: ServiceRouteProps) => {
  if (isShowCardSuggestion)
    return (
      <Grid
        style={{ position: 'absolute', zIndex: 30, elevation: 30, width: '95%', alignSelf: 'center' }}
        // marginHorizontal={8}
        marginVertical={8}
      >
        <SuggestCreateFilter />
      </Grid>
    );

  return <MyCollectionSettings2 {...myCollectionProps} />;
};

export default ServiceRoute;
