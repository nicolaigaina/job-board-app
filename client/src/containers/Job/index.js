import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { LOAD_JOB } from "../../graphql/Queries";
import LoadingIndicator from "../../components/LoadingIndicator";
import ErrorBanner from "../../components/ErrorBanner";
import JobInfo from "../../components/JobInfo";

const Job = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(LOAD_JOB, {
    variables: { id },
  });
  if (loading) return <LoadingIndicator />;
  if (error)
    return <ErrorBanner message="There was an error loading the job" />;

  return <>{data.job && <JobInfo job={data.job} />}</>;
};

export default Job;
