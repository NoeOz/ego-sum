import { Text, View } from "react-native";
import { customizeText, globalStyle } from "../../../styles/globalStyles";
import TextAuto from "../../ui/TextAuto";

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
    <>
      <View style={globalStyle.rowWrapBetween}>
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
      </View>
      <TextAuto
        textRender={
          "If there is something I don't know, I will learn it and apply it as soon as possible."
        }
        customStyle={{
          ...customizeText(18, "normal", null, "300"),
          marginVertical: 10,
        }}
        speed={50}
      />
    </>
  );
};

export default SkillInfo;
