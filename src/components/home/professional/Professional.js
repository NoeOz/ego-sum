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
import { useEffect, useState } from "react";

import WorkXP from "./themes/WorkXP";
import Carieer from "./themes/Carieer";

const Professional = () => {
  const controlModal = StateTraslucentModal();
  const [selectedTheme, setSelectedTheme] = useState("");

  function handleSelectTheme(option) {
    setSelectedTheme(option);
    controlModal.setVisible(true);
  }

  return (
    <>
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
    </>
  );
};

export default Professional;
