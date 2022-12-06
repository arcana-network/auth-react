import styled from "styled-components";

interface Props {
  textColor: string;
  backgroundColor: string;
}

const Btn = styled.button<Props>`
  width: 100%;
  height: 2.75rem;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.textColor};
  background: ${(props) => props.backgroundColor};
  border: none;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: scale(1.05, 1.15);
  }
`;

export default Btn;
