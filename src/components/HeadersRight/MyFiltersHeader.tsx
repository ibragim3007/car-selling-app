import Add from '@/icons/linear/add.svg';
import { routes } from '@/shared/config/routes';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import { router } from 'expo-router';
import React from 'react';

const MyFiltersHeader = () => {
  return (
    // <HeaderRightWrapper>
    <PressableIcon onPress={() => router.push(routes.pages.filter.newfilter)} size={18} Icon={Add} />
    // </HeaderRightWrapper>
  );
};

export default MyFiltersHeader;
