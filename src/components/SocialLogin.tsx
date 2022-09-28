import React from "react";
import styled, { useTheme } from "styled-components";
import { Theme, ThemeSpec } from "../typings";
import type { Logins } from "@arcana/auth";

const IconMap = {
  google: "https://auth-icons.s3.ap-south-1.amazonaws.com/google-icon.png",
  twitter: "https://auth-icons.s3.ap-south-1.amazonaws.com/twitter-icon.png",
  github: "https://auth-icons.s3.ap-south-1.amazonaws.com/github-icon.png",
  github_light:
    "https://auth-icons.s3.ap-south-1.amazonaws.com/github-dark-icon.png",
  twitch: "https://auth-icons.s3.ap-south-1.amazonaws.com/twitch-icon.png",
  discord: "https://auth-icons.s3.ap-south-1.amazonaws.com/discord-icon.png",
};

const getIcon = (provider: Logins, theme: Theme) => {
  if (provider === "github" && theme == "light") {
    return IconMap["github_light"];
  }
  return IconMap[provider];
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.fg};
  width: 42px;
  height: 42px;
  border-radius: 25px;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.15, 1.15);
  }
`;

const Img = styled.img`
  margin: 0 auto;
  width: 24px;
  height: 24px;
`;

export const SocialLogin = ({
  providers,
  socialLogin,
}: {
  providers: Logins[];
  socialLogin: (k: string) => any;
}) => {
  const theme = useTheme();
  return (
    <Wrapper>
      {providers.map((p) => {
        return (
          <SocialWrapper key={p} onClick={() => socialLogin(p)}>
            <Img src={getIcon(p, (theme as ThemeSpec).mode)} alt="" />
          </SocialWrapper>
        );
      })}
    </Wrapper>
  );
};
