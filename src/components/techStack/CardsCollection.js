import { StyleSheet, View } from "react-native";
import CloudStack from "./CloudStack";
import MobileStack from "./MobileStack";
import WebStack from "./WebStack";
import { generalInfo } from "../../styles/globalStyles";
import { useEffect, useState } from "react";

const initialPositionCards = {
  first: { zIndex: 5, top: "17%", width: "92%" },
  second: { zIndex: 3, top: "9%", width: "95%", left: "3%" },
  third: { zIndex: 1, top: 0, width: "98%", left: "6%" },
};

const CardsCollection = () => {
  const [positionCards, setPositionCards] = useState(initialPositionCards);
  const [move, setMove] = useState(0);

  useEffect(() => {
    itercalateCards();
    return () => {
      setPositionCards(initialPositionCards);
    };
  }, []);

  useEffect(() => {
    itercalateCards();
  }, [move]);

  function itercalateCards() {
    if (move === 0)
      setTimeout(() => {
        setPositionCards({
          ...positionCards,
          first: positionCards.second,
          second: positionCards.first,
        });
        setMove(1);
      }, 3500);
    else if (move === 1)
      setTimeout(() => {
        setPositionCards({
          ...positionCards,
          first: positionCards.third,
          second: initialPositionCards.second,
          third: initialPositionCards.first,
        });
        setMove(2);
      }, 3500);
    else
      setTimeout(() => {
        setPositionCards(initialPositionCards);
        setMove(0);
      }, 3500);
  }

  return (
    <View
      style={{
        height: generalInfo.height * 0.3,
        width: generalInfo.width * 0.9,
        marginVertical: 15,
      }}
    >
      <MobileStack
        fixStyle={styles.cardGeneral}
        position={positionCards["first"]}
      />
      <WebStack
        fixStyle={styles.cardGeneral}
        position={positionCards["second"]}
      />
      <CloudStack
        fixStyle={styles.cardGeneral}
        position={positionCards["third"]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardGeneral: {
    width: generalInfo.width * 0.92,
    padding: "2.5%",
    marginHorizontal: 5,
    alignSelf: "center",
    position: "absolute",
    width: "100%",
    alignSelf: "flex-start",
    elevation: 20,
  },
});

export default CardsCollection;
