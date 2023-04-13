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
      <Card
        color={colorPalette.snow}
        style={{
          height: generalInfo.height * 0.30,
        }}
      >
        <View style={{ ...globalStyle.txtBorderSnow, marginVertical: 15 }}>
          <Text style={customizeText(20, "dark")}>
            Fullstack Dev | React Native Dev
          </Text>
        </View>
        <TextAuto
          textRender={"Noe Oziel Perez Lopez"}
          customStyle={customizeText(20, "dark", "center", "400")}
        />
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            style={globalStyle.rowBetweenCenter}
            onPress={() => setVisibleInfo(!visibleInfo)}
          >
            <Text style={{ ...customizeText(18, "dark"), marginRight: 5 }}>
              Info
            </Text>
            <Feather name="circle" size={15} color={colorPalette.snow} />
          </TouchableOpacity>
          {visibleInfo && (
            <Card
              color={colorPalette.lavander}
              style={{ width: "50%", padding: "1%" }}
            >
              <MapTech stackTech={contact} />
            </Card>
          )}
        </View>
      </Card>
      <View
        style={{
          ...styles.imageContainer,
          backgroundColor: colorPalette.black_2,
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/photos/ego.jpg")}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: generalInfo.width * 0.5,
    width: generalInfo.width * 0.5,
    borderRadius: generalInfo.width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imageStyle: {
    height: generalInfo.width * 0.45,
    width: generalInfo.width * 0.45,
    borderRadius: generalInfo.width * 0.25,
    backgroundColor: "red",
  },
});

export default Me;
