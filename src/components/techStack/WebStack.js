import { Text, View } from "react-native";
import { colorPalette, customizeText } from "../../styles/globalStyles";
import Card from "../ui/Card";
import MapTech from "./map/MapTech";
import { useAnimations } from "../../hooks/useAnimations";
import Animated, { FadeIn } from "react-native-reanimated";
import { useEffect, useState } from "react";

const WebStack = ({ fixStyle, position }) => {
  const [yTransition, setYTransition] = useState(10);
  const { springStyles } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      if (yTransition > 1) setYTransition(1);
      else setYTransition(12);
    }, 450);
  }, [yTransition]);

  const webTech = [
    { name: require("../../assets/icons/react.png"), type: "image" },
    { name: require("../../assets/icons/javascript.png"), type: "image" },
    { name: "ES6+", type: "text" },
    { name: require("../../assets/icons/redux.png"), type: "image" },
    { name: require("../../assets/icons/nodedotjs.png"), type: "image" },
    { name: require("../../assets/icons/tailwindcss.png"), type: "image" },
    { name: require("../../assets/icons/bootstrap.png"), type: "image" },
  ];

  return (
    <Animated.View
      entering={position.zIndex === 5 && FadeIn.duration(2500).springify()}
      style={[{ ...fixStyle, ...position }, springStyles(yTransition)]}
    >
      <Card style={{ flex: 1 }} color={colorPalette.lavander}>
        <View
          style={{
            padding: "1.5%",
            paddingHorizontal: "3.5%",
          }}
        >
          <Text style={customizeText(20, "dark", null, "bold")}>Web</Text>
        </View>
        <MapTech stackTech={webTech} />
      </Card>
    </Animated.View>
  );
};

export default WebStack;
