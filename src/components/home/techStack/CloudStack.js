import { Text, View } from "react-native";
import MapTech from "./map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";
import { customizeText } from "../../../styles/globalStyles";
import { cloudTech } from "../../../constants/stack";

const CloudStack = () => {

  return (
    <Animated.View entering={FadeIn.springify().duration(2500)}>
      <View
        style={{
          paddingVertical: "2.5%",
        }}
      >
        <Text style={customizeText(20, "normal", null, "bold")}>
          Cloud & Back
        </Text>
      </View>
      <MapTech stackTech={cloudTech} />
    </Animated.View>
  );
};

export default CloudStack;
