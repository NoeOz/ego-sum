import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CloudStack from "./CloudStack";
import MobileStack from "./MobileStack";
import WebStack from "./WebStack";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../../styles/globalStyles";
import Card from "../ui/Card";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

const CardsCollection = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Card
      color={colorPalette.grape}
      style={{
        width: "100%",
        marginVertical: 15,
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={globalStyle.rowBetweenCenter}
      >
        <Text style={customizeText(20, "normal")}>Tech Stack</Text>
        <Feather name={visible ? "chevron-up" : "chevron-down"} size={25} color={colorPalette.snow} />
      </TouchableOpacity>
      {visible ? (
        <>
          <MobileStack />
          <WebStack />
          <CloudStack />
        </>
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardGeneral: {
    width: generalInfo.width * 0.92,
    padding: "2.5%",
    marginHorizontal: 5,
    alignSelf: "center",
    position: "absolute",
    width: "100%",
    alignSelf: "flex-start",
    elevation: 20,
  },
});

export default CardsCollection;
