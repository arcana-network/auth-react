import React from "react";
import Btn from "./styled/Btn";
import { useTheme } from "../Theme";

type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const theme = useTheme();
  return (
    <Btn
      textColor={theme.bg}
      backgroundColor={theme.fg}
      onClick={(e) => (props.onClick ? props.onClick(e) : null)}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
