import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";

/* ── Icons ── */
const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);
const PencilIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125 16.875 4.5M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);
const TrashIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166M19.228 5.79 18.16 19.673A2.25 2.25 0 0 1 15.916 21H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .563c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

/* Company initial avatar */
const CompanyAvatar = ({ name }) => {
  const initial = name?.trim()?.[0]?.toUpperCase() ?? "?";
  return (
    <div
      className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-lg font-black"
      style={{
        background: "linear-gradient(135deg, rgba(212,255,0,0.14), rgba(165,204,255,0.08))",
        border: "1px solid rgba(212,255,0,0.25)",
        color: "#D4FF00",
        fontFamily: "var(--font-heading)",
        textShadow: "0 0 14px rgba(212,255,0,0.5)",
        boxShadow: "0 0 20px rgba(212,255,0,0.08)",
      }}
    >
      {initial}
    </div>
  );
};

const JobPage = ({ jobs = [], deleteJob }) => {
  const { id } = useParams();
  const job    = jobs.find((item) => String(item.id) === String(id));
  const mainRef = useRef(null);
  const inView  = useInView(mainRef, { once: true });

  if (!job) {
    return (
      <section className="flex min-h-[24rem] flex-col items-center justify-center px-4 text-center" style={{ background: "var(--bg)" }}>
        <h1 className="mb-4 text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Job Not Found</h1>
        <Link to="/jobs" className="font-semibold" style={{ color: "#D4FF00" }}>Back to Jobs</Link>
      </section>
    );
  }

  const onDeleteClick = (jobId) => {
    const confirmed = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmed) return;
    deleteJob(jobId);
  };

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8" style={{ background: "var(--bg)" }}>

      {/* Top ambient glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 h-64 w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{
        background: "radial-gradient(ellipse, rgba(165,204,255,0.06) 0%, transparent 70%)",
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link
            to="/jobs"
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:bg-white/5"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#D4FF00", fontFamily: "var(--font-body)" }}
          >
            <ArrowLeftIcon />
            Back to Job Listings
          </Link>
        </motion.div>

        {/* Content grid */}
        <motion.div
          ref={mainRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]"
        >
          {/* Main column */}
          <main className="space-y-6">

            {/* Hero banner card */}
            <div
              className="relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8"
              style={{
                background: "linear-gradient(145deg, #0D1220 0%, #080C15 55%, #050810 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 60px -30px rgba(0,0,0,0.8)",
              }}
            >
              {/* Bottom glow */}
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-20 blur-2xl" style={{
                background: "radial-gradient(ellipse at bottom, rgba(165,204,255,0.4) 0%, transparent 70%)"
              }} aria-hidden="true" />
              {/* Top border line */}
              <div className="absolute inset-x-0 top-0 h-px" style={{
                background: "linear-gradient(90deg, transparent, rgba(212,255,0,0.4), transparent)"
              }} aria-hidden="true" />

              <div className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-center gap-4">
                    <CompanyAvatar name={job.company?.name ?? job.title} />
                    <div>
                      <span
                        className="inline-block rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]"
                        style={{ background: "rgba(212,255,0,0.1)", border: "1px solid rgba(212,255,0,0.22)", color: "#D4FF00", fontFamily: "var(--font-body)", textShadow: "0 0 8px rgba(212,255,0,0.4)" }}
                      >
                        {job.type}
                      </span>
                      {job.company?.name && (
                        <p className="mt-1.5 text-sm font-medium" style={{ color: "#A5CCFF", fontFamily: "var(--font-body)" }}>
                          {job.company.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <span
                    className="w-fit rounded-full px-3 py-1.5 text-sm font-semibold"
                    style={{ background: "rgba(165,204,255,0.08)", border: "1px solid rgba(165,204,255,0.18)", color: "#A5CCFF", fontFamily: "var(--font-body)" }}
                  >
                    {job.salary}
                  </span>
                </div>

                <h1
                  className="mt-6 leading-tight text-white"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    fontWeight: 700,
                  }}
                >
                  {job.title}
                </h1>

                <div className="mt-4 flex items-center gap-2" style={{ color: "#64748B" }}>
                  <MapPinIcon />
                  <p className="truncate text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{job.location}</p>
                </div>
              </div>
            </div>

            {/* Description card */}
            <div
              className="rounded-[1.75rem] p-6 sm:p-8"
              style={{
                background: "rgba(17,21,32,0.8)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 16px 50px -24px rgba(0,0,0,0.7)",
              }}
            >
              <h2
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-heading)", color: "#D4FF00" }}
              >
                Job Description
              </h2>
              <p className="mt-5 text-sm leading-7 sm:text-base" style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}>
                {job.description}
              </p>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-[5.5rem] lg:self-start">

            {/* Company Info */}
            <div
              className="rounded-[1.75rem] p-5 sm:p-6"
              style={{
                background: "rgba(17,21,32,0.85)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 16px 50px -24px rgba(0,0,0,0.7)",
              }}
            >
              <h2 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Company Info</h2>
              <h3 className="mt-5 text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {job.company?.name ?? "Company"}
              </h3>
              <p className="mt-3 text-sm leading-6" style={{ color: "#64748B", fontFamily: "var(--font-body)" }}>
                {job.company?.description ?? "No company description added."}
              </p>

              <div className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                {[
                  { label: "Email", value: job.company?.contactEmail ?? "Not provided" },
                  { label: "Phone", value: job.company?.contactPhone ?? "Not provided" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em]" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>{label}</p>
                    <p
                      className="mt-2 break-words rounded-xl px-3 py-2.5 text-sm font-medium text-white"
                      style={{ background: "rgba(255,255,255,0.04)", fontFamily: "var(--font-body)" }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Manage Job */}
            <div
              className="rounded-[1.75rem] p-5 sm:p-6"
              style={{
                background: "rgba(17,21,32,0.85)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h2 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Manage Job</h2>
              <div className="mt-5 grid gap-3">
                <Link
                  to={`/edit-job/${job.id}`}
                  className="btn-primary inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-[#0F1115] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #D4FF00, #B8E800)",
                    boxShadow: "0 4px 18px rgba(212,255,0,0.2)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                  }}
                >
                  <PencilIcon /> Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-500/15 active:scale-95"
                  style={{
                    border: "1px solid rgba(239,68,68,0.25)",
                    background: "rgba(239,68,68,0.08)",
                    color: "#FCA5A5",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <TrashIcon /> Delete Job
                </button>
              </div>
            </div>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default JobPage;
