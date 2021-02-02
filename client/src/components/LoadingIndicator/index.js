import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { Container } from "./styled";

const LoadingIndicator = () => {
  return (
    <Container>
      <HashLoader color={"#0d62ff"} size={"75px"} />
    </Container>
  );
};

export default LoadingIndicator;
