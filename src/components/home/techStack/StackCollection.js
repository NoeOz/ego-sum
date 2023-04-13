import { StyleSheet, Text, TouchableOpacity } from "react-native";
import CloudStack from "./CloudStack";
import MobileStack from "./MobileStack";
import WebStack from "./WebStack";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  colorPalette,
  customizeText,
  globalStyle,
} from "../../../styles/globalStyles";
import Card from "../../ui/Card";
import Animated, { FadeIn } from "react-native-reanimated";

const StackCollection = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Animated.View entering={FadeIn.duration(500).delay(1000)}>
      <Card
        color={colorPalette.grape}
        style={{
          width: "100%",
          marginVertical: 15,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={globalStyle.rowBetweenCenter}
        >
          <Text style={customizeText(20, "normal", null, "500")}>Tech Stack</Text>
          <Feather
            name={visible ? "chevron-up" : "chevron-down"}
            size={25}
            color={colorPalette.snow}
          />
        </TouchableOpacity>
        {visible ? (
          <>
            <MobileStack />
            <WebStack />
            <CloudStack />
          </>
        ) : null}
      </Card>
    </Animated.View>
  );
};

export default StackCollection;
