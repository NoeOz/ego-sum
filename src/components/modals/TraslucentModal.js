import { useState } from "react";
import { Modal, View } from "react-native";

export const StateTraslucentModal = () => {
  const [visible, setVisible] = useState(false);

  return { visible, setVisible };
};

export const TraslucentModal = (props) => {
  const { children, visible, setVisible } = props;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(!visible)}
    >
      <View
        style={{ flex: 1, padding: "2.5%", backgroundColor: "rgba(0,0,0,.9)" }}
      >
        {children}
      </View>
    </Modal>
  );
};
