import React from 'react';

import { Image, ImageProps } from 'expo-image';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface ImageLazyProps extends ImageProps {
  uri?: string;
}

const ImageLazy = ({ ...props }: ImageLazyProps) => {
  return <Image placeholder={{ blurhash }} {...props} transition={500} />;
};

export default ImageLazy;
