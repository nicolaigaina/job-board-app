import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../graphql/Queries";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorBanner from "../../components/ErrorBanner";
import JobList from "../../components/JobList";

const Jobs = () => {
  const { data, error, loading } = useQuery(LOAD_JOBS);
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorBanner message="There was an error loading jobs" />;

  return <div>{data.jobs.length > 0 && <JobList jobs={data.jobs} />}</div>;
};

export default Jobs;
