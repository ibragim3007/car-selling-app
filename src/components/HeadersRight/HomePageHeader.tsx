import QAIcon from '@/icons/linear/message-question.svg';
import { routes } from '@/shared/config/routes';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import { router } from 'expo-router';
import React from 'react';
import HeaderRightWrapper from '../Wrappers/HeaderRightWrapper';

const HomePageHeader = () => {
  return (
    <HeaderRightWrapper>
      <PressableIcon onPress={() => router.push(routes.pages.support.help)} Icon={QAIcon} />
    </HeaderRightWrapper>
  );
};

export default HomePageHeader;
