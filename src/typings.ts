import type { UserInfo, Logins } from "@arcana/auth";

type Theme = "dark" | "light";

type ThemeSpec = {
  fg: string;
  bg: string;
  bd: string;
  mode: Theme;
  inputShadow: string;
};

type AuthContextType = {
  loading: boolean;
  availableLogins: Logins[];
  loginWithLink: (p: string) => Promise<any>;
  loginWithSocial: (p: string) => Promise<any>;
  logout: () => void;
  provider: null;
  isLoggedIn: boolean;
  user: UserInfo | null;
  appId: string;
};

export { Theme, ThemeSpec, AuthContextType };
