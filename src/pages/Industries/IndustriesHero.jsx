import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function IndustriesHero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const industryTexts = [
    "Manufacturing Excellence",
    "Healthcare Innovation",
    "Hospitality & Tourism",
    "Financial Services",
    "Construction & Real Estate",
    "Logistics & Supply Chain",
    "Agriculture And Farming",
  ];

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeWriter = () => {
      const currentText = industryTexts[textIndex];

      if (!isDeleting && currentIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 100);
      } else if (!isDeleting && currentIndex > currentText.length) {
        setIsComplete(true);
        timeoutId = setTimeout(() => {
          isDeleting = true;
          setIsComplete(false);
          typeWriter();
        }, 1500);
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex--;
        timeoutId = setTimeout(typeWriter, 50);
      } else {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % industryTexts.length);
        timeoutId = setTimeout(typeWriter, 300);
      }
    };

    timeoutId = setTimeout(typeWriter, 800);
    return () => clearTimeout(timeoutId);
  }, [textIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },
    visible: {
      opacity: 0.8,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

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

  const buttonVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.8,
        duration: 0.5,
        ease: "backOut",
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="Explore our industry expertise and discover how Manpower's staffing solutions cater to diverse sectors. We provide tailored staffing services for manufacturing, healthcare, technology, and more."
        />
        <link rel="canonical" href="https://manpowernet.work/services" />
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Explore our industry expertise and discover how Manpower's staffing solutions cater to diverse sectors. We provide tailored staffing services for manufacturing, healthcare, technology, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manpowernet.work/services" />
        <meta property="og:image" content="/images/service.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:description"
          content="Explore our industry expertise and discover how Manpower's staffing solutions cater to diverse sectors. We provide tailored staffing services for manufacturing, healthcare, technology, and more."
        />
        <meta
          name="twitter:image"
          content="https://manpowernet.work/images/service.jpg"
        />
      </Helmet>
      <section className="py-32 relative bg-[#201D1F] overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="/images/contactbanner.jpg"
            alt="Industries Hero"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-linear-to-l from-gray-900 via-gray-900/95 to-transparent" />
        </motion.div>

        <div className="container mx-auto relative z-10 flex flex-col justify-center items-end w-full text-end px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full max-w-5xl"
          >
            <motion.div className="mb-4" variants={titleVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-sans">
                <span className="block bg-gradient-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent">
                  Industry Expertise
                </span>
                <motion.span
                  className="block text-3xl md:text-4xl lg:text-5xl text-white/90 mt-10 font-sans font-normal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="relative inline-block min-h-[1.5em]">
                    <div className="flex items-center justify-end">
                      <span className="text-white/80 mr-4">
                        Specializing in
                      </span>
                      <div className="relative inline-block">
                        <span className="bg-gradient-to-r from-[#44B6DA] to-yellow-400 bg-clip-text text-transparent font-semibold">
                          {displayText}
                          {!isComplete && (
                            <motion.span
                              variants={cursorVariants}
                              animate="blink"
                              className="inline-block w-[2px] h-[1em] ml-1 bg-yellow-400"
                            />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.span>
              </h1>
            </motion.div>

            <motion.div className="relative h-[1px] w-full max-w-3xl ml-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#44B6DA]/70 via-yellow-400/70 to-[#44B6DA]/70"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white/85 max-w-3xl mb-16 ml-auto leading-relaxed font-Inter font-light"
              variants={subtitleVariants}
            >
              Delivering specialized workforce solutions across key industries.
              We understand the unique demands and challenges of each sector,
              providing tailored talent strategies that drive business success.
            </motion.p>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/20 mb-16">
              {[
                { number: "15+", label: "Industries" },
                { number: "500+", label: "Clients" },
                { number: "98%", label: "Retention Rate" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center px-4 py-6 rounded-xl backdrop-blur-sm bg-white/5"
                  variants={statVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#44B6DA] to-yellow-400 bg-clip-text text-transparent font-Inter mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-Inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row justify-end gap-6 mt-8">
              <motion.a
                href="#solutions"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#44B6DA] to-yellow-400 text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-200 font-Inter shadow-lg hover:shadow-xl hover:shadow-[#44B6DA]/20"
              >
                View All Industries
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>

              <motion.a
                href="/contact"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="inline-flex items-center gap-3 bg-transparent text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-200 font-Inter border border-white/30 hover:border-[#44B6DA] hover:text-[#44B6DA]"
              >
                Consult Our Experts
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0,
                  }}
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 z-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
        </motion.div>

        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#44B6DA]/10 to-transparent rounded-full blur-3xl"
        />
      </section>
    </>
  );
}
