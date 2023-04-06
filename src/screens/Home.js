import { StyleSheet, Text, StatusBar, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import Card from "../components/ui/Card";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../styles/globalStyles";
import CardsCollection from "../components/techStack/CardsCollection";
import Me from "../components/home/me/Me";

export default function Home() {
  return (
    <View style={styles.container}>
      <Me />
      <View style={globalStyle.snowLine} />
      <CardsCollection />
      <View style={globalStyle.snowLine} />
      <Card color={colorPalette.black}>
        <View style={{ ...globalStyle.txtBorderSnow, alignSelf: "flex-start" }}>
          <Text style={customizeText(20, "normal")}>Work experience</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.background,
    paddingHorizontal: "2.5%",
    paddingTop: StatusBar.currentHeight,
  },
});
