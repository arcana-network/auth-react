import React from "react";
import styled, { useTheme } from "styled-components";
import { Theme, ThemeSpec } from "../typings";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const FooterText = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const FooterImg = styled.a`
  width: 60px;
  height: 15px;
  margin-left: 5px;
`;

const getLogo = (theme: Theme) => {
  const url = "https://auth-icons.s3.ap-south-1.amazonaws.com/";
  if (theme == "light") {
    return url + "arcana-logo-dark.png";
  }
  return url + "arcana-logo.png";
};

const Footer = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <FooterText>Powered by</FooterText>
      <FooterImg href="https://arcana.network/" target="_blank">
        <img src={getLogo((theme as ThemeSpec).mode)} />
      </FooterImg>
    </Wrapper>
  );
};

export default Footer;
