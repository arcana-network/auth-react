import React from "react";
import { useAuth } from "./useArcanaAuth";
import { WAIT_TEXT } from "./constants";
import { SocialLogin } from "./components/SocialLogin";
import Container from "./components/Container";
import EmailLogin from "./components/EmailLogin";
import Header from "./components/Header";
import Actions from "./components/Actions";
import Button from "./components/Button";
import Loader from "./components/Loader";
import Separator from "./components/Separator";
import { Theme } from "./typings";

const loginStateInitValue = {
  text: "",
  loading: false,
  type: "",
};

type AuthProps = {
  redirectTo: string;
  externalWallet: boolean;
  theme: Theme;
  onLogin?: () => any;
};

const Auth = ({ redirectTo, externalWallet, theme, onLogin }: AuthProps) => {
  const currentTheme = theme ? theme : "dark";
  const auth = useAuth();
  const [loginState, setLoginState] = React.useState(loginStateInitValue);

  const socialLogin = async (kind: string) => {
    setLoginState({
      text: WAIT_TEXT.SOCIAL,
      type: "SOCIAL",
      loading: true,
    });

    if (auth) {
      await auth.loginWithSocial(kind).finally(() => {
        setLoginState(loginStateInitValue);
        if (onLogin) {
          onLogin();
        }
      });
    }
  };

  const linkLogin = async (kind: string) => {
    setLoginState({
      text: WAIT_TEXT.LINK,
      type: "LINK",
      loading: true,
    });

    await auth?.loginWithLink(kind).finally(() => {
      setLoginState(loginStateInitValue);
      if (onLogin) {
        onLogin();
      }
    });

    setLoginState(loginStateInitValue);
  };
  if (auth?.loading) {
    return (
      <Container theme={currentTheme}>
        <Loader text="" />
      </Container>
    );
  }

  if (auth?.isLoggedIn) {
    return (
      <Container theme={currentTheme}>
        <p>Logged in as: {auth.user?.email}</p>
        <Button onClick={() => auth.logout()} text="Logout" />
      </Container>
    );
  }

  if (loginState.loading) {
    return (
      <Container theme={currentTheme}>
        <Loader text={loginState.text}>
          {loginState.type == "LINK" ? (
            <>
              <Actions url="" text="Send the email again" />
              <Actions url="" text="Change email id" />
            </>
          ) : (
            ""
          )}
        </Loader>
      </Container>
    );
  }

  return (
    <Container theme={currentTheme}>
      <Header />
      <EmailLogin linkLogin={linkLogin} />
      <Separator text="or continue with" />
      <SocialLogin
        providers={auth?.availableLogins || []}
        socialLogin={socialLogin}
      />

      {externalWallet ? (
        <>
          <Separator text="or" />
          <Button text="CONNECT WALLET" />
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Auth;
