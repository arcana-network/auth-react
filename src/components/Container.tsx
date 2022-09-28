import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import { Theme, ThemeSpec } from "../typings";

const Themes: Record<Theme, ThemeSpec> = {
  dark: {
    bg: "#101010",
    fg: "#f7f7f7",
    bd: "#262626",
    mode: "dark",
    inputShadow: `inset -2px -2px 4px rgb(57 57 57 / 44%),
    inset 5px 5px 10px rgb(11 11 11 / 50%);`,
  },
  light: {
    fg: "#101010",
    bg: "#f7f7f7",
    bd: "#ffffff",
    mode: "light",
    inputShadow: `inset -1px -7px 7px rgba(255, 255, 255, 0.7),
    inset 3px 1px 6px rgba(174, 174, 192, 0.2);`,
  },
};

const Wrapper = styled.div`
  padding: 30px 30px;
  min-width: 325px;
  max-width: 325px;
  min-height: 480px;
  background-color: ${(props) => props.theme.bd};
  color: ${(props) => props.theme.fg};
  margin: 0 auto;
  font-family: "Sora", sans-serif;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const Inner = styled.div`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

const Container = ({
  children,
  theme,
}: {
  theme: Theme;
  children: React.ReactNode;
}) => {
  let t = theme ? theme : "dark";
  return (
    <ThemeProvider theme={Themes[t]}>
      <Wrapper>
        <Inner>{children}</Inner>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Container;
