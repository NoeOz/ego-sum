import { StyleSheet, StatusBar, View, ScrollView } from "react-native";
import {
  colorPalette,
  customizeText,
  generalInfo,
  globalStyle,
} from "../styles/globalStyles";
import Me from "../components/home/me/Me";
import SkillInfo from "../components/home/me/SkillInfo";
import Professional from "../components/home/professional/Professional";
import StackCollection from "../components/home/techStack/StackCollection";
import Timer from "../components/ui/Timer";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Me />
      <SkillInfo />
      <StackCollection />
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
    marginTop: generalInfo.os === "android" ? StatusBar.currentHeight : 20,
  },
});
