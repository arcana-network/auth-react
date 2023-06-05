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
  loginWithLink: (email: string) => Promise<EthereumProvider>;
  connect: () => Promise<EthereumProvider>;
  loginWithSocial: (provider: string) => Promise<EthereumProvider>;
  logout: () => void;
  provider: EthereumProvider;
  isLoggedIn: boolean;
  user: UserInfo | null;
  logo: string;
  theme: "light" | "dark";
};

export { ThemeType, ThemeSpec, AuthContextType };
