import { Stack } from 'expo-router';
import React from 'react';
import { LeftButton } from './LeftButton';
import RightButton from './RightButton';

const StackButton = () => {
  return (
    <Stack.Screen
      options={{
        headerRight: () => <RightButton />,
        headerLeft: () => <LeftButton />,
      }}
    />
  );
};

export default StackButton;
