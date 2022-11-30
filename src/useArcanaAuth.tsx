import React from "react";
import { AuthContext } from "./Context";

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error(
      "`useAuth` Hook and `Auth` component must be used inside `ProvideAuth`"
    );
  }
  return context;
};

const useLogin = () => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error(
      "`useAuth` Hook and `Auth` component must be used inside `ProvideAuth`"
    );
  }

  const {
    loading,
    isLoggedIn,
    user,
    loginWithLink,
    loginWithSocial,
    availableLogins,
  } = context;

  return {
    loading,
    isLoggedIn,
    user,
    loginWithLink,
    loginWithSocial,
    availableLogins,
  };
};

const useProvider = () => {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error(
      "`useAuth` Hook and `Auth` component must be used inside `ProvideAuth`"
    );
  }

  return {
    loading: context.loading,
    provider: context.provider,
  };
};

export { useAuth, useProvider, useLogin };
