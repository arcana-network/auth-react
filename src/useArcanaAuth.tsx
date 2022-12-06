import React from "react";
import { AuthContext } from "./Context";
import { AuthContextType } from "./typings";

const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error(
      "`useAuth` Hook and `Auth` component must be used inside `ProvideAuth`"
    );
  }
  return context;
};

const useLogin = (): Omit<AuthContextType, "provider" | "appId"> => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error("`useLogin` Hook must be used inside `ProvideAuth`");
  }

  const {
    loading,
    isLoggedIn,
    user,
    loginWithLink,
    loginWithSocial,
    availableLogins,
    connect,
    logout,
    theme,
    logo,
  } = context;

  return {
    loading,
    isLoggedIn,
    user,
    loginWithLink,
    loginWithSocial,
    availableLogins,
    logout,
    connect,
    theme,
    logo,
  };
};

const useProvider = (): Pick<
  AuthContextType,
  "isLoggedIn" | "loading" | "provider"
> => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error("`useProvider` Hook must be used inside `ProvideAuth`");
  }

  return {
    isLoggedIn: context.isLoggedIn,
    loading: context.loading,
    provider: context.provider,
  };
};

export { useAuth, useProvider, useLogin };
