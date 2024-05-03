import ArrowLeft from '@/icons/linear/arrow-left.svg';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import { normalizedSize } from '@/shared/utils/size';
import { router } from 'expo-router';
import React from 'react';

const iconSize = normalizedSize(20);

const BackButton = () => {
  return <PressableIcon Icon={() => ArrowLeft({ height: iconSize, width: iconSize })} onPress={() => router.back()} />;
};

export default BackButton;
