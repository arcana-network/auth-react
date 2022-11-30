import React from "react";
import { ThemeContext } from "./Context";
import { ThemeType, ThemeSpec } from "./typings";

export const DarkTheme: ThemeSpec = {
  bg: "#101010",
  fg: "#f7f7f7",
  bd: "#262626",
  mode: "dark",
  inputShadow: `inset -2px -2px 4px rgb(57 57 57 / 44%),
      inset 5px 5px 10px rgb(11 11 11 / 50%);`,
};

export const LightTheme: ThemeSpec = {
  fg: "#101010",
  bg: "#f7f7f7",
  bd: "#ffffff",
  mode: "light",
  inputShadow: `inset -1px -7px 7px rgba(255, 255, 255, 0.7),
      inset 3px 1px 6px rgba(174, 174, 192, 0.2);`,
};

const ProvideTheme = (props: {
  children?: React.ReactNode;
  theme: ThemeType;
}) => {
  let themeValue = DarkTheme;
  if (props?.theme === "light") {
    themeValue = LightTheme;
  }
  return (
    <ThemeContext.Provider value={themeValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};

export { ProvideTheme, useTheme };
