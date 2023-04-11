import { Text, View } from "react-native";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../../../styles/globalStyles";
import TextAuto from "../../ui/TextAuto";
import Card from "../../ui/Card";

const skillsInitial = [
  "Creative",
  "Enjoy challenges",
  "Committed",
  "Organized",
  "Self-taught",
  "Proactive",
];

const SkillInfo = () => {
  const skills = skillsInitial;
  return (
    <Card color={colorPalette.cactus_2} style={globalStyle.rowWrapBetween}>
      {skills.map((skill) => (
        <View key={skill} style={{ ...globalStyle.txtBorderSnow, margin: 5 }}>
          <Text
            style={{
              ...customizeText(18, "normal", "center", "300"),
              textTransform: "capitalize",
            }}
          >
            {skill}
          </Text>
        </View>
      ))}
    </Card>
  );
};

export default SkillInfo;
