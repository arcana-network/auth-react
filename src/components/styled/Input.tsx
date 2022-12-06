import styled from "styled-components";

interface Props {
  textColor: string;
  backgroundColor: string;
  inputShadow: string;
}

const Input = styled.input<Props>`
  height: 45px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.textColor};
  background: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 10px;
  outline: none;
  box-shadow: ${(props) => props.inputShadow};
`;

export default Input;
