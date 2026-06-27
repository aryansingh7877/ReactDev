import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = ({ jobs = [] }) => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings jobs={jobs} isHome={true} />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
