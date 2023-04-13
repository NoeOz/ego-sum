import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Card from "../../ui/Card";
import { Feather, Ionicons } from "@expo/vector-icons";
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
      size: 25,
    },
    {
      name: require("../../../assets/icons/github.png"),
      type: "image",
      link: "https://github.com/NoeOz",
      size: 25,
    },
    {
      name: require("../../../assets/icons/instagram.png"),
      type: "image",
      link: "https://www.instagram.com/noe_oz/",
      size: 25,
    },
  ];

  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <View style={globalStyle.rowBetweenCenter}>
        <Text style={customizeText(20, "normal", "left", "100")}>
          PRO/FOLIO_
        </Text>
        <TouchableOpacity
          style={globalStyle.txtBorderSnow}
          onPress={() => setVisibleInfo(!visibleInfo)}
        >
          <Ionicons name="information" size={25} color={colorPalette.snow} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...globalStyle.rowBetweenCenter,
          marginTop: "5%",
          height: "28%",
        }}
      >
        <View style={{ alignSelf: "flex-start" }}>
          <TextAuto
            textRender={"JS Dev Fullstack"}
            customStyle={customizeText(38, "normal", "left", "900")}
          />
          <TextAuto
            textRender={"React Native Dev"}
            customStyle={customizeText(38, "normal", "left")}
          />
        </View>
        {visibleInfo && <MapTech orientation={"y"} stackTech={contact} />}
      </View>
      <Card color={colorPalette.snow} style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          /* source={require("../../../assets/photos/ego.jpg")} */
        />
        <View style={{ flexDirection: "column-reverse", flex: 1 }}>
          <Text style={customizeText(20, "dark")}>🇫🇷 🇲🇽 🇺🇸</Text>
          <Text style={customizeText(24, "dark", "left", "900")}>
            #000 Noe Oziel
          </Text>
        </View>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: generalInfo.height * 0.35,
    width: "100%",
  },
  imageStyle: {
    height: "65%",
    width: "100%",
    borderRadius: 15,
    backgroundColor: colorPalette.cactus_2,
  },
});

export default Me;
