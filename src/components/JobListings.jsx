import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import JobListing from "./JobListing";
import boardVideo from "../assets/pika-7bccccd0-3816-40f8-a7d5-7e87e63c1350.mp4";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden:  { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const JobListings = ({ jobs = [], isHome = false }) => {
  const visibleJobs = isHome ? jobs.slice(0, 3) : jobs;
  const headerRef   = useRef(null);
  const gridRef     = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView   = useInView(gridRef,   { once: true, margin: "-40px" });

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: "var(--bg)" }}>
      {/* Background video — faint */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={boardVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
        style={{ opacity: 0.12, filter: "saturate(1.4)", mixBlendMode: "screen" }}
      />

      {/* Top/bottom fades */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24" style={{
        background: "linear-gradient(to bottom, var(--bg), transparent)"
      }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" style={{
        background: "linear-gradient(to top, var(--bg), transparent)"
      }} />

      {/* Central ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full" style={{
        background: "radial-gradient(ellipse at center, rgba(165,204,255,0.08) 0%, transparent 70%)",
        filter: "blur(2px)",
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "rgba(212,255,0,0.7)", fontFamily: "var(--font-body)" }}
            >
              {isHome ? "Fresh picks" : "Open roles"}
            </p>
            <h2
              className="mt-3"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#F8FAFC",
                letterSpacing: "0.04em",
                textShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              {isHome ? "Recent Jobs" : "Browse Jobs"}
            </h2>
          </div>
          <p
            className="max-w-xs text-sm leading-6 sm:text-right"
            style={{ color: "#64748B", fontFamily: "var(--font-body)" }}
          >
            Explore React roles with clear pay, location, and company details.
          </p>
        </motion.div>

        {/* Job cards grid with stagger */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleJobs.map((job) => (
            <motion.div key={job.id} variants={cardVariants}>
              <JobListing job={job} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JobListings;
