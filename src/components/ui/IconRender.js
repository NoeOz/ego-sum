import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { colorPalette, customizeText } from "../../styles/globalStyles";
import { useEffect, useState } from "react";
import { useAnimations } from "../../hooks/useAnimations";

const IconRender = ({ nameIcon, type, delay }) => {
  return type === "image" ? (
    <Animated.View
      entering={FadeIn.delay(delay).springify()}
      style={styles.iconContainer}
    >
      <Image style={{ height: 30, width: 30 }} source={nameIcon} />
    </Animated.View>
  ) : (
    <Animated.View
      entering={FadeIn.delay(delay).springify()}
      style={styles.iconContainer}
    >
      <Text style={customizeText(18, "dark", "center", "bold")}>
        {nameIcon}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colorPalette.snow,
    padding: 8,
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    margin: 3,
  },
});

export default IconRender;
