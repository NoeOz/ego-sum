import { Image, Text, View } from "react-native";
import Card from "../../ui/Card";
import { Feather } from "@expo/vector-icons";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../../../styles/globalStyles";
import Animated, { FadeIn } from "react-native-reanimated";

const Me = () => {
  const alterEgoWWI =
    "https://cdn.discordapp.com/attachments/1091031773741326422/1092576289535311982/Noe_Oziel_Crear_un_retrato_estilo_de_soldado_de_la_Primera_Guer_6c169e29-e9e9-4537-a8e9-9405d2a4e61e.png";

  return (
    <Animated.View entering={FadeIn.duration(3500).springify()}>
      <Card color={colorPalette.cactus_2}>
        <Image
          style={{
            height: generalInfo.width * 0.45,
            width: generalInfo.width * 0.45,
            borderRadius: generalInfo.width * 0.25,
            alignSelf: "center",
          }}
          source={{
            uri: alterEgoWWI,
          }}
        />
        <Text style={customizeText(24, "normal")}>Noe Oziel</Text>
        <View style={{ ...globalStyle.rowBetweenCenter, marginTop: 10 }}>
          <View style={globalStyle.txtBorderSnow}>
            <Text style={customizeText(20, "normal")}>Fullstack developer</Text>
          </View>
          <View style={globalStyle.rowBetweenCenter}>
            <Text style={customizeText(16, "normal")}>More info </Text>
            <Feather name="circle" size={15} color={colorPalette.snow} />
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};

export default Me;
