import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { colorPalette } from "../../styles/globalStyles";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

const BottomDragCard = (props) => {
  const { children, customStyle, height } = props;
  const [styleModal, setStyleModal] = useState(new Object());

  const translateY = useSharedValue(0);

  useEffect(() => {
    setStyleModal({
      ...styles.modal,
      height: height,
      bottom: height * -0.82,
    });

    return () => {};
  }, []);

  function closeModal(dragged) {
    if (dragged >= height * 0.15) {
      changeBottom(height * -0.82);
    }
  }

  function changeBottom(value) {
    setStyleModal({ ...styleModal, bottom: value });
  }

  /* A gesture handler that is used to drag the modal down. */
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      const newTranslationY = ctx.startY + event.translationY;
      //? prevent dragg to top
      if (
        newTranslationY > translateY.value ||
        newTranslationY >= 0 ||
        styleModal.bottom !== 0
      ) {
        translateY.value = newTranslationY;
        runOnJS(changeBottom)(0);
      }
    },
    onEnd: (event) => {
      if (event.translationY >= 0) {
        translateY.value = withSpring(0, { damping: 20 });
        runOnJS(closeModal)(event.translationY);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styleModal, customStyle, animatedStyle]}>
        <View style={{...styles.panGestureIndicator, top: height * -0.05}} />
        {children}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default BottomDragCard;

const styles = StyleSheet.create({
  modal: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    backgroundColor: colorPalette.snow,
    padding: "2.5%",
    paddingTop: "2%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  panGestureIndicator: {
    width: "30%",
    height: 6,
    position: "absolute",
    borderRadius: 12,
    backgroundColor: colorPalette.cool_gray,
    alignSelf: "center",
    marginVertical: 10,
  },
});
