import { View } from "react-native";
import { colorPalette, globalStyle } from "../../styles/globalStyles";

/**
 * Component to render anything with a card style
 * @param {JSX} children Any component inside
 * @param {String} color Any color string, default colorPalette.black
 * @param {Object} style Custom style object compatible with a View
 * @returns Styled View
 */
const Card = (props) => {
  const { children, color, style } = props;

  return (
    <View
      style={{
        ...globalStyle.card,
        backgroundColor: color ?? colorPalette.black,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Card;
