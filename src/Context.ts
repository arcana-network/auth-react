import React from "react";
import { DarkTheme } from "./Theme";
import { AuthContextType, ThemeSpec } from "./typings";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const ThemeContext = React.createContext<ThemeSpec>(DarkTheme);
