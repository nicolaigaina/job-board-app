import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../graphql/Queries";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorBanner from "../../components/ErrorBanner";

const Jobs = () => {
  const { data, error, loading } = useQuery(LOAD_JOBS);
  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorBanner message="There was an error loading jobs" />;

  return (
    <div>
      <h1>Jobs</h1>
      {data.jobs.length > 0 && data.jobs.map((job) => <h1>{job.title}</h1>)}
    </div>
  );
};

export default Jobs;
