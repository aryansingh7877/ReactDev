import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import formVideo from "../assets/Create_a_premium_abstract_liquid_glass_landscape_with_smooth_flowing_transparent_waves,_layered_crys_seed4060517279.mp4";

/* Shared field + label styles */
const fieldCls =
  "input-premium w-full rounded-xl border bg-white/[0.04] px-4 py-2.5 text-sm text-[#F8FAFC] outline-none placeholder:text-[#374151] font-body";
const fieldStyle = {
  borderColor: "rgba(255,255,255,0.08)",
  fontFamily: "var(--font-body)",
};
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.16em]";
const labelStyle = { color: "#94A3B8", fontFamily: "var(--font-body)" };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const rowVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
};

const AddJobPage = ({ addJobSubmit }) => {
  const [title,              setTitle]              = useState("");
  const [type,               setType]               = useState("Full-Time");
  const [location,           setLocation]           = useState("");
  const [description,        setDescription]        = useState("");
  const [salary,             setSalary]             = useState("Under $50K");
  const [companyName,        setCompanyName]        = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail,       setContactEmail]       = useState("");
  const [contactPhone,       setContactPhone]       = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    addJobSubmit({
      title, type, location, description, salary,
      company: { name: companyName, description: companyDescription, contactEmail, contactPhone },
    });
    navigate("/jobs");
  };

  return (
    <section className="relative min-h-screen overflow-hidden py-10 sm:py-14" style={{ background: "var(--bg)" }}>
      {/* Video BG */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={formVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
        style={{ opacity: 0.15, filter: "saturate(1.5)" }}
      />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(15,17,21,0.92) 0%, rgba(15,17,21,0.78) 50%, rgba(15,17,21,0.96) 100%)"
      }} />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-[36rem] -translate-x-1/2 rounded-full" style={{
        background: "radial-gradient(ellipse, rgba(165,204,255,0.1) 0%, transparent 70%)",
        filter: "blur(2px)",
      }} aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#D4FF00", fontFamily: "var(--font-body)" }}>
            Employer Workspace
          </p>
          <h1
            className="mt-3 leading-tight text-white"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textShadow: "0 0 20px rgba(255,255,255,0.12)",
            }}
          >
            Add a Job
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
            Share a clear role, salary band, and company story so candidates see the opportunity clearly.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="overflow-hidden rounded-2xl"
          style={{
            background: "rgba(17, 21, 32, 0.85)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 24px 80px -28px rgba(0,0,0,0.8)",
          }}
        >
          {/* Card header */}
          <div className="border-b px-6 py-5" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ background: "#D4FF00", boxShadow: "0 0 8px rgba(212,255,0,0.6)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#D4FF00", fontFamily: "var(--font-body)" }}>
                New Listing
              </span>
            </div>
          </div>

          <form onSubmit={submitForm} className="px-6 py-6 sm:px-8 sm:py-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-4"
            >
              {/* Row 1: Type + Salary */}
              <motion.div variants={rowVariants} className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} style={labelStyle}>Job Type</label>
                  <select className={fieldCls} style={fieldStyle} required value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} style={labelStyle}>Salary Range</label>
                  <select className={fieldCls} style={fieldStyle} required value={salary} onChange={(e) => setSalary(e.target.value)}>
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - $60K">$50K – $60K</option>
                    <option value="$60K - $70K">$60K – $70K</option>
                    <option value="$70K - $80K">$70K – $80K</option>
                    <option value="$80K - $90K">$80K – $90K</option>
                    <option value="$90K - $100K">$90K – $100K</option>
                    <option value="$100K - $110K">$100K – $110K</option>
                    <option value="Over $200K">Over $200K</option>
                  </select>
                </div>
              </motion.div>

              {/* Row 2: Title + Location */}
              <motion.div variants={rowVariants} className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelCls} style={labelStyle}>Job Title</label>
                  <input type="text" className={fieldCls} style={fieldStyle} required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Senior Frontend Engineer" />
                </div>
                <div>
                  <label className={labelCls} style={labelStyle}>Location</label>
                  <input type="text" className={fieldCls} style={fieldStyle} required value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Remote, New York, etc." />
                </div>
              </motion.div>

              {/* Row 3: Description */}
              <motion.div variants={rowVariants}>
                <label className={labelCls} style={labelStyle}>Job Description</label>
                <textarea
                  className={fieldCls}
                  style={{ ...fieldStyle, minHeight: "6rem", resize: "vertical" }}
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe responsibilities, expectations, and what makes the role worth joining."
                />
              </motion.div>

              {/* Company Info block */}
              <motion.div variants={rowVariants}>
                <div
                  className="rounded-xl p-5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#A5CCFF" }} />
                    <h2
                      className="text-sm font-bold uppercase tracking-[0.18em]"
                      style={{ color: "#A5CCFF", fontFamily: "var(--font-body)" }}
                    >
                      Company Info
                    </h2>
                  </div>

                  <div className="grid gap-4">
                    {/* Company Name + Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className={labelCls} style={labelStyle}>Company Name</label>
                        <input type="text" className={fieldCls} style={fieldStyle} value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company name" />
                      </div>
                      <div>
                        <label className={labelCls} style={labelStyle}>Contact Email</label>
                        <input type="email" className={fieldCls} style={fieldStyle} required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="hire@company.com" />
                      </div>
                    </div>

                    {/* Company Description */}
                    <div>
                      <label className={labelCls} style={labelStyle}>Company Description</label>
                      <textarea
                        className={fieldCls}
                        style={{ ...fieldStyle, minHeight: "5rem", resize: "vertical" }}
                        rows={2}
                        value={companyDescription}
                        onChange={(e) => setCompanyDescription(e.target.value)}
                        placeholder="Tell candidates what the company does and what kind of team they'd join."
                      />
                    </div>

                    {/* Contact Phone */}
                    <div>
                      <label className={labelCls} style={labelStyle}>Contact Phone <span style={{ color: "#374151", fontWeight: 400 }}>(optional)</span></label>
                      <input type="tel" className={fieldCls} style={fieldStyle} value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="Optional phone number" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div variants={rowVariants}>
                <button
                  type="submit"
                  className="btn-primary w-full rounded-xl py-3.5 text-sm font-semibold text-[#0F1115] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #D4FF00, #B8E800)",
                    boxShadow: "0 6px 24px rgba(212,255,0,0.25)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                  }}
                >
                  Add Job Listing
                </button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AddJobPage;
