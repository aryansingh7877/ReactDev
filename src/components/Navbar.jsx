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
    "relative rounded-full px-4.5 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-300",
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

      setScrolled(currentY > 30);
      
      // Smart hide/show
      if (delta > 8 && currentY > 100)  setHidden(true);
      if (delta < -5)                  setHidden(false);

      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -100 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none"
    >
      {/* Floating Island Dock */}
      <motion.nav
        className="w-full max-w-4xl rounded-full p-[1px] transition-all duration-500 pointer-events-auto"
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(212,255,0,0.15), rgba(255,255,255,0.05), rgba(165,204,255,0.1))"
            : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
          boxShadow: scrolled 
            ? "0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(212,255,0,0.05)" 
            : "0 10px 30px -10px rgba(0,0,0,0.5)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-full px-4 sm:px-6 py-2 transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(11, 15, 23, 0.88)"
              : "rgba(11, 15, 23, 0.65)",
            backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px)",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px)",
          }}
        >
          {/* Subtle noise inside the dock */}
          <div className="noise-texture absolute inset-0 opacity-10 pointer-events-none" />

          <div className="relative flex items-center justify-between h-10 sm:h-12">
            
            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-0 text-lg sm:text-xl font-black tracking-tight"
            >
              <span
                className="transition-all duration-300 group-hover:opacity-90"
                style={{
                  color: "#D4FF00",
                  fontFamily: "var(--font-pixel)",
                  letterSpacing: "0.02em",
                  textShadow: "0 0 16px rgba(212,255,0,0.45)",
                }}
              >
                React
              </span>
              <span className="text-white font-display">Jobs</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10">{label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-dock-pill"
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "rgba(212,255,0,0.08)",
                            border: "1px solid rgba(212,255,0,0.18)",
                            boxShadow: "0 0 15px -3px rgba(212,255,0,0.15)",
                          }}
                          transition={{ type: "spring", stiffness: 350, damping: 28 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/4 text-white transition hover:bg-white/10 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="flex flex-col gap-[4px]">
                <span className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-[5.5px] rotate-45" : ""}`} />
                <span className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] w-4 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>

          {/* Mobile dropdown menu (integrated inside the floating island) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden md:hidden"
              >
                <div
                  className="mt-2 mb-2 flex flex-col gap-1.5 rounded-2xl p-2"
                  style={{
                    background: "rgba(15, 17, 21, 0.95)",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
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
    </motion.div>
  );
};

export default Navbar;
