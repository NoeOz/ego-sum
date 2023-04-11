import { useEffect, useState } from "react";
import { Text, View } from "react-native";

/**
 * Count down component
 * @param {Number} remainingTime Segs to remaining time (1 - 60)
 * @param {Function} callback Function to execute when time has been finished
 * It can recive any property compatible with Text component
 * @returns Text component with count down in seconds (It only accept segs)
 */
const Timer = (props) => {
  const { remainingTime, callback, ...customPropsText } = props;
  const [countdown, setCountdown] = useState(remainingTime * 1000);

  useEffect(() => {
    setTimeout(() => {
      if (countdown > 0) setCountdown((countdown) => countdown - 10);
      else controlFinish();
    }, 10);

    return () => {};
  }, [countdown]);

  function controlFinish() {
    callback();
  }

  const seconds = (countdown / 1000).toFixed(2);

  return <Text {...customPropsText}>{`${seconds}`}</Text>;
};

export default Timer;
