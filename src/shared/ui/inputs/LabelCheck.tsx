import React from 'react';
import Grid from '../layout/Grid';
import Checkbox from './Checkbox';
import Typography from '../typography/Typography';
import { Pressable } from 'react-native';
import { normalizedSize } from '@/shared/utils/size';
import { TitleCheckboxProps } from './TitleCheckbox';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';

interface LabelCheckProps extends TitleCheckboxProps {
  label: string | number;
  onPressLabel?: () => void;
  onPressCheck?: () => void;
  onPressRightSide?: () => void;
  value?: boolean;
  rightSide?: React.ReactNode;
}

const LabelCheck = ({
  label,
  value,
  rightSide,
  type = 'check',
  onPressCheck,
  onPressLabel,
  onPressRightSide,
  ...props
}: LabelCheckProps) => {
  const { colors } = useTheme();

  const onPressCheckDetect = onPressCheck ? onPressCheck : onPressLabel;
  const onPressLabelDetect = onPressLabel ? onPressLabel : onPressCheck;
  const onPressRightSideDetect = onPressRightSide ? onPressRightSide : onPressLabel ? onPressLabel : onPressCheck;

  const isBackgroundHighlight = value && type === 'check';

  return (
    <Grid color={isBackgroundHighlight ? colors.background.active : 'transparent'} height={48} row align="center">
      <Pressable
        onPress={onPressCheckDetect}
        style={{
          paddingLeft: normalizedSize(18),
          paddingRight: normalizedSize(10),
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid pointerEvents="none">
          <Checkbox {...props} value={value} />
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
            paddingRight: 10,
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
