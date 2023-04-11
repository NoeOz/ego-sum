import { Text, TouchableOpacity, View } from "react-native";
import {
  colorPalette,
  customizeText,
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

const Professional = () => {
  const controlModal = StateTraslucentModal();
  const [selectedTheme, setSelectedTheme] = useState("");

  const languajes = ["French 🥐", "Spanish 🌮", "English 🗽"];

  function handleSelectTheme(option) {
    setSelectedTheme(option);
    controlModal.setVisible(true);
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ ...customizeText(20, "normal"), marginBottom: 10 }}>
        About other things
      </Text>
      <View style={globalStyle.rowBetweenCenter}>
        <Text style={customizeText(20, "normal")}>Languajes</Text>
        {languajes.map((lang) => (
          <View key={lang.split(0, 5)} style={{ margin: 5 }}>
            <Text
              style={{
                ...customizeText(18, "normal", "center", "300"),
                textTransform: "capitalize",
              }}
            >
              {lang}
            </Text>
          </View>
        ))}
      </View>
      <Card color={colorPalette.cool_gray} style={globalStyle.rowBetweenCenter}>
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
    </View>
  );
};

export default Professional;
