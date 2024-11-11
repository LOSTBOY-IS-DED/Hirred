// Page for our job listings

import { getJobs } from "@/api/apiJobs";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});

  useEffect(() => {
    fnJobs();
  }, []);

  return <div>Job listing </div>;
};

export default JobListing;
