import React from "react";
import { AuthContext } from "./Context";
import type { AuthProvider } from "@arcana/auth";
import type { UserInfo, Logins } from "@arcana/auth";
import { AuthContextType } from "./typings";

const ProvideAuth = ({
  children,
  provider,
}: {
  children?: React.ReactNode;
  provider: AuthProvider;
}) => {
  const auth = useProvideAuth(provider);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvideAuth = (auth: AuthProvider): AuthContextType => {
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [availableLogins, setAvailableLogins] = React.useState<Logins[]>([]);
  const [user, setUser] = React.useState<UserInfo | null>(null);
  const providerRef = React.useRef<any>(null);

  const loginWithSocial = async (p: string) => {
    await auth.init();
    await auth.loginWithSocial(p);
  };

  const loginWithLink = async (email: string) => {
    await auth.init();
    return auth.loginWithLink(email);
  };

  const logout = async () => {
    if (await auth.isLoggedIn()) {
      await auth.logout();
    }
  };

  const onConnectHook = async () => {
    setIsLoggedIn(true);
    const info = await auth.getUser();
    setUser(info);
  };
  const onDisconnectHook = () => {
    setIsLoggedIn(false);
  };

  React.useEffect(() => {
    auth.init({ appMode: 2 }).then(() => {
      auth.provider.on("connect", onConnectHook);
      auth.provider.on("disconnect", onDisconnectHook);
      auth.getLogins().then((logins: Logins[]) => {
        setLoading(false);
        // @ts-ignore No overlap error
        setAvailableLogins(logins.filter((l) => l != "passwordless"));
      });
      providerRef.current = auth.provider;
      return () => {
        auth.provider.removeListener("connect", onConnectHook);
        auth.provider.removeListener("disconnect", onDisconnectHook);
      };
    });
  }, [isLoggedIn]);

  return {
    availableLogins,
    loading,
    loginWithLink,
    loginWithSocial,
    logout,
    provider: providerRef.current,
    isLoggedIn,
    user,
    appId: auth.appId,
  };
};

export default ProvideAuth;
