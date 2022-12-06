import React from "react";
import styled from "styled-components";

const Link = styled.p<{ textColor: string }>`
  text-transform: uppercase;
  text-decoration: underline;
  color: ${(props) => props.textColor};
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  cursor: pointer;
`;

const Actions = ({
  text,
  method,
}: {
  text: string;
  method: () => any;
}): JSX.Element => {
  return (
    <Link textColor={"#13a3fd"} onClick={() => method()}>
      {text}
    </Link>
  );
};

export default Actions;
