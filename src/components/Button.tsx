import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 2.75rem;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.bg};
  background: ${(props) => props.theme.fg};
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.05, 1.15);
  }
`;

type ButtonProps = {
  onClick?: (e: any) => any;
  text: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Btn onClick={(e) => (props.onClick ? props.onClick(e) : null)}>
      {props.text}
    </Btn>
  );
};

export default Button;
