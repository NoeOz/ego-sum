import {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export function useAnimations() {
  const springStyles = (number) =>
    useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: withSpring(number, {
              damping: 50,
              stiffness: 10,
            }),
          },
        ],
      };
    });

  return { springStyles };
}
