import SurfaceInfo from '@/components/Informers/SurfaceInfo';
import CloseIcon from '@/icons/linear/close-square.svg';
import Badge from '@/shared/ui/badge/Badge';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import Typography from '@/shared/ui/typography/Typography';
import React from 'react';

interface SurfaceItemCloseProps {
  value: number;
  title?: string | number;
  onRemove?: (value: number) => void;
  badgeNumber?: number;
}

const SurfaceItemClose = ({ value, title, badgeNumber, onRemove }: SurfaceItemCloseProps) => {
  return (
    <SurfaceInfo>
      <Typography style={{ textAlignVertical: 'center' }}>{title}</Typography>
      {badgeNumber !== undefined && <Badge value={badgeNumber} />}
      {onRemove && value ? (
        <PressableIcon onPress={() => onRemove(value)} style={{ padding: 0 }} Icon={CloseIcon} />
      ) : null}
    </SurfaceInfo>
  );
};

export default SurfaceItemClose;
