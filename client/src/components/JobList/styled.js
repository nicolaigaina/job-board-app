import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
`;

export const CardWrapper = styled.div`
  margin: 50px 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 60px;
  row-gap: 30px;
  justify-items: center;
`;
