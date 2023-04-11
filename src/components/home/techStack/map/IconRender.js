import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { colorPalette, customizeText } from "../../../../styles/globalStyles";
import * as Linking from "expo-linking";

const IconRender = ({ nameIcon, type, delay, link = null, iconSize = 30 }) => {
  function handleOpenLink() {
    if (!!link) Linking.openURL(link);
  }

  return type === "image" ? (
    <Animated.View
      entering={FadeIn.delay(delay).springify()}
      style={{...styles.iconContainer, height: iconSize + 20}}
    >
      <TouchableOpacity onPress={() => handleOpenLink()}>
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
      <TouchableOpacity onPress={() => handleOpenLink()}>
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
