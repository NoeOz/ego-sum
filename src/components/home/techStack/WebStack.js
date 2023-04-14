import { Text, View } from "react-native";
import MapTech from "./map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";
import { customizeText } from "../../../styles/globalStyles";
import { webTech } from "../../../constants/stack";

const WebStack = () => {
  return (
    <Animated.View entering={FadeIn.springify().duration(2500)}>
      <View
        style={{
          padding: "1.5%",
          paddingHorizontal: "3.5%",
        }}
      >
        <Text style={customizeText(20, "normal", null, "bold")}>Web</Text>
      </View>
      <MapTech stackTech={webTech} />
    </Animated.View>
  );
};

export default WebStack;
