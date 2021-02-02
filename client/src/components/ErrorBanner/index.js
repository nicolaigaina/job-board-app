import React from "react";
import ErrorGif from "../../assets/No_data.gif";
import { Container } from "./styled";

const ErrorBanner = ({ message }) => {
  return (
    <Container>
      <img src={ErrorGif} alt="Error loading jobs" />
      <h1>{message}</h1>
    </Container>
  );
};

export default ErrorBanner;
