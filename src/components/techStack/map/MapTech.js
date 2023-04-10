import { View } from "react-native";
import IconRender from "../../ui/IconRender";
import { globalStyle } from "../../../styles/globalStyles";

const MapTech = ({ stackTech }) => (
  <View style={globalStyle.rowWrapBetween}>
    {stackTech.map((tech, index) => (
      <IconRender
        key={tech.name}
        nameIcon={tech.name}
        type={tech.type}
        delay={index * 100 + 100}
      />
    ))}
  </View>
);
export default MapTech;
