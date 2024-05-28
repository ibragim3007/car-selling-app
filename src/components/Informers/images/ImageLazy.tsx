import React from 'react';

import { Image, ImageProps } from 'expo-image';
const blurhash = 'L1Qck@?t00~p000JOj4,009XXKE0';

interface ImageLazyProps extends ImageProps {
  uri?: string;
}

const ImageLazy = ({ uri, ...props }: ImageLazyProps) => {
  return <Image {...props} recyclingKey={uri || null} transition={150} />;
};

export default ImageLazy;
