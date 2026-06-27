import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import developerVideo from "../assets/pika-1b76bd74-cb35-4dd8-84a1-a8e64932075e.mp4";
import employerVideo from "../assets/pika-25722ff6-c137-486e-ad5b-056ba3375306.mp4";

const BriefcaseIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ color: "#A5CCFF" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const UsersIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ color: "#D4FF00" }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const AudienceCard = ({ video, icon, title, body, to, action, accentColor, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;
    const rect = tiltRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -5;
    const rotateY = ((x - cx) / cx) * 5;
    tiltRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative min-h-[24rem] overflow-hidden rounded-[2rem] cursor-pointer"
        style={{
          background: "#0A0E16",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 24px 60px -30px rgba(0,0,0,0.8)",
          transition: "transform 0.18s ease, box-shadow 0.4s ease, border-color 0.4s ease",
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => {
          if (tiltRef.current) {
            tiltRef.current.style.borderColor = `${accentColor}30`;
            tiltRef.current.style.boxShadow = `0 32px 80px -30px rgba(0,0,0,0.9), 0 0 0 1px ${accentColor}25, 0 0 60px -20px ${accentColor}20`;
          }
        }}
      >
        {/* Video BG */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
          style={{ opacity: 0.35, filter: "saturate(1.5)", transition: "opacity 0.5s ease" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(140deg, rgba(10,14,22,0.97) 0%, rgba(10,14,22,0.78) 50%, rgba(10,14,22,0.5) 100%)"
        }} />
        {/* Accent bottom glow */}
        <div className="absolute inset-x-10 bottom-0 h-20 blur-3xl transition-opacity duration-500 group-hover:opacity-70 opacity-30" style={{
          background: `radial-gradient(ellipse at bottom, ${accentColor}88 0%, transparent 70%)`
        }} aria-hidden="true" />

        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
          background: `linear-gradient(135deg, transparent 40%, ${accentColor}06 60%, transparent 80%)`,
          backgroundSize: "200% 200%",
          animation: "shimmer 2s ease-in-out infinite",
        }} />

        {/* Content */}
        <div className="relative flex h-full min-h-[24rem] flex-col justify-between rounded-[calc(2rem-1px)] p-7 sm:p-9">
          <div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)" }}>
              {icon}
            </div>
            <h2
              className="mt-7 tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 700 }}
            >
              {title}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7" style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}>
              {body}
            </p>
          </div>

          <Link
            to={to}
            className="group mt-8 inline-flex w-fit items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid rgba(255,255,255,0.12)`,
              color: "#fff",
              fontFamily: "var(--font-body)",
            }}
          >
            {action}
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const HomeCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 sm:py-20" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "rgba(212,255,0,0.7)", fontFamily: "var(--font-body)" }}>
            Who's this for
          </p>
          <h2
            className="mt-3"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 700, color: "#F8FAFC" }}
          >
            Built for both sides of the table
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AudienceCard
            video={developerVideo}
            icon={<BriefcaseIcon />}
            title="For Developers"
            body="Browse roles through a sharper, cinematic board built for fast scanning and confident choices."
            to="/jobs"
            action="Browse Jobs"
            accentColor="#A5CCFF"
            delay={0.1}
          />
          <AudienceCard
            video={employerVideo}
            icon={<UsersIcon />}
            title="For Employers"
            body="Post polished listings that feel premium from the first glance and guide candidates to the right details."
            to="/add-job"
            action="Post a Job"
            accentColor="#D4FF00"
            delay={0.22}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
