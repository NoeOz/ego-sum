import { Text, View } from "react-native";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../../../styles/globalStyles";
import Card from "../../ui/Card";

const Professional = () => {
  return (
    <Card color={colorPalette.cool_gray} style={globalStyle.rowBetweenCenter}>
      <View style={{ ...globalStyle.txtBorderSnow, alignSelf: "flex-start" }}>
        <Text style={customizeText(20, "normal")}>Work experience</Text>
      </View>
      <View style={{ ...globalStyle.txtBorderSnow, alignSelf: "flex-start" }}>
        <Text style={customizeText(20, "normal")}>Carieer</Text>
      </View>
    </Card>
  );
};

export default Professional;
