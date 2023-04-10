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
import TextAuto from "../../ui/TextAuto";
const Me = () => {
  /* const { SpringStyles } = useAnimations();
  const [yTransition, setYTransition] = useState(10); */

  /* useEffect(() => {
    setTimeout(() => {
      if (yTransition > 1) setYTransition(1);
      else setYTransition(6);
    }, 500);
  }, [yTransition]); */

  const alterEgoMiddleAge =
    "https://cdn.discordapp.com/attachments/1091031773741326422/1093416474313490523/Noe_Oziel_crea_un_retrato_como_si_fuera_un_caballero_en_la_edad_c119c6ef-39b1-4867-80f9-e74ba67681e3.png";
  const alterEgoWWI =
    "https://cdn.discordapp.com/attachments/1091031773741326422/1092576289535311982/Noe_Oziel_Crear_un_retrato_estilo_de_soldado_de_la_Primera_Guer_6c169e29-e9e9-4537-a8e9-9405d2a4e61e.png";

  return (
    <Animated.View entering={FadeIn.duration(3500).springify()}>
      <Card
        color={colorPalette.cactus_2}
        style={{
          ...globalStyle.rowBetweenCenter,
          height: generalInfo.width * 0.5,
          paddingHorizontal: "5%",
        }}
      >
        <Image
          style={{
            height: generalInfo.width * 0.4,
            width: generalInfo.width * 0.4,
            borderRadius: generalInfo.width * 0.25,
            marginRight: 10,
          }}
          source={{
            uri: alterEgoWWI,
          }}
        />
        <View
          style={{
            justifyContent: "space-evenly",
            flex: 1,
            height: "100%",
          }}
        >
          <TextAuto
            textRender={"Noe Oziel"}
            customStyle={customizeText(25, "normal")}
          />
          <View style={globalStyle.txtBorderSnow}>
            <Text style={customizeText(20, "normal")}>Fullstack developer</Text>
          </View>
          <View style={globalStyle.rowBetweenCenter}>
            <Text style={customizeText(18, "normal")}>More info here</Text>
            <Feather name="circle" size={15} color={colorPalette.snow} />
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};

export default Me;
