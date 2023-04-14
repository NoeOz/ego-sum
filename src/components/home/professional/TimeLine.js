import { Text, View } from "react-native";
import { useAnimations } from "../../../hooks/useAnimations";
import {
  colorPalette,
  customizeText,
  generalInfo,
} from "../../../styles/globalStyles";
import { useEffect, useState } from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import Card from "../../ui/Card";
import MapTech from "../techStack/map/MapTech";

const LineProgress = () => {
  const { EnlargeAnimationStyle } = useAnimations();
  const [currentHeight, setCurrentHeight] = useState(generalInfo.height * 0.03);
  const totalHeight = generalInfo.height * 0.83;

  useEffect(() => {
    if (currentHeight < totalHeight) {
      setTimeout(() => {
        setCurrentHeight((h) => h + totalHeight * 0.08);
      }, 150);
    }
  }, [currentHeight]);

  return (
    <Animated.View
      style={[
        {
          alignSelf: "center",
          position: "absolute",
          bottom: "5%",
          maxHeight: totalHeight,
          width: 3,
          backgroundColor: colorPalette.snow,
          borderRadius: 50,
        },
        EnlargeAnimationStyle(currentHeight),
      ]}
    />
  );
};

const TimeLineRender = ({ contentRender }) => {
  const content = contentRender;

  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: "space-around", marginRight: 10 }}
      >
        <LineProgress />
        {content.map((step) => (
          <Animated.View
            key={step.name.split(1, 5)}
            entering={FadeIn.duration(1800).delay(step.delay)}
          >
            <Card color={colorPalette.cactus_2}>
              <Text style={customizeText(18, "normal", "center", "500")}>
                {step.date}
              </Text>
            </Card>
          </Animated.View>
        ))}
      </View>
      <View style={{ flex: 4, justifyContent: "space-evenly" }}>
        {content.map((step) => (
          <Animated.View
            key={step.name.split(1, 5)}
            entering={FadeIn.duration(1800).delay(step.delay)}
          >
            <Card color={colorPalette.cool_gray}>
              <Text style={customizeText(18, "normal", null, "500")}>
                {step.site}
              </Text>
              <Text style={customizeText(18, "normal", null, "300")}>
                {step.name}
              </Text>
            </Card>
            <View style={{ alignSelf: "flex-start" }}>
              <MapTech stackTech={step.tech} />
            </View>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default TimeLineRender;
