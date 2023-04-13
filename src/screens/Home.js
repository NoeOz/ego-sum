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
import BottomDragCard from "../components/modals/BottomDragCard";

export default function Home() {
  return (
    <View style={styles.container}>
      <Me />
      <BottomDragCard
        height={generalInfo.height * 0.75}
        customStyle={styles.containerInfo}
      >
        <StackCollection />
        <SkillInfo />
        <Professional />
      </BottomDragCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.snow,
    marginTop: generalInfo.os === "android" ? StatusBar.currentHeight : 20,
  },
  containerInfo: {
    backgroundColor: colorPalette.black,
  },
});
