import React from "react";
import styled from "styled-components";

const Link = styled.a`
  text-transform: uppercase;
  color: #13a3fd;
  font-weight: 700px;
  font-size: 15px;
  line-height: 19px;
`;

const Wrapper = styled.div`
  margin: 10px auto;
`;

const Actions = ({ text, url }: { text: string; url: string }): JSX.Element => {
  return (
    <Wrapper>
      <Link href={url}>{text}</Link>
    </Wrapper>
  );
};

export default Actions;
