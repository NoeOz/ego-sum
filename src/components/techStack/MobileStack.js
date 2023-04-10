import { Text, View } from "react-native";
import { customizeText } from "../../styles/globalStyles";
import Animated, { FadeIn } from "react-native-reanimated";
import MapTech from "./map/MapTech";

const MobileStack = () => {
  const mobileTech = [
    { name: require("../../assets/icons/react.png"), type: "image" },
    { name: require("../../assets/icons/expo.png"), type: "image" },
    { name: "Animations", type: "text" },
    { name: require("../../assets/icons/javascript.png"), type: "image" },
    { name: require("../../assets/icons/redux.png"), type: "image" },
    { name: require("../../assets/icons/jest.png"), type: "image" },
  ];

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
