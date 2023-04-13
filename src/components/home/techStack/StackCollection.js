import CloudStack from "./CloudStack";
import MobileStack from "./MobileStack";
import WebStack from "./WebStack";
import { colorPalette } from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import Animated, { FadeIn } from "react-native-reanimated";

const StackCollection = () => {
  return (
    <Animated.View entering={FadeIn.duration(500).delay(500)}>
      <Card
        color={colorPalette.grape}
        style={{
          width: "100%",
          marginVertical: 15,
          alignSelf: "center",
        }}
      >
        <MobileStack />
        <WebStack />
        <CloudStack />
      </Card>
    </Animated.View>
  );
};

export default StackCollection;
