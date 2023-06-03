import { StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import MapTech from "./map/MapTech";
import { colorPalette, customizeText } from "../../../styles/globalStyles";
import { mobileTech } from "../../../constants/stack";
import Card from "../../ui/Card";

const MobileStack = () => {
  return (
    <Animated.View entering={FadeIn.springify().duration(2500)}>
      <Card color={colorPalette.cool_gray} style={styles.card}>
        <Text style={customizeText(20, "normal", null, "bold")}>Mobile</Text>
        <MapTech stackTech={mobileTech} />
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

export default MobileStack;
