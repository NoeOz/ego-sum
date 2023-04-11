import { Text, View } from "react-native";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../../../../styles/globalStyles";
import Card from "../../../ui/Card";
import { useEffect, useState } from "react";
import Animated, { FadeIn } from "react-native-reanimated";

const LineProgress = () => {
  //generalInfo.height * 0.03
  //generalInfo.height * 0.83
  const [currentHeight, setCurrentHeight] = useState(generalInfo.height * 0.03);
  const totalHeight = generalInfo.height * 0.83;

  useEffect(() => {
    if (currentHeight < totalHeight) {
      setTimeout(() => {
        setCurrentHeight((h) => h + totalHeight * 0.2);
      }, 300);
    }
  }, [currentHeight]);

  return (
    <View
      style={{
        alignSelf: "center",
        position: "absolute",
        bottom: "5%",
        maxHeight: totalHeight,
        height: currentHeight,
        width: 3,
        backgroundColor: colorPalette.snow,
        borderRadius: 50,
      }}
    />
  );
};

const WorkXP = () => {
  const carieerSteps = [
    {
      site: "Universidad Tecnológica de Puebla",
      name: "Ingeniería en Desarrollo y Gestión de Software",
      date: "2022",
      delay: 1850,
    },
    {
      site: "Institut Universitaire Technologique du Littoral Côté d'Oppale (ULCO Calais)",
      name: "Licence Professionnelle en Développement Internet et Mobile",
      date: "2020",
      delay: 1300,
    },
    {
      site: "Universidad Tecnológica de Puebla",
      name: "TSU en en Tecnologías de la Información y Comunicación Área Sistemas Informáticos",
      date: "2019",
      delay: 650,
    },
  ];

  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View
        style={{ flex: 1, justifyContent: "space-around", marginRight: 10 }}
      >
        <LineProgress />
        {carieerSteps.map((step) => (
          <Animated.View
            key={step.name.split(1, 5)}
            entering={FadeIn.duration(1800).delay(step.delay)}
          >
            <Card color={colorPalette.cactus_2}>
              <Text style={customizeText(18, "normal", "center", "500")}>
                {step.date}
              </Text>
            </Card>
          </Animated.View>
        ))}
      </View>
      <View style={{ flex: 4, justifyContent: "space-evenly" }}>
        {carieerSteps.map((step) => (
          <Animated.View
            key={step.name.split(1, 5)}
            entering={FadeIn.duration(1800).delay(step.delay)}
          >
            <Card color={colorPalette.cool_gray}>
              <Text style={customizeText(18, "normal", null, "500")}>
                {step.site}
              </Text>
              <Text style={customizeText(18, "normal", null, "300")}>
                {step.name}
              </Text>
            </Card>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default WorkXP;
