import React from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";
import { useTheme } from "../Theme";
import { ThemeSpec } from "../typings";

const Text = styled.p`
  text-align: center;
  padding: 0 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 22px;
`;

type LoaderProps = {
  children?: React.ReactNode;
  text: string;
};

const Loader = (props: LoaderProps) => {
  const theme = useTheme();
  return (
    <>
      <Oval
        height={70}
        width={70}
        color={theme.fg}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#8D8D8D"
        strokeWidth={8}
        strokeWidthSecondary={8}
      />
      {props.text ? <Text>{props.text}</Text> : ""}
      {props.children ? <>{props.children}</> : ""}
    </>
  );
};

export default Loader;
