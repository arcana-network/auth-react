import React from "react";
import styled from "styled-components";

const Link = styled.p`
  text-transform: uppercase;
  text-decoration: underline;
  color: #13a3fd;
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
  return <Link onClick={() => method()}>{text}</Link>;
};

export default Actions;
