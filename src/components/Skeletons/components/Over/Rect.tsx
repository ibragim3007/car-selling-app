import { normalizedSize } from '@/shared/utils/size';
import React from 'react';
import { Rect as ReactDefault } from 'react-content-loader/native';

export interface RectProps {
  x: number;
  y: number;
  rx: number;
  ry: number;
  width: number;
  height: number;
}

const Rect = ({ ...props }: RectProps) => {
  const obj: RectProps = {
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    width: 0,
    height: 0,
  };

  Object.keys(props).map(propsName => {
    obj[propsName as keyof RectProps] = normalizedSize(props[propsName as keyof RectProps]);
  });

  return <ReactDefault {...obj} />;
};

export default Rect;
