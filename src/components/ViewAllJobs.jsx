import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import ctaVideo from "../assets/pika-a3354d28-da62-4b2c-ad35-243b24e3476b.mp4";

const ArrowRightIcon = () => (
  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ViewAllJobs = () => {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-4 pb-20 pt-4 sm:pb-24" style={{ background: "var(--bg)" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-5xl"
      >
        {/* Outer gradient border */}
        <div
          className="overflow-hidden rounded-[2rem] p-[1px] animate-border-glow"
          style={{
            background: "linear-gradient(135deg, rgba(212,255,0,0.35), rgba(165,204,255,0.15), rgba(255,255,255,0.04), rgba(212,255,0,0.2))",
          }}
        >
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] px-6 py-10 sm:px-10 sm:py-12" style={{ background: "#07090F" }}>
            {/* Video BG */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={ctaVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
              style={{ opacity: 0.3, filter: "saturate(1.5)", mixBlendMode: "screen" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(90deg, rgba(7,9,15,0.96) 0%, rgba(7,9,15,0.78) 50%, rgba(7,9,15,0.5) 100%)"
            }} />

            {/* Accent glow */}
            <div className="pointer-events-none absolute inset-x-16 bottom-0 h-24 blur-3xl" style={{
              background: "radial-gradient(ellipse at bottom, rgba(212,255,0,0.3) 0%, transparent 70%)"
            }} aria-hidden="true" />

            {/* Shimmer sweep */}
            <div className="pointer-events-none absolute inset-0" style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(212,255,0,0.04) 55%, transparent 70%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }} aria-hidden="true" />

            {/* Content */}
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p
                  className="text-xs font-black uppercase tracking-[0.32em]"
                  style={{ color: "#D4FF00", fontFamily: "var(--font-body)", textShadow: "0 0 10px rgba(212,255,0,0.5)" }}
                >
                  Explore more
                </p>
                <h2
                  className="mt-3 leading-tight text-white"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textShadow: "0 0 20px rgba(255,255,255,0.12)",
                  }}
                >
                  Ready for the full board?
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6" style={{ color: "#64748B", fontFamily: "var(--font-body)" }}>
                  View every live role, compare details, and jump straight into the position that fits.
                </p>
              </div>

              <Link
                to="/jobs"
                className="group relative inline-flex shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-[#0F1115] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,255,0,0.5)] active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #D4FF00, #B8E800)",
                  boxShadow: "0 8px 30px rgba(212,255,0,0.3)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                }}
              >
                <span className="relative z-10">View All Jobs</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ViewAllJobs;
