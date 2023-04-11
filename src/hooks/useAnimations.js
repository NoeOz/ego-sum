import {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export function useAnimations() {
  const TanslateYStyle = (number) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withSpring(number, {
              damping: 100,
              stiffness: 60,
            }),
          },
        ],
      };
    });

  const EnlargeAnimationStyle = (height) =>
    useAnimatedStyle(() => {
      return {
        height: withSpring(height, {
          damping: 100,
          stiffness: 60,
        }),
      };
    });

  return { TanslateYStyle, EnlargeAnimationStyle };
}
