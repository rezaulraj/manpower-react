import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

const colorSchemes = {
  primary: {
    darkBlue: "#0d1b2a",
    blue900: "#1b263b",
    blue800: "#415a77",
    blue700: "#778da9",
    yellow600: "#ff9e00",
    yellow500: "#ffb143",
    yellow400: "#ffcc7d",
    success: "#2e7d32",
    lightSuccess: "#4caf50",
  },
  gender: {
    male: {
      primary: "#1976d2",
      secondary: "#bbdefb",
      accent: "#0d47a1",
    },
    female: {
      primary: "#c2185b",
      secondary: "#f8bbd9",
      accent: "#880e4f",
    },
    any: {
      primary: "#7b1fa2",
      secondary: "#e1bee7",
      accent: "#4a148c",
    },
  },
  category: {
    all: {
      primary: "#0d1b2a",
      secondary: "#415a77",
      gradient: "linear-gradient(135deg, #0d1b2a 0%, #415a77 100%)",
    },
    HandsOn_Jobs: {
      primary: "#d84315",
      secondary: "#ffab91",
      gradient: "linear-gradient(135deg, #d84315 0%, #ffab91 100%)",
    },
    Administrative_Jobs: {
      primary: "#ff9e00",
      secondary: "#ffcc7d",
      gradient: "linear-gradient(135deg, #ff9e00 0%, #ffcc7d 100%)",
    },
  },
};

const categoryDescriptions = {
  all: "Browse all available job opportunities across various industries and locations. Find your perfect role in our diverse collection of international positions.",
  HandsOn_Jobs:
    "Practical roles requiring technical skills and manual expertise in fields like construction, automotive, and manufacturing. Perfect for hands-on professionals who enjoy physical work.",
  Administrative_Jobs:
    "Highlighted positions with competitive benefits and growth opportunities. These premium roles offer exceptional packages and career advancement potential.",
};

export default function OpenJobPosition() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbxSihU_-lx49-gr1h4oe6w1H621Nxy2QHfMEx87gGGQKzfvwyQ3V3TMOxx9ypsR_JFdow/exec?site=Divine_Group"
        );
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs(sampleData);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(
    (job) => activeCategory === "all" || job.JobCategory === activeCategory
  );

  const displayedJobs = filteredJobs.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-2 border-4 border-yellow-500 border-b-transparent rounded-full animate-spin-slow"></div>
          </div>

          <p className="mt-6 text-gray-600 font-semibold text-lg">
            Loading career opportunities…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="positions"
      className="container mx-auto px-4 py-12"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-yellow-600 bg-clip-text text-transparent">
          Career Opportunities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover your next career move with our international job
          opportunities. Join companies that value talent and offer competitive
          packages.
        </p>
      </div>

      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 mb-8 border border-blue-100 shadow-sm">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            {categoryDescriptions[activeCategory]}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: "all", label: "All Jobs", count: jobs.length },
            {
              key: "HandsOn_Jobs",
              label: "Vocational Jobs",
              count: jobs.filter((j) => j.JobCategory === "HandsOn_Jobs")
                .length,
            },
            {
              key: "Administrative_Jobs",
              label: "Administrative Roles",
              count: jobs.filter((j) => j.JobCategory === "Administrative_Jobs")
                .length,
            },
          ].map((category) => {
            const scheme = colorSchemes.category[category.key];
            return (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key);
                  setVisibleCount(6);
                }}
                className={`flex items-center space-x-3 py-4 px-8 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.key
                    ? `text-white shadow-2xl`
                    : "bg-white text-gray-700 hover:text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"
                }`}
                style={
                  activeCategory === category.key
                    ? { background: scheme.gradient }
                    : {}
                }
              >
                <span className="font-bold">{category.label}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    activeCategory === category.key
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
        {displayedJobs.map((job, index) => (
          <JobCard
            key={job.SL_No}
            job={job}
            index={index}
            onApply={() => {
              setSelectedJob(job);
              setShowApplyForm(true);
            }}
            onShare={() => {
              setSelectedJob(job);
              setShowSharePopup(true);
            }}
          />
        ))}
      </div>

      {visibleCount < filteredJobs.length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="bg-gradient-to-r from-blue-900 to-yellow-600 text-white px-10 py-5 rounded-2xl hover:from-blue-800 hover:to-yellow-500 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
          >
            Load More Opportunities ({filteredJobs.length - visibleCount}{" "}
            remaining)
          </button>
        </div>
      )}

      {displayedJobs.length === 0 && !loading && (
        <div className="text-center py-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl">
          <div className="text-8xl mb-6">📭</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            No Positions Available
          </h3>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            We do not have any openings in this category at the moment. Please
            check back later or explore other categories.
          </p>
        </div>
      )}

      {showApplyForm && selectedJob && (
        <ApplyForm
          job={selectedJob}
          onClose={() => setShowApplyForm(false)}
          onSubmit={(formData) => {
            console.log("Application submitted:", {
              job: selectedJob,
              ...formData,
            });
            setShowApplyForm(false);
            alert("Application submitted successfully!");
          }}
        />
      )}

      {showSharePopup && selectedJob && (
        <SharePopup
          job={selectedJob}
          onClose={() => setShowSharePopup(false)}
        />
      )}
    </div>
  );
}

const JobCard = ({ job, index, onApply, onShare }) => {
  const [isHovered, setIsHovered] = useState(false);

  const genderColors =
    colorSchemes.gender[job.Gender.toLowerCase()] || colorSchemes.gender.any;

  const cardStyles = [
    "bg-gradient-to-br from-white to-blue-50 border-l-4 border-blue-900",
    "bg-gradient-to-br from-white to-yellow-50 border-l-4 border-yellow-600",
    "bg-gradient-to-br from-white to-green-50 border-l-4 border-green-600",
  ];
  const styleIndex = index % cardStyles.length;

  return (
    <div
      className={`rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden flex flex-col h-full transform hover:-translate-y-2 ${cardStyles[styleIndex]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="p-7 bg-gradient-to-r from-blue-900 to-yellow-600 text-white relative overflow-hidden"
        style={{
          background: isHovered
            ? `linear-gradient(135deg, ${colorSchemes.primary.blue800} 0%, ${colorSchemes.primary.yellow500} 100%)`
            : `linear-gradient(135deg, ${colorSchemes.primary.blue900} 0%, ${colorSchemes.primary.yellow600} 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-full translate-x-8 translate-y-8"></div>
        </div>

        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ReactCountryFlag
                countryCode={getCountryCode(job.Country)}
                svg
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
                title={job.Country}
              />
            </div>
            <div>
              <span className="text-sm font-bold text-white/90 block">
                {job.Country}
              </span>
              <span className="text-xs text-white/70">{job.Industry}</span>
            </div>
          </div>
          <div className="text-right">
            <div
              className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg"
              style={{ border: `1px solid ${genderColors.primary}` }}
            >
              {job.Vacancies} position{job.Vacancies > 1 ? "s" : ""}
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 leading-tight relative z-10">
          {job.Title}
        </h3>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
          <div className="text-sm text-white/80 font-medium">
            Monthly Salary
          </div>
          <div className="text-xl font-bold text-white flex items-center">
            <span className="text-yellow-300 mr-2">💰</span>
            {job.Salary}
          </div>
        </div>
      </div>

      <div className="p-7 flex-1">
        <div className="space-y-5 mb-6">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold shadow-md"
            style={{
              backgroundColor: genderColors.secondary,
              color: genderColors.accent,
              border: `1px solid ${genderColors.primary}20`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: genderColors.primary }}
            ></span>
            {job.Gender} Candidates
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-xs text-gray-600 mb-1 font-semibold">
                Job Type
              </div>
              <div className="text-sm font-bold text-blue-800">
                {job.JobType}
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
              <div className="text-xs text-gray-600 mb-1 font-semibold">
                Experience
              </div>
              <div className="text-sm font-bold text-orange-800">
                {job.Experience}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200">
            <div className="text-xs text-gray-600 mb-2 font-bold uppercase tracking-wide">
              🌍 Eligible Candidates
            </div>
            <div className="text-sm font-bold text-gray-900">
              {job.CandidatesOrigin}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-600 mb-2 font-bold uppercase tracking-wide">
              📋 Key Requirements
            </div>
            <div
              className="text-sm text-gray-800 rounded-xl p-4 border-2 shadow-sm"
              style={{
                backgroundColor: colorSchemes.primary.yellow400 + "20",
                borderColor: colorSchemes.primary.yellow600 + "30",
              }}
            >
              {job.Requirements}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-600 mb-2 font-bold uppercase tracking-wide">
              📝 Position Overview
            </div>
            <p className="text-sm text-gray-700 leading-relaxed bg-white/50 rounded-lg p-3 border border-gray-200">
              {job.Description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-7 pt-4 border-t border-gray-200/60 mt-auto bg-gradient-to-t from-gray-50 to-white">
        <div className="flex space-x-3">
          <button
            onClick={onApply}
            className="flex-1 bg-gradient-to-r from-blue-900 to-yellow-600 text-white py-4 px-6 rounded-xl hover:from-blue-800 hover:to-yellow-500 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
          >
            <span>Apply Now</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button
            onClick={onShare}
            className="flex items-center justify-center w-14 h-14 border-2 border-gray-300 rounded-xl hover:border-blue-900 hover:bg-blue-900 transition-all duration-300 group shadow-lg hover:shadow-xl"
            title="Share this opportunity"
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

const ApplyForm = ({ job, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    cv: null,
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.cv) {
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            onSubmit(formData);
            return 100;
          }
          return prev + 20;
        });
      }, 200);
    } else {
      onSubmit(formData);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
    setUploadProgress(0);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-200">
        <div
          className="p-8 border-b border-gray-200 text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colorSchemes.primary.blue900} 0%, ${colorSchemes.primary.yellow600} 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Apply for Position</h2>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white text-2xl transition-colors bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              >
                ✕
              </button>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex items-center space-x-4 mb-4">
                <ReactCountryFlag
                  countryCode={getCountryCode(job.Country)}
                  svg
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.3)",
                  }}
                  title={job.Country}
                />
                <span className="font-bold text-lg">{job.Country}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{job.Title}</h3>
              <p className="text-white/80 mb-3">{job.Industry}</p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {job.JobType}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  {job.Experience}
                </span>
                <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full font-bold">
                  {job.Salary}
                </span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {[
            {
              label: "Full Name *",
              type: "text",
              key: "fullName",
              placeholder: "Enter your full name",
            },
            {
              label: "Email Address *",
              type: "email",
              key: "email",
              placeholder: "Enter your email",
            },
            {
              label: "Phone Number *",
              type: "tel",
              key: "phone",
              placeholder: "Enter your phone number",
            },
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                {field.label}
              </label>
              <input
                type={field.type}
                required
                value={formData[field.key]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-900/20 focus:border-blue-900 transition-all duration-300 bg-white/50 font-medium"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Cover Letter *
            </label>
            <textarea
              required
              rows={5}
              value={formData.coverLetter}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  coverLetter: e.target.value,
                }))
              }
              className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-900/20 focus:border-blue-900 transition-all duration-300 bg-white/50 font-medium resize-vertical"
              placeholder="Tell us why you're the perfect candidate for this position. Highlight your relevant experience and skills..."
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Upload CV/Resume *
            </label>
            <div className="space-y-4">
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleFileChange}
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-900/20 focus:border-blue-900 transition-all duration-300 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-blue-900 file:text-white hover:file:bg-blue-800 cursor-pointer"
              />

              {uploadProgress > 0 && uploadProgress < 100 && (
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-900 to-yellow-600 h-3 rounded-full transition-all duration-500 shadow-md"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium text-center">
                    Uploading... {uploadProgress}%
                  </div>
                </div>
              )}

              {uploadProgress === 100 && (
                <div className="text-green-600 text-sm font-bold flex items-center justify-center space-x-2 bg-green-50 py-3 rounded-xl border border-green-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>File uploaded successfully! Ready to submit.</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-3 font-medium">
              📄 Supported formats: PDF, DOC, DOCX, JPG, PNG (Maximum file size:
              5MB)
            </p>
          </div>

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-4 px-6 border-2 border-gray-400 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-500 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-900 to-yellow-600 text-white py-4 px-6 rounded-xl hover:from-blue-800 hover:to-yellow-500 transition-all duration-300 font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Submit Application</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SharePopup = ({ job, onClose }) => {
  const shareUrl = window.location.href;
  const shareText = `Check out this ${job.Title} position at ${job.Industry} in ${job.Country} - ${job.Salary} monthly`;

  const sharePlatforms = [
    {
      name: "Facebook",
      icon: "📘",
      color: "bg-gradient-to-r from-blue-600 to-blue-800",
      hover: "hover:from-blue-700 hover:to-blue-900",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: "🐦",
      color: "bg-gradient-to-r from-sky-400 to-sky-600",
      hover: "hover:from-sky-500 hover:to-sky-700",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      color: "bg-gradient-to-r from-blue-500 to-blue-700",
      hover: "hover:from-blue-600 hover:to-blue-800",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "WhatsApp",
      icon: "💚",
      color: "bg-gradient-to-r from-green-500 to-green-700",
      hover: "hover:from-green-600 hover:to-green-800",
      url: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
    },
    {
      name: "Email",
      icon: "📧",
      color: "bg-gradient-to-r from-gray-600 to-gray-800",
      hover: "hover:from-gray-700 hover:to-gray-900",
      url: `mailto:?subject=Job Opportunity: ${
        job.Title
      }&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`,
    },
  ];

  const handleShare = (url) => {
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-200">
        <div
          className="p-8 border-b border-gray-200 text-white rounded-t-3xl"
          style={{
            background: `linear-gradient(135deg, ${colorSchemes.primary.blue900} 0%, ${colorSchemes.primary.yellow600} 100%)`,
          }}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Share This Opportunity</h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl transition-colors bg-white/20 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-600 mb-8 text-center text-lg font-medium">
            Share this amazing career opportunity with your network
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {sharePlatforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => handleShare(platform.url)}
                className={`flex items-center justify-center space-x-3 p-5 text-white rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${platform.color} ${platform.hover}`}
              >
                <span className="text-2xl">{platform.icon}</span>
                <span className="font-bold">{platform.name}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700">
              🔗 Or copy job link directly
            </label>
            <div className="flex space-x-3">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-xl text-sm bg-gray-50 font-bold border-dashed"
              />
              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);
                  alert("📋 Link copied to clipboard!");
                }}
                className="px-6 py-4 bg-gradient-to-r from-blue-900 to-yellow-600 text-white rounded-xl hover:from-blue-800 hover:to-yellow-500 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareIcon = () => (
  <svg
    className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const getCountryCode = (countryName) => {
  const countryMap = {
    Albania: "AL",
    Andorra: "AD",
    Armenia: "AM",
    Austria: "AT",
    Azerbaijan: "AZ",
    Belarus: "BY",
    Belgium: "BE",
    Bosnia_and_Herzegovina: "BA",
    Bulgaria: "BG",
    Croatia: "HR",
    Cyprus: "CY",
    Czech_Republic: "CZ",
    Denmark: "DK",
    Estonia: "EE",
    Finland: "FI",
    France: "FR",
    Georgia: "GE",
    Germany: "DE",
    Greece: "GR",
    Hungary: "HU",
    Iceland: "IS",
    Ireland: "IE",
    Italy: "IT",
    Kazakhstan: "KZ",
    Kosovo: "XK",
    Latvia: "LV",
    Liechtenstein: "LI",
    Lithuania: "LT",
    Luxembourg: "LU",
    Malta: "MT",
    Moldova: "MD",
    Monaco: "MC",
    Montenegro: "ME",
    Netherlands: "NL",
    North_Macedonia: "MK",
    Norway: "NO",
    Poland: "PL",
    Portugal: "PT",
    Romania: "RO",
    Russia: "RU",
    San_Marino: "SM",
    Serbia: "RS",
    Slovakia: "SK",
    Slovenia: "SI",
    Spain: "ES",
    Sweden: "SE",
    Switzerland: "CH",
    Turkey: "TR",
    Ukraine: "UA",
    United_Kingdom: "GB",
    Vatican_City: "VA",
    Bosnia: "BA",

    Afghanistan: "AF",
    Armenia_: "AM",
    Azerbaijan_: "AZ",
    Bahrain: "BH",
    Bangladesh: "BD",
    Bhutan: "BT",
    Brunei: "BN",
    Cambodia: "KH",
    China: "CN",
    Cyprus_: "CY",
    Georgia_: "GE",
    India: "IN",
    Indonesia: "ID",
    Iran: "IR",
    Iraq: "IQ",
    Israel: "IL",
    Japan: "JP",
    Jordan: "JO",
    Kazakhstan_: "KZ",
    Kuwait: "KW",
    Kyrgyzstan: "KG",
    Laos: "LA",
    Lebanon: "LB",
    Malaysia: "MY",
    Maldives: "MV",
    Mongolia: "MN",
    Myanmar: "MM",
    Nepal: "NP",
    North_Korea: "KP",
    Oman: "OM",
    Pakistan: "PK",
    Palestine: "PS",
    Philippines: "PH",
    Qatar: "QA",
    Saudi_Arabia: "SA",
    Singapore: "SG",
    South_Korea: "KR",
    Sri_Lanka: "LK",
    Syria: "SY",
    Taiwan: "TW",
    Tajikistan: "TJ",
    Thailand: "TH",
    Timor_Leste: "TL",
    Turkmenistan: "TM",
    United_Arab_Emirates: "AE",
    Uzbekistan: "UZ",
    Vietnam: "VN",
    Yemen: "YE",

    USA: "US",
    Canada: "CA",
    Australia: "AU",
    New_Zealand: "NZ",
    Brazil: "BR",
    Mexico: "MX",
    Egypt: "EG",
    Nigeria: "NG",
    Kenya: "KE",
    South_Africa: "ZA",
  };
  return countryMap[countryName] || "EG";
};

const sampleData = [
  {
    SL_No: 1,
    Date: "2025-11-11T18:00:00.000Z",
    JobCategory: "HandsOn_Jobs",
    Country: "Romania",
    Title: "Senior Electrician Specialist",
    Vacancies: 5,
    Industry: "Construction & Engineering",
    CandidatesOrigin: "Any Nationality",
    Description:
      "Experienced electrician needed for industrial and residential projects. You will be responsible for installing, maintaining, and troubleshooting electrical systems while ensuring compliance with safety standards.",
    JobType: "Full-time",
    Shift: "Day Shift",
    Gender: "Male",
    Salary: "€700–€900",
    Experience: "3-5 Years",
    Requirements:
      "Electrical certification, 3+ years experience, Safety training, Basic tools provided",
    Status: "Active",
  },
  {
    SL_No: 2,
    Date: "2025-11-10T18:00:00.000Z",
    JobCategory: "Administrative_Jobs",
    Country: "Germany",
    Title: "Automotive Paint Specialist",
    Vacancies: 3,
    Industry: "Automotive Manufacturing",
    CandidatesOrigin: "European Countries",
    Description:
      "Skilled automotive painter required for premium vehicle finishing. You'll work with advanced painting techniques and ensure flawless finishes on luxury vehicles.",
    JobType: "Full-time",
    Shift: "Day Shift",
    Gender: "Any",
    Salary: "€800–€1,200",
    Experience: "2-4 Years",
    Requirements:
      "Portfolio required, Color matching expertise, Quality focus, Team collaboration",
    Status: "Active",
  },
];
