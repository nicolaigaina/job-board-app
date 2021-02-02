import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border-radius: 0.5rem;
  width: 100%;
  h1 {
    margin: 0.7rem 0;
    font-size: 1.1rem;
  }
  h2 {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 300;
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
  }
  .location {
    font-size: 0.9rem;
    color: #f68634;
    font-weight: bold;
  }
  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: #7e7c7b;
    margin: 0.5rem 0;
  }
  button {
    font-weight: 600;
    margin-top: 1rem;
    background: #0d62ff;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    padding: 0.7rem 2.5rem;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const CompanyLogo = styled.img`
  max-width: 80%;
  max-height: 70px;
  border-radius: 10px;
`;
