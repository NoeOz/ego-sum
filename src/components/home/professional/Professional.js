import { Text, TouchableOpacity, View } from "react-native";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import {
  StateTraslucentModal,
  TraslucentModal,
} from "../../modals/TraslucentModal";
import { useState } from "react";

import WorkXP from "./themes/WorkXP";
import Carieer from "./themes/Carieer";
import Animated, { FadeIn } from "react-native-reanimated";

const Professional = () => {
  const controlModal = StateTraslucentModal();
  const [selectedTheme, setSelectedTheme] = useState("");

  function handleSelectTheme(option) {
    setSelectedTheme(option);
    controlModal.setVisible(true);
  }

  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <Card
        color={colorPalette.cool_gray}
        style={{
          ...globalStyle.rowBetweenCenter,
          height: generalInfo.height * 0.25,
        }}
      >
        <TouchableOpacity
          onPress={() => handleSelectTheme("work")}
          style={{ ...globalStyle.txtBorderSnow, alignSelf: "flex-start" }}
        >
          <Text style={customizeText(20, "normal")}>Work experience</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSelectTheme("carieer")}
          style={{ ...globalStyle.txtBorderSnow, alignSelf: "flex-start" }}
        >
          <Text style={customizeText(20, "normal")}>Carieer</Text>
        </TouchableOpacity>
      </Card>
      <TraslucentModal {...controlModal}>
        {selectedTheme === "work" ? <WorkXP /> : <Carieer />}
      </TraslucentModal>
    </Animated.View>
  );
};

export default Professional;
