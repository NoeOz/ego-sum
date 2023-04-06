import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";

export const colorPalette = {
  black: "#232324",
  black_2: "#1A1A1A",
  cactus_1: "#abc4aa",
  cactus_2: "#839292",
  mustad: "#675a1e",
  honey: "#DFB921",
  honey_2: "#E9E550",
  coffe: "#504945",
  grape: "#443C6899",
  lavander: "#A292B0",
  gray_1: "#555555",
  gray_2: "#909090",

  error: "#C54444",
  background: "#121212",
  noir: "#000000",
  snow: "#ffffff",
};

/* A constant that is used to get the height and width of the screen. */
export const generalInfo = {
  //Colores para corporativos
  height: Dimensions.get("screen").height,
  width: Dimensions.get("screen").width,
  sidebar:
    Platform.OS === "android"
      ? StatusBar.currentHeight
      : Dimensions.get("screen").height * 0.025,
  os: Platform.OS,
};

/**
 * It takes in a size, type, and alignment and returns a style object with the font size, color, and
 * alignment.
 * @param size - font size
 * @param type - error, normal, dark
 * @param align - left, right, center
 * @param weight - fontWeight cn be string: "100" - "900" || "bold", default is "normal"
 * @returns An object with the properties textAlign, fontSize, and color.
 */
export function customizeText(size, type, align = "left", weight = "normal") {
  const colorFont = {
    error: colorPalette.error,
    normal: colorPalette.snow,
    dark: colorPalette.noir,
  };

  return {
    textAlign: align,
    fontSize: size,
    color: colorFont[type],
    fontWeight: weight,
  };
}

export const globalStyle = StyleSheet.create({
  card: {
    padding: "5%",
    borderRadius: 20,
    marginVertical: "2.5%",
    elevation: 5,
  },
  blackLine: {
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: colorPalette.black,
    borderColor: colorPalette.black,
    width: "100%",
  },
  snowLine: {
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: colorPalette.snow,
    borderColor: colorPalette.snow,
    width: "100%",
  },
  rowBetweenCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtBorderSnow: {
    borderWidth: 1,
    borderColor: colorPalette.snow,
    borderRadius: 15,
    padding: "2%",
  },
  txtBorderNoir: {
    borderWidth: 1,
    borderColor: colorPalette.noir,
    borderRadius: 15,
    padding: "2%",
  },
});
