import { StyleSheet, Text, View } from "react-native";
import MapTech from "./map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";
import { colorPalette, customizeText } from "../../../styles/globalStyles";
import { cloudTech } from "../../../constants/stack";
import Card from "../../ui/Card";

const CloudStack = () => {
  return (
    <Animated.View entering={FadeIn.springify().duration(2500)}>
      <Card color={colorPalette.cool_gray_3} style={styles.card}>
        <Text style={customizeText(20, "normal", null, "bold")}>
          Cloud & Back
        </Text>
        <MapTech stackTech={cloudTech} />
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

export default CloudStack;
