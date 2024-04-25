import React from 'react';
import Logo from '@/icons/logos/Logo24.svg';
import { normalizedSizeVertical } from '@/shared/utils/size';

const HeaderIcon = () => {
  return <Logo height={normalizedSizeVertical(24)} width={normalizedSizeVertical(135)} />;
};

export default HeaderIcon;
