import { useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Icons ── */
const DollarIcon = () => (
  <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);
const MapPinIcon = () => (
  <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

/* Company initial avatar */
const CompanyAvatar = ({ name }) => {
  const initial = name?.trim()?.[0]?.toUpperCase() ?? "?";
  return (
    <div
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-black"
      style={{
        background: "linear-gradient(135deg, rgba(212,255,0,0.12), rgba(165,204,255,0.08))",
        border: "1px solid rgba(212,255,0,0.2)",
        color: "#D4FF00",
        fontFamily: "var(--font-heading)",
        textShadow: "0 0 12px rgba(212,255,0,0.5)",
      }}
    >
      {initial}
    </div>
  );
};

const JobCard = ({ job }) => {
  if (!job) return null;

  const cardRef  = useRef(null);
  const [tilted, setTilted] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -4;
    const rotateY = ((x - cx) / cx) * 4;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
    setTilted(false);
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setTilted(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative isolate flex min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] sm:min-h-[28rem]"
      style={{
        background: "linear-gradient(145deg, #0D1220 0%, #080C15 55%, #050810 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 20px 50px -20px rgba(0,0,0,0.8)",
        transition: "transform 0.18s ease, box-shadow 0.4s ease, border-color 0.4s ease",
        transformStyle: "preserve-3d",
        ...(tilted ? {
          borderColor: "rgba(212,255,0,0.2)",
          boxShadow: "0 32px 70px -24px rgba(212,255,0,0.18), 0 0 0 1px rgba(212,255,0,0.1)",
        } : {}),
      }}
    >
      {/* Bottom ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-4 bottom-0 h-24 rounded-b-[1.75rem] blur-2xl transition-all duration-500"
        style={{
          background: tilted
            ? "radial-gradient(ellipse at bottom, rgba(212,255,0,0.4) 0%, rgba(165,204,255,0.2) 50%, transparent 80%)"
            : "radial-gradient(ellipse at bottom, rgba(80,120,255,0.5) 0%, transparent 70%)",
          opacity: tilted ? 0.75 : 0.45,
        }}
        aria-hidden="true"
      />

      {/* Shimmer overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, transparent 30%, rgba(212,255,0,0.03) 55%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Gradient border top line */}
      <div
        className="absolute inset-x-0 top-0 h-px transition-all duration-500"
        style={{
          background: tilted
            ? "linear-gradient(90deg, transparent, rgba(212,255,0,0.6), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Card content */}
      <div className="relative flex w-full flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">

        {/* Header row */}
        <div className="mb-6 flex items-start justify-between gap-3">
          <CompanyAvatar name={job.company?.name ?? job.title} />

          {/* Type badge */}
          <span
            className="rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em]"
            style={{
              background: "rgba(212,255,0,0.08)",
              border: "1px solid rgba(212,255,0,0.2)",
              color: "#D4FF00",
              fontFamily: "var(--font-body)",
              textShadow: "0 0 8px rgba(212,255,0,0.35)",
            }}
          >
            {job.type}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col">
          <h3
            className="text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#D4FF00] sm:text-2xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {job.title}
          </h3>

          {job.company?.name && (
            <p className="mt-1.5 text-xs font-medium" style={{ color: "#A5CCFF", fontFamily: "var(--font-body)" }}>
              {job.company.name}
            </p>
          )}

          <p
            className="mt-4 line-clamp-4 text-sm leading-6"
            style={{ color: "#8B95A8", fontFamily: "var(--font-body)" }}
          >
            {job.description}
          </p>

          {/* Meta pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ background: "rgba(165,204,255,0.07)", border: "1px solid rgba(165,204,255,0.15)", color: "#A5CCFF", fontFamily: "var(--font-body)" }}
            >
              <DollarIcon />
              {job.salary}
            </span>
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8", fontFamily: "var(--font-body)" }}
            >
              <MapPinIcon />
              {job.location}
            </span>
          </div>

          {/* CTA */}
          <Link
            to={`/jobs/${job.id}`}
            className="group mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold transition-colors duration-200 hover:text-[#D4FF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00]/50"
            style={{ color: "#fff", fontFamily: "var(--font-body)" }}
          >
            View Role
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
