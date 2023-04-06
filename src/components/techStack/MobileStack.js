import { Text, View } from "react-native";
import { colorPalette, customizeText } from "../../styles/globalStyles";
import Animated, { FadeIn } from "react-native-reanimated";
import Card from "../ui/Card";
import MapTech from "./map/MapTech";
import { useAnimations } from "../../hooks/useAnimations";
import { useEffect, useState } from "react";

const MobileStack = ({ fixStyle, position }) => {
  const [yTransition, setYTransition] = useState(10);
  const { springStyles } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      if (yTransition > 1) setYTransition(1);
      else setYTransition(11);
    }, 400);
  }, [yTransition]);

  const mobileTech = [
    { name: require("../../assets/icons/react.png"), type: "image" },
    { name: require("../../assets/icons/expo.png"), type: "image" },
    { name: "Animations", type: "text" },
    { name: require("../../assets/icons/javascript.png"), type: "image" },
    { name: "ES6+", type: "text" },
    { name: require("../../assets/icons/redux.png"), type: "image" },
    { name: require("../../assets/icons/jest.png"), type: "image" },
  ];

  return (
    <Animated.View
      entering={position.zIndex === 5 && FadeIn.duration(2500).springify()}
      style={[{ ...fixStyle, ...position }, springStyles(yTransition)]}
    >
      <Card style={{ flex: 1 }} color={colorPalette.honey}>
        <View
          style={{
            padding: "1.5%",
            paddingHorizontal: "3.5%",
          }}
        >
          <Text style={customizeText(20, "dark", null, "bold")}>Mobile</Text>
        </View>
        <MapTech stackTech={mobileTech} />
      </Card>
    </Animated.View>
  );
};

export default MobileStack;
