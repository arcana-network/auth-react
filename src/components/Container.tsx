import React from "react";
import styled from "styled-components";
import { ProvideTheme, useTheme } from "../Theme";
import Footer from "./Footer";
import { ThemeType } from "../typings";

const Wrapper = styled.div<{ textColor: string; backgroundColor: string }>`
  padding: 30px 30px;
  min-width: 325px;
  max-width: 325px;
  min-height: 480px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
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

const Container = (props: { theme: ThemeType; children: React.ReactNode }) => {
  let t = props.theme ? props.theme : "dark";
  return (
    <ProvideTheme theme={t}>
      <WrapperComponent>{props.children}</WrapperComponent>
    </ProvideTheme>
  );
};

const WrapperComponent = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Wrapper textColor={theme.fg} backgroundColor={theme.bd}>
      <Inner>{children}</Inner>
      <Footer />
    </Wrapper>
  );
};

export default Container;
