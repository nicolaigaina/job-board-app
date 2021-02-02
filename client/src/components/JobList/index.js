import React from "react";
import Cart from "../Card";
import { Container, CardWrapper } from "./styled";

const JobList = ({ jobs }) => {
  return (
    <Container>
      <h1>Jobs</h1>
      <h2>Showing {jobs.length} Jobs</h2>
      <CardWrapper>
        {jobs.map((job) => (
          <Cart key={job.id} job={job} />
        ))}
      </CardWrapper>
    </Container>
  );
};

export default JobList;
