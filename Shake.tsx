import React, { useImperativeHandle } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
type Props = React.PropsWithChildren;
export type ShakeRef = {
  shake: () => void;
};
export const Shake = React.forwardRef<ShakeRef, Props>((props, ref) => {
  const OFFSET = 4;
  const TIME = 50;
  const offset = useSharedValue<number>(0);
  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  useImperativeHandle(
    ref,
    () => {
      return { shake: shakeIt };
    },
    []
  );

  const shakeIt = () => {
    offset.value = withSequence(
      withTiming(-OFFSET, { duration: TIME / 2 }),
      withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
      withTiming(0, { duration: TIME / 2 })
    );
  };

  return <Animated.View style={rStyle}>{props.children}</Animated.View>;
});
