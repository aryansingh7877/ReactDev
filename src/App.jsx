import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import jobsData from "./jobs.json";
import AddJobPage from "./pages/AddJobPage";
import AboutPage from "./pages/AboutPage";
import EditJobPage from "./pages/EditJobPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

/* Page transition variants */
const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } },
};

/* Animated page wrapper */
const PageWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const [jobs, setJobs] = useState(jobsData.jobs ?? jobsData);
  const navigate = useNavigate();
  const location = useLocation();

  const addJobSubmit = (newJob) => {
    const nextJob = {
      ...newJob,
      id: crypto.randomUUID(),
    };
    setJobs((currentJobs) => [nextJob, ...currentJobs]);
  };

  const updateJobSubmit = (updatedJob) => {
    setJobs((currentJobs) =>
      currentJobs.map((job) => (String(job.id) === String(updatedJob.id) ? updatedJob : job))
    );
  };

  const deleteJob = (jobId) => {
    setJobs((currentJobs) => currentJobs.filter((job) => String(job.id) !== String(jobId)));
    navigate("/jobs");
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-body" style={{ background: 'var(--bg)', color: '#F8FAFC' }}>
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"          element={<PageWrapper><HomePage jobs={jobs} /></PageWrapper>} />
            <Route path="/jobs"      element={<PageWrapper><JobsPage jobs={jobs} /></PageWrapper>} />
            <Route path="/jobs/:id"  element={<PageWrapper><JobPage jobs={jobs} deleteJob={deleteJob} /></PageWrapper>} />
            <Route path="/add-job"   element={<PageWrapper><AddJobPage addJobSubmit={addJobSubmit} /></PageWrapper>} />
            <Route path="/about"     element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route
              path="/edit-job/:id"
              element={<PageWrapper><EditJobPage jobs={jobs} updateJobSubmit={updateJobSubmit} /></PageWrapper>}
            />
            <Route path="*"          element={<PageWrapper><NotFoundPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
