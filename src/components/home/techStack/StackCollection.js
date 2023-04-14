import CloudStack from "./CloudStack";
import MobileStack from "./MobileStack";
import WebStack from "./WebStack";
import { colorPalette } from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import Animated, { FadeIn } from "react-native-reanimated";
import { StyleSheet } from "react-native";

const StackCollection = () => {
  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <Card color={colorPalette.cool_gray} style={styles.card}>
        <MobileStack />
        <WebStack />
        <CloudStack />
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginVertical: 15,
    alignSelf: "center",
    borderTopLeftRadius: 0,
  },
});

export default StackCollection;
