import { useState } from "react";
import { colorPalette, customizeText } from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import MapTech from "../techStack/map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";
import { Text } from "react-native";
import { skillsInitial } from "../../../constants🐤/skillsInitial";

const SkillInfo = () => {
  const [reasonSelected, setReasonSelected] = useState("");

  function selectedSkill(reason) {
    setReasonSelected(reason);
  }

  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <Card style={{ borderTopLeftRadius: 0 }} color={colorPalette.honey}>
        <MapTech stackTech={skillsInitial} onPressedItem={selectedSkill} />
      </Card>
      <Card style={{ borderTopRightRadius: 0 }} color={colorPalette.mustad}>
        <Text
          style={{
            ...customizeText(20, "normal", "left", "800"),
            marginBottom: 5,
          }}
        >
          {reasonSelected[0]}
        </Text>
        <Text style={customizeText(18, "normal", "left", "100")}>
          {reasonSelected[1] || "Select a skill to see more ..."}
        </Text>
      </Card>
    </Animated.View>
  );
};

export default SkillInfo;
