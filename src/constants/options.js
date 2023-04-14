import { colorPalette, customizeText } from "../styles/globalStyles";

export const options = [
    {
      color: colorPalette.snow,
      optionTitle: "tech stack",
      optionId: "tech",
      styleOption: { flex: 1 },
      styleText: customizeText(18, "dark", "left", "600"),
    },
    {
      color: colorPalette.honey,
      optionTitle: "skills",
      optionId: "skills",
      styleOption: { flex: 1, marginHorizontal: 10 },
      styleText: customizeText(18, "normal", "left", "600"),
    },
    {
      color: colorPalette.cactus_2,
      optionTitle: "experience",
      optionId: "xp",
      styleOption: { flex: 1 },
      styleText: customizeText(18, "dark", "left", "600"),
    },
  ];