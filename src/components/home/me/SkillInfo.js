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

const SkillInfo = () => {
  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <Card color={colorPalette.cactus_2}>
        <MapTech stackTech={skillsInitial} />
      </Card>
    </Animated.View>
  );
};

export default SkillInfo;
