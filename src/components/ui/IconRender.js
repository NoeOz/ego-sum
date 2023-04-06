import { Image, StyleSheet, Text, View } from "react-native";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../../styles/globalStyles";

const IconRender = ({ nameIcon, type }) => {
  return type === "image" ? (
    <View style={styles.iconContainer}>
      <Image style={{ height: 35, width: 35 }} source={nameIcon} />
    </View>
  ) : (
    <View style={styles.iconContainer}>
      <Text style={customizeText(18, "dark", "center", "bold")}>
        {nameIcon}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colorPalette.snow,
    padding: 8,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    margin: 5
  },
});

export default IconRender;
