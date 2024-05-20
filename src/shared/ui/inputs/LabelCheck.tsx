import React from 'react';
import Grid from '../layout/Grid';
import Checkbox from './Checkbox';
import Typography from '../typography/Typography';
import { Pressable } from 'react-native';
import { normalizedSize } from '@/shared/utils/size';

interface LabelCheckProps {
  label: string;
  onPressLabel?: () => void;
  onPressCheck?: () => void;
  onPressRightSide?: () => void;
  value?: boolean;
  rightSide?: React.ReactNode;
}

const LabelCheck = ({ label, value, rightSide, onPressCheck, onPressLabel, onPressRightSide }: LabelCheckProps) => {
  const onPressCheckDetect = onPressCheck ? onPressCheck : onPressLabel;
  const onPressLabelDetect = onPressLabel ? onPressLabel : onPressCheck;
  const onPressRightSideDetect = onPressRightSide ? onPressRightSide : onPressLabel ? onPressLabel : onPressCheck;

  return (
    <Grid height={48} row align="center">
      <Pressable
        onPress={onPressCheckDetect}
        style={{
          paddingHorizontal: normalizedSize(18),
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid pointerEvents="none">
          <Checkbox value={value} />
        </Grid>
      </Pressable>

      <Pressable onPress={onPressLabelDetect} style={{ flex: 1 }}>
        <Grid justfity="center" style={{ height: '100%' }}>
          <Typography variant="subhead">{label}</Typography>
        </Grid>
      </Pressable>

      {rightSide && (
        <Pressable
          onPress={onPressRightSideDetect}
          style={{
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Grid>{rightSide}</Grid>
        </Pressable>
      )}
    </Grid>
  );
};

export default LabelCheck;
