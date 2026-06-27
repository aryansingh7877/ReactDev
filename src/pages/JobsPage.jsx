import JobListings from "../components/JobListings";

const JobsPage = ({ jobs = [] }) => {
  return <JobListings jobs={jobs} />;
};
export default JobsPage;
