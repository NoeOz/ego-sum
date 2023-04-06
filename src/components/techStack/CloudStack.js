import { Text, View } from "react-native";
import { colorPalette, customizeText } from "../../styles/globalStyles";
import Card from "../ui/Card";
import MapTech from "./map/MapTech";
import { useAnimations } from "../../hooks/useAnimations";
import Animated, { FadeIn } from "react-native-reanimated";
import { useEffect, useState } from "react";

const CloudStack = ({ fixStyle, position }) => {
  const [yTransition, setYTransition] = useState(10);
  const { springStyles } = useAnimations();

  useEffect(() => {
    setTimeout(() => {
      if (yTransition > 1) setYTransition(1);
      else setYTransition(13);
    }, 500);
  }, [yTransition]);

  const cloudTech = [
    { name: require("../../assets/icons/amazonaws.png"), type: "image" },
    { name: require("../../assets/icons/postgresql.png"), type: "image" },
    { name: require("../../assets/icons/mysql.png"), type: "image" },
    { name: "API", type: "text" },
    { name: require("../../assets/icons/graphql.png"), type: "image" },
    { name: require("../../assets/icons/git.png"), type: "image" },
    { name: require("../../assets/icons/trello.png"), type: "image" },
    { name: require("../../assets/icons/jira.png"), type: "image" },
  ];

  return (
    <Animated.View
      entering={position.zIndex === 5 && FadeIn.duration(2500)}
      style={[{ ...fixStyle, ...position }, springStyles(yTransition)]}
    >
      <Card color={colorPalette.gray_2}>
        <View
          style={{
            padding: "1.5%",
            paddingHorizontal: "3.5%",
          }}
        >
          <Text style={customizeText(20, "dark", null, "bold")}>
            Cloud & Back
          </Text>
        </View>
        <MapTech stackTech={cloudTech} />
      </Card>
    </Animated.View>
  );
};

export default CloudStack;
