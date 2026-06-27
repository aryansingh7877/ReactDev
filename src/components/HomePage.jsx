const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    type: 'Full-Time',
    location: 'Boston, MA',
    description:
      'We are looking for a Senior React Developer to join our team. You will be responsible for building and maintaining user interfaces for our web applications.',
    salary: '$70K - $80K / Year',
  },
  {
    id: 2,
    title: 'Front-End Engineer (React & Redux)',
    type: 'Full-Time',
    location: 'Miami, FL',
    description:
      'Join our team as a Front-End Engineer specializing in React and Redux. You will work closely with designers and back-end developers to deliver great experiences.',
    salary: '$70K - $80K / Year',
  },
  {
    id: 3,
    title: 'React.js Developer',
    type: 'Full-Time',
    location: 'Brooklyn, NY',
    description:
      'We are seeking a React.js Developer to help build our next-generation platform. Experience with React hooks and the Context API is preferred.',
    salary: '$70K - $80K / Year',
  },
];

const DollarIcon = () => (
  <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-6 h-6 text-[#4F8CFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6 text-[#C6FF4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F17] font-sans text-[#F8FAFC]">
      {/* NAVBAR */}
      <nav className="bg-[#111827]/80 backdrop-blur-xl border-b border-white/[0.08] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center gap-1 text-2xl font-extrabold tracking-tight">
              <span className="text-[#F7F36B]">React</span>
              <span className="text-[#F8FAFC]">Jobs</span>
            </a>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-[#F7F36B] font-semibold border-b-2 border-[#F7F36B] pb-0.5">Home</a>
              <a href="/jobs" className="text-[#64748B] hover:text-[#F8FAFC] transition-colors font-medium">Jobs</a>
              <a href="/add-job" className="text-[#64748B] hover:text-[#F8FAFC] transition-colors font-medium">Add Job</a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#0B0F17] to-[#111827] border-b border-white/[0.08] py-24 sm:py-32">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F7F36B]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-[#C6FF4D]/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] leading-tight mb-6">
            Become a <span className="text-[#F7F36B]">React Dev</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            Find the React job that fits your skills and needs
          </p>
        </div>
      </section>

      {/* FOR DEVELOPERS / EMPLOYERS */}
      <section className="py-16 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#161B22]/80 backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-[0_0_40px_-15px_rgba(79,140,255,0.2)] hover:border-[#4F8CFF]/30 transition-all duration-300">
              <div>
                <div className="mb-4"><BriefcaseIcon /></div>
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3">For Developers</h2>
                <p className="text-[#94A3B8] leading-relaxed">Browse our React jobs and start your career today</p>
              </div>
              <a href="/jobs" className="mt-8 inline-flex items-center self-start bg-[#F7F36B] hover:bg-[#F7F36B]/80 text-[#0B0F17] font-semibold px-6 py-3 rounded-2xl transition-all duration-200 shadow-lg shadow-[#F7F36B]/10">
                Browse Jobs<ArrowRightIcon />
              </a>
            </div>
            <div className="bg-[#161B22]/80 backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-[0_0_40px_-15px_rgba(198,255,77,0.2)] hover:border-[#C6FF4D]/30 transition-all duration-300">
              <div>
                <div className="mb-4"><UsersIcon /></div>
                <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3">For Employers</h2>
                <p className="text-[#94A3B8] leading-relaxed">List your job to find the perfect developer for your team</p>
              </div>
              <a href="/add-job" className="mt-8 inline-flex items-center self-start bg-[#C6FF4D] hover:bg-[#C6FF4D]/80 text-[#0B0F17] font-semibold px-6 py-3 rounded-2xl transition-all duration-200 shadow-lg shadow-[#C6FF4D]/10">
                Add Job<ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BROWSE JOBS */}
      <section className="py-16 sm:py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-10">Browse Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="group bg-[#161B22]/80 backdrop-blur-sm border border-white/[0.08] rounded-3xl p-6 hover:border-[#F7F36B]/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col">
                <span className="inline-block self-start bg-[#F7F36B]/10 text-[#F7F36B] border border-[#F7F36B]/20 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">{job.type}</span>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 leading-snug group-hover:text-[#F7F36B] transition-colors">{job.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">{job.description}</p>
                <div className="flex items-center text-[#64748B] text-sm mb-2"><DollarIcon /><span>{job.salary}</span></div>
                <div className="flex items-center text-[#64748B] text-sm mb-5"><MapPinIcon /><span>{job.location}</span></div>
                <a href={`/jobs/${job.id}`} className="text-[#F7F36B] font-semibold text-sm hover:text-[#F7F36B]/80 transition-colors inline-flex items-center">Read More<ArrowRightIcon /></a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/jobs" className="inline-flex items-center bg-[#F7F36B] hover:bg-[#F7F36B]/80 text-[#0B0F17] font-semibold px-8 py-3.5 rounded-2xl transition-all duration-200 shadow-lg shadow-[#F7F36B]/10">View All Jobs</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;