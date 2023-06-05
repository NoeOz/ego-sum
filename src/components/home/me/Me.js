import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../../ui/Card";
import { Ionicons } from "@expo/vector-icons";
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
import { contact } from "../../../constants/contact";
const Me = () => {
  const [visibleInfo, setVisibleInfo] = useState(false);

  function handleOpenLink(link) {
    if (!!link) Linking.openURL(link);
  }

  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <View style={globalStyle.rowBetweenCenter}>
        <Text style={customizeText(20, "normal", "left", "100")}>
          PRO/FOLIO_
        </Text>
        <TouchableOpacity
          style={{ ...globalStyle.txtBorderSnow, padding: "1.5%" }}
          onPress={() => setVisibleInfo(!visibleInfo)}
        >
          <Ionicons name="information" size={25} color={colorPalette.snow} />
        </TouchableOpacity>
      </View>
      <Animated.View
        entering={FadeIn.duration(500).delay(1000)}
        style={{
          marginTop: "5%",
          height: "23%",
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <TextAuto
            textRender={"JS Fullstack Dev"}
            customStyle={customizeText(34, "normal", "left", "900")}
          />
          <TextAuto
            textRender={"React Native Dev"}
            customStyle={customizeText(32, "normal", "left")}
          />
        </View>
        <View style={{ width: generalInfo.width * 0.4 }}>
          {visibleInfo && (
            <MapTech stackTech={contact} onPressedItem={handleOpenLink} />
          )}
        </View>
      </Animated.View>
      <Card color={colorPalette.snow} style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../../assets/photos/ego.jpg")}
        />
        <View style={{ flex: 1, paddingVertical: "3%" }}>
          <Text style={customizeText(20, "dark")}>Comms in 🇫🇷 🇲🇽 🇺🇸</Text>
          <Text style={customizeText(24, "dark", "left", "900")}>
            #0399 Noe Oziel
          </Text>
        </View>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: generalInfo.height * 0.5,
    width: "100%",
  },
  imageStyle: {
    height: "80%",
    width: "100%",
    borderRadius: 15,
    backgroundColor: colorPalette.cactus_2,
  },
});

export default Me;
