import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../../ui/Card";
import { Feather } from "@expo/vector-icons";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../../../styles/globalStyles";
import Animated, { FadeIn } from "react-native-reanimated";
import TextAuto from "../../ui/TextAuto";
import { useState } from "react";
import MapTech from "../techStack/map/MapTech";
const Me = () => {
  const [visibleInfo, setVisibleInfo] = useState(false);

  const contact = [
    {
      name: require("../../../assets/icons/linkedin.png"),
      type: "image",
      link: "https://www.linkedin.com/in/noe-oziel-perez-lopez-a52891255/",
      size: 20
    },
    {
      name: require("../../../assets/icons/github.png"),
      type: "image",
      link: "https://github.com/NoeOz",
      size: 20
    },
    {
      name: require("../../../assets/icons/instagram.png"),
      type: "image",
      link: "https://www.instagram.com/noe_oz/",
      size: 20
    },
  ];

  const alterEgoMiddleAge =
    "https://cdn.discordapp.com/attachments/1091031773741326422/1093416474313490523/Noe_Oziel_crea_un_retrato_como_si_fuera_un_caballero_en_la_edad_c119c6ef-39b1-4867-80f9-e74ba67681e3.png";
  const alterEgoWWI =
    "https://cdn.discordapp.com/attachments/1091031773741326422/1092576289535311982/Noe_Oziel_Crear_un_retrato_estilo_de_soldado_de_la_Primera_Guer_6c169e29-e9e9-4537-a8e9-9405d2a4e61e.png";

  return (
    <Animated.View entering={FadeIn.duration(3500).springify()}>
      <Card
        color={colorPalette.gray_1}
        style={{
          ...globalStyle.rowBetweenCenter,
          height: "auto",
          maxHeight: generalInfo.width * 0.5,
          paddingHorizontal: "5%",
        }}
      >
        <Image style={styles.imageStyle} source={{ uri: alterEgoWWI }} />
        <View style={styles.infoContainer}>
          <TextAuto
            textRender={"Noe Oziel"}
            customStyle={customizeText(20, "normal")}
          />
          <View style={globalStyle.txtBorderSnow}>
            <Text style={customizeText(18, "normal")}>Fullstack developer</Text>
          </View>
          <TouchableOpacity
            onPress={() => setVisibleInfo(!visibleInfo)}
            style={globalStyle.rowBetweenCenter}
          >
            <Text style={customizeText(18, "normal")}>More info here</Text>
            <Feather name="circle" size={15} color={colorPalette.snow} />
          </TouchableOpacity>
          {visibleInfo && <MapTech stackTech={contact} />}
        </View>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: generalInfo.width * 0.35,
    width: generalInfo.width * 0.35,
    borderRadius: generalInfo.width * 0.25,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: "space-evenly",
    flex: 1,
    height: "100%",
  },
});

export default Me;
