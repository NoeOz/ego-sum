import { Text, View } from "react-native";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../../../styles/globalStyles";
import TextAuto from "../../ui/TextAuto";
import Card from "../../ui/Card";
import MapTech from "../techStack/map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";

const skillsInitial = [
  { name: "Creative", type: "text" },
  { name: "Enjoy challenges", type: "text" },
  { name: "Committed", type: "text" },
  { name: "Organized", type: "text" },
  { name: "Self-taught", type: "text" },
  { name: "Proactive", type: "text" },
];
const languajes = [
  { name: "French", type: "text" },
  { name: "Spanish", type: "text" },
  { name: "English", type: "text" },
];

const SkillInfo = () => {
  return (
    <Animated.View entering={FadeIn.duration(500).delay(1500)}>
      <Card color={colorPalette.cactus_2}>
        <Text style={customizeText(20, "normal", null, "500")}>Skills</Text>
        <View style={globalStyle.rowWrapBetween}>
          <View style={{ flex: 1 }}>
            <MapTech stackTech={languajes} />
          </View>
          <View style={globalStyle.verticalSnowLine} />
          <View style={{ flex: 3 }}>
            <MapTech stackTech={skillsInitial} />
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};

export default SkillInfo;
