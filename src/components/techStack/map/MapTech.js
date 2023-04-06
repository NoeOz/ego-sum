import { View } from "react-native";
import { globalStyle } from "../../../styles/globalStyles";
import IconRender from "../../ui/IconRender";

const MapTech = ({ stackTech }) => (
  <View
    style={{
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    }}
  >
    {stackTech.map((tech) => (
      <IconRender key={tech.name} nameIcon={tech.name} type={tech.type} />
    ))}
  </View>
);
export default MapTech;
