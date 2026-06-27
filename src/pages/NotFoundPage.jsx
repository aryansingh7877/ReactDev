import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <section
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,255,0,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <p
          className="pixel-glow"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "clamp(5rem, 18vw, 9rem)",
            fontWeight: 700,
            color: "#D4FF00",
            letterSpacing: "0.06em",
            lineHeight: 1,
          }}
        >
          404
        </p>

        <h1
          className="mt-4 text-2xl font-bold text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Page Not Found
        </h1>
        <p className="mt-3 text-sm" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
          This page doesn't exist. Maybe the role was already filled?
        </p>

        <Link
          to="/"
          className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-[#0F1115] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(212,255,0,0.5)] active:scale-95"
          style={{
            background: "linear-gradient(135deg, #D4FF00, #B8E800)",
            boxShadow: "0 6px 24px rgba(212,255,0,0.25)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
          }}
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFoundPage;
