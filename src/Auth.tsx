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
import { ThemeType } from "./typings";

const initLoaderState = {
  text: "",
  loading: false,
  type: "",
};

const reducer = (
  state: typeof initLoaderState,
  action: "SOCIAL" | "LINK" | "RESET"
) => {
  if (action == "SOCIAL" || action == "LINK") {
    return {
      text: WAIT_TEXT[action],
      type: action,
      loading: true,
    };
  } else if (action == "RESET") {
    return initLoaderState;
  } else {
    return state;
  }
};
type AuthProps = {
  externalWallet: boolean;
  theme: ThemeType;
  onLogin?: () => void;
};

const Auth = (props?: AuthProps) => {
  const currentTheme = props?.theme ? props.theme : "dark";
  const auth = useAuth();
  const [loaderState, dispatch] = React.useReducer(reducer, initLoaderState);
  const [email, setEmail] = React.useState("");

  const socialLogin = async (kind: string) => {
    dispatch("SOCIAL");

    if (auth) {
      await auth.loginWithSocial(kind).finally(() => {
        dispatch("RESET");
        if (props?.onLogin) {
          props.onLogin();
        }
      });
    }
  };

  const linkLogin = async () => {
    if (!email) {
      return;
    }

    dispatch("LINK");

    await auth?.loginWithLink(email).finally(() => {
      dispatch("RESET");
      if (props?.onLogin) {
        props.onLogin();
      }
    });
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
        <Button onClick={() => auth.logout()}>Logout</Button>
      </Container>
    );
  }

  if (loaderState.loading) {
    return (
      <Container theme={currentTheme}>
        <Loader text={loaderState.text}>
          {loaderState.type == "LINK" ? (
            <>
              <Actions method={() => linkLogin()} text="Send the email again" />
              <Actions
                method={() => dispatch("RESET")}
                text="Change email id"
              />
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
      <EmailLogin email={email} setEmail={setEmail} linkLogin={linkLogin} />
      {auth?.availableLogins.length > 0 ? (
        <>
          <Separator text="or continue with" />
          <SocialLogin
            providers={auth?.availableLogins || []}
            socialLogin={socialLogin}
          />
        </>
      ) : (
        ""
      )}
      {props?.externalWallet ? (
        <>
          <Separator text="or" />
          <Button>CONNECT WALLET</Button>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Auth;
