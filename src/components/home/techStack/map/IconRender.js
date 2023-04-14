import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { colorPalette, customizeText } from "../../../../styles/globalStyles";

const IconRender = ({
  nameIcon,
  type,
  delay,
  link = null,
  onPressedItem,
  iconSize = 30,
}) => {
  return type === "image" ? (
    <Animated.View
      entering={FadeIn.delay(delay).springify()}
      style={{ ...styles.iconContainer, height: iconSize + 20 }}
    >
      <TouchableOpacity onPress={() => onPressedItem(link)}>
        <Image
          style={{ height: iconSize, width: iconSize }}
          source={nameIcon}
        />
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <Animated.View
      entering={FadeIn.delay(delay).springify()}
      style={styles.iconContainer}
    >
      <TouchableOpacity onPress={() => onPressedItem(link)}>
        <Text style={customizeText(18, "dark", "center", "bold")}>
          {nameIcon}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colorPalette.snow,
    padding: 8,
    borderRadius: 50,
    //height: 50,
    justifyContent: "center",
    margin: 3,
  },
});

export default IconRender;
