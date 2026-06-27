import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden px-4 pb-8 pt-14"
      style={{
        background: "#070A10",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(212,255,0,0.2), rgba(165,204,255,0.15), transparent)"
      }} aria-hidden="true" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-48 w-96 -translate-y-1/2 rounded-full" style={{
        background: "radial-gradient(circle, rgba(212,255,0,0.04) 0%, transparent 70%)",
      }} aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand column */}
          <div className="max-w-sm">
            <Link to="/" className="group inline-flex items-center gap-0 text-xl font-black tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  color: "#D4FF00",
                  letterSpacing: "0.04em",
                  textShadow: "0 0 14px rgba(212,255,0,0.4)",
                  transition: "text-shadow 0.3s",
                }}
              >
                React
              </span>
              <span className="text-white">Jobs</span>
            </Link>
            <p className="mt-4 text-sm leading-7" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
              A clean job platform for developers and teams, built to keep discovery fast, focused, and polished.
            </p>

            {/* Accent divider */}
            <div className="mt-6 h-px w-16 rounded-full" style={{
              background: "linear-gradient(90deg, #D4FF00, transparent)"
            }} />
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-3 gap-8 text-sm lg:min-w-[28rem]">
            {[
              {
                heading: "Navigate",
                links: [
                  { to: "/",        label: "Home"     },
                  { to: "/jobs",    label: "Jobs"      },
                  { to: "/add-job", label: "Add Job"   },
                ],
              },
              {
                heading: "Explore",
                links: [
                  { to: "/about",   label: "About"        },
                  { to: "/jobs",    label: "Browse Roles"  },
                  { to: "/add-job", label: "Post a Job"    },
                ],
              },
              {
                heading: "Contact",
                isStatic: true,
                items: ["hello@reactjobs.dev", "Remote-first platform", "Built for hiring flow"],
              },
            ].map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white" style={{ fontFamily: "var(--font-body)" }}>
                  {col.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.isStatic
                    ? col.items.map((item) => (
                        <li key={item}>
                          <span style={{ color: "#374151", fontFamily: "var(--font-body)" }}>{item}</span>
                        </li>
                      ))
                    : col.links.map(({ to, label }) => (
                        <li key={to}>
                          <Link
                            to={to}
                            className="group relative inline-block transition-colors duration-200 hover:text-[#D4FF00]"
                            style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}
                          >
                            {label}
                            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#D4FF00] transition-all duration-300 group-hover:w-full" />
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ color: "#1F2937", fontFamily: "var(--font-body)" }}>
            <p>© 2026 React Jobs. Crafted with a luminous glass UI.</p>
            <p>Fast discovery for developers and employers.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
