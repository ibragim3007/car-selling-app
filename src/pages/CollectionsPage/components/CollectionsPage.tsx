import Button from '@/shared/ui/buttons/Button';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { View } from 'react-native';

const CollectionsPage = () => {
  return (
    <View style={{ gap: 10, margin: 20 }}>
      <Typography variant="largeTitle">largeTitle</Typography>

      <Button color="green" variant="default">
        Hello world!
      </Button>
    </View>
  );
};

export default CollectionsPage;
