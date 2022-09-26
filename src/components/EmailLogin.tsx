import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { ThemeSpec } from "../typings";
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: #8d8d8d;
  font-weight: 400;
`;

const Input = styled.input`
  height: 45px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.fg};
  background: ${(props) => props.theme.bg};
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: ${(props: { theme: ThemeSpec }) => props.theme.inputShadow};
`;

const EmailLogin = ({ linkLogin }: { linkLogin: (e: string) => any }) => {
  const [email, setEmail] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <Form>
      <Label htmlFor="email">Email</Label>
      <Input type="email" value={email} onChange={onChange} />
      <Button onClick={() => linkLogin(email)} text="Get Link" />
    </Form>
  );
};

export default EmailLogin;
