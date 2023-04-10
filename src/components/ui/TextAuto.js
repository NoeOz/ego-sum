import { useEffect, useState } from "react";
import { Text } from "react-native";
import { customizeText } from "../../styles/globalStyles";

const TextAuto = ({textRender, customStyle}) => {
  const [text, setText] = useState("");
  const fullText = textRender;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 150);
    }
  }, [index]);

  return <Text style={customStyle}>{text}</Text>;
};

export default TextAuto;
