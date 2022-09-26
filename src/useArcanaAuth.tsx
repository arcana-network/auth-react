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

export { useAuth };
