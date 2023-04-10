import { Text, View } from "react-native";
import { customizeText } from "../../styles/globalStyles";
import MapTech from "./map/MapTech";
import Animated, { FadeIn } from "react-native-reanimated";

const CloudStack = () => {
  const cloudTech = [
    { name: require("../../assets/icons/amazonaws.png"), type: "image" },
    { name: require("../../assets/icons/awslambda.png"), type: "image" },
    { name: require("../../assets/icons/amazondynamodb.png"), type: "image" },
    { name: require("../../assets/icons/amazons3.png"), type: "image" },
    { name: require("../../assets/icons/awsamplify.png"), type: "image" },
    { name: require("../../assets/icons/postgresql.png"), type: "image" },
    { name: require("../../assets/icons/mysql.png"), type: "image" },
    { name: "API", type: "text" },
    { name: require("../../assets/icons/graphql.png"), type: "image" },
    { name: require("../../assets/icons/github.png"), type: "image" },
    { name: require("../../assets/icons/git.png"), type: "image" },
    { name: require("../../assets/icons/trello.png"), type: "image" },
    { name: require("../../assets/icons/jira.png"), type: "image" },
  ];

  return (
    <Animated.View entering={FadeIn.springify().duration(2500)}>
      <View
        style={{
          paddingVertical: "2.5%",
        }}
      >
        <Text style={customizeText(20, "normal", null, "bold")}>
          Cloud & Back
        </Text>
      </View>
      <MapTech stackTech={cloudTech} />
    </Animated.View>
  );
};

export default CloudStack;
