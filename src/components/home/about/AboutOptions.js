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
import Animated, { FadeIn } from "react-native-reanimated";
import { options } from "../../../constants/options";

const AboutOptions = () => {
  const [optionSelected, setOptionSelected] = useState(false);

  return (
    <Animated.View entering={FadeIn.duration(500).delay(750)}>
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
                <View
                  style={
                    option.optionId === "skills"
                      ? globalStyle.snowLine
                      : globalStyle.blackLine
                  }
                />
              )}
            </TouchableOpacity>
          </Card>
        ))}
      </View>
      {optionSelected === "tech" && <StackCollection />}
      {optionSelected === "skills" && <SkillInfo />}
      {optionSelected === "xp" && <Professional />}
    </Animated.View>
  );
};

export default AboutOptions;
