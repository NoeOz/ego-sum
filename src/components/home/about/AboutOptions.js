import { Text, TouchableOpacity, View } from "react-native";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import StackCollection from "../techStack/StackCollection";
import SkillInfo from "../me/SkillInfo";
import Professional from "../professional/Professional";
import { useState } from "react";

const AboutOptions = () => {
  const [optionSelected, setOptionSelected] = useState(false);

  const options = [
    {
      color: colorPalette.snow,
      optionTitle: "tech stack",
      optionId: "tech",
      styleOption: { flex: 1 },
      styleText: customizeText(18, "dark", "left", "600"),
    },
    {
      color: colorPalette.honey,
      optionTitle: "skills",
      optionId: "skills",
      styleOption: { flex: 1, marginHorizontal: 10 },
      styleText: customizeText(18, "normal", "left", "600"),
    },
    {
      color: colorPalette.cactus_2,
      optionTitle: "experience",
      optionId: "xp",
      styleOption: { flex: 1 },
      styleText: customizeText(18, "dark", "left", "600"),
    },
  ];

  return (
    <View>
      <View style={globalStyle.rowBetweenCenter}>
        {options.map((option) => (
          <Card
            key={option.optionTitle.split(0, 5)}
            style={option.styleOption}
            color={option.color}
          >
            <TouchableOpacity
              onPress={() => setOptionSelected(option.optionId)}
            >
              <Text style={option.styleText}>{option.optionTitle}</Text>
              {option.optionId === optionSelected && (
                <View style={globalStyle.blackLine} />
              )}
            </TouchableOpacity>
          </Card>
        ))}
      </View>
      {optionSelected === "tech" && <StackCollection />}
      {optionSelected === "skills" && <SkillInfo />}
      {optionSelected === "xp" && <Professional />}
    </View>
  );
};

export default AboutOptions;
