import constants from '@/shared/constants/constants';
import { Easing, FadeInDown, LinearTransition } from 'react-native-reanimated';

// type AnimType = typeof BaseAnimationBuilder | BaseAnimationBuilder | LayoutAnimationFunction | undefined;

export const CustomAnimations = {
  layoutDefault: LinearTransition.duration(constants.layoutAnimationSpeed).easing(Easing.sin),
  showItem: (index: number) => FadeInDown.delay(14 * index).springify(),
};
