import { View } from "react-native";
import IconRender from "./IconRender";
import { globalStyle } from "../../../../styles/globalStyles";

const MapTech = ({ stackTech, orientation = "x" }) => (
  <View
    style={
      orientation === "x"
        ? globalStyle.rowWrapBetween
        : globalStyle.colWrapBetween
    }
  >
    {stackTech.map((tech, index) => (
      <IconRender
        key={tech.name}
        nameIcon={tech.name}
        type={tech.type}
        delay={index * 100 + 100}
        link={tech?.link}
        iconSize={tech?.size}
      />
    ))}
  </View>
);
export default MapTech;
