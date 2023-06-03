import CloudStack from "./CloudStack";
import MobileStack from "./MobileStack";
import WebStack from "./WebStack";
import { View } from "react-native";

const StackCollection = () => {
  return (
    <View>
      <MobileStack />
      <WebStack />
      <CloudStack />
    </View>
  );
};

export default StackCollection;
