import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import heroVideo from "../assets/Imagine_an_infinite_futuristic_highway_suspended_in_space.____Instead_of_cars,_glowing_JavaScript,_R_seed569560492 (1).mp4";
import orbitVideo from "../assets/A_futuristic_React_developer_workspace_with_floating_holographic_job_cards,_glowing_React_and_JavaSc_seed3326320420.mp4";

/* Animation variants */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const cardVariants = {
  hidden:  { opacity: 0, x: 32, scale: 0.96 },
  visible: { opacity: 1, x: 0,  scale: 1,    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 } },
};

/* Floating particle dots */
const Particles = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {[
      { cx: "12%", cy: "22%", r: 2,   delay: 0,   dur: 5 },
      { cx: "88%", cy: "18%", r: 1.5, delay: 1.2, dur: 7 },
      { cx: "72%", cy: "76%", r: 2.5, delay: 0.6, dur: 6 },
      { cx: "25%", cy: "80%", r: 1.5, delay: 2,   dur: 8 },
      { cx: "55%", cy: "10%", r: 1,   delay: 0.3, dur: 5.5 },
      { cx: "6%",  cy: "55%", r: 2,   delay: 1.5, dur: 6.5 },
    ].map((p, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: p.cx, top: p.cy,
          width: p.r * 2, height: p.r * 2,
          background: i % 2 === 0 ? "rgba(212,255,0,0.55)" : "rgba(165,204,255,0.45)",
          boxShadow: i % 2 === 0
            ? `0 0 ${p.r * 6}px rgba(212,255,0,0.6)`
            : `0 0 ${p.r * 6}px rgba(165,204,255,0.5)`,
          animation: `floatY ${p.dur}s ${p.delay}s ease-in-out infinite`,
        }}
      />
    ))}
  </div>
);

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.playbackRate = 0.75; // slow cinematic playback
    }
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4.25rem)] overflow-hidden vignette" style={{ background: "#050814" }}>

      {/* ── Background video ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay muted loop playsInline preload="metadata"
        aria-hidden="true"
        style={{ opacity: 0.5, filter: "saturate(1.4) brightness(0.85)" }}
      />

      {/* ── Multi-layer overlay system ── */}
      {/* Dark vignette sides */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, rgba(5,8,20,0.96) 0%, rgba(5,8,20,0.72) 46%, rgba(5,8,20,0.45) 100%)"
      }} aria-hidden="true" />
      {/* Top-bottom fade */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(5,8,20,0.3) 0%, transparent 30%, transparent 70%, rgba(5,8,20,0.9) 100%)"
      }} aria-hidden="true" />
      {/* Accent glow bloom */}
      <div className="absolute -left-32 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-30" style={{
        background: "radial-gradient(circle, rgba(212,255,0,0.15) 0%, transparent 70%)",
        filter: "blur(2px)",
        animation: "orbPulse 5s ease-in-out infinite",
      }} aria-hidden="true" />
      <div className="absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full opacity-25" style={{
        background: "radial-gradient(circle, rgba(165,204,255,0.2) 0%, transparent 70%)",
        animation: "orbPulse 7s ease-in-out infinite reverse",
      }} aria-hidden="true" />

      {/* ── Bottom fade into page ── */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{
        background: "linear-gradient(to top, var(--bg), transparent)"
      }} aria-hidden="true" />

      {/* ── Floating particles ── */}
      {!shouldReduceMotion && <Particles />}

      {/* ── Content grid ── */}
      <div className="relative mx-auto grid min-h-[calc(100vh-4.25rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_30rem] lg:px-8 lg:py-20">

        {/* Left — hero copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow label */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#D4FF00] opacity-70" />
            <p
              className="text-xs font-black uppercase tracking-[0.38em]"
              style={{ color: "#D4FF00", fontFamily: "var(--font-body)" }}
            >
              React Careers · Cinematic
            </p>
          </motion.div>

          {/* H1 — Doto pixel font */}
          <motion.h1 variants={itemVariants} className="mt-5 leading-[0.92] tracking-tight">
            <span
              className="block text-white pixel-glow-white"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                letterSpacing: "0.03em",
                textShadow: "0 0 30px rgba(255,255,255,0.2)",
              }}
            >
              Become a
            </span>
            <span
              className="block pixel-glow"
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "clamp(3.4rem, 9.5vw, 6.5rem)",
                letterSpacing: "0.04em",
                color: "#D4FF00",
              }}
            >
              React Dev
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: "#B8C4D8", fontFamily: "var(--font-body)" }}
          >
            Find sharp React roles inside a job board that feels fast, premium, and a little impossible — in the best way.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/jobs"
              className="btn-primary group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-[#0F1115] transition-all duration-300 hover:-translate-y-1 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #D4FF00 0%, #B8E800 100%)",
                boxShadow: "0 8px 32px rgba(212,255,0,0.35), 0 2px 8px rgba(0,0,0,0.4)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              <span className="relative z-10">Browse Jobs</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              to="/add-job"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(12px)",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
              }}
            >
              Post a Job
            </Link>
          </motion.div>

          {/* Mini stats row */}
          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6 divide-x divide-white/10">
            {[["100+","Open Roles"],["Remote","& Hybrid"],["React","Focused"]].map(([num, label]) => (
              <div key={label} className="pl-6 first:pl-0">
                <p
                  className="text-xl font-black leading-none"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    color: "#D4FF00",
                    textShadow: "0 0 12px rgba(212,255,0,0.5)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {num}
                </p>
                <p className="mt-1 text-xs text-[#64748B]" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — orbit video card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="relative hidden lg:block"
          style={{ animation: "floatYSlow 7s ease-in-out infinite" }}
        >
          {/* Glow bloom behind card */}
          <div className="absolute -inset-8 rounded-[2.5rem] opacity-40" style={{
            background: "radial-gradient(circle at center, rgba(165,204,255,0.3) 0%, transparent 70%)",
            filter: "blur(2px)",
          }} aria-hidden="true" />

          {/* Card outer gradient border */}
          <div
            className="relative overflow-hidden rounded-[2rem] p-[1px]"
            style={{
              background: "linear-gradient(135deg, rgba(165,204,255,0.35), rgba(212,255,0,0.15), rgba(255,255,255,0.05))",
              boxShadow: "0 40px 100px -40px rgba(165,204,255,0.5), 0 0 0 1px rgba(165,204,255,0.1)",
            }}
          >
            <div
              className="relative overflow-hidden rounded-[calc(2rem-1px)]"
              style={{ height: "32rem", background: "#020408" }}
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={orbitVideo}
                autoPlay muted loop playsInline preload="metadata"
                aria-hidden="true"
                style={{ opacity: 0.88, filter: "saturate(1.3)" }}
              />
              {/* Scrim */}
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(2,4,8,0.95) 0%, rgba(2,4,8,0.2) 40%, rgba(2,4,8,0.45) 100%)"
              }} />

              {/* Card content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p
                  className="text-xs font-black uppercase tracking-[0.3em]"
                  style={{ color: "#D4FF00", fontFamily: "var(--font-body)", textShadow: "0 0 10px rgba(212,255,0,0.5)" }}
                >
                  Live Signal
                </p>
                <h2
                  className="mt-3 leading-tight text-white"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "1.75rem",
                    letterSpacing: "0.04em",
                    textShadow: "0 0 20px rgba(255,255,255,0.2)",
                  }}
                >
                  Roles orbit your stack.
                </h2>
                <p className="mt-3 text-sm leading-6" style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}>
                  Frontend, full-stack, remote, startup, studio, and product teams in one luminous flow.
                </p>

                {/* Animated accent line */}
                <div className="mt-5 h-px w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, #D4FF00, transparent)",
                      animation: "shimmer 2.5s ease-in-out infinite",
                      backgroundSize: "200% 100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
