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

import Animated, { FadeIn } from "react-native-reanimated";
import { carieerSteps, workSteps } from "../../../constants🐤/proConst";
import TimeLineRender from "./TimeLine";

export const Carieer = () => {
  return <TimeLineRender contentRender={carieerSteps} />;
};

export const WorkXP = () => {
  return <TimeLineRender contentRender={workSteps} />;
};

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
        color={colorPalette.cactus_2}
        style={{
          height: generalInfo.height * 0.25,
          borderTopLeftRadius: 0,
        }}
      >
        <Card color={"rgba(0,0,0,.2)"} style={{ flex: 1 }}>
          <Text style={customizeText(22, "dark")}>
            This is a space to show my experience and my steps in the
            professional world with a timeline
          </Text>
        </Card>
        <View style={globalStyle.rowBetweenCenter}>
          <TouchableOpacity
            onPress={() => handleSelectTheme("work")}
            style={{ ...globalStyle.txtBorderNoir, alignSelf: "flex-start" }}
          >
            <Text style={customizeText(20, "dark", "left", "500")}>
              Work experience
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelectTheme("carieer")}
            style={{ ...globalStyle.txtBorderNoir, alignSelf: "flex-start" }}
          >
            <Text style={customizeText(20, "dark", "left", "500")}>Career</Text>
          </TouchableOpacity>
        </View>
      </Card>
      <TraslucentModal {...controlModal}>
        {selectedTheme === "work" ? <WorkXP /> : <Carieer />}
      </TraslucentModal>
    </Animated.View>
  );
};

export default Professional;
