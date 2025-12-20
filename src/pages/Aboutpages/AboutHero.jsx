import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function AboutHero() {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const fullText = "Rise Above Ordinary";

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeWriter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 100);
      } else {
        setIsComplete(true);
      }
    };

    timeoutId = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

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
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      x: 50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.02,
      y: -1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Manpower Network - your trusted partner in innovative recruitment solutions. We connect talent with opportunity, fostering growth and success for businesses and individuals alike."
        />
        <meta
          name="keywords"
          content="Manpower, recruitment, staffing, talent acquisition, job placement, career opportunities"
        />
        <meta name="author" content="Manpower Network" />
        <meta property="og:title" content="About Us" />
        <meta
          property="og:description"
          content="Manpower Network - your trusted partner in innovative recruitment solutions. We connect talent with opportunity, fostering growth and success for businesses and individuals alike."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manpowernet.work/about" />
        <meta
          property="og:image"
          content="https://manpowernet.work/images/aboutbanner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us" />
        <meta
          name="twitter:description"
          content="Manpower Network - your trusted partner in innovative recruitment solutions. We connect talent with opportunity, fostering growth and success for businesses and individuals alike."
        />
        <meta
          name="twitter:image"
          content="https://manpowernet.work/images/aboutbanner.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://manpowernet.work/about" />
      </Helmet>
      <section className="relative py-44 bg-[#201D1F] overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/aboutbanner.jpg"
            alt="About Hero"
            className="object-cover w-full h-full"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-l from-[#201D1F] via-[#201D1F]/95 to-transparent" />
        </motion.div>

        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full text-end px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 max-w-3xl"
          >
            <motion.div variants={textVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-ubuntu font-bold text-white leading-tight min-h-[1.2em]">
                <div className="relative inline-block">
                  <span className="bg-linear-to-r from-[#44B6DA] via-yellow-400 to-[#44B6DA] bg-[length:200%_auto] bg-clip-text text-transparent">
                    {displayText}
                    {isComplete && (
                      <motion.span
                        variants={cursorVariants}
                        animate="blink"
                        className="inline-block w-0.5 h-[1em] ml-1 bg-linear-to-b from-[#44B6DA] to-yellow-400"
                      />
                    )}
                  </span>
                </div>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 leading-relaxed font-ubuntu"
            >
              Step away from the traditional recruitment path and step into a
              career experience that inspires growth, fuels ambition, and shapes
              your professional future.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.a
                href="/contact"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#44B6DA] to-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-200 font-ubuntu"
              >
                Apply Here
                <motion.svg
                  animate={{ x: [0, 3, 0] }}
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
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#201D1F] to-transparent z-5" />
      </section>
    </>
  );
}
