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
  const providerRef = React.useRef<any>(auth.provider);

  const loginWithSocial = async (p: string) => {
    await auth.init();
    return await auth.loginWithSocial(p);
  };

  const loginWithLink = async (email: string) => {
    await auth.init();
    return auth.loginWithLink(email);
  };

  const connect = async () => {
    return await auth.connect();
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
    auth.provider.on("connect", onConnectHook);
    auth.provider.on("disconnect", onDisconnectHook);
    auth.init().then(() => {
      setLoading(false);
      auth.isLoggedIn().then((loggedIn) => {
        if (!loggedIn) {
          auth.getLogins().then((logins) => {
            // @ts-ignore: No overlap error
            setAvailableLogins(logins.filter((l) => l != "passwordless"));
          });
        }
      });
    });
    return () => {
      auth.provider.removeListener("connect", onConnectHook);
      auth.provider.removeListener("disconnect", onDisconnectHook);
    };
  }, []);

  return {
    availableLogins,
    loading,
    loginWithLink,
    loginWithSocial,
    logout,
    provider: providerRef.current,
    isLoggedIn,
    user,
    connect,
    appId: auth.appId,
  };
};

export default ProvideAuth;
