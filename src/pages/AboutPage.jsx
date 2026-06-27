import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stackItems = [
  { name: "React",         detail: "Component-based UI and stateful interactions." },
  { name: "React Router",  detail: "Page navigation and job detail routes." },
  { name: "Tailwind CSS",  detail: "Responsive spacing, layout, and styling." },
  { name: "Vite",          detail: "Fast local development and production builds." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 20, x: -8 },
  visible: { opacity: 1, y: 0,  x: 0,  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

const AboutPage = () => {
  const headerRef = useRef(null);
  const stackRef  = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const stackInView  = useInView(stackRef,  { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" style={{ background: "var(--bg)" }}>

      {/* Ambient orb */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full opacity-20" style={{
        background: "radial-gradient(circle, rgba(212,255,0,0.15) 0%, transparent 70%)",
        filter: "blur(2px)",
      }} aria-hidden="true" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full opacity-15" style={{
        background: "radial-gradient(circle, rgba(165,204,255,0.18) 0%, transparent 70%)",
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">

        {/* Main card */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 32 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[2rem]"
          style={{
            background: "rgba(17,21,32,0.85)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 30px 90px -40px rgba(0,0,0,0.8)",
          }}
        >
          {/* Top gradient border */}
          <div className="h-px w-full" style={{
            background: "linear-gradient(90deg, transparent, rgba(212,255,0,0.4), rgba(165,204,255,0.2), transparent)"
          }} />

          <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Left content */}
            <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <p
                className="text-xs font-bold uppercase tracking-[0.32em]"
                style={{ color: "rgba(212,255,0,0.7)", fontFamily: "var(--font-body)" }}
              >
                About the project
              </p>

              <h1
                className="mt-4 leading-tight text-white"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textShadow: "0 0 30px rgba(255,255,255,0.1)",
                }}
              >
                About React Jobs
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 sm:text-base" style={{ color: "#94A3B8", fontFamily: "var(--font-body)" }}>
                React Jobs is a lightweight job platform built to feel polished, fast, and easy to scan. It lets developers browse roles, view job details, and move between pages without friction, while employers can add new opportunities in a clean form flow.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 sm:text-base" style={{ color: "#64748B", fontFamily: "var(--font-body)" }}>
                The Luminous Craft direction uses React, React Router, Tailwind CSS, and Vite to keep the app responsive and lightweight. The glassy panels, lime accents, and dark surfaces create a premium aesthetic without getting in the way of the content.
              </p>

              {/* Info cards */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Why this design",
                    body: "The goal was to create a developer-first interface that feels calm, trustworthy, and modern instead of looking like a default starter template.",
                  },
                  {
                    title: "What users get",
                    body: "A fast job-browsing experience, readable job cards, a clear add-job flow, and simple navigation that works across mobile and desktop.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl p-5 transition-all duration-300 hover:border-[rgba(212,255,0,0.15)]"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <h2
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{ color: "rgba(212,255,0,0.7)", fontFamily: "var(--font-body)" }}
                    >
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6" style={{ color: "#64748B", fontFamily: "var(--font-body)" }}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stack sidebar */}
            <aside
              className="border-t px-7 py-10 sm:px-8 sm:py-12 lg:border-l lg:border-t-0 lg:px-10 lg:py-14"
              style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.015)" }}
            >
              <h2
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Stack used
              </h2>

              <motion.ul
                ref={stackRef}
                variants={containerVariants}
                initial="hidden"
                animate={stackInView ? "visible" : "hidden"}
                className="mt-7 space-y-3"
              >
                {stackItems.map(({ name, detail }) => (
                  <motion.li
                    key={name}
                    variants={itemVariants}
                    className="group flex items-start gap-3 rounded-2xl p-4 transition-all duration-300 hover:border-[rgba(212,255,0,0.12)]"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span
                      className="mt-0.5 h-2 w-2 shrink-0 rounded-full transition-all duration-300 group-hover:shadow-[0_0_8px_rgba(212,255,0,0.6)]"
                      style={{ background: "#D4FF00" }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>{name}</p>
                      <p className="mt-1 text-xs leading-5" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>{detail}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[["4", "Core Tech"], ["100%", "Open Source"], ["60fps", "Animations"]].map(([num, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(212,255,0,0.04)", border: "1px solid rgba(212,255,0,0.1)" }}
                  >
                    <p
                      className="text-2xl font-black leading-none"
                      style={{
                        fontFamily: "var(--font-pixel)",
                        color: "#D4FF00",
                        letterSpacing: "0.04em",
                        textShadow: "0 0 10px rgba(212,255,0,0.45)",
                      }}
                    >
                      {num}
                    </p>
                    <p className="mt-1.5 text-xs" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
