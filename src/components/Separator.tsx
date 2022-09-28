import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  &:before,
  &:after {
    content: "";
    flex: 1 1 auto;
    border-bottom: 1px solid #000;
  }

  &:before {
    margin-right: 1rem;
  }
  &:after {
    margin-left: 1rem;
  }
`;

const Seperator = ({ text }: { text: string }) => <Wrapper>{text}</Wrapper>;

export default Seperator;
