import { Text, View } from "react-native";
import { customizeText } from "../../styles/globalStyles";
import MapTech from "./map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";

const WebStack = () => {
  const webTech = [
    { name: require("../../assets/icons/react.png"), type: "image" },
    { name: require("../../assets/icons/javascript.png"), type: "image" },
    { name: require("../../assets/icons/redux.png"), type: "image" },
    { name: require("../../assets/icons/nodedotjs.png"), type: "image" },
    { name: require("../../assets/icons/tailwindcss.png"), type: "image" },
    { name: require("../../assets/icons/bootstrap.png"), type: "image" },
  ];

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
