import React from "react";
import Button from "./Button";
import Input from "./styled/Input";
import styled from "styled-components";
import { useTheme } from "../Theme";
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

interface EmailLoginProps {
  linkLogin: (e: string) => any;
  email: string;
  setEmail: (e: string) => void;
}

const EmailLogin = ({ email, setEmail, linkLogin }: EmailLoginProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const theme = useTheme();
  return (
    <Form>
      <Label htmlFor="email">Email</Label>
      <Input
        backgroundColor={theme.bg}
        textColor={theme.fg}
        inputShadow={theme.inputShadow}
        type="email"
        value={email}
        onChange={onChange}
      />
      <Button onClick={() => linkLogin(email)}>Get Link</Button>
    </Form>
  );
};

export default EmailLogin;
