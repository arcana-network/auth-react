import type { UserInfo, Logins, EthereumProvider } from "@arcana/auth";

type ThemeType = "dark" | "light";

type ThemeSpec = {
  fg: string;
  bg: string;
  bd: string;
  mode: ThemeType;
  inputShadow: string;
};

type AuthContextType = {
  loading: boolean;
  availableLogins: Logins[];
  loginWithLink: (p: string) => Promise<EthereumProvider>;
  connect: () => Promise<EthereumProvider>;
  loginWithSocial: (p: string) => Promise<EthereumProvider>;
  logout: () => void;
  provider: null;
  isLoggedIn: boolean;
  user: UserInfo | null;
  appId: string;
};

export { ThemeType, ThemeSpec, AuthContextType };
