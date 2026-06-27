import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "/",        label: "Home"    },
  { to: "/jobs",    label: "Jobs"    },
  { to: "/add-job", label: "Post"    },
  { to: "/about",   label: "About"   },
];

const linkClass = ({ isActive }) =>
  [
    "relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
    "font-body",
    isActive
      ? "text-[#D4FF00]"
      : "text-[#94A3B8] hover:text-white",
  ].join(" ");

const Navbar = () => {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [hidden, setHidden]           = useState(false);
  const lastScrollY                   = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta    = currentY - lastScrollY.current;

      setScrolled(currentY > 20);
      // Hide on fast scroll-down, reveal on scroll-up
      if (delta > 6 && currentY > 80)  setHidden(true);
      if (delta < -4)                  setHidden(false);

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="sticky top-0 z-50"
    >
      {/* Glass bar */}
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(15, 17, 21, 0.92)"
            : "rgba(15, 17, 21, 0.6)",
          backdropFilter: scrolled ? "blur(24px) saturate(200%)" : "blur(12px)",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(200%)" : "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(212,255,0,0.08)"
            : "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-0 text-xl font-black tracking-tight sm:text-2xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span
                className="transition-all duration-300 group-hover:opacity-90"
                style={{
                  color: "#D4FF00",
                  fontFamily: "var(--font-pixel)",
                  letterSpacing: "0.04em",
                  textShadow: "0 0 16px rgba(212,255,0,0.45)",
                }}
              >
                React
              </span>
              <span className="text-white">Jobs</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-2 md:flex">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full"
                          style={{ background: "rgba(212,255,0,0.1)", border: "1px solid rgba(212,255,0,0.2)" }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="flex flex-col gap-[5px]">
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div
                className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-3"
                style={{
                  background: "rgba(20, 24, 32, 0.95)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {NAV_LINKS.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={closeMenu}
                    className={linkClass}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
