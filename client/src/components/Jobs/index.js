import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../graphql/Queries";

const Jobs = () => {
  const { data, error, loading } = useQuery(LOAD_JOBS);
  return <div></div>;
};

export default Jobs;
