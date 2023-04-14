import { Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import MapTech from "./map/MapTech";
import { customizeText } from "../../../styles/globalStyles";
import { mobileTech } from "../../../constants🐤/stack";

const MobileStack = () => {

  return (
    <Animated.View
      entering={FadeIn.springify().duration(2500)}
    >
      <View
        style={{
          padding: "1.5%",
          paddingHorizontal: "3.5%",
        }}
      >
        <Text style={customizeText(20, "normal", null, "bold")}>Mobile</Text>
      </View>
      <MapTech stackTech={mobileTech} />
    </Animated.View>
  );
};

export default MobileStack;
