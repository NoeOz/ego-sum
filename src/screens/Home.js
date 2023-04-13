import { StyleSheet, StatusBar, View } from "react-native";
import { colorPalette, generalInfo } from "../styles/globalStyles";
import Me from "../components/home/me/Me";
import BottomDragCard from "../components/modals/BottomDragCard";
import AboutOptions from "../components/home/about/AboutOptions";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colorPalette.noir} />
      <Me />
      <BottomDragCard
        height={generalInfo.height * 0.8}
        customStyle={styles.containerInfo}
      >
        <AboutOptions />
      </BottomDragCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.noir,
    paddingTop: generalInfo.os === "android" ? 10 : 20,
    padding: "2.5%",
  },
  containerInfo: {
    backgroundColor: colorPalette.black,
  },
});
