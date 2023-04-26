import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import StackCollection from "../techStack/StackCollection";
import SkillInfo from "../me/SkillInfo";
import Professional from "../professional/Professional";
import { useState } from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import { options } from "../../../constants/options";
import BottomDragCard from "../../modals/BottomDragCard";

const AboutOptions = () => {
  const [optionSelected, setOptionSelected] = useState(false);

  return (
    <BottomDragCard
      height={generalInfo.height * 0.8}
      customStyle={styles.containerInfo}
      listener={optionSelected}
    >
      <Animated.View entering={FadeIn.duration(500).delay(400)}>
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
        {!optionSelected && (
          <Card color={colorPalette.gray_1}>
            <Text style={customizeText(18, "normal", "center")}>
              Select an option
            </Text>
          </Card>
        )}
      </Animated.View>
    </BottomDragCard>
  );
};

const styles = StyleSheet.create({
  containerInfo: {
    backgroundColor: colorPalette.black,
  },
});

export default AboutOptions;
