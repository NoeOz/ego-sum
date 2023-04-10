import {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export function useAnimations() {
  const SpringStyles = (number) =>
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

  return { SpringStyles };
}
