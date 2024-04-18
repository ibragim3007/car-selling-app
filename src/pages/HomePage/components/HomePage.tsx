import Typography from '@/shared/ui/typography/Typography';
import React from 'react';
import { View } from 'react-native';

const HomePage = () => {
  return (
    <View style={{ gap: 10, margin: 20 }}>
      <Typography variant="largeTitle">largeTitle</Typography>
      <Typography variant="title-1">Title-1</Typography>
      <Typography variant="title-2">Title-2</Typography>
      <Typography variant="title-3">Title-3</Typography>
      <Typography variant="headline">headline</Typography>
      <Typography variant="body">body</Typography>
      <Typography variant="callout">callout</Typography>
      <Typography variant="subhead">subhead</Typography>
      <Typography variant="footnote">footnote</Typography>
      <Typography variant="caption-1">caption-1</Typography>
      <Typography variant="caption-2">caption-2</Typography>
    </View>
  );
};

export default HomePage;
