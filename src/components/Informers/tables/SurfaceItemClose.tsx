import SurfaceInfo from '@/components/Informers/SurfaceInfo';
import CloseIcon from '@/icons/linear/close-square.svg';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface SurfaceItemCloseProps {
  value: number;
  title?: string | number;
  onRemove: (value: number) => void;
}

const SurfaceItemClose = ({ value, title, onRemove }: SurfaceItemCloseProps) => {
  return (
    <SurfaceInfo>
      <Typography style={{ textAlignVertical: 'center' }}>{title}</Typography>
      <PressableIcon onPress={() => onRemove(value)} style={{ padding: 0 }} Icon={CloseIcon} />
    </SurfaceInfo>
  );
};

export default SurfaceItemClose;
