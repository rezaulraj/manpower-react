import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CareersHero() {
  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [displayText3, setDisplayText3] = useState("");
  const [isFirstComplete, setIsFirstComplete] = useState(false);
  const [isSecondComplete, setIsSecondComplete] = useState(false);
  const [isThirdComplete, setIsThirdComplete] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    country: "",
    message: "",
    cv: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fullText1 = "Build a Career";
  const fullText2 = "That ";
  const fullText3 = "Matters";

  useEffect(() => {
    let currentIndex1 = 0;
    let timeoutId;

    const typeWriterFirst = () => {
      if (currentIndex1 <= fullText1.length) {
        setDisplayText1(fullText1.substring(0, currentIndex1));
        currentIndex1++;
        timeoutId = setTimeout(typeWriterFirst, 90);
      } else {
        setIsFirstComplete(true);
        setTimeout(() => {
          let currentIndex2 = 0;
          const typeWriterSecond = () => {
            if (currentIndex2 <= fullText2.length) {
              setDisplayText2(fullText2.substring(0, currentIndex2));
              currentIndex2++;
              setTimeout(typeWriterSecond, 80);
            } else {
              setIsSecondComplete(true);
              setTimeout(() => {
                let currentIndex3 = 0;
                const typeWriterThird = () => {
                  if (currentIndex3 <= fullText3.length) {
                    setDisplayText3(fullText3.substring(0, currentIndex3));
                    currentIndex3++;
                    setTimeout(typeWriterThird, 70);
                  } else {
                    setIsThirdComplete(true);
                  }
                };
                typeWriterThird();
              }, 100);
            }
          };
          typeWriterSecond();
        }, 200);
      }
    };

    timeoutId = setTimeout(typeWriterFirst, 600);
    return () => clearTimeout(timeoutId);
  }, []);

  const cursorVariants = {
    blink: {
      opacity: [1, 0.3, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const gradientTextVariants = {
    hidden: {
      backgroundPosition: "0% 50%",
    },
    visible: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const whiteTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, cv: file }));

      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setShowForm(false);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      country: "",
      message: "",
      cv: null,
    });
    setUploadProgress(0);
  };

  const countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kazakhstan (Europe/Asia)",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia (Europe/Asia)",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey (Europe/Asia)",
    "Ukraine",
    "United Kingdom",
    "Vatican City",

    // Asia
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "Hong Kong",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ];

  const positions = [
    "Electrician",
    "Plumber",
    "Welder",
    "Construction Worker",
    "Carpenter",
    "Painter",
    "Mason",
    "Factory Worker",
    "Machine Operator",
    "Forklift Operator",
    "Mechanic",
    "Auto Technician",
    "HVAC Technician",
    "Driver",
    "Warehouse Worker",
    "Cleaner",
    "Security Guard",
    "Housekeeping Staff",
    "Baker",
    "Butcher",
    "Gardener",
    "Cook / Chef Assistant",
    "Packaging Worker",
    "Loading / Unloading Worker",
    "Delivery Worker",
    "Agriculture Worker",
    "Fisheries Worker",
    "Tailor",
    "Laundry Worker",
    "Maintenance Helper",
    "General Labour",
  ];

  return (
    <>
      <section className="relative bg-[#201D1F] overflow-hidden py-32">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/aboutbanner.jpg"
            alt="Career Hero"
            className="object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-gradient-to-l from-[#201D1F] via-[#201D1F]/80 to-transparent"
        />

        <div className="container mx-auto relative z-10 flex flex-col justify-center items-end w-full text-end px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 max-w-3xl"
          >
            <motion.div variants={textVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[1.2em]">
                <div className="space-y-2">
                  <div className="flex items-center justify-end">
                    <span className="bg-linear-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent font-Inter inline-block">
                      {displayText1}
                      {isFirstComplete && !isSecondComplete && (
                        <motion.span
                          variants={cursorVariants}
                          animate="blink"
                          className="inline-block w-0.5 h-[1em] ml-1 bg-white"
                        />
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <motion.span
                      variants={whiteTextVariants}
                      initial="hidden"
                      animate={isSecondComplete ? "visible" : "hidden"}
                      className="bg-linear-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent font-Inter inline-block"
                    >
                      {displayText2}
                    </motion.span>{" "}
                    <motion.span
                      variants={gradientTextVariants}
                      initial="hidden"
                      animate={isSecondComplete ? "visible" : "hidden"}
                      className="bg-linear-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent font-Inter inline-block"
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {displayText3}
                      {isThirdComplete && (
                        <motion.span
                          variants={cursorVariants}
                          animate="blink"
                          className="inline-block w-0.5 h-[1em] ml-1 bg-linear-to-b from-[#44B6DA] to-yellow-400"
                        />
                      )}
                    </motion.span>
                  </div>
                </div>
              </h1>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="text-lg font-Inter md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed"
            >
              Join a team that values ambition, innovation, and personal growth.
              At our core, we are not just offering jobs — we are shaping
              meaningful careers that make a difference.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 justify-end items-center"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href="/careers#positions"
                  className="bg-linear-to-r from-[#44B6DA] to-yellow-400 font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md text-lg hover:opacity-95 transition-all duration-300 shadow-2xl hover:shadow-xl flex items-center gap-3 group"
                >
                  Explore Vacancies
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-transparent font-Inter font-bold text-white border-2 border-[#44B6DA] px-8 py-4 rounded-md text-lg hover:bg-linear-to-r hover:from-[#44B6DA]/20 hover:to-yellow-400/20 transition-all duration-300 backdrop-blur-sm flex items-center gap-3 group"
                >
                  Apply for Future Position
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-lg"
                  >
                    ✨
                  </motion.span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#201D1F] to-transparent z-5" />
      </section>

      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowForm(false)}
        >
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-4xl w-full max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-linear-to-r from-[#44B6DA] via-[#44B6DA]/90 to-yellow-400 p-8 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Apply for Future Position
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Share your details and we will contact you when matching
                    positions open. Let&apos;s build your future together!
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-white/90 hover:text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-all duration-200 ml-4"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-lg">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        fullName: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#44B6DA] focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#44B6DA] focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#44B6DA] focus:border-transparent transition-all duration-200 text-lg"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Desired Position *
                    </label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          position: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#44B6DA] focus:border-transparent transition-all duration-200 text-lg appearance-none"
                    >
                      <option value="" className="text-gray-500">
                        Select a position
                      </option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos} className="text-gray-800">
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-800 font-semibold mb-3 text-lg">
                      Country *
                    </label>
                    <select
                      required
                      value={formData.country}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#44B6DA] focus:border-transparent transition-all duration-200 text-lg appearance-none"
                    >
                      <option value="" className="text-gray-500">
                        Select your country
                      </option>
                      {countries.map((country) => (
                        <option
                          key={country}
                          value={country}
                          className="text-gray-800"
                        >
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-lg">
                    Cover Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#44B6DA] focus:border-transparent transition-all duration-200 resize-none text-lg"
                    placeholder="Tell us about your career aspirations, skills, and why you are interested in joining our team. What makes you a great fit for our organization?"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-semibold mb-3 text-lg">
                    Upload CV/Resume *
                  </label>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-[#44B6DA] transition-all duration-200 bg-gray-50">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={handleFileChange}
                        className="w-full text-gray-700 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-lg file:font-semibold file:bg-linear-to-r file:from-[#44B6DA] file:to-yellow-400 file:text-gray-900 hover:file:opacity-90 transition-colors cursor-pointer"
                      />
                    </div>

                    {uploadProgress > 0 && uploadProgress < 100 && (
                      <div className="space-y-3">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className="bg-linear-to-r from-[#44B6DA] to-yellow-400 h-3 rounded-full shadow-md"
                            initial={{ width: 0 }}
                            animate={{ width: `${uploadProgress}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <p className="text-gray-600 font-medium text-lg">
                          Uploading... {uploadProgress}%
                        </p>
                      </div>
                    )}

                    {uploadProgress === 100 && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center space-x-3 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200"
                      >
                        <span className="text-2xl">✓</span>
                        <span className="text-lg font-semibold">
                          File uploaded successfully!
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-3">
                    Supported formats: PDF, DOC, DOCX, JPG, PNG (Maximum file
                    size: 5MB)
                  </p>
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-linear-to-r from-[#44B6DA] to-yellow-400 text-gray-900 py-5 rounded-xl font-bold text-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-3">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="text-xl"
                        >
                          ⏳
                        </motion.div>
                        <span>Processing Your Application...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-3">
                        <span>Submit Application</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                          →
                        </motion.span>
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>

              <div className="mt-8 p-6 bg-linear-to-r from-[#44B6DA]/10 to-yellow-400/10 rounded-xl border border-[#44B6DA]/20">
                <div className="flex items-start space-x-4">
                  <div className="text-[#44B6DA] text-2xl">💼</div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-2">
                      What happens next?
                    </h3>
                    <ul className="text-gray-600 space-y-1 text-lg">
                      <li>
                        • We will review your application within 2-3 business
                        days
                      </li>
                      <li>
                        • Suitable candidates will be contacted for an interview
                      </li>
                      <li>
                        • Your information is kept confidential and secure
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
