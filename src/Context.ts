import React from "react";
import { AuthContextType } from "./typings";
export const AuthContext = React.createContext<AuthContextType | null>(null);
