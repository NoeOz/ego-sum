import { StyleSheet, Text, StatusBar, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import Card from "../components/ui/Card";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../styles/globalStyles";
import CardsCollection from "../components/techStack/CardsCollection";
import Me from "../components/home/me/Me";
import SelfInfo from "../components/home/me/SelfInfo";
import Professional from "../components/home/professional/Professional";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Me />
      <SelfInfo />
      <CardsCollection />
      <View style={globalStyle.snowLine} />
      <Professional />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.background,
    paddingHorizontal: "2.5%",
    marginTop: StatusBar.currentHeight,
  },
});
