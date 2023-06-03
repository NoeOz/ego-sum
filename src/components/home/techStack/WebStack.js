import { StyleSheet, Text, View } from "react-native";
import MapTech from "./map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";
import { colorPalette, customizeText } from "../../../styles/globalStyles";
import { webTech } from "../../../constants/stack";
import Card from "../../ui/Card";

const WebStack = () => {
  return (
    <Animated.View entering={FadeIn.springify().duration(2500)}>
      <Card color={colorPalette.cool_gray_2} style={styles.card}>
        <Text style={customizeText(20, "normal", null, "bold")}>Web</Text>
        <MapTech stackTech={webTech} />
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 10,
    alignSelf: "center",
    borderTopLeftRadius: 0,
    padding: "2.5%",
    paddingHorizontal: "3.5%",
  },
});

export default WebStack;
