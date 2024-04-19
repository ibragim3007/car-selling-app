import React from 'react';
import ArrowLeft from '@/icons/linear/arrow-left.svg';
import { router } from 'expo-router';
import { Pressable } from 'react-native';

const BackButton = () => {
  return (
    <Pressable onPress={() => router.back()}>
      <ArrowLeft height={25} width={25} />
    </Pressable>
  );
};

export default BackButton;
